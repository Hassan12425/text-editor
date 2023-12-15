import React, { useState } from 'react';
import Sidebar from './Sidebar';

const TextField: React.FC = () => {
  const [inputText, setInputText] = useState<string>('Online Store');
  const [fontSize, setFontSize] = useState<number>(16);

  const handleDivInputChange = (event: React.FormEvent<HTMLDivElement>) => {
    const text = event.currentTarget.textContent;
    if (text) {
      setInputText(text);
    }
  };

  const handleFontSizeChange = (newSize: number) => {
    setFontSize(newSize);
  };

  return (
    <div>
      <div
        className="text-${fontSize}px p-4 w-96 mx-auto h-24 border border-gray-300"
        contentEditable={false}
        style={{
          fontSize: `${fontSize}px`,
          padding: '15px',
          width: '600px',
          textAlign: 'center',
          margin: 'auto',
          height: '88px',
          border: '1px solid #ccc',
        }}
        onInput={handleDivInputChange}
        dangerouslySetInnerHTML={{ __html: inputText }}
      />

      <Sidebar
        inputText={inputText}
        setInputText={setInputText}
        fontSize={fontSize}
        onFontSizeChange={handleFontSizeChange}
      />
    </div>
  );
};

export default TextField;
