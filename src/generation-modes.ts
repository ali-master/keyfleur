import type { ThemeKey, ModeFunctions } from "./key-types.js";
import { THEMES } from "./theme-data.js";
import { syllable, getRandomElement, getRandomInt, estimateSyllables } from "./string-utils.js";

/** Time-based rune values used in rune key generation */
const RUNES: string[] = ["now+1d", "now-2h", "dawn", "midnight", "solstice", "infinite", "epoch"];

/**
 * Generates a haiku-style key based on traditional 5-7-5 syllable pattern.
 * Attempts to find words from the theme that match the syllable requirements for each line.
 *
 * @param theme - Theme to use for word selection
 * @returns A three-part key joined by dashes, or "incomplete-haiku" if generation fails
 * @example
 * ```typescript
 * haiku("celestial"); // Returns "Nova-GalaxyEclipse-Star" or similar
 * ```
 */
function haiku(theme: ThemeKey): string {
  const allWords: string[] = Object.values(THEMES[theme])
    .flat()
    .filter((word) => word);
  const shuffledWords = [...allWords].sort(() => Math.random() - 0.5);
  const usedWords = new Set<string>();

  function findWords(targetSyllables: number): string[] {
    const result: string[] = [];
    let total = 0;

    for (const word of shuffledWords) {
      if (!word || usedWords.has(word)) {
        continue;
      }

      const syll = estimateSyllables(word);
      if (syll === 0) {
        continue;
      }

      if (total + syll <= targetSyllables) {
        result.push(word.charAt(0).toUpperCase() + word.slice(1));
        usedWords.add(word);
        total += syll;
        if (total === targetSyllables) {
          break;
        }
      }
    }

    return total === targetSyllables ? result : [];
  }

  const line1 = findWords(5);
  const line2 = findWords(7);
  const line3 = findWords(5);

  if (!line1.length || !line2.length || !line3.length) {
    return "incomplete-haiku";
  }

  return [line1.join(""), line2.join(""), line3.join("")].join("-");
}

/**
 * Generates a lace pattern key with palindromic elements.
 * Creates a pattern where the middle syllable is mirrored and the word is reversed.
 *
 * @param theme - Theme to use for word selection
 * @returns A lace-pattern key with format: word+syllable-reversedSyllable+reversedWord
 * @example
 * ```typescript
 * lace("oceanic"); // Returns "wavefa-afevaw" or similar
 * ```
 */
function lace(theme: ThemeKey): string {
  const roots = THEMES[theme] || THEMES["haiku"];
  const word = getRandomElement(roots);
  const mid = syllable();
  return `${word}${mid}-${mid.split("").reverse().join("")}${word.split("").reverse().join("")}`;
}

/**
 * Generates a mirrored syllable key.
 * Creates a simple mirror pattern using a generated syllable.
 *
 * @param _ - Theme parameter (unused in this mode)
 * @returns A mirrored syllable pattern
 * @example
 * ```typescript
 * mirrora("any"); // Returns "af-fa" or similar
 * ```
 */
function mirrora(_: ThemeKey): string {
  const s = syllable();
  return `${s.split("").reverse().join("")}-${s}`;
}

/**
 * Generates a rune key combining haiku with temporal elements.
 * Uses haiku generation as base and appends a time-based rune value.
 *
 * @param theme - Theme to use for word selection
 * @returns A rune key with format: haikuResult_runeValue
 * @example
 * ```typescript
 * runeKey("mythic"); // Returns "Oracle-Blade-Wyrm_dawn" or similar
 * ```
 */
function runeKey(theme: ThemeKey): string {
  const base = haiku(theme).charAt(0).toUpperCase() + haiku(theme).slice(1);
  const rune = getRandomElement(RUNES);
  return `${base}_${rune}`;
}

/**
 * Generates a sonnet-style key with embellished words.
 * Takes two words and adds syllable suffixes to create a poetic combination.
 *
 * @param theme - Theme to use for word selection
 * @returns A sonnet key with format: word1+syllable-word2+syllable
 * @example
 * ```typescript
 * sonnet("floreal"); // Returns "Rosefa-Lilyli" or similar
 * ```
 */
