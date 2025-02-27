import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Facebook, Twitter, Instagram, Linkedin, MessageSquare, Heart, Share2 } from 'lucide-react';
import { Post } from '../types';

interface RecentPostsListProps {
  posts: Post[];
}

const RecentPostsList: React.FC<RecentPostsListProps> = ({ posts }) => {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return <Facebook className="h-5 w-5 text-[#4267B2]" />;
      case 'twitter':
        return <Twitter className="h-5 w-5 text-[#1DA1F2]" />;
      case 'instagram':
        return <Instagram className="h-5 w-5 text-[#E1306C]" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5 text-[#0077B5]" />;
      default:
        return null;
    }
  };

  const getPlatformName = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return 'Facebook';
      case 'twitter':
        return 'Twitter';
      case 'instagram':
        return 'Instagram';
      case 'linkedin':
        return 'LinkedIn';
      default:
        return platform;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Recent Posts</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {posts.map((post) => (
          <div key={post.id} className="p-6">
            <div className="flex items-center mb-3">
              {getPlatformIcon(post.platform)}
              <span className="ml-2 text-sm font-medium text-gray-600">
                {getPlatformName(post.platform)}
              </span>
              <span className="ml-auto text-xs text-gray-500">
                {formatDistanceToNow(new Date(post.date), { addSuffix: true })}
              </span>
            </div>
            <p className="text-gray-800 mb-3">{post.content}</p>
            {post.image && (
              <div className="mb-3">
                <img 
                  src={post.image} 
                  alt="Post" 
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
            )}
            <div className="flex items-center text-sm text-gray-500 mt-2">
              <div className="flex items-center mr-4">
                <Heart className="h-4 w-4 mr-1" />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center mr-4">
                <MessageSquare className="h-4 w-4 mr-1" />
                <span>{post.comments}</span>
              </div>
              <div className="flex items-center">
                <Share2 className="h-4 w-4 mr-1" />
                <span>{post.shares}</span>
              </div>
              <div className="ml-auto">
                <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">
                  {post.engagement} engagement
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPostsList;