document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggle');
  const menuOptions = document.querySelector('.menu_vertical');

  toggleButton.addEventListener('click', function(){
    toggleButton.classList.toggle('on');

    if (toggleButton.classList.contains('on')) {
      menuOptions.style.display = 'block';
    } else {
      menuOptions.style.display = 'none'
    }
  }
)});