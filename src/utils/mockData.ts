export const generateMockMissions = () => {
  const statuses = ['pourvoir', 'cours', 'venir', 'terminees', 'annulees'];
  const mockAvatars = [
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
    "https://randomuser.me/api/portraits/women/3.jpg",
    "https://randomuser.me/api/portraits/men/3.jpg"
  ];

  return Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    text: 'text',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    verified: Math.random() > 0.5,
    isNew: i === 5,
    assignees: i % 2 === 0 ? generateRandomAssignees(mockAvatars) : []
  }));
};

const generateRandomAssignees = (avatars: string[]) => {
  const count = Math.floor(Math.random() * 5) + 1;
  return Array.from({ length: count }, (_, i) => ({
    id: `user-${i}`,
    name: `User ${i}`,
    avatar: avatars[i % avatars.length]
  }));
};

export const mockMissions = generateMockMissions();