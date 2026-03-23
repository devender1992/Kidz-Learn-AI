import { Router, type IRouter } from "express";
import healthRouter from "./health";
import openaiConversationsRouter from "./openai/conversations";
import learnRouter from "./learn";

const router: IRouter = Router();

router.use(healthRouter);
router.use("/openai", openaiConversationsRouter);
router.use("/learn", learnRouter);

export default router;
