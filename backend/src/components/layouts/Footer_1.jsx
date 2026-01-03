import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-dark py-6 px-4 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center text-label">
        {/* Tautan kebijakan */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="/privacy-policy"
            className="text-primary hover-text-primary"
          >
            Kebijakan Privasi
          </a>
          <a
            href="/terms"
            className="text-primary hover-text-primary"
          >
            Syarat & Ketentuan
          </a>
            {/* Hak cipta */}
            <div className="text-primary">
            &copy; {new Date().getFullYear()} Posnod. All rights reserved.
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;