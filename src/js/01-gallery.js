import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

// Change code below this line

function renderGallery() {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"></a></li>`;
    })
    .join('');
  gallery.innerHTML = markup;
  removeListStyles();
};

function removeListStyles() {
  const galleryItems = document.querySelectorAll('.gallery__item');
  galleryItems.forEach(item => {
    item.style.listStyle = 'none';
    item.style.padding = '0';
    item.style.margin = '0';
  });
};

renderGallery();

const galleryShow = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
