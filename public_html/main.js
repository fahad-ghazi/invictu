const video = document.getElementById("video");
const img = document.querySelector(".image-video");

img.onclick = function () {
  video.play();
};

video.onplay = function () {
  img.style.display = "none";
};
video.onclick = function () {
  img.style.display = "block";
  video.pause();
};
