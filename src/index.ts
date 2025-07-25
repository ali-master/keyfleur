import type { ThemeKey, ModeKey } from "./key-types.js";
import { THEMES } from "./theme-data.js";
import { MODES } from "./generation-modes.js";

/**
 * Generates a poetic key using the specified mode and theme.
 * This is the core function that orchestrates key generation.
 *
 * @param mode - Generation mode to use (defaults to "haiku")
 * @param theme - Thematic word collection to use (defaults to "haiku")
 * @returns A generated poetic key string
 * @example
 * ```typescript
 * poeticKey(); // Uses default haiku mode and theme
 * poeticKey("sigil", "celestial"); // Generate celestial-themed sigil
 * poeticKey("lace", "oceanic"); // Generate oceanic-themed lace pattern
 * ```
 */
export function poeticKey(mode: ModeKey = "haiku", theme: ThemeKey = "haiku"): string {
  const func = MODES[mode] || MODES["haiku"];
  return func(theme);
}

/**
 * Main generation function - primary interface for creating KeyFleur keys.
 * Provides a clean API with comprehensive options and validation.
 *
 * @param options - Configuration object for key generation
 * @param options.mode - Generation mode (defaults to "haiku")
 * @param options.theme - Theme collection (defaults to "haiku")
 * @param options.count - Number of keys to generate (defaults to 1)
 * @returns Single key string or array of keys if count > 1
 * @example
 * ```typescript
 * generateKeyFleur(); // Single haiku key
 * generateKeyFleur({ mode: "sigil", theme: "mythic" }); // Mythic sigil
 * generateKeyFleur({ count: 5, theme: "oceanic" }); // Array of 5 oceanic keys
 * ```
 */
export function generateKeyFleur(
  options: {
    mode?: ModeKey;
    theme?: ThemeKey;
    count?: number;
  } = {},
): string | string[] {
  const { mode = "haiku", theme = "haiku", count = 1 } = options;

  // Validate inputs
  if (!MODES[mode]) {
    throw new Error(`Invalid mode: ${mode}. Available modes: ${Object.keys(MODES).join(", ")}`);
  }

  if (!THEMES[theme]) {
    throw new Error(`Invalid theme: ${theme}. Available themes: ${Object.keys(THEMES).join(", ")}`);
  }

  if (count < 1 || count > 100) {
    throw new Error("Count must be between 1 and 100");
  }

  if (count === 1) {
    return poeticKey(mode, theme);
  }

  return Array.from({ length: count }, () => poeticKey(mode, theme));
}

/**
 * Validates if a string matches KeyFleur key patterns.
 * Checks against known patterns for each generation mode.
 *
 * @param key - String to validate
 * @param mode - Expected mode (optional - will check all modes if not specified)
 * @returns Object with validation result and details
 * @example
 * ```typescript
 * isValidKeyFleur("Luna-Eclipse-Void"); // { valid: true, mode: "haiku", ... }
 * isValidKeyFleur("Crystal-459-Gem", "sigil"); // { valid: true, mode: "sigil", ... }
 * isValidKeyFleur("invalid"); // { valid: false, reason: "...", ... }
 * ```
 */
export function isValidKeyFleur(
  key: string,
  mode?: ModeKey,
): {
  valid: boolean;
  mode?: ModeKey;
  reason?: string;
  parts?: string[];
} {
  if (!key || typeof key !== "string") {
    return { valid: false, reason: "Key must be a non-empty string" };
  }

  const patterns = {
    haiku: /^[A-Z][a-z]+-[A-Z][a-z]+-[A-Z][a-z]+$/,
    lace: /^[a-z]+[a-z]{2}-[a-z]{2}[a-z]+$/,
    mirrora: /^[a-z]{2}-[a-z]{2}$/,
    rune: /^[A-Z][a-z]+-[A-Z][a-z]+-[A-Z][a-z]+_(now\+1d|now-2h|dawn|midnight|solstice|infinite|epoch)$/,
    sonnet: /^[A-Z][a-z]+[a-z]{2}-[A-Z][a-z]+[a-z]{2}$/,
    sigil: /^[A-Z][a-z]+-\d{3}-[A-Z][a-z]+$/,
    seed: /^[A-Z][a-z]{1,3}-[a-f0-9]{4}$/,
    mantra: /^[A-Z][a-z]+-[A-Z][a-z]+-[A-Z][a-z]+$/,
    quartz: /^[A-Z][a-z]+\d{2}\.\d{2}[A-Z][a-z]*$/,
  };

  if (mode) {
    const pattern = patterns[mode];
    if (!pattern) {
      return { valid: false, reason: `Unknown mode: ${mode}` };
    }

    const valid = pattern.test(key);
    return {
      valid,
      mode: valid ? mode : undefined,
      reason: valid ? undefined : `Key does not match ${mode} pattern`,
      parts: valid ? key.split(/[-_.]/) : undefined,
    };
  }

  // Check against all patterns
  for (const [modeName, pattern] of Object.entries(patterns)) {
    if (pattern.test(key)) {
      return {
        valid: true,
        mode: modeName as ModeKey,
        parts: key.split(/[-_.]/),
      };
    }
  }

  return {
    valid: false,
    reason: "Key does not match any known KeyFleur pattern",
  };
}

// Export types and data for advanced usage
export { type ThemeKey, type ModeKey, THEMES, MODES };
