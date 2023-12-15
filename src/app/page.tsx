'use client'
import Image from 'next/image'
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import { Editor } from './text-editor';
import FontSizeChanger from './components/FontSizeChanger';
import TextField from './components/TextField';


const Home:React.FC = () => {

 
  return (
    <>
    <div className="App">
    <TextField  />
    <Editor />
  </div>
    </>
  )
}

export default Home