function sonnet(theme: ThemeKey): string {
  const roots = THEMES[theme] || THEMES["haiku"];
  const firstWord = getRandomElement(roots);
  const secondWord = getRandomElement(roots);
  const firstSyll = syllable().slice(0, 2);
  const secondSyll = syllable().slice(0, 2);

  return `${firstWord.charAt(0).toUpperCase() + firstWord.slice(1)}${firstSyll}-${secondWord.charAt(0).toUpperCase() + secondWord.slice(1)}${secondSyll}`;
}

/**
 * Generates a sigil key with word-number-word pattern.
 * Combines two themed words with a random 3-digit number between them.
 *
 * @param theme - Theme to use for word selection
 * @returns A sigil key with format: Word-###-Word
 * @example
 * ```typescript
 * sigil("crystalline"); // Returns "Crystal-459-Gem" or similar
 * ```
 */
function sigil(theme: ThemeKey): string {
  const roots = THEMES[theme] || THEMES["haiku"];
  const firstWord = getRandomElement(roots);
  const secondWord = getRandomElement(roots);

  return `${firstWord.charAt(0).toUpperCase() + firstWord.slice(1)}-${getRandomInt(100, 999)}-${secondWord.charAt(0).toUpperCase() + secondWord.slice(1)}`;
}

/**
 * Generates a seed key with word prefix and hexadecimal suffix.
 * Takes first 4 characters of a themed word and appends a hex value.
 *
 * @param theme - Theme to use for word selection
 * @returns A seed key with format: WordPrefix-hexValue
 * @example
 * ```typescript
 * seed("forest"); // Returns "Moss-1a4f" or similar
 * ```
 */
function seed(theme: ThemeKey): string {
  const roots = THEMES[theme] || THEMES["haiku"];
  const word = getRandomElement(roots);
  const wordPrefix = word.slice(0, 4);
  const randomHex = getRandomInt(0x1000, 0x9999).toString(16);

  return `${wordPrefix.charAt(0).toUpperCase() + wordPrefix.slice(1)}-${randomHex}`;
}

/**
 * Generates a mantra key with repetitive pattern.
 * Repeats a word twice, then adds a different word at the end.
 *
 * @param theme - Theme to use for word selection
 * @returns A mantra key with format: Word-Word-DifferentWord
 * @example
 * ```typescript
 * mantra("desert"); // Returns "Sand-Sand-Dune" or similar
 * ```
 */
function mantra(theme: ThemeKey): string {
  const roots = THEMES[theme] || THEMES["haiku"];
  const word = getRandomElement(roots);
  const secondWord = getRandomElement(roots);

  return `${word.charAt(0).toUpperCase() + word.slice(1)}-${word.charAt(0).toUpperCase() + word.slice(1)}-${secondWord.charAt(0).toUpperCase() + secondWord.slice(1)}`;
}

/**
 * Generates a quartz key with complex mirroring and numbers.
 * Creates a pattern with word, number, dot, number, reversed word fragment.
 *
 * @param theme - Theme to use for word selection
 * @returns A quartz key with format: Word##.##ReversedFragment
 * @example
 * ```typescript
 * quartz("steampunk"); // Returns "Gear45.45raeG" or similar
 * ```
 */
function quartz(theme: ThemeKey): string {
  const roots = THEMES[theme] || THEMES["haiku"];
  const root = getRandomElement(roots);
  const capitalized = root.charAt(0).toUpperCase() + root.slice(1);
  const rev = capitalized.split("").reverse().join("").slice(0, 4);
  const num = getRandomInt(10, 99).toString();

  return `${capitalized}${num}.${num}${rev}`;
}

/**
 * Dictionary mapping mode names to their corresponding generation functions.
 * Each function takes a ThemeKey and returns a generated key string.
 *
 * Available modes:
 * - haiku: 5-7-5 syllable pattern
 * - lace: Palindromic pattern with word reversals
 * - mirrora: Simple syllable mirroring
 * - rune: Haiku combined with temporal runes
 * - sonnet: Words with syllable embellishments
 * - sigil: Word-number-word format
 * - seed: Word prefix with hexadecimal
 * - mantra: Repetitive word patterns
 * - quartz: Complex mirroring with numbers
 */
export const MODES: ModeFunctions = {
  haiku: haiku,
  lace: lace,
  mirrora: mirrora,
  rune: runeKey,
  sonnet: sonnet,
  sigil: sigil,
  seed: seed,
  mantra: mantra,
  quartz: quartz,
};
