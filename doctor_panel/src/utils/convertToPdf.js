import html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';

const convertToPDF = async (htmlContent, fileName) => {
  const pdfOptions = {
    margin: [40, 10, 40, 10],  // Margins: [top, left, bottom, right]
    filename: fileName || "Prescription.pdf",
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
  for (let i = 1; i <= totalPages; i++) {
    adjustedPdf.setPage(i);
    // Add header
    adjustedPdf.addImage(headerImgData, 'PNG', 0, 0, pageWidth, headerHeight);
    // Add footer
    adjustedPdf.addImage(footerImgData, 'PNG', 0, pageHeight - footerHeight, pageWidth, footerHeight);
  }

  // Save the PDF
  adjustedPdf.save();
  
  // Restore header and footer visibility
  headerElement.style.display = '';
  footerElement.style.display = '';
};

export default convertToPDF;
