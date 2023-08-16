const carouselContainer = document.querySelector(".carousel-container");
const carouselControlsContainer = document.querySelector(".carousel-controls");
const carouselControls = ["previous", "next"];
const carouselItems = document.querySelectorAll(".carousel-item");

class Carousel {
  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  updateCarousel() {
    this.carouselArray.forEach((el) => {
      el.classList.remove("carousel-item-1");
      el.classList.remove("carousel-item-2");
      el.classList.remove("carousel-item-3");
      el.classList.remove("carousel-item-4");
    });

    this.carouselArray.slice(0, 4).forEach((el, i) => {
      el.classList.add(`carousel-item-${i + 1}`);
    });
  }

  setCurrentState(direction) {
    if (direction.classList.contains("carousel-controls-previous")) {
      this.carouselArray.unshift(this.carouselArray.pop());
    } else {
      this.carouselArray.push(this.carouselArray.shift());
    }
    const currentIndex = this.carouselArray.findIndex((el) =>
      el.classList.contains("carousel-item-1")
    );

    this.updateCarousel();
    this.updatePagination(currentIndex);
  }

  setControls() {
    this.carouselControls.forEach((control) => {
      carouselControlsContainer.appendChild(
        document.createElement("button")
      ).className = `carousel-controls-${control}`;
    });
  }

  useControls() {
    const triggers = [...carouselControlsContainer.childNodes];
    triggers.forEach((control) => {
      control.addEventListener("click", (e) => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }

  updatePagination(currentIndex) {
    const paginationDots = document.querySelectorAll(".carousel-nav li");
    paginationDots.forEach((dot, index) => {
      dot.classList.remove("active");
      if (index === currentIndex) {
        dot.classList.add("active");
      }
    });
  }
}

const packageCarousel = new Carousel(
  carouselContainer,
  carouselItems,
  carouselControls
);

packageCarousel.setControls();
packageCarousel.useControls();
