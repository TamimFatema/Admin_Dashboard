// category preview
const imageInput = document.getElementById("image");
const preview = document.getElementById("preview");

imageInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    preview.src =
      "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg";
  }
});

//Category image to table
document.addEventListener("DOMContentLoaded", function () {
  const categoryForm = document.getElementById("categoryForm");
  const imageInput = document.getElementById("image");
  const previewImage = document.getElementById("preview");
  const categoryTableBody = document.querySelector("#categoryTable tbody");

  let rowCount = 1; // Counter for the number of rows

  categoryForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const categoryName = document.getElementById("categoryName").value;
    const priority = document.getElementById("priority").value;
    const homeStatus = document.getElementById("homestatus").value;

    // Check if an image is selected
    if (imageInput.files.length > 0) {
      const selectedImage = imageInput.files[0];

      // Display the selected image in the preview
      const reader = new FileReader();
      reader.onload = function (e) {
        previewImage.src = e.target.result;
      };
      reader.readAsDataURL(selectedImage);

      // Update the existing row with the form data
      updateRowInTable(
        rowCount,
        categoryName,
        priority,
        homeStatus,
        selectedImage
      );
      rowCount++; // Increment the row counter for the next update
    } else {
      alert("Please select an image file.");
    }
  });

  function updateRowInTable(rowNumber, name, priority, homeStatus, image) {
    let existingRow = categoryTableBody.querySelector(
      `tr[data-row="${rowNumber}"]`
    );

    // If the row doesn't exist, create a new row
    if (!existingRow) {
      existingRow = categoryTableBody.insertRow();
      existingRow.setAttribute("data-row", rowNumber);
    }

    const cellID = existingRow.insertCell(0);
    const cellImage = existingRow.insertCell(1);
    const cellName = existingRow.insertCell(2);
    const cellPriority = existingRow.insertCell(3);
    const cellStatus = existingRow.insertCell(4);
    const cellAction = existingRow.insertCell(5);

    // Set cell content
    cellID.textContent = rowNumber.toString();
    cellImage.innerHTML = `<img src="${URL.createObjectURL(
      image
    )}" alt="Category Image" class="h-20 w-20 mx-auto rounded-md">`;
    cellName.textContent = name;
    cellPriority.textContent = priority;

    // Initialize status based on form value
    cellStatus.innerHTML = `
      <span class="material-symbols-outlined toggle" data-status="${homeStatus}">
        ${homeStatus === "On" ? "toggle_on" : "toggle_off"}
      </span>
    `;

    // Add click event listener to toggle status
    cellStatus.querySelector(".toggle").addEventListener("click", function () {
      const currentStatus = this.getAttribute("data-status");
      const newStatus = currentStatus === "On" ? "Off" : "On";
      this.setAttribute("data-status", newStatus);
      this.textContent = newStatus === "On" ? "toggle_on" : "toggle_off";
    });

    cellAction.innerHTML = `
      <a href="/Product_Management/Category/CategorySetup/CategoryUpdate.html">
        <span class="material-symbols-outlined border border-blue-500 rounded-md text-blue-500">
          edit
        </span>
      </a>
      <a href="#">
      <span class="material-symbols-outlined border border-red-500 rounded-md text-red-500 delete-category">
      delete
    </span>
     </a>
     
    `;

    // Add click event listener to delete category
    cellAction
      .querySelector(".delete-category")
      .addEventListener("click", function () {
        // Retrieve the corresponding row and remove it
        categoryTableBody.removeChild(existingRow);
      });
  }
});
