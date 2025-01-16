const accordionItems = document.querySelectorAll(".accordion__item");

accordionItems.forEach((item, i) => { 
    item.addEventListener("click", (e) => {
        accordionItems.forEach((item, j) => { 
            if (i === j) {
               item.classList.contains("_open") ? item.classList.remove("_open") : item.classList.add("_open");
            } else {
                item.classList.remove("_open");
            }
        });
    });
});

const sliderWrap = document.querySelector(".slider")
      

function setSlider(sliderWrap, slidePosition) {
    let currentSlide = slidePosition
    const slides = sliderWrap.querySelectorAll(".slide"),
          moveLeft = sliderWrap.querySelector(".moveLeft"),
          moveRight = sliderWrap.querySelector(".moveRight"),
          navigation = document.querySelector(".slider__nav-stars"),
          starsCounter = 5

    for (let i = 1; i <= starsCounter; i++) {
        const stars = document.createElement("div");
        const starsItem = document.createElement("img");
        stars.classList.add("stars-img");
        starsItem.src = "../img/slider/navigation/star.png";

        stars.appendChild(starsItem);
        navigation.appendChild(stars);
    }

    const starsNavigation = () => {
        navigation.forEach((item, i) => {
            if (item === currentSlide) {
                
            }
        })
    }

    const addSlidesPosition = () => {
        slides.forEach((slide, i) =>{
            if (i === currentSlide) {
                slide.classList.add("_active") 
                slides[currentSlide + 1] ? slides[currentSlide + 1].classList.add("_right") : slides[0].classList.add("_right")
                slides[currentSlide - 1] ? slides[currentSlide - 1].classList.add("_left") : slides[slides.length -1].classList.add("_left")
            }
    
        })  
    }

    const removeSlidesPosition = () =>{
        slides.forEach((slide, i) =>{
            slide.classList.remove("_active")
            slide.classList.remove("_left")
            slide.classList.remove("_right")
        })
    }

    addSlidesPosition()

    moveLeft.addEventListener("click", () =>{
        --currentSlide  < 0 ? currentSlide = slides.length -1 : currentSlide
        removeSlidesPosition()
        addSlidesPosition()
        moveLeft.style.pointerEvents = "none"
        setTimeout(() =>{
            moveLeft.style.pointerEvents = "initial"
        }, 700)
    })
    
    moveRight.addEventListener("click", () =>{
        ++currentSlide > slides.length - 1 ? currentSlide = 0 : currentSlide
        removeSlidesPosition()
        addSlidesPosition()
        moveRight.style.pointerEvents = "none"
        setTimeout(() =>{
            moveRight.style.pointerEvents = "initial"
        }, 700)
    })

}

setSlider(sliderWrap, 2)

