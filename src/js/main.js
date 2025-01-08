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



