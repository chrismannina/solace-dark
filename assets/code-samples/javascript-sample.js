// JavaScript Example - Solace Dark Theme
import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Fetches user data from API
 * @param {string} userId - The user ID to fetch
 * @returns {Promise<Object>} User data object
 */
async function fetchUserData(userId) {
  try {
    const response = await axios.get(`/api/users/${userId}`);
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

export default UserProfile;