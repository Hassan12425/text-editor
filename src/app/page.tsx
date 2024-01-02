'use client'

import React, { useState } from "react";
import Footer from "./components/Footer";
import TextField from "./components/TextField";
import { Editor } from "./text-editor";
import Modal from "./components/common/Model";


const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editorCount, setEditorCount] = useState(1);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addEditor = () => {
    setEditorCount(prevCount => prevCount + 1);
    closeModal(); 
  };

  return (
    <>
      <div className="App">
        <TextField />
        {[...Array(editorCount)].map((_, index) => (
          <Editor key={index} />
        ))}
        {isModalOpen && (
          <Modal closeModal={closeModal} addEditor={addEditor} />
        )}
        <Footer />
       
        <button
          onClick={openModal}
          className="fixed bottom-5 right-16 bg-blue-500 text-white px-4 py-2 rounded-full"
        >
          Add Section
        </button>
      </div>
    </>
  );
};

export default Home;
