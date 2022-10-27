/**
 * Remove IG Plugin Singnature button
 */
const removeIG = () => {
  const button = document.querySelector('a.eapps-link');
  button.remove();
};

setTimeout(removeIG, 3000);

/**
 * Pipedream Google Drive
 */

const getImagesGoogleDrive = () => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const options = {
    method: 'GET',
    headers,
    mode: 'cors',
  };

  const getData = async () => {
    const url = 'https://eofjgtq820qs9wf.m.pipedream.net';
    const request = await fetch(url, options);
    const data = await request.json();
    return data.$return_value;
  };

  getData().then(data => createGallery(data));
};

setTimeout(getImagesGoogleDrive, 1000);

const createGallery = data => {
  // create a counter for how many images we want to show to start
  let counter = 12;
  const button = document.querySelector('.gallery-button');

  // increment counter on button click
  button.addEventListener('click', () => {
    counter = counter + 12;
    let oldCounter = counter;
    let newCounter = counter + 12;

    // if counter is larger then data, hide button and set counter to max length
    if (newCounter > data.length) {
      newCounter = data.length;
      button.style.display = 'none';
    }

    // once counter is incremembed, render more images to the page
    renderImages(data, oldCounter, newCounter);
  });

  renderImages(data, 0, counter);
};

const renderImages = (data, startingCount, endingCount) => {
  const gallery = document.querySelector('.gallery');

  for (let i = startingCount; i < endingCount; i++) {
    const { id } = data[i];
    buildImageMarkup(gallery, id);
  }
};

const buildImageMarkup = (gallery, id) => {
  // Create HTML Markup for Thumbnails
  const element = document.createElement('figure');
  const image = document.createElement('img');
  const link = document.createElement('a');
  const fullSizeSrc = `https://drive.google.com/uc?export=view&id=${id}`;
  const thumbnailSrc = `https://drive.google.com/thumbnail?sz=w200&id=${id}`;
  link.setAttribute('href', fullSizeSrc);
  link.setAttribute('data-fancybox', 'gallery');
  image.setAttribute('src', thumbnailSrc);

  // Attach Thumbnails to Page
  link.appendChild(image);
  element.appendChild(link);
  gallery.appendChild(element);
};
