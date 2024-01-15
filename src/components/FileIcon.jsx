import React from 'react'

const FileIcon = ({file}) => {
    if (file.type === "folder"){
        svgcode="folder";
    }
    // else{
    //     svgcode="file-code";
    // }
  return (
    <td className="file-icon">
        {/* <FontAwesomeIcon icon={solid(`${svgcode}`)} /> */}
    </td>
  )
}

export default FileIcon