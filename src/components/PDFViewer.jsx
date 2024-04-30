import { Document, Page } from "react-pdf";
import pdfURL from '../assets/certificate2.pdf';

const PDFViewer = () => {
//   const pdfURL = "";
  return (
    <div>
      <Document file={pdfURL}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};
export default PDFViewer;
