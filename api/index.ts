// api/index.ts

import { Request, Response } from 'express';
import { registerRoutes } from '../server/routes'; // Assuming registerRoutes can be adapted
import express from 'express';

// Create an Express app instance
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register your routes with the Express app
registerRoutes(app);

// Export the Express app as a Vercel Serverless Function handler
export default async (req: Request, res: Response) => {
  app(req, res);
};