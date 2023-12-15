import React from 'react';
import FontSizeChanger from './FontSizeChanger';

interface SidebarProps {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  fontSize: number;
  onFontSizeChange: (newSize: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ inputText, setInputText, fontSize, onFontSizeChange }) => {
  const handleSidebarInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleFontSizeChange = (newSize: number) => {
    onFontSizeChange(newSize);
  };

  return (
    <div className="h-screen w-1/6 bg-gray-200 fixed top-0 right-0 flex flex-col">
      <div className='mt-2 font-semibold '>Header</div>
      <div className="pt-6 pl-4 ">
        <h2 className="mb-2 float-left font-semibold">Store Branding</h2>
        <input
          type="text"
          value={inputText}
          onChange={handleSidebarInputChange}
          className="w-100% p-1 float-left border-2 border-gray-300 "
        />
      </div>
      <div className="mt-10 mb-6 pl-4">
        <FontSizeChanger fontSize={fontSize} onFontSizeChange={handleFontSizeChange} />
      </div>
    </div>
  );
};

export default Sidebar;
