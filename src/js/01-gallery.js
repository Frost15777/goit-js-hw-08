// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const gallery = document.querySelector('.gallery')

const galleryMarkup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('');

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

new SimpleLightbox('.gallery__link', {
    captionDelay: 250,
    captionsData: 'alt',
});

console.log(galleryItems);
