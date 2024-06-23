import html2pdf from 'html2pdf.js';

const convertToPDF = (htmlContent, fileName) => {
  const pdfOptions = {
    margin: 0,  // Remove margins
    filename: fileName || "Prescription",  // Use the provided file name or default to "Prescription"
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  };

  // Inline style to remove padding and margin from the HTML content
  htmlContent.style.margin = '0';
  htmlContent.style.padding = '0';

  html2pdf().from(htmlContent).set(pdfOptions).save();
};

export default convertToPDF;