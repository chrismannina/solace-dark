#!/usr/bin/env node

/**
 * Theme Validation Script for Solace Dark
 * Validates all theme files for consistency and completeness
 */

const fs = require('fs');
const path = require('path');

// Core color palette that should be consistent across all themes
const CORE_COLORS = {
  background: '#121212',
  primaryText: '#ECECEC',
  keywords: '#B284E0',
  strings: '#E4A567',
  functions: '#65CCBB',
  numbers: '#DE909D',
  comments: '#8A8A8A',
  selection: '#264F78',
  currentLine: '#1E1E1E'
};

class ThemeValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.packagesDir = path.join(__dirname, '..', 'packages');
  }

  validateVSCodeTheme() {
    console.log('🎨 Validating VS Code theme...');
    const themePath = path.join(this.packagesDir, 'vscode', 'themes', 'solace-dark-color-theme.json');
    
    if (!fs.existsSync(themePath)) {
      this.errors.push('VS Code theme file not found');
      return;
    }

    try {
      const theme = JSON.parse(fs.readFileSync(themePath, 'utf8'));
      
      // Check required properties
      const required = ['name', 'type', 'colors', 'tokenColors'];
      for (const prop of required) {
        if (!theme[prop]) {
          this.errors.push(`VS Code theme missing required property: ${prop}`);
        }
      }

      // Validate core colors are present
      if (theme.colors) {
        this.validateColorPresence(theme.colors, 'editor.background', CORE_COLORS.background);
        this.validateColorPresence(theme.colors, 'editor.foreground', CORE_COLORS.primaryText);
        this.validateColorPresence(theme.colors, 'editor.selectionBackground', CORE_COLORS.selection);
      }

      console.log('✅ VS Code theme validation passed');
    } catch (error) {
      this.errors.push(`VS Code theme JSON parse error: ${error.message}`);
    }
  }

  validateObsidianTheme() {
    console.log('📝 Validating Obsidian theme...');
    const themePath = path.join(this.packagesDir, 'obsidian', 'SolaceDark.css');
    
    if (!fs.existsSync(themePath)) {
      this.errors.push('Obsidian theme file not found');
      return;
    }

    const css = fs.readFileSync(themePath, 'utf8');
    
    // Check for core colors in CSS
    for (const [name, color] of Object.entries(CORE_COLORS)) {
      if (!css.includes(color.toLowerCase()) && !css.includes(color.toUpperCase())) {
        this.warnings.push(`Obsidian theme might be missing core color ${name}: ${color}`);
      }
    }

    // Check for CSS variables
    if (!css.includes('--') || !css.includes(':root')) {
      this.warnings.push('Obsidian theme should use CSS variables for maintainability');
    }

    console.log('✅ Obsidian theme validation passed');
  }

  validatePackageStructure() {
    console.log('📦 Validating package structure...');
    
    const expectedPackages = ['vscode', 'obsidian', 'notepad++', 'sublime', 'jetbrains', 'terminal'];
    
    for (const pkg of expectedPackages) {
      const pkgPath = path.join(this.packagesDir, pkg);
      if (!fs.existsSync(pkgPath)) {
        this.errors.push(`Missing package directory: ${pkg}`);
      }
    }

    // Check VS Code package.json
    const vscodePackageJson = path.join(this.packagesDir, 'vscode', 'package.json');
    if (fs.existsSync(vscodePackageJson)) {
      try {
        const pkg = JSON.parse(fs.readFileSync(vscodePackageJson, 'utf8'));
        
        if (!pkg.contributes || !pkg.contributes.themes) {
          this.errors.push('VS Code package.json missing theme contribution');
        }
        
        if (!pkg.publisher || pkg.publisher === 'yourusername') {
          this.warnings.push('VS Code package.json publisher should be updated');
        }
      } catch (error) {
        this.errors.push(`VS Code package.json parse error: ${error.message}`);
      }
    }

    console.log('✅ Package structure validation passed');
  }

  validateColorConsistency() {
    console.log('🎨 Validating color consistency...');
    
    // This is a simplified check - in a real scenario, you'd parse each theme format
    // and extract colors for comparison
    
    const files = [
      path.join(this.packagesDir, 'vscode', 'themes', 'solace-dark-color-theme.json'),
      path.join(this.packagesDir, 'obsidian', 'SolaceDark.css'),
      path.join(this.packagesDir, 'sublime', 'Solace Dark.sublime-color-scheme')
    ];

    for (const file of files) {
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check if background color is present
        if (!content.includes(CORE_COLORS.background.toLowerCase()) && 
            !content.includes(CORE_COLORS.background.toUpperCase())) {
          this.warnings.push(`File ${path.basename(file)} might not use consistent background color`);
        }
      }
    }

    console.log('✅ Color consistency validation passed');
  }

  validateColorPresence(colors, key, expectedColor) {
    if (colors[key] && colors[key].toLowerCase() !== expectedColor.toLowerCase()) {
      this.warnings.push(`Color mismatch for ${key}: expected ${expectedColor}, got ${colors[key]}`);
    }
  }

  generateReport() {
    console.log('\n📊 VALIDATION REPORT');
    console.log('==================');
    
    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log('🎉 All validations passed! Your theme is production ready.');
      return true;
    }

    if (this.errors.length > 0) {
      console.log('\n❌ ERRORS (must fix):');
      this.errors.forEach((error, i) => {
        console.log(`  ${i + 1}. ${error}`);
      });
    }

    if (this.warnings.length > 0) {
      console.log('\n⚠️  WARNINGS (should review):');
      this.warnings.forEach((warning, i) => {
        console.log(`  ${i + 1}. ${warning}`);
      });
    }

    return this.errors.length === 0;
  }

  run() {
    console.log('🔍 Starting Solace Dark theme validation...\n');
    
    this.validatePackageStructure();
    this.validateVSCodeTheme();
    this.validateObsidianTheme();
    this.validateColorConsistency();
    
    const isValid = this.generateReport();
    process.exit(isValid ? 0 : 1);
  }
}

// Run validation if called directly
if (require.main === module) {
  const validator = new ThemeValidator();
  validator.run();
}

module.exports = ThemeValidator; 