
import { useState } from "react";

const TextField: React.FC<{ fontSize: number }> = ({ fontSize }) => {
    const [inputText, setInputText] = useState<string>(''); 
  
    const handleTextInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInputText(event.target.value);
    };
  
    return (
      <div className="editor">
        <textarea
          style={{
            fontSize: `${fontSize}px`,
            width: '600px',
            textAlign:"center",
          }}
          rows={2}
          value={inputText}
          onChange={handleTextInputChange}
          placeholder="Type here..."
        />
      </div>
    );
  };

  export default TextField