export const MOCK_POST = {
  title: "Building Scalable APIs with Node.js & Express",
  author: "chakra_dev",
  avatar: "CD",
  date: "May 28, 2026",
  readTime: "6 min read",
  tag: "Backend",
  likeCount: 148,
  commentCount: 23,
  body: [
    { type: "TEXT", value: "When building modern web applications, your API layer is the backbone that connects your frontend to your data. This guide walks through designing production-grade REST APIs using Node.js and Express with scalability in mind from day one." },
    { type: "TEXT", value: "One of the most critical decisions is structuring your routes and middleware. A clear separation of concerns allows the codebase to scale without becoming a tangled mess." },
    { type: "CODE", value: `// Route structure example
const router = express.Router();

router.use('/posts', authenticate, postsRouter);
router.use('/users', authenticate, usersRouter);
router.use('/auth', authRouter);

// Error handling middleware (last)
router.use(globalErrorHandler);` },
    { type: "TEXT", value: "Rate limiting, request validation, and proper HTTP status codes are non-negotiables for any public API. Libraries like express-validator and express-rate-limit handle these concerns elegantly." },
  ],
  comments: [
    { username: "frontend_owl", avatar: "FO", text: "Really solid breakdown. The middleware ordering section saved me hours of debugging.", time: "2h ago" },
    { username: "tserious", avatar: "TS", text: "Love how you structured the error handling. Adding this pattern to my boilerplate.", time: "5h ago" },
  ],
};