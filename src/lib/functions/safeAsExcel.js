import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

export default (data, fileName) => {
	const fileType =
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
	const workSheet = XLSX.utils.json_to_sheet(data);
	const workBook = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(workBook, workSheet, 'Export');
	const excelBuffer = XLSX.write(workBook, {
		bookType: 'xlsx',
		type: 'array'
	});
	const fileData = new Blob([excelBuffer], { type: fileType });
	FileSaver.saveAs(fileData, fileName + '.xlsx');
};
