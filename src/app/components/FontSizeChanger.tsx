import React, { useState, ChangeEvent } from 'react';


const FontSizeChanger: React.FC<{ fontSize: number; onFontSizeChange: (newSize: number) => void }> = ({
  fontSize,
  onFontSizeChange,
}) => {
  const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(event.target.value, 10);
    onFontSizeChange(newSize);
  };

  return (
    <div>
      <label htmlFor="fontSizeSlider">Font Size: </label>
      <input
        type="range"
        id="fontSizeSlider"
        name="fontSizeSlider"
        min="12"
        max="136"
        step="1"
        value={fontSize}
        onChange={handleFontSizeChange}
      />
      <span>{fontSize}px</span>
    </div>
  );
};

export default FontSizeChanger;
