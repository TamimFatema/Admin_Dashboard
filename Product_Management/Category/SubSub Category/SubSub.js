//sub sub category setup
// function submitFormSubSubCategory() {
//   const subSubCategoryName =
//     document.getElementById("subSubCategoryName").value;
//   // const mainCategory = document.getElementById('mainCategory').value;
//   // const subCategory = document.getElementById('subCategory').value;
//   const priority = document.getElementById("priority").value;

//   // Add a new row to the table with the form data
//   addRowToSubSubCategoryTable(subSubCategoryName, priority);

//   // Reset the form
//   document.getElementById("subSubCategoryForm").reset();
// }

// function addRowToSubSubCategoryTable(name, priority) {
//   const subSubCategoryTableBody = document.querySelector(
//     "#subSubCategoryTable tbody"
//   );
//   const newRow = subSubCategoryTableBody.insertRow();
//   const cellID = newRow.insertCell(0);
//   const cellName = newRow.insertCell(1);
//   const cellPriority = newRow.insertCell(2);
//   const cellAction = newRow.insertCell(3);

//   // Set cell content
//   const rowNumber = subSubCategoryTableBody.rows.length;
//   cellID.textContent = rowNumber.toString();
//   cellName.textContent = name;
//   cellPriority.textContent = priority;

//   cellAction.innerHTML = `
//     <a href="/Product_Management/Category/SubSub Category/SubSubCategoryUpdate.html">
//     <span class="material-symbols-outlined border border-blue-500 rounded-md text-blue-500">
//       edit
//     </span>
//   </a>
//   <a href="#">
//       <span class="material-symbols-outlined border border-red-500 rounded-md text-red-500 delete-category">
//       delete
//     </span>
//      </a>
//     `;
//   cellAction
//     .querySelector(".delete-subSubCategory")
//     .addEventListener("click", function () {
//       // Retrieve the corresponding row and remove it
//       categoryTableBody.removeChild(existingRow);
//     });
// }
