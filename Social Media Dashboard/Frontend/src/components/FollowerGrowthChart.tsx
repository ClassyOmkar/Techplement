import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Platform, FollowerGrowthData } from '../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface FollowerGrowthChartProps {
  platforms: Platform[];
  followerGrowthData: FollowerGrowthData;
}

const FollowerGrowthChart: React.FC<FollowerGrowthChartProps> = ({ platforms, followerGrowthData }) => {
  const labels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
  
  const datasets = platforms.map(platform => ({
    label: platform.name,
    data: followerGrowthData[platform.id] || [],
    borderColor: platform.color,
    backgroundColor: `${platform.color}20`,
    tension: 0.4,
    fill: false
  }));

  const data = {
    labels,
    datasets
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Follower Growth (Last 30 Days)',
        font: {
          size: 16
        }
      },
    },
    scales: {
      y: {
        beginAtZero: false
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Line data={data} options={options} />
    </div>
  );
};

export default FollowerGrowthChart;