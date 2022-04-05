const pdfjs = require("pdfjs-dist")

const targetLength = '33228288579250028'.length;

pdfjs.GlobalWorkerOptions.workerSrc = `./dist/pdf.worker.js`

async function getContent(data) {
    const doc = await pdfjs.getDocument({data, worker: null}).promise // note the use of the property promise
    const page = await doc.getPage(1)
    return await page.getTextContent()
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('upl').addEventListener('change', async ({currentTarget}) => {
        const reader = new FileReader();

        reader.onload = async function () {
            const arrayBuffer = this.result;
            const array = new Uint8Array(arrayBuffer);
            const binaryString = String.fromCharCode.apply(null, array);

            try {
                let nums = await getContent(binaryString);

                nums = nums.items.map(({str}) => str).map(Number).filter(Boolean);
	            nums = nums.filter(n => `${n}`.length === targetLength);
            	nums = [... new Set(nums)];

                alert(nums[0]);
            } catch (e) {
                console.error(e);
            }
        }
        reader.readAsArrayBuffer(currentTarget.files[0]);
    });
});
