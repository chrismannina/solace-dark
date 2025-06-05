# Contributing to Solace Dark

Thank you for your interest in contributing to Solace Dark! This document provides guidelines and instructions for contributing to this theme project.

## 🎯 Ways to Contribute

- **Bug Reports**: Found an issue? Let us know!
- **Feature Requests**: Ideas for new platforms or improvements
- **Theme Improvements**: Better color choices or syntax coverage
- **Documentation**: Help improve our docs
- **New Platform Support**: Add themes for additional editors/tools
- **Testing**: Help test themes across different platforms

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- The target editor/platform for testing

### Setup Development Environment

1. **Fork and Clone**
   ```bash
   git clone https://github.com/your-username/solace-dark.git
   cd solace-dark
   npm install
   ```

2. **Run Validation**
   ```bash
   node scripts/validate-themes.js
   ```

3. **Generate Code Samples**
   ```bash
   node scripts/generate-previews.js
   ```

## 🎨 Theme Development Guidelines

### Color Palette Consistency

All theme implementations must use our core color palette:

```css
--background: #121212      /* Nearly black dark gray */
--primary-text: #ECECEC    /* Off-white */
--keywords: #B284E0        /* Soft purple */
--strings: #E4A567         /* Warm orange-gold */
--functions: #65CCBB       /* Teal */
--numbers: #DE909D         /* Muted pink */
--comments: #8A8A8A        /* Gray */
--selection: #264F78       /* Dark blue */
--current-line: #1E1E1E    /* Very dark gray */
```

### Design Principles

1. **Accessibility First**: Maintain WCAG AA contrast ratios (4.5:1 minimum)
2. **Avoid Pure Colors**: Use slightly desaturated colors to reduce eye strain
3. **Consistent Semantics**: Similar syntax elements should have similar colors across platforms
4. **Test in Real Use**: Always test with actual code files, not just samples

### Platform-Specific Guidelines

#### VS Code
- Follow [VS Code Theme Guide](https://code.visualstudio.com/api/extension-guides/color-theme)
- Test with multiple languages: JavaScript, Python, CSS, Markdown, JSON
- Ensure UI elements (sidebar, status bar) are properly themed
- Validate with `vsce package`

#### Obsidian
- Use CSS variables for maintainability
- Theme both editor and preview modes
- Test with various plugins enabled
- Ensure readability in both light and dark environments

#### Terminal Themes
- Provide both 16-color and 256-color variants when possible
- Test with common terminal applications (ls, vim, htop)
- Ensure good contrast for both foreground and background text

## 📝 Submitting Changes

### Pull Request Process

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Follow our coding standards
   - Update relevant documentation
   - Add tests if applicable

3. **Test Thoroughly**
   ```bash
   npm run validate
   npm run test
   ```

4. **Commit with Clear Messages**
   ```bash
   git commit -m "feat(vscode): add better support for TypeScript interfaces
   
   - Improve interface syntax highlighting
   - Add distinct colors for type annotations
   - Update test cases"
   ```

5. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

### Commit Message Format

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Scopes:**
- `vscode`: VS Code theme
- `obsidian`: Obsidian theme
- `sublime`: Sublime Text theme
- `jetbrains`: JetBrains IDEs theme
- `terminal`: Terminal themes
- `docs`: Documentation
- `ci`: CI/CD changes

## 🧪 Testing Guidelines

### Manual Testing Checklist

For each theme change:

- [ ] **Syntax Highlighting**: Test with real code files
- [ ] **UI Elements**: Verify all interface elements are properly colored
- [ ] **Contrast**: Ensure text is readable in all contexts
- [ ] **Consistency**: Colors match across similar elements
- [ ] **Edge Cases**: Test with very long lines, special characters
- [ ] **Multiple Languages**: Test primary supported languages

### Automated Testing

Run our validation suite:

```bash
# Validate all themes
node scripts/validate-themes.js

# Check accessibility
npm run accessibility-check

# Package VS Code extension
cd packages/vscode && vsce package
```

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Platform/Editor**: Which theme and version
2. **Environment**: OS, editor version, etc.
3. **Steps to Reproduce**: Clear reproduction steps
4. **Expected vs Actual**: What should happen vs what happens
5. **Screenshots**: Visual issues benefit from images
6. **Code Sample**: Minimal code that shows the issue

Use our [bug report template](.github/ISSUE_TEMPLATE/bug_report.md).

## 💡 Feature Requests

For new features:

1. **Check Existing Issues**: Avoid duplicates
2. **Describe Use Case**: Why is this needed?
3. **Propose Solution**: How should it work?
4. **Consider Alternatives**: Other ways to solve the problem?
5. **Implementation**: Willing to help implement?

Use our [feature request template](.github/ISSUE_TEMPLATE/feature_request.md).

## 📋 Code Style

### General Guidelines

- **Consistency**: Follow existing patterns
- **Comments**: Explain non-obvious decisions
- **Documentation**: Update docs for user-facing changes
- **Validation**: All themes must pass validation

### JSON Files
- Use 2-space indentation
- Sort keys alphabetically where logical
- Include all required properties

### CSS Files
- Use CSS variables for colors
- Group related rules together
- Include browser compatibility notes if needed

## 🏗️ Adding New Platform Support

Want to add Solace Dark to a new editor or platform?

1. **Research**: Study the platform's theming system
2. **Plan**: Create structure in `packages/new-platform/`
3. **Implement**: Create theme using our core colors
4. **Document**: Add platform-specific README
5. **Test**: Thoroughly test with real usage
6. **Integrate**: Update main README and validation scripts

### Platform Contribution Checklist

- [ ] Theme file(s) in correct format
- [ ] Platform-specific README
- [ ] Installation instructions
- [ ] Color consistency validation
- [ ] Test with multiple syntax types
- [ ] Update main README
- [ ] Add to CI/CD pipeline

## 🎖️ Recognition

Contributors are recognized in several ways:

- **Contributors Section**: Added to main README
- **Release Notes**: Credited in CHANGELOG
- **GitHub**: Automatic contributor tracking
- **Special Thanks**: Major contributions get special recognition

## 📞 Getting Help

- **Discussions**: Use GitHub Discussions for questions
- **Issues**: Bug reports and feature requests
- **Discord**: [Community chat server] (if available)
- **Email**: For sensitive issues or private questions

## 📄 License

By contributing, you agree that your contributions will be licensed under the same [MIT License](LICENSE) that covers the project.

---

Thank you for helping make Solace Dark better for everyone! 🙏 