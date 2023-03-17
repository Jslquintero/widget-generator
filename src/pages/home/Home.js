/**
   * @author: 
   * @date: 
   * @description: 
   * @Editor: 
   * @dateUpdate: 
   * @descriptionUpdate: 
   * @version: 1.0.0
   * @param{}props
 */

import React from "react";
import Navbar from "../../components/elements/nav/navbar";

function createHtmlFile(htmlContent, fileName, fileLocation) {
    const data = new Blob([htmlContent], { type: 'text/html' });
    const file = new File([data], fileName, { type: 'text/html' });
  
    const link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', fileLocation, true);
    xhr.send(file);
  }
  

  function handleClick() {
    const htmlContent = '<html><head><title>Widget</title></head><body><h1>Hello World!</h1></body></html>';
    const styleContent = '<style>h1 { color: red; }</style>';
    const fileName = 'my-file.html';
    // const fileLocation = '/path/to/save/file';
  
    createHtmlFile(htmlContent+styleContent, fileName);
  }

export default function Home() {
    return (<>
       <Navbar />
      <h1>Home</h1>
      <button onClick={handleClick} id="createFileBtn">Create HTML File</button>
    </>);
}
