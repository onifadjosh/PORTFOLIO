import React from 'react'
import FileListItem from './FileListItem';
const FileList = ({files, children}) => {
  return(
    <table className="filelist">
        <tbody>
            {files.map(file =>(
                <FileListItem key={file.id} file={file}></FileListItem>
            ))}

            
        </tbody>
    </table>
    
  
  )
};

FileList.propTypes = {
    // files: PropTypes.array
};




export default FileList