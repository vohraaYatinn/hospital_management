import html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';


const convertToPDF = async (htmlContent, fileName) => {
  const pdfOptions = {
    margin: [40, 0, 40, 0],  // Initial margins: [top, left, bottom, right]
    filename: fileName || "Prescription.pdf",
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  // Get header and footer elements
  const headerElement = document.getElementById('header');
  const footerElement = document.getElementById('footer');
  const rightBorder = document.getElementById('right-side-border');
    // Render doctor's signature to an image using html2canvas
    const doctorSignElement = document.getElementById('doctor_sign');


  
    // Adjust the width and height of the signatureå√å



  // Render header and footer to images using html2canvas
  const headerCanvas = await html2canvas(headerElement, { scale: 2 });
  const headerImgData = headerCanvas.toDataURL('image/png');
  const headerHeight = (headerCanvas.height / headerCanvas.width) * 210; // Convert to PDF width

  const footerCanvas = await html2canvas(footerElement, { scale: 2 });
  const footerImgData = footerCanvas.toDataURL('image/png');
  const footerHeight = (footerCanvas.height / footerCanvas.width) * 210; // Convert to PDF width

  let doctorSignImgData;
  let signatureHeight;
  let signatureWidth
  if(doctorSignElement){
    const doctorSignCanvas = await html2canvas(doctorSignElement, { scale: 2 });
    doctorSignImgData = doctorSignCanvas.toDataURL('image/png');
     signatureWidth = 50; // Desired width in mm
    signatureHeight = signatureWidth * (doctorSignCanvas.height / doctorSignCanvas.width);
  }


  // Temporarily remove header and footer from the main content
  headerElement.style.display = 'none';
  footerElement.style.display = 'none';
  rightBorder.style.border = 'none';

  // Convert HTML content to PDF
  const pdf = await html2pdf().from(htmlContent).set(pdfOptions).toPdf().get('pdf');
  const totalPages = pdf.internal.getNumberOfPages();
  const pageHeight = pdf.internal.pageSize.height;
  const pageWidth = pdf.internal.pageSize.width;

  // Adjust margins to account for header and footer
  const contentMarginTop = headerHeight;  // Space for header + extra margin
  const contentMarginBottom = footerHeight;  // Space for footer + extra margin
  pdfOptions.margin = [contentMarginTop +5, 0, contentMarginBottom+4, 0];

  // Regenerate PDF with adjusted margins
  const adjustedPdf = await html2pdf().from(htmlContent).set(pdfOptions).toPdf().get('pdf');

  // Add lines and then add header and footer to each page
  const margin = 15.2;

  for (let i = 1; i <= totalPages; i++) {
    adjustedPdf.setPage(i);

    const leftMargin = 50; // Adjust this value for your desired left margin
    const startY = (i === 1) ? 103 : 40;  // Start at 120 on the first page, and 40 on subsequent pages

    // Draw the line first
    adjustedPdf.setLineWidth(0.2); // Set the line width (adjust as needed)
    adjustedPdf.line(margin + leftMargin, startY, margin + leftMargin, pageHeight - footerHeight);

    // Add header
    adjustedPdf.addImage(headerImgData, 'PNG', 0, 0, pageWidth, headerHeight);

    // Add footer
    adjustedPdf.addImage(footerImgData, 'PNG', 0, pageHeight - footerHeight, pageWidth, footerHeight);

    if (i === totalPages && doctorSignElement) {
      const signYPosition = pageHeight - footerHeight - signatureHeight - 5; // Position the signature above the footer
      adjustedPdf.addImage(doctorSignImgData, 'PNG', pageWidth - signatureWidth - 10, signYPosition, signatureWidth, signatureHeight); // Adjusted width and height
    }
  }

  // Save the PDF
  adjustedPdf.save(pdfOptions.filename);

  // Restore header and footer visibility
  headerElement.style.display = '';
  footerElement.style.display = '';
  rightBorder.style.borderRight = '1px solid';

};

export default convertToPDF;