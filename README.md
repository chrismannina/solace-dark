# Solace Dark Theme

A dark theme designed based on principles for visual comfort and productivity during long coding or writing sessions.

## Introduction

Dark themes are popular for reducing eye strain and improving focus. **Solace Dark** is designed to be functional, easy on the eyes, and aesthetically appealing. Our approach is grounded in research on color contrast and readability, aiming to keep users comfortable and productive. We prioritize accessibility (high contrast) and user comfort, leveraging scientific guidelines.

## Repository Structure

This is a monorepo containing theme implementations for multiple platforms and editors. Each platform has its own package in the `packages/` directory:

```
solace-dark/
├── packages/
│   ├── vscode/          # Visual Studio Code theme
│   ├── obsidian/        # Obsidian CSS snippet
│   ├── notepad++/       # Notepad++ XML theme
│   ├── sublime/         # Sublime Text color scheme
│   ├── jetbrains/       # JetBrains IDEs color scheme
│   └── terminal/        # Terminal color schemes
├── README.md
├── LICENSE
└── .gitignore
```

This monorepo structure allows for:
- **Unified version control** - All platform implementations stay in sync
- **Shared resources** - Common documentation, branding, and color definitions
- **Easier maintenance** - Changes to the core color palette can be applied across all platforms
- **Coordinated releases** - All platform implementations can be released together

## Philosophy: Designed for Visual Comfort

The design choices in Solace Dark are informed by research on visual ergonomics and accessibility guidelines for dark interfaces:

*   **Avoiding Pure Black/White:** We use a dark gray background (`#121212`) instead of true black (`#000000`). Research indicates that pure black backgrounds can cause halation (a "halo" effect) for users with astigmatism, and extreme contrast with pure white text can increase eye strain [1, 3]. Material Design recommends `#121212` as a suitable dark theme surface color [1]. Similarly, we use off-white text (`#ECECEC`) rather than pure white (`#FFFFFF`) to reduce the harshness and potential "vibration" effect on the dark background [1].
*   **Optimal Contrast:** The primary text color (`#ECECEC` on `#121212`) achieves a contrast ratio of approximately 15.9:1, exceeding the WCAG AA requirement (4.5:1) and aligning with recommendations for optimal readability in dark mode (around 15.8:1) [1, 3]. Secondary text like comments (`#8A8A8A`) also maintains sufficient contrast (above 4.5:1) while remaining visually distinct from primary code elements.
*   **Desaturated, Harmonious Accents:** Highly saturated colors can appear to "vibrate" against dark backgrounds, causing visual fatigue [1]. Solace Dark employs moderately saturated accent colors (`#B284E0`, `#E4A567`, `#65CCBB`, `#DE909D`) for syntax highlighting. These softer, lighter-tone variants provide clear differentiation for code elements while maintaining visual harmony and reducing potential glare, especially in low-light conditions [1, 2, 4]. While not specifically optimized for colorblindness, the chosen colors differ sufficiently in perceived brightness and are used consistently for specific syntax roles.
*   **Comfort for Extended Use:** By adhering to these principles – avoiding extreme contrast, using desaturated accents, and ensuring high legibility – Solace Dark aims to reduce overall eye strain and provide a more comfortable visual experience during long coding or writing sessions [2, 4].

## Color Palette

The theme's core palette (hex codes):

*   **Background:** `#121212` (Nearly black dark gray)
*   **Primary Text:** `#ECECEC` (Off-white)
*   **Comment Text:** `#8A8A8A` (Gray)
*   **Keywords:** `#B284E0` (Soft purple)
*   **Strings:** `#E4A567` (Warm orange-gold)
*   **Functions:** `#65CCBB` (Teal)
*   **Constants/Numbers:** `#DE909D` (Muted pink)
*   **Selection Highlight:** `#264F78` (Dark desaturated blue)
*   **Current Line Highlight:** `#1E1E1E` (Very dark gray)
*   **Cursor/Caret:** `#ECECEC` (Off-white)

## Installation

Theme files are provided for various editors and platforms in the `packages/` directory.

### Visual Studio Code

1.  Copy the content of `packages/vscode/solace-dark-color-theme.json`.
2.  Alternatively, you can package this theme as a VS Code extension.
3.  Select "Solace Dark" from your VS Code themes.

*File location:* `packages/vscode/solace-dark-color-theme.json`

### Obsidian

