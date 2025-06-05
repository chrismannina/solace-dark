#!/bin/bash

# Solace Dark - Release Branch Setup Script
# This script helps you create a safe release strategy

echo "🚀 Setting up Solace Dark release branches..."
echo ""

# Ensure we're on main branch
git checkout main

# Create develop branch for experimental features
echo "📝 Creating develop branch for experimental platforms..."
git checkout -b develop

# List packages for review
echo ""
echo "📦 Current packages:"
ls -la packages/
echo ""

# Recommended release strategy
echo "🎯 RECOMMENDED RELEASE STRATEGY:"
echo ""
echo "PHASE 1 (v1.0.0) - Stable platforms only:"
echo "  ✅ VS Code (most important)"
echo "  ✅ Obsidian (well-tested)"
echo "  ✅ Terminal (simple formats)"
echo ""
echo "PHASE 2 (v1.1.0) - Add when tested:"
echo "  🔄 Sublime Text"
echo "  🔄 JetBrains"
echo ""
echo "PHASE 3 (v1.2.0) - Add remaining:"
echo "  🔄 Notepad++"
echo ""

# Ask user which packages to move to develop
echo "❓ Do you want to move some packages to develop branch? (y/n)"
read -r response

if [[ "$response" =~ ^[Yy]$ ]]; then
    echo ""
    echo "📋 Which packages should be moved to develop branch?"
    echo "   (Enter package names separated by spaces, or 'none' to skip)"
    echo "   Available: sublime jetbrains notepad++"
    echo ""
    read -r packages_to_move
    
    if [[ "$packages_to_move" != "none" ]] && [[ -n "$packages_to_move" ]]; then
        # Switch to develop branch
        git checkout develop
        
        # Create backup of current packages
        echo "💾 Creating backup of packages..."
        cp -r packages packages-backup
        
        # Move specified packages to develop branch only
        for package in $packages_to_move; do
            if [[ -d "packages/$package" ]]; then
                echo "📦 Keeping $package in develop branch"
            else
                echo "⚠️  Package $package not found"
            fi
        done
        
        # Switch back to main and remove experimental packages
        git checkout main
        
        for package in $packages_to_move; do
            if [[ -d "packages/$package" ]]; then
                echo "🗑️  Removing $package from main branch (kept in develop)"
                rm -rf "packages/$package"
            fi
        done
        
        # Commit changes to main
        git add .
        git commit -m "refactor: move experimental packages to develop branch

- Keep stable platforms (vscode, obsidian, terminal) in main
- Move experimental platforms to develop branch for testing
- Prepare for v1.0.0 release with proven platforms only"
        
        # Switch to develop and commit there too
        git checkout develop
        git add .
        git commit -m "feat: add experimental platform packages for future releases

- These packages will be tested and moved to main in future versions
- Allows main branch to have only production-ready themes"
        
        echo ""
        echo "✅ Branch setup complete!"
        echo ""
        echo "📋 NEXT STEPS:"
        echo "1. Stay on develop branch to test experimental packages"
        echo "2. Switch to main branch for v1.0.0 release preparation"
        echo "3. Merge tested packages from develop to main in future releases"
        echo ""
        echo "🌿 BRANCH STATUS:"
        echo "   main: Production-ready packages only"
        echo "   develop: All packages for testing"
        
    else
        echo "📦 Keeping all packages in main branch"
    fi
else
    echo "📦 Keeping all packages in main branch"
fi

# Create release preparation checklist
echo ""
echo "📋 RELEASE PREPARATION CHECKLIST:"
echo ""
echo "Before creating v1.0.0:"
echo "[ ] Test VS Code extension thoroughly"
echo "[ ] Create icon.png (128x128px)"
echo "[ ] Take marketplace screenshots"
echo "[ ] Update CHANGELOG.md"
echo "[ ] Run npm run validate"
echo "[ ] Create VS Code publisher account"
echo ""
echo "Commands to create release:"
echo "  git tag v1.0.0"
echo "  git push origin v1.0.0"
echo "  # GitHub Actions will create release assets automatically"
echo ""

# Switch back to main for release preparation
git checkout main

echo "🎯 Currently on main branch - ready for release preparation!"
echo "📚 See TODO.md for detailed next steps" 