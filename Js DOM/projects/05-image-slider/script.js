const sliderImage = document.getElementById("sliderImage")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")

const images = ["images/img1.jpg" , "images/img2.jpg" , "images/img3.jpg"];

let currentIndex = 0;

function showImage(){
      sliderImage.src = images[currentIndex]
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