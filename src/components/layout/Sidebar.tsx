import React from 'react';
import { ChevronLeft, LayoutDashboard, Calendar, Briefcase, FileText, Settings, PhoneCall, LogOut, Plus } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform 
        md:translate-x-0 md:static md:inset-auto md:h-screen
        transition duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white font-semid">C</span>
              </div>
              <span className="text-blue-600 font-medium">Ciel Bleu</span>
            </div>
            <button
              onClick={closeSidebar}
              className="p-1 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 md:hidden"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          {/* New mission button */}
          <div className="px-4 py-4">
            <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none">
              <Plus size={16} className="mr-2" />
              Nouvelle mission
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-2 bg-white space-y-1">
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
              <LayoutDashboard size={20} className="mr-3 text-gray-500" />
              Tableau de bord
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
              <Calendar size={20} className="mr-3 text-gray-500" />
              Planning
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-green-700 rounded-md bg-green-50">
              <Briefcase size={20} className="mr-3 text-green-500" />
              Missions
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
              <FileText size={20} className="mr-3 text-gray-500" />
              Factures
            </a>
          </nav>

          {/* Footer navigation */}
          <div className="px-2 py-2 border-t">
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
              <Settings size={20} className="mr-3 text-gray-500" />
              Paramètres
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
              <PhoneCall size={20} className="mr-3 text-gray-500" />
              Contact
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
              <LogOut size={20} className="mr-3 text-gray-500" />
              Déconnexion
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;