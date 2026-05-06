const sliderImage = document.getElementById("sliderImage")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")

const images = [
      {
            image: "images/img1.jpg",
            background: "#444"
      },
      {
            image: "images/img2.jpg",
            background: "#1B4332"
      },
      {
            image: "images/img3.jpg",
            background: "#ffffff"
      }
];

let currentIndex = 0;

function showImage(){
      sliderImage.src = images[currentIndex].image;
      document.body.style.background = images[currentIndex].background;
}

nextBtn.addEventListener("click" , () => {
      currentIndex++;

      if(currentIndex >= images.length){
            currentIndex = 0;
      }
      showImage();
});

prevBtn.addEventListener("click" , () => {
      currentIndex--;

      if(currentIndex < 0){
            currentIndex = images.length - 1;
      }
      showImage();
});