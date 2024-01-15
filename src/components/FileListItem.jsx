import React from 'react'
import FileName from './FileName';
import FileIcon from './FileIcon';
const FileListItem = ({file}) => {
  return (
    <tr className="filelist-item">
        <FileName file={file}></FileName>
        <FileIcon file={file}></FileIcon>
    </tr>
  )
}

FileListItem.propTypes = {
    // file: PropTypes.object.isRequired
};

export default FileListItem