import React, { CSSProperties } from 'react';
import FontSizeChanger from './FontSizeChanger';
import SelectColor from './SelectColor';
import HeaderTitle from './common/HeaderTitle';

interface SiderHeaderProps {
  inputText: string;
  fontSize: number;
  handleSidebarInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFontSizeChange: (newSize: number) => void;
  handleColorChange: (colorType: string, color: string) => void;
  handleTextAlignmentChange: (alignment: CSSProperties['textAlign']) => void;
}

const SiderHeader: React.FC<SiderHeaderProps> = ({
  inputText,
  fontSize,
  handleSidebarInputChange,
  handleFontSizeChange,
  handleColorChange,
  handleTextAlignmentChange, // Receive the new prop
}) => {
  return (
    <div>
      <HeaderTitle title="Header" />
      <div className="p-4">
        <h2 className="mb-2 font-semibold">Store Branding</h2>
        <input
          type="text"
          value={inputText}
          onChange={handleSidebarInputChange}
          className="w-full p-1 border-2 border-gray-300"
        />
      </div>
      <div className="mt-6 px-4">
        <FontSizeChanger fontSize={fontSize} onFontSizeChange={handleFontSizeChange} />
      </div>

      {/* Text alignment buttons */}
      <div className="flex justify-center items-center">
        <div className="w-1/3 p-4" onClick={() => handleTextAlignmentChange('left')}>
          <img
            className="w-1/2 rounded-lg shadow-md"
            src="/images/text-left.svg"
            alt="text left"
          />
        </div>
        <div className="w-1/3 p-4" onClick={() => handleTextAlignmentChange('center')}>
          <img
            className="w-1/2 rounded-lg shadow-md"
            src="/images/text-center.svg"
            alt="text center"
          />
        </div>
        <div className="w-1/3 p-4" onClick={() => handleTextAlignmentChange('right')}>
          <img
            className="w-1/2 rounded-lg shadow-md"
            src="/images/text-right.svg"
            alt="text right"
          />
        </div>
      </div>

      <div className="px-4 mt-6">
        <SelectColor onColorChange={handleColorChange} />
      </div>
    </div>
  );
};

export default SiderHeader;
