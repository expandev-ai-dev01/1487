import { z } from 'zod';

/**
 * @summary
 * Reusable Zod validation schemas and helpers
 *
 * @module zodHelpers
 */

// String validations
export const zString = z.string().min(1);
export const zNullableString = (maxLength?: number) => {
  let schema = z.string();
  if (maxLength) {
    schema = schema.max(maxLength);
  }
  return schema.nullable();
};

// Name validations
export const zName = z.string().min(1).max(200);
export const zNullableDescription = z.string().max(500).nullable();

// Numeric validations
export const zNumber = z.number();
export const zPositiveNumber = z.number().positive();
export const zNonNegativeNumber = z.number().min(0);

// ID validations
export const zId = z.number().int().positive();
export const zNullableId = z.number().int().positive().nullable();

// Boolean validations
export const zBoolean = z.boolean();
export const zBit = z.union([z.literal(0), z.literal(1)]);

// Date validations
export const zDate = z.date();
export const zDateString = z.string().datetime();

// Email validation
export const zEmail = z.string().email();

// URL validation
export const zUrl = z.string().url();
