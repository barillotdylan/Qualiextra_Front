import React from 'react';
import { ArrowUp, CheckCircle } from 'lucide-react';
import AvatarGroup from '../ui/AvatarGroup';
import Badge from '../ui/Badge';
import { useMissionContext } from '../../context/MissionContext';

const MissionTable: React.FC = () => {
  const { missions } = useMissionContext();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-10">
              <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300" />
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center">
                table header
                <ArrowUp size={14} className="ml-1" />
              </div>
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              table header
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              table header
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              table header
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {missions.map((mission) => (
            <tr key={mission.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="text-sm font-medium text-gray-900">Text</div>
                  {mission.status === 'cours' && (
                    <Badge variant="secondary" className="ml-2">Badge</Badge>
                  )}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-500">{mission.text}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <span className="text-sm text-gray-500">{mission.text}</span>
                  {mission.verified && <CheckCircle size={16} className="ml-2 text-gray-400" />}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {mission.assignees && mission.assignees.length > 0 && (
                    <AvatarGroup users={mission.assignees} />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="flex justify-between items-center px-6 py-3 border-t">
        <div className="text-sm text-gray-700">
          <span className="px-2 py-1 rounded-full bg-red-100 text-red-800 text-xs font-medium mr-2">New</span>
          <span className="text-sm">20ms</span>
        </div>
        <div className="px-2 py-1 rounded-full bg-red-100 text-red-800 text-xs font-medium">
          500ms
        </div>
      </div>
    </div>
  );
};

export default MissionTable;