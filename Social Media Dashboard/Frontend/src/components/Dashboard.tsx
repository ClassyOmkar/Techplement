import React, { useState, useEffect } from 'react';
import { fetchPlatforms, fetchFollowerGrowth, fetchEngagementData, fetchRecentPosts, checkServerConnection } from '../api';
import { Platform, Post, FollowerGrowthData, EngagementData } from '../types';
import PlatformCard from './PlatformCard';
import FollowerGrowthChart from './FollowerGrowthChart';
import EngagementChart from './EngagementChart';
import RecentPostsList from './RecentPostsList';
import { AlertTriangle } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [followerGrowthData, setFollowerGrowthData] = useState<FollowerGrowthData>({});
  const [engagementData, setEngagementData] = useState<EngagementData>({});
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [serverRunning, setServerRunning] = useState<boolean>(true);

  useEffect(() => {
    const checkServer = async () => {
      const isServerRunning = await checkServerConnection();
      setServerRunning(isServerRunning);
      
      if (!isServerRunning) {
        setError('Cannot connect to the API server. Please make sure the server is running.');
        setLoading(false);
        return;
      }
      
      fetchDashboardData();
    };
    
    const fetchDashboardData = async () => {
      try {
        // Fetch data sequentially to avoid potential issues with Promise.all
        const platformsData = await fetchPlatforms();
        setPlatforms(platformsData);
        
        const followerData = await fetchFollowerGrowth();
        setFollowerGrowthData(followerData);
        
        const engagementDataResponse = await fetchEngagementData();
        setEngagementData(engagementDataResponse);
        
        const postsData = await fetchRecentPosts();
        setRecentPosts(postsData);
      } catch (err) {
        setError('Failed to load dashboard data. Please try again later.');
        console.error('Error fetching dashboard data:', err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    checkServer();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
          <div className="flex items-center mb-4">
            <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
            <h2 className="text-xl font-bold text-red-600">Error</h2>
          </div>
          <p className="text-gray-700 mb-4">{error}</p>
          {!serverRunning && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    The API server is not running. Please start the server with:
                  </p>
                  <code className="mt-2 block text-sm text-gray-800 bg-gray-100 p-2 rounded">
                    npm run server
                  </code>
                </div>
              </div>
            </div>
          )}
          <button 
            onClick={() => window.location.reload()}
            className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <PlatformCard key={platform.id} platform={platform} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <FollowerGrowthChart platforms={platforms} followerGrowthData={followerGrowthData} />
        <EngagementChart platforms={platforms} engagementData={engagementData} />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
        <RecentPostsList posts={recentPosts} />
      </div>
    </div>
  );
};

export default Dashboard;