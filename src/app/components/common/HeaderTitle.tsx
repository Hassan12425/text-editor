import React from 'react';

interface HeaderTitleProps {
  title: string; 
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title }) => {
  return (
    <div>
      <div className="mt-2 font-semibold px-4 py-2 border-b border-gray-300">
        {title}
      </div>
    </div>
  );
};

export default HeaderTitle;
