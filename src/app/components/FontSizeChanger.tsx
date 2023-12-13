import React from 'react';

interface FontSizeChangerProps {
  fontSize: number;
  onFontSizeChange: (newSize: number) => void;
}

const FontSizeChanger: React.FC<FontSizeChangerProps> = ({ fontSize, onFontSizeChange }) => {
  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(e.target.value);
    onFontSizeChange(newSize);
  };

  return (
    <div>
      <label htmlFor="fontSize">Font Size: </label>
      <input
        type="range"
        id="fontSize"
        min={10}
        max={30}
        step={1}
        value={fontSize}
        onChange={handleFontSizeChange}
      />
      <span>{fontSize}px</span>
    </div>
  );
};

export default FontSizeChanger;
