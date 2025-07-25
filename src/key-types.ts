export type ThemeKey =
  | "haiku"
  | "nocturnal"
  | "sunny"
  | "floreal"
  | "oceanic"
  | "crystalline"
  | "mythic"
  | "forest"
  | "desert"
  | "celestial"
  | "library"
  | "decay"
  | "steampunk";

export type ModeKey =
  | "haiku"
  | "lace"
  | "mirrora"
  | "rune"
  | "sonnet"
  | "sigil"
  | "seed"
  | "mantra"
  | "quartz";

export type ThemeWords = Record<ThemeKey, string[]>;
export type ModeFunction = (theme: ThemeKey) => string;
export type ModeFunctions = Record<ModeKey, ModeFunction>;
