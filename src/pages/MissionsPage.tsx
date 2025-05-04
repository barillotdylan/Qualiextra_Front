import React from 'react';
import MissionTabs from '../components/missions/MissionTabs';
import MissionSearch from '../components/missions/MissionSearch';
import MissionTable from '../components/missions/MissionTable';

const MissionsPage: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 sm:p-6">
        <MissionTabs />
        <div className="my-4">
          <MissionSearch />
        </div>
        <MissionTable />
      </div>
    </div>
  );
};

export default MissionsPage;