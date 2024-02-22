document.addEventListener("DOMContentLoaded", function () {
    // Specify the path to your image folder
    const imagePath = "./white";

    // Get the reference to the image container
    const imageContainer = document.getElementById("imageContainer");

    // Fetch the images in the folder
    fetchImages(imagePath)
        .then(images => {
            // Append each image to the container
            images.forEach(image => {
                const imgElement = document.createElement("img");
                imgElement.src = image;
                imgElement.alt = "Image";
                imageContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.error(error));

    /**
     * Fetches the images in the specified folder.
     * @param {string} path - The path to the image folder.
     * @returns {Promise<Array<string>>} - A promise that resolves to an array of image URLs.
     */
    function fetchImages(path) {
        return new Promise((resolve, reject) => {
            // Fetch the list of files in the folder
            fetch(`${path}`)
                .then(response => response.text())
                .then(html => {
                    // Parse the HTML response to extract image URLs
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, "text/html");
                    const images = Array.from(doc.querySelectorAll("a[href$='.jpg']"))
                        .map(link => link.href);
                    resolve(images);
                })
                .catch(error => reject(error));
        });
    }
});
