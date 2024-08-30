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
