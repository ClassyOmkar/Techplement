import React from 'react';
import { Server } from 'lucide-react';

interface ServerStatusProps {
  isRunning: boolean;
}

const ServerStatus: React.FC<ServerStatusProps> = ({ isRunning }) => {
  return (
    <div className={`fixed bottom-4 right-4 flex items-center p-3 rounded-lg shadow-md ${isRunning ? 'bg-green-50' : 'bg-red-50'}`}>
      <Server className={`h-5 w-5 mr-2 ${isRunning ? 'text-green-500' : 'text-red-500'}`} />
      <span className={`text-sm font-medium ${isRunning ? 'text-green-700' : 'text-red-700'}`}>
        {isRunning ? 'Server Connected' : 'Server Disconnected'}
      </span>
    </div>
  );
};

export default ServerStatus;