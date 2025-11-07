import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * @utility cn
 * @summary Merges Tailwind CSS classes safely, handling conflicts and conditional classes
 * @domain core
 * @type utility-function
 * @category styling
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
