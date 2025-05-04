import React from 'react';
import Layout from './components/layout/Layout';
import MissionsPage from './pages/MissionsPage';
import { MissionProvider } from './context/MissionContext';

function App() {
  return (
    <MissionProvider>
      <Layout>
        <MissionsPage />
      </Layout>
    </MissionProvider>
  );
}

export default App;