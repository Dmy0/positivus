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
          navigation = document.querySelector(".slider__nav-stars")

    let starsCounter = slides.length
   
    const starsLogic = new Promise((resolve, reject) => {
        resolve()
    });

    starsLogic.then(r =>{
        let elem;
        for (let i = 1; i <= starsCounter; i++) {
            const stars = document.createElement("div");
            stars.classList.add("stars-img");
    
            navigation.appendChild(stars);
            elem = navigation
        }
        return elem
    }).then(r =>{
        const stars = r.querySelectorAll(".stars-img")
        starsNavigation(stars)
    })

    const starsNavigation = (navigation) => {
        navigation.forEach((item, i) => {
            i === currentSlide ? item.classList.add("active") : item.classList.remove("active")
           item.addEventListener("click", () => {
            currentSlide = i
            navigation.forEach((star, j) => {
                j === currentSlide ? star.classList.add("active") : star.classList.remove("active")
            })             
            removeSlidesPosition()
            addSlidesPosition()
            moveLeft.style.pointerEvents = "none"
            setTimeout(() =>{
            moveLeft.style.pointerEvents = "initial"
        }, 700)
           })
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

