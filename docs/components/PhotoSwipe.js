import { useLayoutEffect } from "react";
import PhotoSwipe from "photoswipe";
import PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default.js";

// Photoswipe root component with logic for binding image elements
const PhotoSwipeContainer = () => {
  useLayoutEffect(() => {
    var pswpElement = document.querySelectorAll(".pswp")[0];

    // build items array
    const galleryImages = [...document.querySelectorAll(".gallery-image")];

    const items = galleryImages.map((element) => ({
      src: element.src,
      w: 1600,
      h: 989,
    }));

    const openPhotoSwipe = (index) => {
      // define options (if needed)
      const options = {
        // optionName: 'option value'
        // for example:
        getThumbBoundsFn: function (index) {
          // find thumbnail element
          var thumbnail = document.querySelectorAll(".gallery-image")[index];

          // get window scroll Y
          var pageYScroll =
            window.pageYOffset || document.documentElement.scrollTop;
          // optionally get horizontal scroll

          // get position of element relative to viewport
          var rect = thumbnail.getBoundingClientRect();

          // w = width
          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };

          // Good guide on how to get element coordinates:
          // http://javascript.info/tutorial/coordinates
        },
        index, // start at first slide
        shareEl: false,
      };

      const gallery = new PhotoSwipe(
        pswpElement,
        PhotoSwipeUI_Default,
        items,
        options
      );

      gallery.init();
    };

    galleryImages.forEach((element, index) => {
      element.addEventListener("click", () => openPhotoSwipe(index));
    });
  }, []);
  return (
    <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="pswp__bg"></div>

      <div className="pswp__scroll-wrap">
        <div className="pswp__container">
          <div className="pswp__item" />
          <div className="pswp__item" />
          <div className="pswp__item" />
        </div>

        <div className="pswp__ui pswp__ui--hidden">
          <div className="pswp__top-bar">
            <div className="pswp__counter"></div>

            <button
              className="pswp__button pswp__button--close"
              title="Close (Esc)"
            ></button>

            <button
              className="pswp__button pswp__button--share"
              title="Share"
            ></button>

            <button
              className="pswp__button pswp__button--fs"
              title="Toggle fullscreen"
            ></button>

            <button
              className="pswp__button pswp__button--zoom"
              title="Zoom in/out"
            ></button>
            <div className="pswp__preloader">
              <div className="pswp__preloader__icn">
                <div className="pswp__preloader__cut">
                  <div className="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div className="pswp__share-tooltip"></div>
          </div>

          <button
            className="pswp__button pswp__button--arrow--left"
            title="Previous (arrow left)"
          ></button>

          <button
            className="pswp__button pswp__button--arrow--right"
            title="Next (arrow right)"
          ></button>

          <div className="pswp__caption">
            <div className="pswp__caption__center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoSwipeContainer
