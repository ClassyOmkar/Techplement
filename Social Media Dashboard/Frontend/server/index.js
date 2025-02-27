import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Dummy data for social media metrics
const socialMediaData = {
  platforms: [
    {
      id: 'facebook',
      name: 'Facebook',
      followers: 10482,
      followersGrowth: 81,
      engagement: 4.2,
      posts: 42,
      views: 3891,
      color: '#4267B2'
    },
    {
      id: 'twitter',
      name: 'Twitter',
      followers: 8239,
      followersGrowth: -12,
      engagement: 3.8,
      posts: 64,
      views: 2145,
      color: '#1DA1F2'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      followers: 15423,
      followersGrowth: 156,
      engagement: 6.1,
      posts: 38,
      views: 12453,
      color: '#E1306C'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      followers: 4827,
      followersGrowth: 41,
      engagement: 2.3,
      posts: 19,
      views: 1568,
      color: '#0077B5'
    }
  ],
  
  // Follower growth data for the past 30 days
  followerGrowth: {
    facebook: [10320, 10342, 10356, 10380, 10401, 10415, 10419, 10425, 10432, 10445, 10452, 10461, 10470, 10482, 10490, 10501, 10512, 10520, 10529, 10535, 10542, 10550, 10562, 10570, 10580, 10590, 10601, 10610, 10620, 10482],
    twitter: [8290, 8285, 8279, 8272, 8268, 8260, 8255, 8250, 8245, 8240, 8235, 8230, 8225, 8220, 8215, 8220, 8225, 8230, 8235, 8240, 8245, 8250, 8255, 8260, 8265, 8270, 8275, 8280, 8285, 8239],
    instagram: [15100, 15120, 15145, 15160, 15180, 15200, 15220, 15240, 15260, 15280, 15300, 15320, 15340, 15360, 15380, 15400, 15420, 15440, 15460, 15480, 15500, 15520, 15540, 15560, 15580, 15600, 15620, 15640, 15660, 15423],
    linkedin: [4750, 4760, 4770, 4780, 4790, 4800, 4805, 4810, 4815, 4820, 4825, 4830, 4835, 4840, 4845, 4850, 4855, 4860, 4865, 4870, 4875, 4880, 4885, 4890, 4895, 4900, 4905, 4910, 4915, 4827]
  },
  
  // Engagement data for the past 30 days
  engagementData: {
    facebook: [4.0, 4.1, 4.0, 4.2, 4.3, 4.1, 4.0, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.5, 4.4, 4.3, 4.2, 4.1, 4.0, 3.9, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.2],
    twitter: [3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.0, 3.9, 3.8, 3.7, 3.6, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 3.9, 3.8, 3.7, 3.6, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 3.9, 3.8],
    instagram: [5.8, 5.9, 6.0, 6.1, 6.2, 6.3, 6.4, 6.3, 6.2, 6.1, 6.0, 5.9, 5.8, 5.9, 6.0, 6.1, 6.2, 6.3, 6.2, 6.1, 6.0, 5.9, 5.8, 5.9, 6.0, 6.1, 6.2, 6.3, 6.2, 6.1],
    linkedin: [2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.4, 2.3, 2.2, 2.1, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.4, 2.3, 2.2, 2.1, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.4, 2.3, 2.2, 2.3]
  },
  
  // Recent posts data
  recentPosts: [
    {
      id: 1,
      platform: 'instagram',
      content: 'Check out our new product line! #NewRelease #Exciting',
      engagement: 423,
      likes: 389,
      comments: 34,
      shares: 12,
      date: '2025-04-10T14:30:00Z',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      platform: 'facebook',
      content: 'We\'re excited to announce our partnership with XYZ Corp! Together we\'ll be bringing you amazing new features.',
      engagement: 312,
      likes: 245,
      comments: 42,
      shares: 25,
      date: '2025-04-09T10:15:00Z'
    },
    {
      id: 3,
      platform: 'twitter',
      content: 'Just launched our new website! What do you think? #WebDesign #UX',
      engagement: 189,
      likes: 145,
      comments: 24,
      shares: 20,
      date: '2025-04-08T16:45:00Z'
    },
    {
      id: 4,
      platform: 'linkedin',
      content: 'We\'re hiring! Looking for talented developers to join our growing team. #JobOpening #TechJobs',
      engagement: 267,
      likes: 201,
      comments: 45,
      shares: 21,
      date: '2025-04-07T09:30:00Z'
    },
    {
      id: 5,
      platform: 'instagram',
      content: 'Behind the scenes at our latest photoshoot! #BTS #TeamWork',
      engagement: 356,
      likes: 320,
      comments: 26,
      shares: 10,
      date: '2025-04-06T13:20:00Z',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 6,
      platform: 'facebook',
      content: 'Thank you to everyone who attended our webinar yesterday! The recording will be available next week.',
      engagement: 198,
      likes: 156,
      comments: 32,
      shares: 10,
      date: '2025-04-05T11:10:00Z'
    }
  ]
};

// API endpoints
app.get('/api/platforms', (req, res) => {
  res.json(socialMediaData.platforms);
});

app.get('/api/follower-growth', (req, res) => {
  res.json(socialMediaData.followerGrowth);
});

app.get('/api/engagement-data', (req, res) => {
  res.json(socialMediaData.engagementData);
});

app.get('/api/recent-posts', (req, res) => {
  res.json(socialMediaData.recentPosts);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});