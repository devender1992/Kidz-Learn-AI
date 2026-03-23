import { Router, type IRouter } from "express";
import { db, conversations, messages } from "@workspace/db";
import { eq } from "drizzle-orm";
import { AskTutorBody } from "@workspace/api-zod";
import { openai } from "@workspace/integrations-openai-ai-server";

const router: IRouter = Router();

const AGE_PERSONAS: Record<string, string> = {
  "10-12": "Use very simple words that a 10-12 year old can easily understand. Use lots of fun examples from everyday life, simple analogies, and relatable comparisons. Keep sentences short. Use emojis generously. Be enthusiastic and encouraging!",
  "13-15": "Explain in a way that's engaging for a 13-15 year old. Use clear language with some technical terms (but always explain them). Include interesting facts and real-world applications. Use emojis occasionally. Be friendly and cool.",
  "16-18": "Explain for a 16-18 year old student. You can use more technical vocabulary and deeper concepts. Include academic context, real-world applications, and connections to current events or science. Be informative yet engaging.",
};

router.post("/ask", async (req, res) => {
  const body = AskTutorBody.parse(req.body);
  const { subject, topic, question, ageGroup = "13-15", conversationId } = body;

  const agePersona = AGE_PERSONAS[ageGroup] ?? AGE_PERSONAS["13-15"];

  const systemPrompt = `You are Zara, a fun, enthusiastic, and brilliant AI tutor for kids and teenagers aged 10-18! 🌟

You are currently teaching about: **${subject}** - specifically the topic of "${topic}".

${agePersona}

YOUR TEACHING STYLE:
- Always start with a warm, encouraging greeting related to the topic
- Break down complex concepts into simple, digestible pieces
- Use the "Explain it like I'm curious" approach - make it interesting!
- Include at least ONE real-world example or analogy
- Use bullet points (with -) for lists of facts or steps
- Use **bold** for key terms and important concepts
- Use emojis thoughtfully to make responses fun and memorable 🎯
- When explaining processes, use numbered steps
- Include a "Fun Fact! 🤩" section when relevant
- End with an encouraging message or a thought-provoking question to keep them curious
- For math/science: show step-by-step working with clear formatting
- For history/geography: paint a vivid picture with storytelling
- For coding: use simple code examples with explanations
- Always use ASCII art or simple diagrams when they help explain a concept
- Keep responses comprehensive but not overwhelming - aim for depth over breadth

FORMATTING RULES:
- Use markdown-style formatting: **bold**, *italic*, \`code\`
- Use - for bullet points, 1. 2. 3. for numbered lists
- Use --- for section dividers
- Make your response visually organized and easy to scan

Remember: You're not just teaching facts - you're sparking a love for learning! 🚀`;

  let convId = conversationId;
  if (!convId) {
    const [newConv] = await db
      .insert(conversations)
      .values({ title: `${subject}: ${topic}` })
      .returning();
    convId = newConv.id;
  }

  const history = await db
    .select()
    .from(messages)
    .where(eq(messages.conversationId, convId))
    .orderBy(messages.createdAt);

  await db.insert(messages).values({ conversationId: convId, role: "user", content: question });

  const chatMessages: Array<{ role: "system" | "user" | "assistant"; content: string }> = [
    { role: "system", content: systemPrompt },
    ...history.map((m) => ({ role: m.role as "user" | "assistant", content: m.content })),
    { role: "user", content: question },
  ];

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.write(`data: ${JSON.stringify({ conversationId: convId })}\n\n`);

  let fullResponse = "";

  const stream = await openai.chat.completions.create({
    model: "gpt-5.2",
    max_completion_tokens: 8192,
    messages: chatMessages,
    stream: true,
  });

  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content;
    if (content) {
      fullResponse += content;
      res.write(`data: ${JSON.stringify({ content })}\n\n`);
    }
  }

  await db.insert(messages).values({ conversationId: convId, role: "assistant", content: fullResponse });

  res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
  res.end();
});

export default router;
