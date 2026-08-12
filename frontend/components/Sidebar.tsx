import React from 'react';
import { Search, BarChart2, Layers, Settings, Globe, Link as LinkIcon } from 'lucide-react';

export default function Sidebar() {
  const navItems = [
    { icon: BarChart2, label: 'Performance', active: true },
    { icon: Search, label: 'URL Inspection', active: false },
    { icon: Layers, label: 'Pages', active: false },
    { icon: Globe, label: 'Sitemaps', active: false },
    { icon: LinkIcon, label: 'Links', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col h-full">
      <div className="p-5 border-b border-gray-200 flex items-center space-x-3">
        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center shadow-sm">
          <Search className="w-4 h-4 text-white" />
        </div>
        <span className="font-medium text-gray-800 text-lg tracking-tight">Search Console</span>
      </div>

      <div className="p-4 flex-1 overflow-y-auto">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
          Overview
        </div>
        <nav className="space-y-1">
          {navItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href="#"
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors
                  ${item.active
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
              >
                <Icon className={`w-4 h-4 ${item.active ? 'text-blue-700' : 'text-gray-400'}`} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
