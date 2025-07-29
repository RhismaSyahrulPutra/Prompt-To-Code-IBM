import React from 'react';
import { IbmGranite } from '@carbon/icons-react';

function Navbar() {
  return (
    <div className="navbar fixed top-0 left-0 w-full bg-white text-gray-800 shadow-md px-8 py-3 z-50">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <IbmGranite size={32} />
          <span className="text-2xl font-semibold">IBM Granite</span>
        </div>
      </div>
      <div className="flex-none">
        <a
          href="https://rhisma-syahrul-putra.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-md transition duration-300"
        >
          Go To My Portfolio
        </a>
      </div>
    </div>
  );
}

export default Navbar;
