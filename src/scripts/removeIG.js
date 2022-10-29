/**
 * Remove IG Plugin Singnature button
 */
const removeIG = () => {
  const button = document.querySelector('a.eapps-link');
  button.remove();
  removeIfOverQuota();
};

const removeIfOverQuota = () => {
  const feed = document.querySelector('.insta-feed');
  const errors = document.querySelectorAll('.insta-feed a');
  const disabled = 'Widget is deactivated';
  if (errors) {
    for (let i = 0; i < errors.length; i++) {
      const element = errors[i];
      if (element.innerHTML.includes(disabled)) {
        feed.remove();
      }
    }
  }
};

export default removeIG;
