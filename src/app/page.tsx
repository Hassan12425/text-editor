'use client'
import Image from 'next/image'
import Sidebar from './components/Sidebar'
import { useState } from 'react';
import { Editor } from './text-editor';

export default function Home() {
  const [fontSize, setFontSize] = useState<number>(16);

  const handleFontSizeChange = (newSize: number) => {
    setFontSize(newSize);
  };
  return (
    <div className="App">
     

    <Editor />
  </div>
  )
}
