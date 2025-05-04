import React from 'react';
import { Search } from 'lucide-react';
import { useMissionContext } from '../../context/MissionContext';

const MissionSearch: React.FC = () => {
  const { searchQuery, setSearchQuery } = useMissionContext();

  return (
    <div className="flex items-center w-full">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Rechercher par métier, date JJ/MM/AAAA ou candidat"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default MissionSearch;