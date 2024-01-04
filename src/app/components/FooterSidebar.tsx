import React, { useEffect, useRef, useState } from 'react';
import FontSizeChanger from './FontSizeChanger';
import SelectColor from './SelectColor';
import SiderHeader from './SiderHeader';
import SideFooterContent from './SideFooterContent';

interface FooterSidebarProps {
  onColorChange: (colorType: string, color: string) => void;
  isOpen: boolean;
  closeSidebar: () => void;
  onInputChange: (type: string, value: string) => void;
}

const FooterSidebar: React.FC<FooterSidebarProps> = ({
  onColorChange,
  isOpen,
  closeSidebar,
  onInputChange,
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const [name, setName] = useState<string>('Hassan khan');
  const [address, setAddress] = useState<string>('Abbottabad');
  const [number, setNumber] = useState<string>('03484827891');
  const [email, setEmail] = useState<string>('Hassankhan12425@gmail.com');

  const handleColorChange = (colorType: string, color: string) => {
    onColorChange(colorType, color);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        closeSidebar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeSidebar]);

  const handleInputChange = (type: string, value: string) => {
    switch (type) {
      case 'name':
        setName(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'number':
        setNumber(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }

    onInputChange(type, value);
  };

  return (
    <div
      ref={sidebarRef}
      className={`h-screen w-1/6 fixed top-0 right-0 bg-gray-200 transform z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out shadow-lg`}
    >

<SideFooterContent
        onColorChange={handleColorChange}
        name={name}
        address={address}
        number={number}
        email={email}
        onInputChange={handleInputChange}
      />
          </div>
  );
};

export default FooterSidebar;
