// components/Sidebar.tsx

import React from 'react';
import FontSizeChanger from './FontSizeChanger';


const Sidebar: React.FC<{ fontSize: number; onFontSizeChange: (newSize: number) => void }> = ({
  fontSize,
  onFontSizeChange,
}) => {
  return (
    <div className="h-screen w-1/4 bg-gray-200 fixed top-0 right-0 flex flex-col justify-center">
      <FontSizeChanger fontSize={fontSize} onFontSizeChange={onFontSizeChange} />
    </div>
  );
};

export default Sidebar;
