const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 256;
canvas.height = 144;

let currentImage = null;
let currentOverlay = null;
let sitesVisible = false;
let empty = false;

// ✅ Fixed Clipboard Image Handling
/**
 * This function handles pasting images via Ctrl + V and renders them on the canvas.
 * @param {Event} pasteEvent - The paste event triggered by the user
 * @param {Function} callback - Callback for handling the pasted image as a base64 string
 */
function retrieveImageFromClipboardAsBase64(pasteEvent, callback) {
    if (!pasteEvent.clipboardData) {
        if (typeof callback === "function") callback(undefined);
        return;
    }

    const items = pasteEvent.clipboardData.items;
    if (!items) {
        if (typeof callback === "function") callback(undefined);
        return;
    }

    for (let item of items) {
        if (item.type.startsWith("image")) {
            const blob = item.getAsFile();
            const reader = new FileReader();
            reader.onload = function (event) {
                callback(event.target.result);
            };
            reader.readAsDataURL(blob);
        }
    }
}

// ✅ Event Listener for Pasting Images
window.addEventListener("paste", function (event) {
    retrieveImageFromClipboardAsBase64(event, function (imageDataBase64) {
        if (imageDataBase64) {
            currentImage = new Image();
            currentImage.onload = () => {
                // ✅ Clear the canvas and draw the pasted image
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.height);

                // ✅ Update the image preview
                document.getElementById("preview").src = imageDataBase64;
                document.getElementById("preview").style.display = "block";
                document.getElementById("pre").style.display = "block";
            };
            currentImage.src = imageDataBase64;
        } else {
            alert("No image detected. Please try copying and pasting an image.");
        }
    });
});

// ✅ Image Upload Function
function compressImage(file) {
    const reader = new FileReader();
    reader.onload = function (event) {
        currentImage = new Image();
        currentImage.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.height);
        };
        currentImage.src = event.target.result;
    };
    reader.readAsDataURL(file);
}

// ✅ Overlay Application Function
function applyOverlay(overlayPath) {
    currentOverlay = new Image();
    currentOverlay.onload = () => {
        drawImageWithOverlay();
    };
    currentOverlay.src = overlayPath;
}

// ✅ Function to Draw Both Image and Overlay
function drawImageWithOverlay() {
    if (!currentImage) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.height);
    if (currentOverlay) {
        const aspectRatio = currentOverlay.width / currentOverlay.height;
        const overlayHeight = canvas.width / aspectRatio;
        const yOffset = canvas.height - overlayHeight;
        ctx.drawImage(currentOverlay, 0, yOffset, canvas.width, overlayHeight);
    }
}

// ✅ Search Sites Functionality
function expandImageSites() {
    sitesVisible = !sitesVisible;
    const sitesContainer = document.getElementById("imageSources");
    const button = document.getElementById("toggleSitesButton");
    sitesContainer.style.display = sitesVisible ? "block" : "none";
    button.textContent = sitesVisible ? "Hide Sites" : "Show Sites";
}

function searchSite(siteName) {
    const searchQuery = document.getElementById("imageSearch").value.trim();
    if (!searchQuery) {
        alert("Please enter a search term first!");
        return;
    }

    let searchURL = "";
    switch (siteName) {
        case "Unsplash":
            searchURL = `https://unsplash.com/s/photos/${encodeURIComponent(searchQuery)}`;
            break;
        case "Pexels":
            searchURL = `https://www.pexels.com/search/${encodeURIComponent(searchQuery)}/`;
            break;
        case "Pixabay":
            searchURL = `https://pixabay.com/images/search/${encodeURIComponent(searchQuery)}/`;
            break;
        case "Openverse":
            searchURL = `https://openverse.org/search/image?q=${encodeURIComponent(searchQuery)}`;
            break;
        case "Flickr":
            searchURL = `https://www.flickr.com/search/?text=${encodeURIComponent(searchQuery)}`;
            break;
        case "Wikimedia":
            searchURL = `https://commons.wikimedia.org/w/index.php?search=${encodeURIComponent(searchQuery)}&title=Special:MediaSearch&go=Go&type=image`;
            break;
        case "WordPressPhotos":
            searchURL = `https://wordpress.org/photos/?s=${encodeURIComponent(searchQuery)}`;
            break;
        default:
            alert("Site not recognized.");
            return;
    }
    window.open(searchURL, "_blank");
}

// ✅ Event Listeners for File Upload and Overlay Selection
document.getElementById("uploadInput").addEventListener("change", (e) => {
    if (e.target.files.length > 0) {
        compressImage(e.target.files[0]);
    }
});

document.getElementById("overlaySelect").addEventListener("change", (e) => {
    applyOverlay(e.target.value);
});

// ✅ Download Button
document.getElementById("downloadButton").addEventListener("click", () => {
    if (!currentImage) {
        alert("Please upload an image before downloading.");
        return;
    }
    const link = document.createElement("a");
    link.download = "compressed_image.jpg";
    link.href = canvas.toDataURL("image/jpeg");
    link.click();
});

// ✅ Save Button
document.getElementById("saveButton").addEventListener("click", () => {
    if (!currentImage) {
        alert("Please upload an image before saving.");
        return;
    }
    const link = document.createElement("a");
    link.download = "saved_image.jpg";
    link.href = canvas.toDataURL("image/jpeg");
    link.click();
});
