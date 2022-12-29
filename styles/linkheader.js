const dropdownLink = document.querySelector('.dropdown-link');
const links = document.querySelectorAll('.link-header a');
let isDropdownOpen = false;

window.addEventListener('resize', () => {
  if (window.innerWidth < 600) {
    links.forEach(link => link.style.display = 'none');
    isDropdownOpen = false;

    dropdownLink.style.display = 'block';
  } else {
    links.forEach(link => link.style.display = 'block');
    isDropdownOpen = true;

  }
});

dropdownLink.addEventListener('click', () => {
  if (isDropdownOpen) {
    links.forEach(link => link.style.display = 'none');
    isDropdownOpen = false;

  } else {
    links.forEach(link => link.style.display = 'block');
    isDropdownOpen = true;
  }
});