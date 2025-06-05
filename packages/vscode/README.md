# Solace Dark Theme for VS Code

A dark theme designed based on principles for visual comfort and productivity during long coding sessions.

## Features

- **Designed for Visual Comfort**: Uses carefully selected colors to reduce eye strain
- **High Contrast**: Meets WCAG accessibility guidelines
- **Desaturated Accents**: Soft colors that won't cause visual fatigue
- **Comprehensive Coverage**: Syntax highlighting for all major languages

## Installation

### From VS Code Marketplace (Coming Soon)

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "Solace Dark Theme"
4. Click Install
5. Go to File > Preferences > Color Theme and select "Solace Dark"

### Manual Installation

1. Copy the theme file from `themes/solace-dark-color-theme.json`
2. Open VS Code settings (Ctrl+,)
3. Click on "Open Settings (JSON)" in the top right
4. Add the theme configuration to your settings

### Development/Local Installation

1. Clone this repository
2. Copy the `packages/vscode` folder to your VS Code extensions directory:
   - Windows: `%USERPROFILE%\.vscode\extensions\`
   - macOS: `~/.vscode/extensions/`
   - Linux: `~/.vscode/extensions/`
3. Restart VS Code
4. Select "Solace Dark" from the color theme picker

## Color Palette

- **Background**: `#121212` - Nearly black dark gray
- **Primary Text**: `#ECECEC` - Off-white
- **Keywords**: `#B284E0` - Soft purple
- **Strings**: `#E4A567` - Warm orange-gold
- **Functions**: `#65CCBB` - Teal
- **Numbers**: `#DE909D` - Muted pink
- **Comments**: `#8A8A8A` - Gray

## Building the Extension

```bash
npm install
npm run package
```

This will create a `.vsix` file that you can install manually in VS Code.

## License

MIT License - see the [LICENSE](../../LICENSE) file for details. 