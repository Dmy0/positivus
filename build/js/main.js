const accordionItems = document.querySelectorAll(".accordion__item");

accordionItems.forEach((item, i) => { 
    item.addEventListener("click", (e) => {
        accordionItems.forEach((item, j) => { 
            if (i === j) {
               item.classList.contains("_active") ? item.classList.remove("_active") : item.classList.add("_active");
            } else {
                item.classList.remove("_active");
            }
        });
    });
});

