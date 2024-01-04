'use client'

// Import necessary modules and components
import React, { useState } from "react";
import Footer from "./components/Footer";
import TextField from "./components/TextField";
import { Editor } from "./text-editor";
import Modal from "./components/common/Model";
import EditorSidebar from "./components/EditorSidebar";
import CustomButton from "./components/common/CustomButton";


interface Item {
  type: string;
  index: number;
}

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editorCount, setEditorCount] = useState(1);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [backgroundColors, setBackgroundColors] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isEditorHovered, setIsEditorHovered] = useState<boolean[]>(Array(editorCount).fill(false));
  const [isImageHovered, setIsImageHovered] = useState<boolean[]>([]);


  

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    openSidebar();
  };
  const handleBackgroundChange = (color: string) => {
    if (selectedImageIndex !== null) {
      const updatedColors = [...backgroundColors];
      updatedColors[selectedImageIndex] = color;
      setBackgroundColors(updatedColors);
    }
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addEditor = () => {
    setEditorCount(prevCount => prevCount + 1);
    setIsEditorHovered(prevState => [...prevState, false]);
    closeModal();
  };

  const handleImageUpload = (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImages(prevImages => [...prevImages, reader.result as string]);
        setBackgroundColors(prevColors => [...prevColors, 'transparent']);
        setIsImageHovered(prevState => [...prevState, false]);
      };
      reader.readAsDataURL(file);
    }
    closeModal();
  };
  const addNewEditorSection = () => {
    setEditorCount(prevCount => prevCount + 1);
    setIsEditorHovered(prevState => [...prevState, false]);// Reset hover state for the new editor
  }; 

  const deleteEditorSection = (indexToDelete: number) => {
    setEditorCount(prevCount => prevCount - 1);
    const updatedEditorHoverState = [...isEditorHovered];
    updatedEditorHoverState.splice(indexToDelete, 1);
    setIsEditorHovered(updatedEditorHoverState);
  };

  const addNewImageSection = () => {
    const newImage = uploadedImages[uploadedImages.length - 1]; 
    setUploadedImages(prevImages => [...prevImages, newImage]);
    setBackgroundColors(prevColors => [...prevColors, 'transparent']);
    setIsImageHovered(prevState => [...prevState, false]); // Reset hover state for the new image
  };

  const deleteImageSection = (indexToDelete: number) => {
    setUploadedImages(prevImages => prevImages.filter((_, index) => index !== indexToDelete));
    setBackgroundColors(prevColors => prevColors.filter((_, index) => index !== indexToDelete));
    const updatedImageHoverState = [...isImageHovered];
    updatedImageHoverState.splice(indexToDelete, 1);
    setIsImageHovered(updatedImageHoverState);
  };
 

  return (
    <>
      <div className="App">
        <TextField />
        {[...Array(editorCount)].map((_, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setIsEditorHovered(prevState => prevState.map((val, i) => i === index ? true : val))}
            onMouseLeave={() => setIsEditorHovered(prevState => prevState.map((val, i) => i === index ? false : val))}
          >
            {isEditorHovered[index] && (
              <div>
                <CustomButton position="top-0 left-[270px]" iconSrc="/images/drag.png" />
                <CustomButton position="top-0 right-[270px]" onClick={addNewEditorSection} iconSrc="/images/copy.png" />
                <CustomButton position="top-0 right-[230px]" onDelete={() => deleteEditorSection(index)} iconSrc="/images/delete.png" />
              </div>
            )}
            <Editor key={index} />
          </div>
        ))}

        {uploadedImages.map((image, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setIsImageHovered(prevState => prevState.map((val, i) => i === index ? true : val))}
            onMouseLeave={() => setIsImageHovered(prevState => prevState.map((val, i) => i === index ? false : val))}
          >
            {isImageHovered[index] && (
              <div>
                <CustomButton position="top-0 left-[270px]" iconSrc="/images/drag.png" />
                <CustomButton position="top-0 right-[270px]" onClick={addNewImageSection} iconSrc="/images/copy.png" />
                <CustomButton position="top-0 right-[230px]" onDelete={() => deleteImageSection(index)} iconSrc="/images/delete.png" />
              </div>
            )}
            <div className="w-[729px] m-auto bg-white border border-double border-blue-500" style={{ backgroundColor: backgroundColors[index] }}>
              <img className="h-72 my-10 w-[450px] mx-auto" src={image} alt={`Uploaded ${index + 1}`} />
            </div>
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
     
      <EditorSidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        onBackgroundChange={handleBackgroundChange} />
    </>
  );
};

export default Home;
