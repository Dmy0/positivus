const accordionItems = document.querySelectorAll(".accordion__item");

accordionItems.forEach((item, i) => { 
    item.addEventListener("click", (e) => {
        accordionItems.forEach((item, j) => { 
            if (i === j) {
                item.classList.add("_active");
            } else {
                item.classList.remove("_active");
            }
        });
    });
});

