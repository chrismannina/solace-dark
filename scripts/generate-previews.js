#!/usr/bin/env node

/**
 * Preview Generator for Solace Dark Theme
 * Generates code samples showcasing the theme's syntax highlighting
 */

const fs = require('fs');
const path = require('path');

const sampleCode = {
  javascript: `// JavaScript Example - Solace Dark Theme
import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Fetches user data from API
 * @param {string} userId - The user ID to fetch
 * @returns {Promise<Object>} User data object
 */
async function fetchUserData(userId) {
  try {
    const response = await axios.get(\`/api/users/\${userId}\`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user:', error.message);
    throw new Error('User not found');
  }
}

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const maxRetries = 3;

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await fetchUserData(userId);
        setUser(userData);
      } catch (err) {
        console.error('Error loading user:', err);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [userId]);

  if (loading) return <div className="spinner">Loading...</div>;
  if (!user) return <div className="error">User not found</div>;

  return (
    <div className="user-profile">
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default UserProfile;`,

  python: `# Python Example - Solace Dark Theme
import asyncio
import json
from typing import Dict, List, Optional
from dataclasses import dataclass
from datetime import datetime, timedelta

@dataclass
class User:
    """Represents a user in the system"""
    id: int
    name: str
    email: str
    created_at: datetime
    is_active: bool = True

class UserManager:
    """Manages user operations with async support"""
    
    def __init__(self, database_url: str):
        self.database_url = database_url
        self.users: Dict[int, User] = {}
        self.max_retries = 3
    
    async def create_user(self, name: str, email: str) -> User:
        """Create a new user with validation"""
        if not self._validate_email(email):
            raise ValueError(f"Invalid email format: {email}")
        
        user_id = len(self.users) + 1
        user = User(
            id=user_id,
            name=name,
            email=email,
            created_at=datetime.now()
        )
        
        self.users[user_id] = user
        await self._save_to_database(user)
        return user
    
    def _validate_email(self, email: str) -> bool:
        """Validate email format"""
        import re
        pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        return re.match(pattern, email) is not None
    
    async def _save_to_database(self, user: User) -> None:
        """Save user to database"""
        # Simulate async database operation
        await asyncio.sleep(0.1)
        print(f"Saved user {user.name} to database")

# Usage example
async def main():
    manager = UserManager("postgresql://localhost/users")
    
    try:
        user = await manager.create_user("John Doe", "john@example.com")
        print(f"Created user: {user.name} (ID: {user.id})")
    except ValueError as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    asyncio.run(main())`,

  css: `/* CSS Example - Solace Dark Theme */
:root {
  --primary-bg: #121212;
  --primary-text: #ececec;
  --accent-purple: #b284e0;
  --accent-teal: #65ccbb;
  --accent-orange: #e4a567;
  --accent-pink: #de909d;
  --comment-gray: #8a8a8a;
  --border-color: #333333;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Modern card component with gradient border */
.theme-card {
  background: linear-gradient(135deg, var(--primary-bg) 0%, #1a1a1a 100%);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.08);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.theme-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, 
    var(--accent-purple) 0%, 
    var(--accent-teal) 50%, 
    var(--accent-orange) 100%);
}

.theme-card:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 8px 15px rgba(0, 0, 0, 0.2),
    0 3px 6px rgba(0, 0, 0, 0.1);
  border-color: var(--accent-purple);
}

.card-title {
  color: var(--primary-text);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.card-content {
  color: var(--comment-gray);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.button-primary {
  background: linear-gradient(135deg, var(--accent-purple), var(--accent-teal));
  color: var(--primary-text);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.button-primary:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(178, 132, 224, 0.3);
}

/* Responsive design */
@media (max-width: 768px) {
  .theme-card {
    padding: 1.5rem;
    margin: 1rem;
  }
  
  .card-title {
    font-size: 1.25rem;
  }
}

/* Animation keyframes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: fadeInUp 0.6s ease-out forwards;
}`
};

// Generate preview files
const outputDir = path.join(__dirname, '..', 'assets', 'code-samples');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

Object.entries(sampleCode).forEach(([language, code]) => {
  const filename = `${language}-sample.${language === 'javascript' ? 'js' : language === 'python' ? 'py' : 'css'}`;
  fs.writeFileSync(path.join(outputDir, filename), code);
  console.log(`Generated ${filename}`);
});

console.log('Code samples generated successfully!');
console.log('Use these files to create screenshots and previews of your theme.'); 