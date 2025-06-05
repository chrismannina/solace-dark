# Python Example - Solace Dark Theme
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
        pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'
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
    asyncio.run(main())