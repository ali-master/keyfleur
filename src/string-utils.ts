/** Soft consonants used for generating pleasant-sounding syllables */
const SOFT_CONS: string = "flmnrschv";

/** Vowels used for syllable generation */
const VOWELS: string = "aeiouy";

/**
 * Generates a random syllable using soft consonants and vowels.
 * Creates aesthetically pleasing two-character combinations for use in key generation.
 * 
 * @returns A two-character syllable consisting of a consonant followed by a vowel
 * @example
 * ```typescript
 * syllable(); // Returns something like "fa", "li", "no", etc.
 * ```
 */
export function syllable(): string {
  return getRandomChar(SOFT_CONS) + getRandomChar(VOWELS);
}

/**
 * Returns a random character from the provided string.
 * Utility function used by other generators for random character selection.
 * 
 * @param chars - String containing characters to choose from
 * @returns A single random character from the input string
 * @example
 * ```typescript
 * getRandomChar("abc"); // Returns "a", "b", or "c"
 * ```
 */
export function getRandomChar(chars: string): string {
  return chars.charAt(Math.floor(Math.random() * chars.length));
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * Uses Math.random() to generate cryptographically insecure but adequate randomness for key generation.
 * 
 * @param min - Minimum value (inclusive)
 * @param max - Maximum value (inclusive)
 * @returns Random integer in the specified range
 * @example
 * ```typescript
 * getRandomInt(1, 10); // Returns integer between 1 and 10
 * getRandomInt(100, 999); // Returns 3-digit number
 * ```
 */
export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns a random element from an array.
 * Generic utility function that works with arrays of any type.
 * 
 * @template T - Type of array elements
 * @param array - Array to select from
 * @returns Random element from the array
 * @example
 * ```typescript
 * getRandomElement(["apple", "banana", "cherry"]); // Returns one of the fruits
 * getRandomElement([1, 2, 3, 4, 5]); // Returns a random number
 * ```
 */
export function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Estimates the number of syllables in a word using vowel counting heuristics.
 * This is an approximation used for haiku generation - not linguistically perfect but adequate for our needs.
 * 
 * Rules applied:
 * - Count vowel groups (consecutive vowels count as one)
 * - Subtract 1 if word ends with 'e' and has more than 1 syllable
 * - Minimum of 1 syllable per word
 * 
 * @param word - Word to analyze
 * @returns Estimated syllable count (minimum 1)
 * @example
 * ```typescript
 * estimateSyllables("hello"); // Returns 2
 * estimateSyllables("cat"); // Returns 1
 * estimateSyllables("beautiful"); // Returns 3
 * estimateSyllables(""); // Returns 0
 * ```
 */
export function estimateSyllables(word: string): number {
  if (!word || typeof word !== "string") {
    return 0;
  }

  word = word.toLowerCase();
  const vowels = "aeiouy";
  let count = 0;
  let prevChar = "";

  // Count vowel groups (consecutive vowels = 1 syllable)
  for (const char of word) {
    if (vowels.includes(char) && !vowels.includes(prevChar)) {
      count++;
    }
    prevChar = char;
  }

  // Silent 'e' rule: subtract 1 if word ends with 'e' and has multiple syllables
  if (word.endsWith("e") && count > 1) {
    count--;
  }

  return Math.max(1, count);
}
