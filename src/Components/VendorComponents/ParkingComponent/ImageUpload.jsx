import React, { useState } from 'react';
import { uploadFileAsync } from '../../../SliceFolder/ParkingSlice/Parking';
import { useDispatch } from 'react-redux';

const ImageUpload = ({ id }) => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const upload = () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('id', id);
      dispatch(uploadFileAsync( formData));
    } else {
      console.error("No file selected");
    }
  };

  return (
    <div>
      <div className='flex '>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {file && (
          <div>
            <img src={URL.createObjectURL(file)} alt="Selected" style={{ width: '300px', marginTop: '10px' }} />
          </div>
        )}
      </div>
      <button onClick={upload} className='bg-blue-700 text-white h-8 p-4 py-1 rounded-md'>Upload</button>
    </div>
  );
};

export default ImageUpload;
