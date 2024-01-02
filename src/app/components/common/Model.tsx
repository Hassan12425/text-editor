import { Editor } from '@/app/text-editor';
import React, { useState } from 'react';

interface ModalProps {
  closeModal: () => void;
  addEditor: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal,addEditor }) => {
  const [image, setImage] = useState<File | null>(null);
  const [editorAdded, setEditorAdded] = useState<boolean>(false);



  return (
    <div className="modal w-[729px] h-48 border border-dashed border-black m-auto">
      <div className="modal-content">
        <div className='flex items-center justify-between pt-8 '>
          <h2 className='flex-1 text-center font-semibold'>Add a new Section</h2>
          <img onClick={closeModal} className='w-3 mr-6' src="/images/close.png" alt="" />
        </div>
        <div className="flex justify-center">
          <div className='m-2 w-24 shadow-lg bg-white p-6 rounded-lg flex flex-col justify-center text-center items-center'>
            <img className='w-6 mb-1' src="/images/texticon.png" alt="" />
            <button >Text</button>  {/* onClick={addEditor} */}
           
          </div>
          <div className='m-2 h-auto w-24 shadow-lg bg-white p-6 rounded-lg flex flex-col justify-center text-center items-center'>
            <img className='w-6 mb-1' src="/images/imageicon.png" alt="" />
            <button>Image</button>
          </div>
        </div>
        {editorAdded && <Editor />} 
      </div>
    </div>
  );
};

export default Modal;