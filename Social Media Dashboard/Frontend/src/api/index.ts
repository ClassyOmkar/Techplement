import axios from 'axios';
import { Platform, Post, FollowerGrowthData, EngagementData } from '../types';

// Use a variable that can be easily changed based on environment
const API_URL = 'http://localhost:3001/api';

// Add a helper function to check if the server is running
const checkServerConnection = async (): Promise<boolean> => {
  try {
    await axios.get(`${API_URL}/platforms`, { timeout: 2000 });
    return true;
  } catch (error) {
    return false;
  }
};

export const fetchPlatforms = async (): Promise<Platform[]> => {
  try {
    const response = await axios.get(`${API_URL}/platforms`);
    return response.data;
  } catch (error) {
    console.error('Error fetching platforms:', error instanceof Error ? error.message : 'Unknown error');
    return [];
  }
};

export const fetchFollowerGrowth = async (): Promise<FollowerGrowthData> => {
  try {
    const response = await axios.get(`${API_URL}/follower-growth`);
    return response.data;
  } catch (error) {
    console.error('Error fetching follower growth data:', error instanceof Error ? error.message : 'Unknown error');
    return {};
  }
};

export const fetchEngagementData = async (): Promise<EngagementData> => {
  try {
    const response = await axios.get(`${API_URL}/engagement-data`);
    return response.data;
  } catch (error) {
    console.error('Error fetching engagement data:', error instanceof Error ? error.message : 'Unknown error');
    return {};
  }
};

export const fetchRecentPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get(`${API_URL}/recent-posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recent posts:', error instanceof Error ? error.message : 'Unknown error');
    return [];
  }
};

export { checkServerConnection };