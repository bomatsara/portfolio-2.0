import * as basicLightbox from 'basiclightbox';

export function lightboxInstance() {
  return basicLightbox.create(`
    <div class="modal">
        <button class="modal-close icon icon-close"></button>
        <div class="modal-title text_caption color-accent">test</div>
        <div class="modal-text text">text</div>
    </div>
`, {
    onShow: (instance) => {
      instance.element().querySelector('.modal-close').onclick = instance.close
    }
  });
}