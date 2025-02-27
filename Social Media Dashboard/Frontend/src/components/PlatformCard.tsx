import React from 'react';
import { ArrowUpRight, ArrowDownRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Platform } from '../types';

interface PlatformCardProps {
  platform: Platform;
}

const PlatformCard: React.FC<PlatformCardProps> = ({ platform }) => {
  const formatNumber = (num: number): string => {
    return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num.toString();
  };

  const getPlatformIcon = (id: string) => {
    switch (id) {
      case 'facebook':
        return <Facebook className="h-6 w-6" style={{ color: platform.color }} />;
      case 'twitter':
        return <Twitter className="h-6 w-6" style={{ color: platform.color }} />;
      case 'instagram':
        return <Instagram className="h-6 w-6" style={{ color: platform.color }} />;
      case 'linkedin':
        return <Linkedin className="h-6 w-6" style={{ color: platform.color }} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {getPlatformIcon(platform.id)}
          <h3 className="ml-2 text-lg font-semibold text-gray-800">{platform.name}</h3>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-sm text-gray-500">Followers</p>
        <div className="flex items-center">
          <p className="text-2xl font-bold text-gray-900">{formatNumber(platform.followers)}</p>
          <div className={`flex items-center ml-2 ${platform.followersGrowth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {platform.followersGrowth >= 0 ? (
              <ArrowUpRight className="h-4 w-4" />
            ) : (
              <ArrowDownRight className="h-4 w-4" />
            )}
            <span className="text-sm font-medium">
              {Math.abs(platform.followersGrowth)}
            </span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Engagement</p>
          <p className="text-lg font-semibold text-gray-900">{platform.engagement}%</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Posts</p>
          <p className="text-lg font-semibold text-gray-900">{platform.posts}</p>
        </div>
      </div>
    </div>
  );
};

export default PlatformCard;