import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Book, 
  BarChart3, 
  Settings, 
  BookOpen
} from 'lucide-react';
import Logo from '../common/Logo';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-white dark:bg-gray-800 w-64 min-h-screen shadow-sm border-r border-gray-200 dark:border-gray-700">
      <div className="p-5">
        <Logo />
      </div>
      
      <div className="px-3 py-4">
        <nav>
          <ul className="space-y-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `
                  flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors
                  ${isActive 
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }
                `}
              >
                <LayoutDashboard size={18} className="mr-3" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/library"
                className={({ isActive }) => `
                  flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors
                  ${isActive 
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }
                `}
              >
                <Book size={18} className="mr-3" />
                Book Library
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/read/current"
                className={({ isActive }) => `
                  flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors
                  ${isActive 
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }
                `}
              >
                <BookOpen size={18} className="mr-3" />
                Reading Session
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/analytics"
                className={({ isActive }) => `
                  flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors
                  ${isActive 
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }
                `}
              >
                <BarChart3 size={18} className="mr-3" />
                Analytics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                className={({ isActive }) => `
                  flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors
                  ${isActive 
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }
                `}
              >
                <Settings size={18} className="mr-3" />
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          <h4 className="font-medium text-blue-800 dark:text-blue-300 text-sm mb-2">Reading Streak</h4>
          <div className="flex items-center">
            <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 dark:bg-blue-500 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <span className="ml-2 text-sm font-medium text-blue-800 dark:text-blue-300">7 days</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;