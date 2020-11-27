const CODES = {
	A: 'A'.charCodeAt(),
	Z: 'Z'.charCodeAt(),
}


export function createTable (rowsCount = 15) {
	const rows = new Array(rowsCount)
	.fill('')
	.map(createRow);
	
	return rows.join('');
}

function createRow(_, index) {
	const colsCount = CODES.Z - CODES.A + 1;
	const content = new Array(colsCount).fill('').map((_, colIndex) => 
		(index === 0) 
		? createCol(toCharCode(CODES.A + colIndex))
		: createCell(toCharCode(CODES.A + colIndex), index)).join('');

	return `
		<div class="row">
			<div class="row-info">
				${index ? index : ''}
			</div>
			<div class="row-data">
				${content}
			</div>
		</div>
	`;
}

function createCol(code) {
	return  `<div class="column">${code}</div>`;
}
function createCell(code, index) {
	return `<div class="cell" contenteditable="">${code}${index}</div>`
}

function toCharCode(codeIndex) {
	return String.fromCharCode(codeIndex)
}