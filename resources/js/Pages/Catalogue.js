import React, { useState } from 'react';

import samplePDF from "../assets/pdf/catalogue.pdf"
import pageFlipSFX from "../assets/pdf/page-flip.mp3";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import { Box } from '@mui/material';
//import { Document, pdfjs } from "react-pdf/dist/umd/entry.webpack";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import useSound from "use-sound";
const width = 460;
const height = 500;


const Page = React.forwardRef(({ pageNumber }, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <ReactPdfPage pageNumber={pageNumber} width={width} height={height} />
      
    </div>
  );
});


const  Catalogue=()=> {
  
  const [soundOn, setSoundOn] = React.useState(true);
  const [play] = useSound(pageFlipSFX);
  const flipbook = React.useRef(null);
  const onFlip = React.useCallback(
    (e) => {
      // console.log(e.object);
      // console.log("Current page: " + e.data);
      soundOn && play();
    },
    [play, soundOn]
  );
  console.log("FlipBoo:",flipbook)

  return (
   <Box mx="25%" height="60vh" mb={10}>
 <Document file={samplePDF}>
      <HTMLFlipBook 
      width={width}
       height={height}
       onFlip={onFlip}
       
       
       >
        
        <Page pageNumber={1} />
        <Page pageNumber={2} />
        <Page pageNumber={2} />
        <Page pageNumber={4} />
        <Page pageNumber={5} />
        <Page pageNumber={6} />
        <Page pageNumber={7} />
        <Page pageNumber={8} />
        <Page pageNumber={9} />
        <Page pageNumber={10} />
        <Page pageNumber={11} />
        <Page pageNumber={12} />
        <Page pageNumber={13} />
        <Page pageNumber={14} />
        <Page pageNumber={15} />

    
      </HTMLFlipBook>
    </Document>
   </Box>
  );
}




export default Catalogue;