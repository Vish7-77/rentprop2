document.addEventListener("DOMContentLoaded", function () {
  // Specify the path to your property folder
  const propertyPath = "./dist/Rental/Villa For Sale/1 Villa 1.2 Cr anekal";

  // Get the reference to the property gallery container
  const propertyGallery = document.getElementById("propertyGallery");

  // Fetch the list of images in the property folder
  fetchImages(propertyPath)
    .then((images) => {
      // Create the property template
      const propertyTemplate = createPropertyTemplate(images, {
        place: "Anakel",
        price: "1.2 Cr",
      });

      // Append the property template to the gallery container
      propertyGallery.innerHTML += propertyTemplate;
    })
    .catch((error) => console.error(error));

  /**
   * Fetches the list of images in the specified folder.
   * @param {string} path - The path to the image folder.
   * @returns {Promise<Array<string>>} - A promise that resolves to an array of image URLs.
   */
  function fetchImages(path) {
    return new Promise((resolve, reject) => {
      // Fetch the list of files in the folder
      fetch(`${path}`)
        .then((response) => response.text())
        .then((html) => {
          // Parse the HTML response to extract image URLs
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          const images = Array.from(
            doc.querySelectorAll("a[href$='.jpg']")
          ).map((link) => link.href);
          resolve(images);
        })
        .catch((error) => reject(error));
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  // Specify the path to your property folder
  const propertyPath = "./dist/Rental/Villa For Sale/2 Villa  1.9 Cr sarjapur";

  // Get the reference to the property gallery container
  const propertyGallery = document.getElementById("propertyGallery");

  // Fetch the list of images in the property folder
  fetchImages(propertyPath)
    .then((images) => {
      // Create the property template
      const propertyTemplate = createPropertyTemplate(images, {
        place: "sarjapur",
        price: "1.9 Cr",
      });

      // Append the property template to the gallery container
      propertyGallery.innerHTML += propertyTemplate;
    })
    .catch((error) => console.error(error));

  /**
   * Fetches the list of images in the specified folder.
   * @param {string} path - The path to the image folder.
   * @returns {Promise<Array<string>>} - A promise that resolves to an array of image URLs.
   */
  function fetchImages(path) {
    return new Promise((resolve, reject) => {
      // Fetch the list of files in the folder
      fetch(`${path}`)
        .then((response) => response.text())
        .then((html) => {
          // Parse the HTML response to extract image URLs
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          const images = Array.from(
            doc.querySelectorAll("a[href$='.jpg']")
          ).map((link) => link.href);
          resolve(images);
        })
        .catch((error) => reject(error));
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  // Specify the path to your property folder
  const propertyPath = "./dist/Rental/Villa For Sale/3 villa 4Cr kundalahalli";

  // Get the reference to the property gallery container
  const propertyGallery = document.getElementById("propertyGallery");

  // Fetch the list of images in the property folder
  fetchImages(propertyPath)
    .then((images) => {
      // Create the property template
      const propertyTemplate = createPropertyTemplate(images, {
        place: "KundalaHalli",
        price: "4 Cr",
      });

      // Append the property template to the gallery container
      propertyGallery.innerHTML += propertyTemplate;
    })
    .catch((error) => console.error(error));

  /**
   * Fetches the list of images in the specified folder.
   * @param {string} path - The path to the image folder.
   * @returns {Promise<Array<string>>} - A promise that resolves to an array of image URLs.
   */
  function fetchImages(path) {
    return new Promise((resolve, reject) => {
      // Fetch the list of files in the folder
      fetch(`${path}`)
        .then((response) => response.text())
        .then((html) => {
          // Parse the HTML response to extract image URLs
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          const images = Array.from(
            doc.querySelectorAll("a[href$='.jpg']")
          ).map((link) => link.href);
          resolve(images);
        })
        .catch((error) => reject(error));
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  // Specify the path to your property folder
  const propertyPath = "./dist/Rental/Villa For Sale/Villa  1.8 Cr Varthur";

  // Get the reference to the property gallery container
  const propertyGallery = document.getElementById("propertyGallery");

  // Fetch the list of images in the property folder
  fetchImages(propertyPath)
    .then((images) => {
      // Create the property template
      const propertyTemplate = createPropertyTemplate(images, {
        place: "Varthur",
        price: "1.8Cr",
      });

      // Append the property template to the gallery container
      propertyGallery.innerHTML += propertyTemplate;
    })
    .catch((error) => console.error(error));

  /**
   * Fetches the list of images in the specified folder.
   * @param {string} path - The path to the image folder.
   * @returns {Promise<Array<string>>} - A promise that resolves to an array of image URLs.
   */
  function fetchImages(path) {
    return new Promise((resolve, reject) => {
      // Fetch the list of files in the folder
      fetch(`${path}`)
        .then((response) => response.text())
        .then((html) => {
          // Parse the HTML response to extract image URLs
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          const images = Array.from(
            doc.querySelectorAll("a[href$='.jpg']")
          ).map((link) => link.href);
          resolve(images);
        })
        .catch((error) => reject(error));
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  // Specify the path to your property folder
  const propertyPath = "./dist/Rental/Villa For Sale/Villa  2.2 Cr Sarjapur";

  // Get the reference to the property gallery container
  const propertyGallery = document.getElementById("propertyGallery");

  // Fetch the list of images in the property folder
  fetchImages(propertyPath)
    .then((images) => {
      // Create the property template
      const propertyTemplate = createPropertyTemplate(images, {
        place: "Sarjapur",
        price: "2.2Cr",
      });

      // Append the property template to the gallery container
      propertyGallery.innerHTML += propertyTemplate;
    })
    .catch((error) => console.error(error));

  /**
   * Fetches the list of images in the specified folder.
   * @param {string} path - The path to the image folder.
   * @returns {Promise<Array<string>>} - A promise that resolves to an array of image URLs.
   */
  function fetchImages(path) {
    return new Promise((resolve, reject) => {
      // Fetch the list of files in the folder
      fetch(`${path}`)
        .then((response) => response.text())
        .then((html) => {
          // Parse the HTML response to extract image URLs
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          const images = Array.from(
            doc.querySelectorAll("a[href$='.jpg']")
          ).map((link) => link.href);
          resolve(images);
        })
        .catch((error) => reject(error));
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  // Specify the path to your property folder
  const propertyPath = "./dist/Rental/Villa For Sale/Villa  3.2Cr Jp Nagar";

  // Get the reference to the property gallery container
  const propertyGallery = document.getElementById("propertyGallery");

  // Fetch the list of images in the property folder
  fetchImages(propertyPath)
    .then((images) => {
      // Create the property template
      const propertyTemplate = createPropertyTemplate(images, {
        place: "JP nagar",
        price: "3.2Cr",
      });

      // Append the property template to the gallery container
      propertyGallery.innerHTML += propertyTemplate;
    })
    .catch((error) => console.error(error));

  /**
   * Fetches the list of images in the specified folder.
   * @param {string} path - The path to the image folder.
   * @returns {Promise<Array<string>>} - A promise that resolves to an array of image URLs.
   */
  function fetchImages(path) {
    return new Promise((resolve, reject) => {
      // Fetch the list of files in the folder
      fetch(`${path}`)
        .then((response) => response.text())
        .then((html) => {
          // Parse the HTML response to extract image URLs
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          const images = Array.from(
            doc.querySelectorAll("a[href$='.jpg']")
          ).map((link) => link.href);
          resolve(images);
        })
        .catch((error) => reject(error));
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  // Specify the path to your property folder
  const propertyPath = "./dist/Rental/Villa For Sale/Villa  3Cr whitefield";

  // Get the reference to the property gallery container
  const propertyGallery = document.getElementById("propertyGallery");

  // Fetch the list of images in the property folder
  fetchImages(propertyPath)
    .then((images) => {
      // Create the property template
      const propertyTemplate = createPropertyTemplate(images, {
        place: "WhiteField",
        price: "3.0r",
      });

      // Append the property template to the gallery container
      propertyGallery.innerHTML += propertyTemplate;
    })
    .catch((error) => console.error(error));

  /**
   * Fetches the list of images in the specified folder.
   * @param {string} path - The path to the image folder.
   * @returns {Promise<Array<string>>} - A promise that resolves to an array of image URLs.
   */
  function fetchImages(path) {
    return new Promise((resolve, reject) => {
      // Fetch the list of files in the folder
      fetch(`${path}`)
        .then((response) => response.text())
        .then((html) => {
          // Parse the HTML response to extract image URLs
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          const images = Array.from(
            doc.querySelectorAll("a[href$='.jpg']")
          ).map((link) => link.href);
          resolve(images);
        })
        .catch((error) => reject(error));
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Specify the path to your property folder
  const propertyPath = "./dist/Rental/Villa For Sale/Villa  4Cr whitefield";

  // Get the reference to the property gallery container
  const propertyGallery = document.getElementById("propertyGallery");

  // Fetch the list of images in the property folder
  fetchImages(propertyPath)
    .then((images) => {
      // Create the property template
      const propertyTemplate = createPropertyTemplate(images, {
        place: "WhiteField",
        price: "4.0r",
      });

      // Append the property template to the gallery container
      propertyGallery.innerHTML += propertyTemplate;
    })
    .catch((error) => console.error(error));

  /**
   * Fetches the list of images in the specified folder.
   * @param {string} path - The path to the image folder.
   * @returns {Promise<Array<string>>} - A promise that resolves to an array of image URLs.
   */
  function fetchImages(path) {
    return new Promise((resolve, reject) => {
      // Fetch the list of files in the folder
      fetch(`${path}`)
        .then((response) => response.text())
        .then((html) => {
          // Parse the HTML response to extract image URLs
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          const images = Array.from(
            doc.querySelectorAll("a[href$='.jpg']")
          ).map((link) => link.href);
          resolve(images);
        })
        .catch((error) => reject(error));
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  // Specify the path to your property folder
  const propertyPath = "./dist/Rental/Plot";

  // Get the reference to the property gallery container
  const propertyGallery = document.getElementById("plotandland");

  // Fetch the list of images in the property folder
  fetchImages(propertyPath)
    .then((images) => {
      let typeP = "Plots";
      // Create the property template
      const propertyTemplate = createPropertyTemplate(
        images,
        {
          place: "Plots",
          price: "~2.78 cr and Above",
        },
        typeP
      );

      // Append the property template to the gallery container
      propertyGallery.innerHTML += propertyTemplate;
    })
    .catch((error) => console.error(error));

  /**
   * Fetches the list of images in the specified folder.
   * @param {string} path - The path to the image folder.
   * @returns {Promise<Array<string>>} - A promise that resolves to an array of image URLs.
   */
  function fetchImages(path) {
    return new Promise((resolve, reject) => {
      // Fetch the list of files in the folder
      fetch(`${path}`)
        .then((response) => response.text())
        .then((html) => {
          // Parse the HTML response to extract image URLs
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          const images = Array.from(
            doc.querySelectorAll("a[href$='.jpg']")
          ).map((link) => link.href);
          resolve(images);
        })
        .catch((error) => reject(error));
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  // Specify the path to your property folder
  const propertyPath = "./dist/Rental/commercial Pics";

  // Get the reference to the property gallery container
  const propertyGallery = document.getElementById("comm");

  // Fetch the list of images in the property folder
  fetchImages(propertyPath)
    .then((images) => {
      let typeP = "Commercial";
      // Create the property template
      const propertyTemplate = createPropertyTemplate(
        images,
        {
          place: "Commercial properties",
          price: "~contact ",
        },
        typeP, "4000"
      );

      // Append the property template to the gallery container
      propertyGallery.innerHTML += propertyTemplate;
    })
    .catch((error) => console.error(error));

  /**
   * Fetches the list of images in the specified folder.
   * @param {string} path - The path to the image folder.
   * @returns {Promise<Array<string>>} - A promise that resolves to an array of image URLs.
   */
  function fetchImages(path) {
    return new Promise((resolve, reject) => {
      // Fetch the list of files in the folder
      fetch(`${path}`)
        .then((response) => response.text())
        .then((html) => {
          // Parse the HTML response to extract image URLs
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          const images = Array.from(
            doc.querySelectorAll("a[href$='.jpg']")
          ).map((link) => link.href);
          resolve(images);
        })
        .catch((error) => reject(error));
    });
  }
});

/**
 * Creates the HTML template for the property folder.
 * @param {Array<string>} images - The array of image URLs.
 * @returns {string} - The HTML template for the property.
 */
function createPropertyTemplate(images, data, typeP,sqft) {
  return `
        <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                Properties for Sale
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
                ${typeP ? typeP : "Villa"}
              </h1>
              <div class="flex mb-4">
                <a
                  class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1"
                  >${data?.place}</a
                >
              </div>
              <p class="leading-relaxed mb-4"></p>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">type</span>
                <span class="ml-auto text-gray-900">  ${
                  typeP ? typeP : "Villa"
                }</span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">size</span>
                <span class="ml-auto text-gray-900">${sqft ? sqft : "2800"} sqft</span>
              </div>
              <div class="flex border-t border-b mb-6 border-gray-200 py-2">
              </div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900"
                  >${data?.price}</span
                >
                <a
                href="https://wa.me/9845903418"
                      class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    >
                      Contact Now
                    </a>
              </div>
            </div>
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src=${images[0]}
            />
          </div>
        </div>
      </section>
  
      <section class="font-bold p-5">All Images</section>
      <section class="flex w-full justify-evenly items-center flex-wrap gap-2">
      
        ${images
          .map(
            (image) => `
        <img
            alt="ecommerce"
          
            class="w-60 h-44 object-cover overflow-hidden"
            src="${image}"
        />
    `
          )
          .join("")}
      
      </section>
  
      <div class="flex w-full border-2 border-green-700 mt-3"></div>
  
      
        `;
}
