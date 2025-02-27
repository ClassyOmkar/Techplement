import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ServerStatus from './components/ServerStatus';
import { checkServerConnection } from './api';

function App() {
  const [serverRunning, setServerRunning] = useState<boolean>(false);

  useEffect(() => {
    const checkServer = async () => {
      const isRunning = await checkServerConnection();
      setServerRunning(isRunning);
    };

    checkServer();
    
    // Check server status periodically
    const interval = setInterval(checkServer, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Dashboard />
      </main>
      <ServerStatus isRunning={serverRunning} />
    </div>
  );
}

export default App;