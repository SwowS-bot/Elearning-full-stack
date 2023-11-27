import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Elearning</h2>
        <p className="mb-2">© 2023 Elearning. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;