export interface Platform {
  id: string;
  name: string;
  followers: number;
  followersGrowth: number;
  engagement: number;
  posts: number;
  views: number;
  color: string;
}

export interface Post {
  id: number;
  platform: string;
  content: string;
  engagement: number;
  likes: number;
  comments: number;
  shares: number;
  date: string;
  image?: string;
}

export interface FollowerGrowthData {
  [platform: string]: number[];
}

export interface EngagementData {
  [platform: string]: number[];
}