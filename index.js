document.addEventListener('DOMContentLoaded', function () {
    // Get the menu icon and the navigation ul
    var menuIcon = document.querySelector('.bar');
    var navList = document.querySelector('nav ul');
    

    // Add click event listener to the menu icon
    menuIcon.addEventListener('click', function () {
      // Toggle the visibility of the navigation ul
      navList.style.display = (navList.style.display === 'none' || navList.style.display === '') ? 'block' : 'none';
     
    });
  });

  