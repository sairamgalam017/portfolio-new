const fs = require('fs');
const pdf = require('pdf-parse');

console.log('PDF module:', typeof pdf, pdf);

if (typeof pdf === 'function') {
    const buffer = fs.readFileSync('E:\\Dual_Axis_Solar_Tracking_Presentation(24hp5a0217,218).pdf');
    pdf(buffer).then(data => {
        fs.writeFileSync('pdf_output.txt', data.text);
        console.log('Done, length:', data.text.length);
    }).catch(console.error);
} else if (pdf && typeof pdf.default === 'function') {
    const buffer = fs.readFileSync('E:\\Dual_Axis_Solar_Tracking_Presentation(24hp5a0217,218).pdf');
    pdf.default(buffer).then(data => {
        fs.writeFileSync('pdf_output.txt', data.text);
        console.log('Done, length:', data.text.length);
    }).catch(console.error);
}
