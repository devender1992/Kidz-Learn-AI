import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose-kidz">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          // Custom renderers to make it extra playful
          h3: ({node, ...props}) => (
            <h3 className="flex items-center gap-2 text-primary font-display" {...props} />
          ),
          li: ({node, ...props}) => (
            <li className="marker:text-secondary font-medium" {...props} />
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
