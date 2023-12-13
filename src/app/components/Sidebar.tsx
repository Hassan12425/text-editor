// components/Sidebar.tsx

import React from 'react';

interface SidebarProps {
  fontSize: number;
  onFontSizeChange: (newSize: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ fontSize, onFontSizeChange }) => {
  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(e.target.value);
    onFontSizeChange(newSize);
  };

  return (
    <div className="h-screen w-1/4 bg-gray-200 fixed top-0 right-0 flex flex-col justify-center">
      <div className="m-4">
        <label htmlFor="fontSize">Font Size: </label>
        <input
          type="range"
          id="fontSize"
          min={10}
          max={130}
          step={1}
          value={fontSize}
          onChange={handleFontSizeChange}
        />
        <span>{fontSize}px</span>
      </div>
    </div>
  );
};

export default Sidebar;
