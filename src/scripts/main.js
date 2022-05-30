// Remove IG button

const removeIG = () => {
  const button = document.querySelector('a.eapps-link');
  button.remove()
}

const myTimeout = setTimeout(removeIG, 2000);
