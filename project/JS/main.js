const slider = document.querySelector(".image-slider");
const arrLeft = document.querySelector(".arrow-left");
const arrRight = document.querySelector(".arrow-right");

const images = [
  "../IMG/sneaker1.jpg",
  "../IMG/sneaker2.jpg",
  "../IMG/sneaker3.jpg",
];

let id = 0;

function slide(id) {
  console.log(`Sliding to image id: ${id}`);
  slider.style.backgroundImage = `url(${images[id]})`;
  slider.classList.add("image-fade");
  setTimeout(() => {
    slider.classList.remove("image-fade");
  }, 500);
}

function nextImage() {
  id++;
  if (id >= images.length) {
    id = 0;
  }
  slide(id);
}

arrLeft.addEventListener("click", () => {
  console.log("Left arrow clicked");
  id--;
  if (id < 0) {
    id = images.length - 1;
  }
  slide(id);
  resetInterval();
});

arrRight.addEventListener("click", () => {
  console.log("Right arrow clicked");
  id++;
  if (id >= images.length) {
    id = 0;
  }
  slide(id);
  resetInterval();
});

let intervalId = setInterval(nextImage, 4000);

function resetInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(nextImage, 4000);
}

slide(id);

let isDown = false;
let startX;
let scrollLeft;
const sliderr = document.querySelector(".items");

const end = () => {
  isDown = false;
  sliderr.classList.remove("active");
};

const start = (e) => {
  if (e.type === "mousedown" && e.button !== 0) return;
  isDown = true;
  sliderr.classList.add("active");
  startX = (e.pageX || e.touches[0].pageX) - sliderr.offsetLeft;
  scrollLeft = sliderr.scrollLeft;
};

const move = (e) => {
  if (!isDown) return;

  e.preventDefault();
  const x = (e.pageX || e.touches[0].pageX) - sliderr.offsetLeft;
  const dist = x - startX;
  sliderr.scrollLeft = scrollLeft - dist;
};

(() => {
  sliderr.addEventListener("mousedown", start);
  sliderr.addEventListener("touchstart", start);

  sliderr.addEventListener("mousemove", move);
  sliderr.addEventListener("touchmove", move);

  sliderr.addEventListener("mouseleave", end);
  sliderr.addEventListener("mouseup", end);
  sliderr.addEventListener("touchend", end);

  const imagesAndLinks = sliderr.querySelectorAll("img, a");
  imagesAndLinks.forEach((el) => {
    el.addEventListener("dragstart", (e) => e.preventDefault());
  });
})();
