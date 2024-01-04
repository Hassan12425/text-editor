import React, { useEffect, useRef } from 'react';
import DropDown from './common/DropDown';

interface EditorSidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onBackgroundChange: (selectedColor: string) => void;
}

const EditorSidebar: React.FC<EditorSidebarProps> = ({ isOpen, setIsOpen, onBackgroundChange }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsOpen]);

  const backgroundColors = ['transparent','blue', 'red', 'green', 'yellow', 'orange', 'purple', 'pink', 'cyan', 'magenta', 'teal', 'lime', 'olive', 'brown', 'navy', 'maroon', 'black', 'gray', 'silver', 'gold', 'indigo'];
  const handleBackgroundChange = (selectedColor: string) => {
    // Pass the selected color to the onBackgroundChange function
    onBackgroundChange(selectedColor);
  };

  return (
    <div
      ref={sidebarRef}
      className={`h-screen w-1/6 fixed top-0 right-0 bg-gray-200 transform z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out shadow-lg`}
    >
      <DropDown onBackgroundChange={handleBackgroundChange} backgroundColors={backgroundColors} title='Background' />
    </div>
  );
};

export default EditorSidebar;
