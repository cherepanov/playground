const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('./BYM-111962.pdf');

const targetLength = '33228288579250028'.length;

pdf(dataBuffer).then(function(data) {

	// number of pages
	//console.log(data.numpages);
	// number of rendered pages
	//console.log(data.numrender);
	// PDF info
	//console.log(data.info);
	// PDF metadata
	//console.log(data.metadata); 
	// PDF.js version
	// check https://mozilla.github.io/pdf.js/getting_started/
	//console.log(data.version);
	// PDF text

	let nums = data.text.split('\n').map(Number).filter(Boolean);

	nums = nums.filter(n => `${n}`.length === targetLength);

	nums = [... new Set(nums)];

	console.log(nums[0]);
})
	.catch(e => {
		console.error(e);
		alert(e);
	});