1.  Copy the `packages/obsidian/SolaceDark.css` file into your vault's `.obsidian/snippets/` directory.
2.  Enable the "SolaceDark" snippet in Obsidian's Appearance settings (`Settings` > `Appearance` > `CSS snippets`).

*File location:* `packages/obsidian/SolaceDark.css`

### Notepad++

1.  Copy the `packages/notepad++/SolaceDark.xml` file to your Notepad++ themes directory (usually `%AppData%\Notepad++\themes\` on Windows).
2.  Restart Notepad++.
3.  Select "Solace Dark" from the `Settings` > `Style Configurator...` dropdown menu.

*File location:* `packages/notepad++/SolaceDark.xml`

### Sublime Text

1.  Copy the `packages/sublime/Solace Dark.sublime-color-scheme` file to your Sublime Text `Packages/User/` directory (you can find this via `Preferences` > `Browse Packages...`).
2.  Select the theme via `Preferences` > `Color Scheme...` > `User` > `Solace Dark`.

*File location:* `packages/sublime/Solace Dark.sublime-color-scheme`

### JetBrains IDEs (IntelliJ, PyCharm, WebStorm, etc.)

1.  Go to `File` > `Settings` (or `Preferences` on macOS) > `Editor` > `Color Scheme`.
2.  Click the gear icon next to the scheme dropdown, select `Import Scheme...`, and choose the `packages/jetbrains/Solace Dark.icls` file.
3.  Select "Solace Dark" from the Color Scheme dropdown.

*File location:* `packages/jetbrains/Solace Dark.icls`

### Terminal Applications

#### Windows Terminal

1.  Open your Windows Terminal `settings.json` file (Ctrl+,).
2.  Copy the JSON object from `packages/terminal/windows_terminal_scheme.json`.
3.  Paste this object into the `"schemes": []` array in your `settings.json`.
4.  In your profile settings within `settings.json`, set `"colorScheme": "Solace Dark"`.

*File location:* `packages/terminal/windows_terminal_scheme.json`

#### iTerm2 (macOS)

1.  Download the `packages/terminal/Solace Dark.itermcolors` file.
2.  Open iTerm2 preferences (`Cmd + ,`).
3.  Go to `Profiles` > `Colors` tab.
4.  Click the `Color Presets...` dropdown at the bottom right.
5.  Select `Import...` and choose the downloaded `Solace Dark.itermcolors` file.
6.  Select "Solace Dark" from the `Color Presets...` dropdown to apply it.

*File location:* `packages/terminal/Solace Dark.itermcolors`

## Branding

*   **Name:** **Solace Dark** - Evokes comfort and clarity, unique among popular themes.
*   **Logo Idea:** Simple, stylized crescent moon, closed eye, or minimal owl using theme colors (#B284E0 or #65CCBB on #121212). Should feel soothing and hint at nighttime/focus.
*   **Typography:** Clean, modern sans-serif like Inter, Roboto, Segoe UI, or Open Sans. Emphasize readability and simplicity.
*   **Website/Marketing:** Use the theme's colors (#121212 background, #ECECEC text, #65CCBB or #B284E0 for accents/links). Brand voice should communicate relaxation, focus, and the benefits for eye strain, emphasizing that this theme is **designed based on principles for visual comfort**.

## License

This theme is released under the [MIT License](LICENSE).

## References

The design principles and color choices were guided by recommendations and findings discussed in the following resources:

1.  Babich, N. (2021). *8 Tips for Dark Theme Design*. UX Planet. Retrieved from [https://uxplanet.org/8-tips-for-dark-theme-design-8dfc2f8f7ab6](https://uxplanet.org/8-tips-for-dark-theme-design-8dfc2f8f7ab6)
2.  K. (2022). *What is the Best Color for Dark Mode?*. DEV Community. Retrieved from [https://dev.to/kolort/what-is-the-best-color-for-dark-mode-f9k](https://dev.to/kolort/what-is-the-best-color-for-dark-mode-f9k)
3.  Bureau of Internet Accessibility. (n.d.). *Dark Mode Can Improve Text Readability — But Not for Everyone*. Retrieved from [https://www.boia.org/blog/dark-mode-can-improve-text-readability-but-not-for-everyone](https://www.boia.org/blog/dark-mode-can-improve-text-readability-but-not-for-everyone)
4.  Material Design. *Dark theme*. Retrieved from [https://m2.material.io/design/color/dark-theme.html](https://m2.material.io/design/color/dark-theme.html) (While not explicitly cited before, the `#121212` recommendation comes from here). 