import React from 'react';
import { useMissionContext } from '../../context/MissionContext';

const MissionTabs: React.FC = () => {
  const { activeTab, setActiveTab } = useMissionContext();
  
  const tabs = [
    { id: 'pourvoir', label: 'À pourvoir' },
    { id: 'cours', label: 'En cours' },
    { id: 'venir', label: 'À venir' },
    { id: 'terminees', label: 'Terminées' },
    { id: 'annulees', label: 'Annulées' }
  ];

  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
              ${activeTab === tab.id
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
            `}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default MissionTabs;