// Dean Attali / Beautiful Jekyll 2023

let BeautifulJekyllJS = {
  bigImgEl: null,
  numImgs: null,

  init: function () {
    // show the big header image
    BeautifulJekyllJS.initImgs();
    BeautifulJekyllJS.initSearch();
  },

  initImgs: function () {
    // If the page has large images to randomly select from, choose an image
    if (document.querySelector("#header-big-imgs")) {
      this.bigImgEl = document.querySelector("#header-big-imgs");
      this.numImgs = this.bigImgEl.getAttribute("data-num-img");

      // Set an initial image
      const imgInfo = this.getImgInfo();
      this.setImg(imgInfo.src, imgInfo.desc);

      // If there are multiple images, cycle through them
      if (this.numImgs > 1) {
        this.cycleImages();
      }
    }
  },

  getImgInfo: function () {
    const randNum = Math.floor(Math.random() * this.numImgs) + 1;
    const src = this.bigImgEl.getAttribute(`data-img-src-${randNum}`);
    const desc = this.bigImgEl.getAttribute(`data-img-desc-${randNum}`);
    return { src, desc };
  },

  setImg: function (src, desc) {
    const introHeader = document.querySelector(".intro-header.big-img");
    introHeader.style.backgroundImage = `url('${src}')`;
    const imgDesc = document.querySelector(".img-desc");
    if (desc) {
      imgDesc.textContent = desc;
      imgDesc.style.display = "inline";
    } else {
      imgDesc.style.display = "none";
    }
  },

  cycleImages: function () {
    setInterval(() => {
      const imgInfo = this.getImgInfo();
      const newImg = document.createElement("div");
      newImg.classList.add("big-img-transition");
      newImg.style.backgroundImage = `url('${imgInfo.src}')`;

      const introHeader = document.querySelector(".intro-header.big-img");
      introHeader.prepend(newImg);

      setTimeout(() => (newImg.style.opacity = "1"), 50);

      setTimeout(() => {
        this.setImg(imgInfo.src, imgInfo.desc);
        newImg.remove();
      }, 1000);
    }, 6000);
  },

  initSearch: function () {
    const searchOverlay = document.getElementById("beautifuljekyll-search-overlay");
    if (!searchOverlay) return;

    const openSearch = (e) => {
      e.preventDefault();
      searchOverlay.style.display = "block";
      document.getElementById("nav-search-input").focus();
      document.body.classList.add("overflow-hidden");
    };

    const closeSearch = (e) => {
      if (e) e.preventDefault();
      searchOverlay.style.display = "none";
      document.body.classList.remove("overflow-hidden");
    };

    document.getElementById("nav-search-link").addEventListener("click", openSearch);
    if (document.getElementById("nav-search-link-mobile")) {
      document.getElementById("nav-search-link-mobile").addEventListener("click", openSearch);
    }
    document.getElementById("nav-search-exit").addEventListener("click", closeSearch);
    document.addEventListener("keyup", (e) => {
      if (e.key === "Escape") closeSearch();
    });
  },
};

document.addEventListener("DOMContentLoaded", BeautifulJekyllJS.init);