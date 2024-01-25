
import * as XLSX from 'xlsx';

export function readExcel(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const data = new Uint8Array(event.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            resolve(jsonData);
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
    });
}
