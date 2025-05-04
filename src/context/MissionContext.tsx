import React, { createContext, useContext, useState, ReactNode } from 'react';
import { mockMissions } from '../utils/mockData';

interface Mission {
  id: number;
  text: string;
  status: string;
  verified: boolean;
  isNew?: boolean;
  assignees?: Array<{
    id: string | number;
    name: string;
    avatar: string;
  }>;
}

interface MissionContextType {
  missions: Mission[];
  activeTab: string;
  searchQuery: string;
  setActiveTab: (tab: string) => void;
  setSearchQuery: (query: string) => void;
}

const MissionContext = createContext<MissionContextType | undefined>(undefined);

export const MissionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState('pourvoir');
  const [searchQuery, setSearchQuery] = useState('');
  const [missions] = useState<Mission[]>(mockMissions);

  const filteredMissions = missions.filter(mission => {
    // Filter by active tab
    if (activeTab !== 'all' && mission.status !== activeTab) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !mission.text.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <MissionContext.Provider 
      value={{ 
        missions: filteredMissions, 
        activeTab, 
        searchQuery,
        setActiveTab, 
        setSearchQuery 
      }}
    >
      {children}
    </MissionContext.Provider>
  );
};

export const useMissionContext = () => {
  const context = useContext(MissionContext);
  if (context === undefined) {
    throw new Error('useMissionContext must be used within a MissionProvider');
  }
  return context;
};