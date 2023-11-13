
const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        buttons.forEach(b => b.classList.remove('active'));

        // Add 'active' class to the clicked button
        button.classList.add('active');
      });
    });