'use client'
import Image from 'next/image'
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import { Editor } from './text-editor';
import FontSizeChanger from './components/FontSizeChanger';
import TextField from './components/TextField';


const Home:React.FC = () => {
  const [fontSize, setFontSize] = useState<number>(12); 

  const handleFontSizeChange = (newSize: number) => {
    setFontSize(newSize);
  };
 
  return (
    <>
    <div className="App">
    {/* <TextField fontSize={fontSize}/>
    <Sidebar fontSize={fontSize} onFontSizeChange={handleFontSizeChange} /> */}
    <Editor />
  </div>
    </>
  )
}

export default Home