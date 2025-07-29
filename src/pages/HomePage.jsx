import React from 'react';
import { Link } from 'react-router-dom';
import { IbmGranite } from '@carbon/icons-react';
import choiyoungdok from '../assets/Choiyoungdok_logo_light.svg';
import AnimatedPage from '../components/animation/AnimatedPage';

function HomePage() {
  return (
    <AnimatedPage>
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-xl flex flex-col items-center text-center">
          {/* Logo dan Nama */}
          <div className="flex items-center justify-center gap-10 mb-8 flex-wrap">
            {/* IBM Granite */}
            <div className="flex flex-col items-center">
              <IbmGranite size={96} />
              <span className="mt-2 text-xl font-semibold text-gray-800">
                IBM Granite
              </span>
            </div>

            {/* Tanda + */}
            <div className="text-5xl font-bold text-gray-700">+</div>

            {/* Logo Choiyoungdok */}
            <div className="flex flex-col items-center">
              <img
                src={choiyoungdok}
                alt="Choiyoungdok Logo"
                className="h-24 w-auto"
              />
              <span className="mt-2 text-xl font-semibold text-gray-800">
                Choiyoungdok
              </span>
            </div>
          </div>

          {/* Deskripsi */}
          <p className="text-lg text-gray-600 mb-6">
            AI Powered Project with IBM Granite
          </p>

          {/* Tombol Aksi */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {/* Tombol Tutorial - biru muda */}
            <Link
              to="/tutorial"
              className="px-6 py-3 bg-blue-100 hover:bg-blue-200 text-blue-700 text-sm font-medium rounded-lg shadow-sm transition duration-300"
            >
              Tutorial Prompt
            </Link>

            {/* Tombol Try Now - biru utama */}
            <Link
              to="/chat"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-md transition duration-300"
            >
              Try Now
            </Link>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}

export default HomePage;
