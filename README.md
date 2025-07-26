<div align="center">

<img src="assets/logo.svg" alt="KeyFleur Logo" width="120" height="120" />

# KeyFleur

*Poetic API Key Generation for Modern Developers*

[![npm version](https://img.shields.io/npm/v/@usex/key-fleur?style=flat-square&color=007acc&labelColor=000000)](https://npmjs.com/package/key-fleur)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-007acc?style=flat-square&labelColor=000000)](https://www.typescriptlang.org/)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-success?style=flat-square&labelColor=000000)](package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square&labelColor=000000)](LICENSE)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@usex/key-fleur?style=flat-square&color=success&labelColor=000000)](https://bundlephobia.com/package/key-fleur)

```typescript
generateKeyFleur({ mode: "celestial", theme: "sigil" })
// → "Nebula-847-Galaxy" ✨
```

**[📖 Documentation](#quick-start) • [🎮 Try Online](https://keyfleur.usestrict.dev) • [🐙 GitHub Issues](https://github.com/ali-master/key-fleur/issues)**

</div>

---

## Why KeyFleur?

Stop generating API keys that look like someone smashed their keyboard. Create beautiful, human-readable identifiers that your team will actually remember.

<table>
<tr>
<td>

**😴 Traditional Keys**
```
kJ8#mP2qR9$vX7nL4wB6
aNm9Kp2QrX5vB8wL4jR7
7mK3$pQ9rN2xV8wL4jB6
```

</td>
<td>

**✨ KeyFleur Keys**
```
Luna-Eclipse-Nocturnal
Crystal-459-Amethyst
Sage-7f2a
```

</td>
</tr>
</table>

## Features

<div align="center">

| 🎨 **Beautiful** | 🔧 **Functional** | 🚀 **Developer Experience** |
|:---:|:---:|:---:|
| 9 Generation Modes | Zero Dependencies | Full TypeScript Support |
| 13 Themed Collections | URL-Safe Output | Comprehensive JSDoc |
| Human-Readable Keys | Pattern Validation | Modern ESM/CJS Support |

</div>

### 🌈 **Generation Modes**
Choose from 9 different key generation patterns, each with its own aesthetic and use case.

### 🎭 **Thematic Collections** 
From `celestial` space themes to `steampunk` mechanical vibes - 13 curated word collections.

### 🛡️ **Production Ready**
Zero dependencies, fully typed, tested, and ready for production use.

---

## Quick Start

<details>
<summary><strong>📦 Installation</strong></summary>

```bash
# npm
npm install @usex/key-fleur

# yarn
yarn add @usex/key-fleur

# pnpm
pnpm add @usex/key-fleur

# bun
bun add @usex/key-fleur
```

</details>

### Basic Usage

```typescript
import { generateKeyFleur } from '@usex/key-fleur';

// One-liner for a beautiful key
const key = generateKeyFleur();
console.log(key); // "Nyrae-Soliv-Ethae"
```

### Configuration

```typescript
// Customize your keys
const apiKey = generateKeyFleur({ 
  mode: 'sigil',      // Key pattern
  theme: 'celestial'  // Word theme
});
// → "Nebula-742-Comet"

// Generate multiple keys
const sessionKeys = generateKeyFleur({ 
  count: 5, 
  theme: 'oceanic' 
});
// → ["Wave-Coral-Deep", "Tide-Gull-Salt", ...]
```

### Validation

```typescript
import { isValidKeyFleur } from '@usex/key-fleur';

const result = isValidKeyFleur("Crystal-459-Gem");
// → { valid: true, mode: "sigil", parts: ["Crystal", "459", "Gem"] }
```

<div align="center">

**[🎮 Try it live](https://keyfleur.dev) • [📚 Full API docs](#api-reference)**

</div>

---

## 🎨 Generation Modes

<details>
<summary><strong>🌸 haiku</strong> - Traditional 5-7-5 syllable poetry</summary>

```typescript
generateKeyFleur({ mode: 'haiku', theme: 'nocturnal' })
// → "Luna-Eclipse-Void"
```
Perfect for: API keys, memorable identifiers
</details>

<details>
<summary><strong>🔸 sigil</strong> - Word-number-word format</summary>

```typescript
generateKeyFleur({ mode: 'sigil', theme: 'crystalline' })
// → "Crystal-459-Gem"
```
Perfect for: Session tokens, transaction IDs
</details>

<details>
<summary><strong>🌱 seed</strong> - Compact word + hex</summary>

```typescript
generateKeyFleur({ mode: 'seed', theme: 'forest' })
// → "Moss-4f2a"
```
Perfect for: Short codes, references
</details>

<details>
<summary><strong>🪞 lace</strong> - Palindromic patterns</summary>

```typescript
generateKeyFleur({ mode: 'lace', theme: 'oceanic' })
// → "wavefa-afevaw"
```
Perfect for: Artistic applications, unique IDs
</details>

<details>
<summary><strong>🎭 All 9 Modes</strong></summary>

| Mode | Example | Best For |
|------|---------|----------|
| `haiku` | `Luna-Eclipse-Void` | API keys, memorable IDs |
| `sigil` | `Crystal-459-Gem` | Session tokens, transaction IDs |
| `seed` | `Moss-4f2a` | Short codes, references |
| `lace` | `wavefa-afevaw` | Artistic apps, unique IDs |
| `sonnet` | `Rosefa-Lilyli` | User handles, project names |
| `rune` | `Oracle-Blade_dawn` | Timestamped keys |
| `mantra` | `Sand-Sand-Dune` | Meditation apps, repeated actions |
| `mirrora` | `af-fa` | Minimal IDs, simple tokens |
| `quartz` | `Gear45.45raeG` | Complex keys, high entropy |

</details>

## 🎭 Thematic Collections

<div align="center">

*13 carefully curated word collections to match your application's aesthetic*

</div>

<table>
<tr>
<td>

**🌌 celestial**
```
nova, galaxy, nebula
eclipse, stellar, cosmos
```

**🌊 oceanic** 
```
wave, coral, tide
nautilus, reef, pearl
```

**🌲 forest**
```
moss, grove, cedar
glade, fern, birch
```

**🔮 crystalline**
```
quartz, prism, facet
amethyst, opal, gem
```

</td>
<td>

**🦇 nocturnal**
```
luna, eclipse, shadow
twilight, void, silence
```

**☀️ sunny**
```
sol, gleam, radiant
aurora, shine, gold
```

**🌸 floreal**
```
rose, bloom, petal
garden, lily, orchid
```

**⚙️ steampunk**
```
gear, steam, valve
chronometer, brass, cog
```

</td>
<td>

**🐉 mythic**
```
oracle, phoenix, wyrm
grimoire, titan, rune
```

**🏜️ desert**
```
dune, mirage, ember
sirocco, ash, mesa
```

**📚 library**
```
scroll, codex, quill
archive, tome, script
```

**🕳️ decay**
```
rust, fracture, relic
erosion, wear, time
```

</td>
</tr>
</table>

```typescript
// Mix and match themes with any mode
generateKeyFleur({ theme: 'celestial', mode: 'haiku' })
// → "Nova-Galaxy-Nebula"

generateKeyFleur({ theme: 'steampunk', mode: 'sigil' })  
// → "Gear-847-Steam"
```

## API Reference

### `generateKeyFleur(options?)`

Primary interface for generating KeyFleur keys.

```typescript
generateKeyFleur(options?: {
  mode?: ModeKey;     // Generation mode (default: "haiku")
  theme?: ThemeKey;   // Theme collection (default: "haiku") 
  count?: number;     // Number of keys (default: 1, max: 100)
}): string | string[]
```

**Examples:**
```typescript
generateKeyFleur();                              // Single haiku key
generateKeyFleur({ mode: 'sigil' });            // Single sigil key
generateKeyFleur({ theme: 'oceanic' });         // Ocean-themed haiku
generateKeyFleur({ count: 10 });                // Array of 10 keys
generateKeyFleur({ 
  mode: 'quartz', 
  theme: 'crystalline',
  count: 3 
});                                              // 3 crystal quartz keys
```

### `isValidKeyFleur(key, mode?)`

Validates KeyFleur key patterns.

```typescript
isValidKeyFleur(
  key: string,
  mode?: ModeKey
): {
  valid: boolean;
  mode?: ModeKey;
  reason?: string;
  parts?: string[];
}
```

**Examples:**
```typescript
isValidKeyFleur("Luna-Eclipse-Void");
// { valid: true, mode: "haiku", parts: ["Luna", "Eclipse", "Void"] }

isValidKeyFleur("Crystal-459-Gem", "sigil");
// { valid: true, mode: "sigil", parts: ["Crystal", "459", "Gem"] }

isValidKeyFleur("invalid-key");
// { valid: false, reason: "Key does not match any known KeyFleur pattern" }
```

### Legacy API

```typescript
import { poeticKey } from '@usex/key-fleur';

// Original simple interface (still supported)
poeticKey(mode?: ModeKey, theme?: ThemeKey): string
```

## Use Cases

### 🔐 **Security & Authentication**
- API keys that humans can actually read and remember
- Session tokens with aesthetic appeal  
- Temporary access codes and passphrases
- OAuth state parameters
- CSRF tokens

### 🎮 **Gaming & Creative**
- Game save IDs and world seeds
- Character names and guild identifiers  
- Creative project codenames
- Art piece references

### 📊 **Business & Development**
- Document and content identifiers
- Database record references
- Test data generation
- Demo and placeholder content
- Customer reference numbers

### 💼 **Why Choose KeyFleur?**

**Traditional Random Keys:**
```
kJ8#mP2qR9$vX7nL4wB6
aNm9Kp2QrX5vB8wL4jR7
```

**KeyFleur Keys:**
```
Luna-Eclipse-Nocturnal
Crystal-459-Amethyst
```

✅ **Human-readable** - Easy to communicate verbally  
✅ **Memorable** - Natural language patterns stick in memory  
✅ **Beautiful** - Aesthetically pleasing in UIs and logs  
✅ **Unique** - Collision-resistant across themes and modes  
✅ **Functional** - URL-safe, database-friendly, proper entropy

## Advanced Usage & Customization

### Batch Generation

```typescript
import { generateKeyFleur, type ThemeKey, type ModeKey } from '@usex/key-fleur';

// Generate API keys for different environments
const keys = {
  development: generateKeyFleur({ theme: 'forest', count: 3 }),
  staging: generateKeyFleur({ theme: 'crystalline', count: 3 }),
  production: generateKeyFleur({ theme: 'celestial', count: 3 })
};

// Generate user session tokens
const sessionTokens = generateKeyFleur({ 
  mode: 'seed',
  theme: 'nocturnal',
  count: 50 
}) as string[];
```

### Custom Validation

```typescript
import { isValidKeyFleur } from '@usex/key-fleur';

function validateApiKey(key: string, expectedFormat: 'sigil' | 'seed') {
  const result = isValidKeyFleur(key, expectedFormat);
  
  if (!result.valid) {
    throw new Error(`Invalid API key format: ${result.reason}`);
  }
  
  return result;
}

// Use in your application
try {
  const validation = validateApiKey("Crystal-459-Gem", "sigil");
  console.log(`Valid ${validation.mode} key with parts:`, validation.parts);
} catch (error) {
  console.error(error.message);
}
```

### Extending KeyFleur

```typescript
import { THEMES, MODES, type ThemeKey } from '@usex/key-fleur';

// Add custom themes
const customThemes = {
  ...THEMES,
  cyberpunk: ['neon', 'grid', 'cyber', 'matrix', 'pulse', 'neural']
} as const;

// Create custom generator
function customKeyFleur(theme: keyof typeof customThemes = 'haiku') {
  const words = customThemes[theme];
  const selected = words[Math.floor(Math.random() * words.length)];
  return `${selected}-${Date.now().toString(36)}`;
}
```

## Technical Details

### Architecture

KeyFleur is built with a modular architecture:

- **`key-types.ts`** - TypeScript type definitions
- **`theme-data.ts`** - Curated word collections (13 themes × ~30 words each)
- **`string-utils.ts`** - Core utilities (syllable counting, random selection)
- **`generation-modes.ts`** - 9 different key generation algorithms
- **`index.ts`** - Main API with validation and error handling

### Algorithms

- **Syllable Estimation** - Vowel-counting heuristics for haiku mode
- **Pattern Generation** - Deterministic transformations (reversals, mirroring)
- **Random Selection** - Cryptographically adequate randomness via `Math.random()`
- **Validation** - Regex-based pattern matching for all modes

### Security Considerations

- ⚠️ **Not cryptographically secure** - Uses `Math.random()` for generation
- ✅ **Adequate entropy** - Large combination space across themes/modes  
- ✅ **URL-safe** - No special characters that break URLs or JSON
- ✅ **Collision-resistant** - Very low probability of duplicates in practice

For cryptographic security, combine with additional entropy sources or use KeyFleur for non-security-critical identifiers.

## Contributing

We welcome contributions! Here's how to get started:

### Development Setup

```bash
git clone https://github.com/ali-master/key-fleur.git
cd key-fleur
npm install
npm run build
npm test
```

### Adding New Themes

1. Add your theme to `src/theme-data.ts`
2. Update the `ThemeKey` type in `src/key-types.ts`
3. Add tests and documentation

### Adding New Modes

1. Create your mode function in `src/generation-modes.ts`
2. Add it to the `MODES` export
3. Update the `ModeKey` type in `src/key-types.ts`
4. Add validation pattern to `isValidKeyFleur`

## License

MIT © [Ali Torki](https://github.com/ali-master)

---

<div align="center">
  <p>
    <sub>Built with ❤️ by <a href="https://github.com/ali-master" target="_blank">Ali Torki</a>, developers who believe code can be beautiful</sub>
  </p>
  <p>
    <a href="https://github.com/ali-master/key-fleur">⭐ Star us on GitHub</a> •
    <a href="https://linkedin.com/in/alitorki">🐦 Follow on Linkedin</a>
  </p>
</div>
