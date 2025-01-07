// scripts/imageProcessor.js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 256;
canvas.height = 144;

function compressImage(file) {
    const reader = new FileReader();
    reader.onload = function (event) {
        const img = new Image();
        img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
}

function applyOverlay(overlayPath) {
    const overlay = new Image();
    overlay.onload = () => {
        const aspectRatio = overlay.width / overlay.height;
        const newHeight = canvas.width / aspectRatio;
        const yOffset = canvas.height - newHeight; // Anchor to bottom
        ctx.drawImage(overlay, 0, yOffset, canvas.width, newHeight);
    };
    overlay.src = overlayPath;
}

document.getElementById("uploadInput").addEventListener("change", (e) => {
    compressImage(e.target.files[0]);
});

document.getElementById("overlaySelect").addEventListener("change", (e) => {
    applyOverlay(e.target.value);
});

document.getElementById("downloadButton").addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "compressed_image.jpg";
    link.href = canvas.toDataURL("image/jpeg");
    link.click();
});
