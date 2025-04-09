// Function to handle section change
function handleSectionChange() {
  const sectionSelect = document.getElementById("section");
  const materialContainer = document.getElementById("material-container");
  const colorButtonsContainer = document.getElementById(
    "color-buttons-container"
  );

  if (sectionSelect.value === "up" || sectionSelect.value === "down") {
    materialContainer.style.display = "block";
    // colorButtonsContainer.style.display = "none";
  } else {
    materialContainer.style.display = "none";
    colorButtonsContainer.style.display = "block";
  }
}

// Function to handle material change
async function handleMaterialChange() {
  const materialSelect = document.getElementById("material");
  const sectionSelect = document.getElementById("section");
  const colorButtonsContainer = document.getElementById(
    "color-buttons-container"
  );

  // Clear existing buttons
  colorButtonsContainer.innerHTML = "";

  if (materialSelect.value !== null) {
    try {
      const response = await fetch(
        `https://masasya.com/api/images/${materialSelect.value}`
      );
      const images = await response.json();
      images.forEach((image) => {
        // Create an img element
        const imgBox = document.createElement("div");
        const img = document.createElement("img");
        const imgNm = document.createElement("span");
        imgNm.textContent = image.productName;
        img.classList.add("image-button");
        imgBox.classList.add("img-box");
        img.src = "https://masasya.com" + image.imageURL;

        console.log(image);

        img.setAttribute("data-image-url", image.imageURL);

        // Add click event listener to update the main image
        img.addEventListener("click", async () => {
          const imageContainer = document.getElementById("image-container");
          const imgPart = document.createElement("img");
          imgPart.classList.add("image-changed");

          const clickedImageURL = img.getAttribute("data-image-url");
          const clickedImageName = imgNm.textContent;

          try {
            const response = await fetch(
              `https://masasya.com/api/images/app/${materialSelect.value}/${sectionSelect.value}/${clickedImageName}`
            );
            const clickedImage = await response.json();
            let modifiedURL = clickedImage.imageURL.replace("/api", "");
            imgPart.src = "https://masasya.com" + modifiedURL;
            console.log(clickedImage);

            imageContainer.appendChild(imgPart);
          } catch (error) {
            console.error("Error fetching images:", error);
          }
        });

        // Append the img element to the container
        imgBox.appendChild(img);
        imgBox.appendChild(imgNm);
        colorButtonsContainer.appendChild(imgBox);
      });
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }
}

// // Function to handle material change
// function handleMaterialChange() {
//   const materialSelect = document.getElementById("material");
//   const colorButtonsContainer = document.getElementById(
//     "color-buttons-container"
//   );

//   // Clear existing buttons
//   colorButtonsContainer.innerHTML = "";

//   if (materialSelect.value === "Chipboardpanels") {
//     const colors = ["red", "blue", "green"]; // Example colors

//     colors.forEach((color) => {
//      (color);
//       const button = document.createElement("button");
//       button.classList.add("color-button");
//       button.setAttribute("data-color", color);
//       button.style.backgroundColor = color; // Set button background color
//       colorButtonsContainer.appendChild(button);
//     });
//   }
// }
