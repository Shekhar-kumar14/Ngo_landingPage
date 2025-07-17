    const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.navlink ul');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
   menuIcon.classList.toggle('active')

  // if (menuIcon.innerHTML === "☰") {
  //   menuIcon.innerHTML = "✖";
  // } else {
  //   menuIcon.innerHTML = "☰";

  // }
// navLinks.style.display="block"
// if (navLinks.style.display==="block"){
//   navLinks.style.display= "none"
  
// }
// else{
//   navLinks.style.display="block"
// }

});