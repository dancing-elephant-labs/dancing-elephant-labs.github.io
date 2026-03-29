# Dancing Elephant Labs Design System

This specification is structured for direct implementation in Figma through styles, variables, and components.

## 1. Color Styles

Create these as Figma color variables inside a shared token collection.

### Core Tokens

| Token | Light Mode | Dark Mode |
| --- | --- | --- |
| `primary/900` | `#1E3A8A` | `#93C5FD` |
| `primary/600` | `#4338CA` | `#C4B5FD` |
| `accent/cyan` | `#0369A1` | `#67E8F9` |
| `neutral/bg` | `#FFFFFF` | `#020617` |
| `neutral/surface` | `#F8FAFC` | `#0F172A` |
| `text/primary` | `#020617` | `#F8FAFC` |
| `text/secondary` | `#475569` | `#94A3B8` |
| `border` | `#E2E8F0` | `#1E293B` |

### Gradient Tokens

| Token | Value |
| --- | --- |
| `gradient/primary/light` | `linear(135deg, #4338CA 0%, #0369A1 100%)` |
| `gradient/primary/dark` | `linear(135deg, #C4B5FD 0%, #67E8F9 100%)` |

## 2. Typography Styles

### Font Setup

- Primary font: `Inter`
- Optional display font: `Space Grotesk`

### Text Styles

| Style | Size | Weight | Tracking | Line Height |
| --- | --- | --- | --- | --- |
| `H1` | `64px` | `700` | `-2%` | `1.0` |
| `H2` | `48px` | `600` | `-2%` | `1.05` |
| `H3` | `32px` | `600` | `-1%` | `1.15` |
| `Body Large` | `18px` | `400` | `0` | `1.6` |
| `Body` | `16px` | `400` | `0` | `1.6` |
| `Small` | `14px` | `400` | `0` | `1.5` |

## 3. Spacing System

Create the spacing scale below as variables.

| Token | Value |
| --- | --- |
| `space/1` | `4px` |
| `space/2` | `8px` |
| `space/3` | `12px` |
| `space/4` | `16px` |
| `space/5` | `24px` |
| `space/6` | `32px` |
| `space/7` | `48px` |
| `space/8` | `64px` |
| `space/9` | `96px` |

## 4. Layout Grid

| Property | Value |
| --- | --- |
| Columns | `12` |
| Gutter | `24px` |
| Desktop margin | `80px` |
| Max width | `1280px` |

## 5. Components

Build these as Figma component variants.

### Button

#### Variants

- Type: `Primary`, `Secondary`
- State: `Default`, `Hover`, `Pressed`, `Disabled`

#### Primary Button

| Property | Value |
| --- | --- |
| Fill | `gradient/primary` |
| Radius | `12px` |
| Padding | `12px 20px` |
| Text | `#FFFFFF` |

Hover behavior:

- Scale to `1.02`
- Apply a soft glow shadow

#### Secondary Button

| Property | Value |
| --- | --- |
| Fill | `transparent` |
| Stroke | `primary/600` |

Hover behavior:

- Fill with `gradient/primary`

### Card

#### Variants

- `Default`
- `Hover`

#### Properties

| Property | Value |
| --- | --- |
| Radius | `16px` |
| Fill | `neutral/surface` |
| Stroke | `border` |
| Padding | `24px` |

Hover behavior:

- Increase elevation
- Add a subtle cyan glow

### Input Field

#### States

- `Default`
- `Focus`
- `Error`

#### Properties

| Property | Value |
| --- | --- |
| Radius | `10px` |
| Border | `neutral` |

Focus behavior:

- Add an `accent/cyan` glow

## 6. Effects and Elevation

### Shadows

| Token | Value |
| --- | --- |
| `elevation/1` | `0 2px 8px rgba(0, 0, 0, 0.05)` |
| `elevation/2` | `0 8px 24px rgba(0, 0, 0, 0.08)` |
| `elevation/3` | `0 16px 40px rgba(0, 0, 0, 0.12)` |

### Glow

| Token | Value |
| --- | --- |
| `glow/cyan` | `0 0 20px rgba(103, 232, 249, 0.4)` |

## 7. Icon System

| Property | Value |
| --- | --- |
| Stroke width | `2px` to `2.5px` |
| Stroke caps | `round` |
| Style | `outline` |
| Grid | `24px` |

## 8. Brand Motifs

Create these as reusable components.

### Trunk Curve

- Extract the SVG curve
- Use as a background decoration
- Use as a section divider

### Dot Accent

Create a circular component in the following sizes:

- `4px`
- `8px`
- `12px`

Use dot accents for:

- Lists
- Indicators

## 9. Theming Setup in Figma

Use Figma Variables with the following setup:

- Collection: `Theme`
- Modes: `Light`, `Dark`
- Map all color tokens to the corresponding mode values
