import React from 'react';

interface User {
  id: string | number;
  avatar: string;
  name: string;
}

interface AvatarGroupProps {
  users: User[];
  max?: number;
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ users, max = 4 }) => {
  const visibleUsers = users.slice(0, max);
  const extraUsers = users.length > max ? users.length - max : 0;

  return (
    <div className="flex -space-x-2 overflow-hidden">
      {visibleUsers.map((user) => (
        <img
          key={user.id}
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src={user.avatar}
          alt={user.name}
        />
      ))}
      {extraUsers > 0 && (
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-300 ring-2 ring-white text-xs font-medium text-gray-800">
          +{extraUsers}
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;