import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 px-8">
      <p className="text-xs">
        &copy; {new Date().getFullYear()} Choiyoungdok. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
