import fs from 'fs';
import pdf from 'pdf-parse';

const buffer = fs.readFileSync('E:\\Dual_Axis_Solar_Tracking_Presentation(24hp5a0217,218).pdf');
pdf(buffer).then(data => {
    fs.writeFileSync('pdf_output.txt', data.text);
    console.log('Done, length:', data.text.length);
}).catch(console.error);
