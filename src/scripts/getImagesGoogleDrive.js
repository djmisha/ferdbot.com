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

const createGallery = data => {
  let counter = 12;
  const button = document.querySelector('.gallery-button');

  // increment counter on button click
  button.addEventListener('click', () => {
    let newCounter = data.length;

    // if counter is larger then data, hide button
    if (newCounter === data.length) {
      button.style.display = 'none';
    }

    // once counter is incremembed, render more images to the page
    renderImages(data, counter, newCounter);
  });

  renderImages(data, 0, counter);
  removeLoader();
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

const removeLoader = () => {
  const loading = document.querySelector('.loading');
  if (loading) {
    loading.remove();
  }
};

export default getImagesGoogleDrive;
