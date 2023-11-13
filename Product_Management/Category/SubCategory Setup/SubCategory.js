// sub category image preview
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

//table updates
// document.addEventListener("DOMContentLoaded", function () {
//   const subcategoryForm = document.getElementById("subcategoryForm");
//   const imageInput = document.getElementById("image");
//   const previewImage = document.getElementById("preview");
//   const subcategoryTableBody = document.querySelector(
//     "#subcategoryTable tbody"
//   );

//   Add a reference to the form for resetting
//   const formFields = subcategoryForm.elements;

//   Image preview functionality
//   imageInput.addEventListener("change", function () {
//     const file = this.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         previewImage.src = e.target.result;
//       };
//       reader.readAsDataURL(file);
//     } else {
//       previewImage.src =
//         "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg";
//     }
//   });

//   Reset form functionality
//   const resetButton = subcategoryForm.querySelector('button[type="button"]');
//   resetButton.addEventListener("click", function () {
//     subcategoryForm.reset();
//     previewImage.src =
//       "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg";
//   });

//   Form submission functionality
//   subcategoryForm.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const subcategoryName = formFields.subcategoryName.value;
//     const priority = formFields.priority.value;
//     const selectedImage = formFields.image.files[0];

//     Check if an image is selected
//     if (selectedImage) {
//       Add a new row to the table with the form data
//       addRowToSubcategoryTable(subcategoryName, priority, selectedImage);
//     } else {
//       alert("Please select an image file.");
//     }
//   });

//   function addRowToSubcategoryTable(name, priority, image) {
//     const newRow = subcategoryTableBody.insertRow();
//     const cellID = newRow.insertCell(0);
//     const cellImage = newRow.insertCell(1);
//     const cellName = newRow.insertCell(2);
//     const cellPriority = newRow.insertCell(3);
//     const cellAction = newRow.insertCell(4);

//     Set cell content
//     const rowNumber = subcategoryTableBody.rows.length;
//     cellID.textContent = rowNumber.toString();
//     cellImage.innerHTML = `<img src="${URL.createObjectURL(
//       image
//     )}" alt="Subcategory Image" class="h-20 w-20 rounded-md mx-auto">`;
//     cellName.textContent = name;
//     cellPriority.textContent = priority;
//     cellAction.innerHTML = `
//       <a href="/Product_Management/Category/SubCategory Setup/SubCategoryUpdate.html">
//       <span class="material-symbols-outlined border border-blue-500 rounded-md text-blue-500">
//         edit
//       </span>
//     </a>
//     <a href="#">
//       <span class="material-symbols-outlined border border-red-500 rounded-md text-red-500 delete-category">
//       delete
//     </span>
//      </a>
//       `;
//     cellAction
//       .querySelector(".delete-subcategory")
//       .addEventListener("click", function () {
//         Retrieve the corresponding row and remove it
//         subcategoryTableBody.removeChild(newRow);
//       });
//   }
// });
