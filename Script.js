//Navbar  and Sidebar  starts
document.addEventListener("DOMContentLoaded", function () {
  // Get the button and the mobile menu
  var button = document.querySelector(".left");
  var mobileMenu = document.querySelector('[data-collapse="sticky-sidebar"]');

  // Toggle the mobile menu when the button is clicked
  button.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
});
function loadContent(url) {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      document.querySelector(".content").innerHTML = html;
    });
}

// Event listener for sidebar item click
document.querySelectorAll(".sidebar a").forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior (e.g., navigating to the href)

    // Update the content based on the clicked item
    const url = item.getAttribute("href");
    loadContent(url);
  });
});

//when clicked for color change in the sidebar items
function changeColor(link, event) {
  event.preventDefault(); // Prevent default navigation behavior

  var allLinks = document.querySelectorAll(".sidebar-nav a");
  allLinks.forEach(function (otherLink) {
    otherLink.classList.remove("active");
  });

  link.classList.add("active");

  window.location.href = link.getAttribute("href");
}

//
function changeColor(element) {
  element.classList.toggle("clicked");
}

function toggleDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
}

// category
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

//language picker
function toggleSelect() {
  var select = document.getElementById("language-picker-select");
  select.focus(); // Ensure the select is focused
  select.click(); // Simulate a click on the select element
}

//inhouse product

//orders pagination:
document.addEventListener("DOMContentLoaded", function () {
  const pageButtons = document.querySelectorAll(".page-btn");

  pageButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
});

//toggle on off:
   // Get all elements with the toggle class
   const toggleElements = document.querySelectorAll('.toggle-element');

   // Add a click event listener to toggle the state for each element
   toggleElements.forEach(toggleElement => {
     toggleElement.addEventListener('click', () => {
       // Toggle the value between 1 and 0
       const currentValue = parseInt(toggleElement.getAttribute('data-value'));
       const newValue = currentValue === 1 ? 0 : 1;

       // Update the value attribute
       toggleElement.setAttribute('data-value', newValue);

       // Toggle the class for the "on" state
       toggleElement.classList.toggle('on', newValue === 1);

       // Set the icon based on the value
       toggleElement.innerText = newValue === 1 ? 'toggle_on' : 'toggle_off';
     });
   });