/*=============== SHOW MENU ===============*/
document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");

  const toggleMenu = () => navMenu.classList.add("show-menu");
  const closeMenu = () => navMenu.classList.remove("show-menu");

  navToggle?.addEventListener("click", toggleMenu);
  navClose?.addEventListener("click", closeMenu);
});
/*=============== SHOW FORM & SENT===============*/
document.addEventListener("DOMContentLoaded", () => {
  const headerForm = document.getElementById("header-form");
  const headerBtn = document.getElementById("header-btn");
  const formClose = document.getElementById("header__form-close");
  const form = document.getElementById("form");

  const headerSent = document.getElementById("header-sent");

  const sentClose = document.getElementById("header__sent-close");
  const sentBtn = document.getElementById("sent-btn");
  const showForm = () => {
    headerForm.classList.add("show-form");
  };

  const hideForm = () => {
    headerForm.classList.remove("show-form");
  };

  const showSent = () => {
    headerSent.classList.add("show-sent");
  };

  const hideSent = () => {
    headerSent.classList.remove("show-sent");
  };

  headerBtn?.addEventListener("click", showForm);
  formClose?.addEventListener("click", hideForm);

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting

    if (!form.checkValidity()) {
      form.reportValidity(); // Show browser's validation message
    } else {
      hideForm();
      showSent();
    }
  });

  sentClose?.addEventListener("click", hideSent);
  sentBtn?.addEventListener("click", hideSent);
});

/*=============== SELECT CARD===============*/
const selectCard = document.querySelectorAll(".select__content-card");

selectCard.forEach((item) => {
  const selectHeader = item.querySelector(".select__card-header");

  selectHeader.addEventListener("click", () => {
    const openCard = document.querySelector(".select__card-open");
    toggleItem(item);

    if (openCard && openCard != item) {
      toggleItem(openCard);
    }
  });
});

const toggleItem = (item) => {
  const selectContent = item.querySelector(".select__card-content");

  if (item.classList.contains("select__card-open")) {
    selectContent.removeAttribute("style");
    item.classList.remove("select__card-open");
  } else {
    selectContent.style.height = selectContent.scrollHeight + "px";
    item.classList.add("select__card-open");
  }
};

/*=============== SELECT Category===============*/
const selectTexts = document.querySelectorAll(".select__top-text");

selectTexts.forEach((text) => {
  text.addEventListener("click", () => {
    selectTexts.forEach((t) => {
      t.classList.remove("active");
    });
    text.classList.add("active");
  });
});

/*=============== ADVANTAGES CARD===============*/
const advCard = document.querySelectorAll(".advantages__card-right");

advCard.forEach((item) => {
  const advTop = item.querySelector(".advantages__card-top");

  advTop.addEventListener("click", () => {
    const openCard = document.querySelector(".advantages__card-open");
    advItem(item);

    if (openCard && openCard != item) {
      advItem(openCard);
    }
  });
});

const advItem = (item) => {
  const advText = item.querySelector(".advantages__card-text");

  if (item.classList.contains("advantages__card-open")) {
    advText.removeAttribute("style");
    item.classList.remove("advantages__card-open");
  } else {
    advText.style.height = advText.scrollHeight + "px";
    item.classList.add("advantages__card-open");
  }
};

/*=============== PRODUCTS Category===============*/
const productsTexts = document.querySelectorAll(".products__top-text");

productsTexts.forEach((text) => {
  text.addEventListener("click", () => {
    productsTexts.forEach((t) => {
      t.classList.remove("active");
    });
    text.classList.add("active");
  });
});

/*=============== PRODUCTS Swiper===============*/
var swiper = new Swiper(".products__content-bottom", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 2,
  speed: 600,
  preventClicks: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 60,
    depth: 350,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  on: {
    click(event) {
      swiper.slideTo(this.clickedIndex);
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
/*=============== CARRER Swiper ===============*/
var swiper = new Swiper('.carrer__content-bottom', {
  modules: [myPlugin],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  debugger: true,
});


function myPlugin({ swiper, extendParams, on }) {
  extendParams({
    debugger: false,
  });

  on('init', () => {
    if (!swiper.params.debugger) return;
  });
  on('click', (swiper, e) => {
    if (!swiper.params.debugger) return;
  });
  on('tap', (swiper, e) => {
    if (!swiper.params.debugger) return;
  });
  on('doubleTap', (swiper, e) => {
    if (!swiper.params.debugger) return;
  });
  on('sliderMove', (swiper, e) => {
    if (!swiper.params.debugger) return;
  });
  on('slideChange', () => {
    if (!swiper.params.debugger) return;
  });
  on('slideChangeTransitionStart', () => {
    if (!swiper.params.debugger) return;
  });
  on('slideChangeTransitionEnd', () => {
    if (!swiper.params.debugger) return;
  });
  on('transitionStart', () => {
    if (!swiper.params.debugger) return;
  });
  on('transitionEnd', () => {
    if (!swiper.params.debugger) return;
  });
  on('fromEdge', () => {
    if (!swiper.params.debugger) return;
  });
  on('reachBeginning', () => {
    if (!swiper.params.debugger) return;
  });
  on('reachEnd', () => {
    if (!swiper.params.debugger) return;
  });
}

/*=============== PRODUCTS Category===============*/
const contactsTexts = document.querySelectorAll(".contacts__top-text");

contactsTexts.forEach((text) => {
  text.addEventListener("click", () => {
    contactsTexts.forEach((t) => {
      t.classList.remove("active");
    });
    text.classList.add("active");
  });
});