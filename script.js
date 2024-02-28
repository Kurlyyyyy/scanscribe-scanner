// script.js file

function domReady(fn) {
	if (
		document.readyState === "complete" ||
		document.readyState === "interactive"
	) {
		setTimeout(fn, 1000);
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}

domReady(function () {

	// If found you qr code
function onQRCodeScanned(result) {
    var scannedLink = result.codeResult.code;
    if (scannedLink.startsWith('http://') || scannedLink.startsWith('https://')) {
        // Create a hyperlink
        var hyperlink = document.createElement("a");
        hyperlink.href = scannedLink;
        hyperlink.textContent = scannedLink;
        
        // Append the hyperlink to the result container
        document.getElementById("result").appendChild(hyperlink);
    } else {
        alert("Scanned QR code does not contain a valid link.");

	let htmlscanner = new Html5QrcodeScanner(
		"my-qr-reader",
		{ fps: 10, qrbos: 250 }
	);
	htmlscanner.render(onScanSuccess);
});
