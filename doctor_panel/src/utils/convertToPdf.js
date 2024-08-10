import html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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
  const doctorSignElement = document.getElementById('doctor_sign');

  // Render header, footer, and signature to images using html2canvas
  const headerCanvas = await html2canvas(headerElement, { scale: 2 });
  const headerImgData = headerCanvas.toDataURL('image/png');
  const headerHeight = (headerCanvas.height / headerCanvas.width) * 210;

  const footerCanvas = await html2canvas(footerElement, { scale: 2 });
  const footerImgData = footerCanvas.toDataURL('image/png');
  const footerHeight = (footerCanvas.height / footerCanvas.width) * 210;

  const doctorSignCanvas = await html2canvas(doctorSignElement, { scale: 2 });
  const doctorSignImgData = doctorSignCanvas.toDataURL('image/png');
  const signatureWidth = 50;
  const signatureHeight = signatureWidth * (doctorSignCanvas.height / doctorSignCanvas.width);

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
  const contentMarginTop = headerHeight + 10;
  const contentMarginBottom = footerHeight + 10;
  pdfOptions.margin = [contentMarginTop, 0, contentMarginBottom, 0];

  // Regenerate PDF with adjusted margins
  const adjustedPdf = await html2pdf().from(htmlContent).set(pdfOptions).toPdf().get('pdf');

  // Create a new PDF to store non-blank pages
  const finalPdf = new jsPDF();

  // Function to check if a page is blank
  const isPageBlank = (pdf, pageIndex) => {
    pdf.setPage(pageIndex + 1);
    const content = pdf.internal.stream.bytes;
    return !content || content.length < 100; // Adjust the length check as needed
  };

  // Copy non-blank pages to the new PDF
  for (let i = 0; i < totalPages; i++) {
    if (!isPageBlank(adjustedPdf, i)) {
      finalPdf.addPage();
      finalPdf.addImage(adjustedPdf.internal.stream.bytes, 'PDF', 0, 0, pageWidth, pageHeight);
    }
  }

  // Add lines, header, footer, and signature to each page
  const margin = 15.2;

  for (let i = 1; i <= finalPdf.internal.getNumberOfPages(); i++) {
    finalPdf.setPage(i);

    const leftMargin = 50;
    const startY = (i === 1) ? 109 : 40;

    // Draw the line first
    finalPdf.setLineWidth(0.2);
    finalPdf.line(margin + leftMargin, startY, margin + leftMargin, pageHeight - footerHeight);

    // Add header
    finalPdf.addImage(headerImgData, 'PNG', 0, 0, pageWidth, headerHeight);

    // Add footer
    finalPdf.addImage(footerImgData, 'PNG', 0, pageHeight - footerHeight, pageWidth, footerHeight);

    if (i === finalPdf.internal.getNumberOfPages()) {
      const signYPosition = pageHeight - footerHeight - signatureHeight - 5;
      finalPdf.addImage(doctorSignImgData, 'PNG', pageWidth - signatureWidth - 10, signYPosition, signatureWidth, signatureHeight);
    }
  }

  // Save the final PDF
  finalPdf.save(pdfOptions.filename);

  // Restore header and footer visibility
  headerElement.style.display = '';
  footerElement.style.display = '';
  rightBorder.style.borderRight = '1px solid';
};

export default convertToPDF;
