// script.js file

<script>
// Initialize the scanner
let scanner = new Instascan.Scanner({ video: document.getElementById('scanner') });

// Add a listener to scan QR codes
scanner.addListener('scan', function(content) {
    let scannedLink = content;
    if (isValidURL(scannedLink)) {
        // If a valid URL, create a hyperlink
        let hyperlink = document.createElement("a");
        hyperlink.href = scannedLink;
        hyperlink.textContent = scannedLink;
        
        // Append the hyperlink to the result container
        document.getElementById("result").innerHTML = '';
        document.getElementById("result").appendChild(hyperlink);
    } else {
        alert("Scanned QR code does not contain a valid link.");
    }
});

// Start scanning
Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length > 0) {
        scanner.start(cameras[0]);
    } else {
        console.error('No cameras found.');
    }
}).catch(function (e) {
    console.error(e);
});

// Function to check if a string is a valid URL
function isValidURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}
</script>
