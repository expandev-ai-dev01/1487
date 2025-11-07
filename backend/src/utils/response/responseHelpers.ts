/**
 * @summary
 * Utility functions for standardized API responses
 *
 * @module responseHelpers
 */

export interface SuccessResponse<T> {
  success: true;
  data: T;
  metadata?: {
    page?: number;
    pageSize?: number;
    total?: number;
    timestamp: string;
  };
}

export interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}

/**
 * @summary
 * Creates a standardized success response
 *
 * @function successResponse
 *
 * @param {T} data - Response data
 * @param {object} metadata - Optional metadata
 *
 * @returns {SuccessResponse<T>} Formatted success response
 */
export const successResponse = <T>(data: T, metadata?: any): SuccessResponse<T> => {
  return {
    success: true,
    data,
    metadata: metadata
      ? { ...metadata, timestamp: new Date().toISOString() }
      : { timestamp: new Date().toISOString() },
  };
};

/**
 * @summary
 * Creates a standardized error response
 *
 * @function errorResponse
 *
 * @param {string} message - Error message
 * @param {string} code - Error code
 * @param {any} details - Optional error details
 *
 * @returns {ErrorResponse} Formatted error response
 */
export const errorResponse = (
  message: string,
  code: string = 'ERROR',
  details?: any
): ErrorResponse => {
  return {
    success: false,
    error: {
      code,
      message,
      details,
    },
    timestamp: new Date().toISOString(),
  };
};
