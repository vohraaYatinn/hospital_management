import html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';
import { test_url } from '../config/environment';


const uploadPDF = async (pdfBlob, fileName, headerElement, footerElement, setPdfGenerateDownload) => {
  try {
    const formData = new FormData();
    // formData.append('file', pdfBlob, fileName);
    // console.log(pdfBlob)
    // const response = await fetch(test_url+"api/v2/doctors/upload-prescription/", {
    //   method: 'POST',
    //   body: formData
    // });

    setPdfGenerateDownload(pdfBlob)

    headerElement.style.display = '';
    footerElement.style.display = '';

    // if (!response.ok) {
    //   throw new Error('Failed to upload PDF');
    // }
    
    // return await response.json();  // Assuming your backend responds with JSON
  } catch (error) {
    console.error('Error uploading PDF:', error);
  }
};


const convertToPDFAndBackend = async (htmlContent, fileName, setPdfGenerateDownload) => {
  
  const pdfOptions = {
    margin: [30, 10, 40, 10],  // Margins: [top, left, bottom, right]
    filename: "Prescription.pdf",
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  // Get header and footer elements
  const headerElement = document.getElementById('header');
  const footerElement = document.getElementById('footer');

  // Render header and footer to images using html2canvas
  const headerCanvas = await html2canvas(headerElement, { scale: 2 });
  const headerImgData = headerCanvas.toDataURL('image/png');
  const headerHeight = (headerCanvas.height / headerCanvas.width) * 210; // Convert to PDF width

  const footerCanvas = await html2canvas(footerElement, { scale: 2 });
  const footerImgData = footerCanvas.toDataURL('image/png');
  const footerHeight = (footerCanvas.height / footerCanvas.width) * 210; // Convert to PDF width

  // Temporarily remove header and footer from the main content
  headerElement.style.display = 'none';
  footerElement.style.display = 'none';

  // Convert HTML content to PDF
  const pdf = await html2pdf().from(htmlContent).set(pdfOptions).toPdf().get('pdf');
  const totalPages = pdf.internal.getNumberOfPages();
  const pageHeight = pdf.internal.pageSize.height;
  const pageWidth = pdf.internal.pageSize.width;

  // Adjust margins to account for header and footer
  const contentMarginTop = headerHeight + 10;  // Space for header + extra margin
  const contentMarginBottom = footerHeight + 10;  // Space for footer + extra margin
  pdfOptions.margin = [contentMarginTop, 10, contentMarginBottom, 10];

  // Regenerate PDF with adjusted margins
  const adjustedPdf = await html2pdf().from(htmlContent).set(pdfOptions).toPdf().get('pdf');

  // Add header and footer to each page
  const margin = 15.2;

  for (let i = 1; i <= totalPages; i++) {
    adjustedPdf.setPage(i);
    
    // Add header
      adjustedPdf.addImage(headerImgData, 'PNG', 0, 0, pageWidth, headerHeight);
    
    // Add line below header with margins
    adjustedPdf.setLineWidth(0.2); // Set the line width (adjust as needed)
    if(i != 1){
      adjustedPdf.line(margin, headerHeight + 10, pageWidth - margin, headerHeight + 10); // Draw the line below the header with margins
    }
    
    // Add footer
    adjustedPdf.addImage(footerImgData, 'PNG', 0, pageHeight - footerHeight, pageWidth, footerHeight);
    
    // Add line above footer with margins
    if(i != totalPages){
      adjustedPdf.line(margin, pageHeight - footerHeight - 10, pageWidth - margin, pageHeight - footerHeight - 10); // Draw the line above the footer with margins
    }
  }
  
  // Save the PDF
  const pdfBlob = adjustedPdf.output('blob');
  await uploadPDF(pdfBlob, fileName,headerElement, footerElement , setPdfGenerateDownload);


  // Upload the PDF to the backend

  // Restore header and footer visibility

};

export default convertToPDFAndBackend;
