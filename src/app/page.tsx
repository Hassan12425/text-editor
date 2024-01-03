'use client'

import React, { useState } from "react";
import Footer from "./components/Footer";
import TextField from "./components/TextField";
import { Editor } from "./text-editor";
import Modal from "./components/common/Model";


const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editorCount, setEditorCount] = useState(1);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
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
 
  const handleImageUpload = (file: File | null) => {
    // Logic to handle image upload
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImages(prevImages => [...prevImages, reader.result as string]); // Add new image URL to the array
      };
      reader.readAsDataURL(file);
    }
    closeModal(); // Close the modal after handling image upload
  };
  return (
    <>
      <div className="App">
        <TextField />
        {[...Array(editorCount)].map((_, index) => (
          <Editor key={index} />
        ))}
    
      {/* Display uploaded images */}
      {uploadedImages.map((image, index) => (
        <div className="w-[729px] m-auto " key={index}>
         
          <img src={image} alt={`Uploaded ${index + 1}`} />
        </div>
      ))}
    {isModalOpen && (
          <Modal closeModal={closeModal} addEditor={addEditor} handleImageUpload={handleImageUpload}/>
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
