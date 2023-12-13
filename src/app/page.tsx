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
{/* <textarea className='mt-10 p-10'  cols={58} rows={2}></textarea> */}
    <Editor />
  </div>
  )
}
