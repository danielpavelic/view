import React from 'react';
import DropZone from '../dropZone/DropZone';

const UploadPage = () => {
  return (
    <div className="p30">

      <div className="p10">
        <input type="text" name="title" placeholder="Enter title..." value="" className="title" />
      </div>

      <div className="p10">
        <DropZone />
      </div>

      <div className="p10">
        <button type="submit">Save</button>
      </div>

    </div>
  );
};

export default UploadPage;