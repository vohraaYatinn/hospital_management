import html2pdf from 'html2pdf.js';

const convertToPDF = (htmlContent, fileName = "Prescription") => {

  const pdfOptions = {
    margin: 10,
    filename: fileName,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  };

  const pdf_blob = html2pdf().from(htmlContent).set(pdfOptions)
  pdf_blob.save();
};

export default convertToPDF;