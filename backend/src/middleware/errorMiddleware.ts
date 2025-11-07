import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

/**
 * @summary
 * Global error handling middleware for Express application
 *
 * @middleware errorMiddleware
 *
 * @param {Error} error - Error object
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {NextFunction} next - Express next function
 *
 * @returns {void} Sends error response to client
 */
export function errorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.error('Error:', error);

  // Zod validation errors
  if (error instanceof ZodError) {
    res.status(400).json({
      success: false,
      error: {
        code: 'VALIDATION_ERROR',
        message: 'Validation failed',
        details: error.errors,
      },
      timestamp: new Date().toISOString(),
    });
    return;
  }

  // Default server error
  res.status(500).json({
    success: false,
    error: {
      code: 'INTERNAL_SERVER_ERROR',
      message:
        process.env.NODE_ENV === 'production' ? 'An unexpected error occurred' : error.message,
    },
    timestamp: new Date().toISOString(),
  });
}
