window.addEventListener('scroll', function () {
    var mainNavSection = document.querySelector('.main-nav');
    var scrollPosition = window.scrollY;
    var newLeast = document.querySelector(".newleast");
    var houseIcon = document.querySelector(".house");
    var logoEx = document.querySelector(".exvn");
    
    var yKien = document.querySelector(".ykien");
    var tamSu = document.querySelector(".tamsu");
    var thuGian = document.querySelector(".thugian");

    if (scrollPosition === 0) {
        mainNavSection.classList.remove('shadow');
        logoEx.style.opacity = 0
        houseIcon.style.opacity = 1
        newLeast.style.display = "none";
        yKien.style.display = "block";
        tamSu.style.display = "block";
        thuGian.style.display = "block";
    } else {
        mainNavSection.classList.add('shadow');
        logoEx.style.opacity = 1
        houseIcon.style.opacity = 0
        newLeast.style.display = "block";
        yKien.style.display = "none";
        tamSu.style.display = "none";
        thuGian.style.display = "none";
    }
});


// Search box handle
const tabCar = document.querySelector(".tabs__v-car");
const tabBike = document.querySelector(".tabs__v-bike");

tabCar.addEventListener("click", function () {
    tabCar.classList.add("active");
    tabBike.classList.remove("active");
})

tabBike.addEventListener("click", function () {
    tabCar.classList.remove("active");
    tabBike.classList.add("active");
})

// Slider 
const sliderContainer = [...document.querySelectorAll('.swiper__wrapper')]
const nxtBtn = document.querySelectorAll('.btn__next')
const preBtn = document.querySelectorAll('.btn__prev')

sliderContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
