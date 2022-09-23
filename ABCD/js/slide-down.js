function main() {
    var nav = document.getElementById('nav-drop-down');
    nav.addEventListener('click',function() {
      nav.className = (!nav.classList.contains('active')) ? 'active' : '';
    });
  }
  addEventListener('load',main);