import { fillItems, fillItemsKids, fillItemsMens, fillItemsWomens } from "./fillItems.js";

// Slider
const headerSlider = document.querySelector('.headerSlider');

const sliderButtons = headerSlider.querySelectorAll('.sliderBtn');

const sliderTextElements = headerSlider.querySelectorAll('.text')

function carousel() {

    const sliderClasses = ["first","second","third","fourth"];
    let i = 0;
    
    setInterval(() => {
        if (i < sliderClasses.length - 1) {
            headerSlider.classList.replace(sliderClasses[i],sliderClasses[i+1]);
            i++;
        } else {
            headerSlider.classList.replace(sliderClasses[sliderClasses.length - 1],sliderClasses[0]);
            i = 0;
        }
    },5000);

}

carousel();

const html = document.querySelector('html');
const section = document.querySelector('section');

let htmlDimentions = html.getBoundingClientRect();
    let htmlWidth = htmlDimentions.width;

const sale = document.querySelector('.sale');
const newIn = document.querySelector('.newIn');
const mens = document.querySelector('.mens');
const womens = document.querySelector('.womens');
const kids = document.querySelector('.kids');

fetch("../base.json").then((response) => {
    return response.json();
}).then((base) => {
    fillItems(base,"sale");
    fillItems(base,"newIn");
    fillItemsMens(base);
    fillItemsWomens(base);
    fillItemsKids(base);
}).then(() => {
    
    const product = document.querySelector('.product');

    let productDimensions = product.getBoundingClientRect();
    let productWidth;

    if (htmlWidth >= 1200) {
        productWidth = productDimensions.width + 54;
    } else if (htmlWidth <= 900) {
        productWidth = productDimensions.width+30;
    }
     else {
        productWidth = productDimensions.width + 50;
    }

    function productSliderSale() {
        const leftBtn = sale.querySelector('.leftBtn');
        const rightBtn = sale.querySelector('.rightBtn');
        const sliderRect = sale.querySelector('.productRect');

        leftBtn.addEventListener('click', () => {
            sliderRect.scrollLeft -= productWidth; 
        });

        rightBtn.addEventListener('click', () => {
            sliderRect.scrollLeft += productWidth;
        })
    }

    productSliderSale();

    function productSliderNewIn() {
        const leftBtn = newIn.querySelector('.leftBtn');
        const rightBtn = newIn.querySelector('.rightBtn');
        const sliderRect = newIn.querySelector('.productRect');

        leftBtn.addEventListener('click', () => {
            sliderRect.scrollLeft -= productWidth; 
        });

        rightBtn.addEventListener('click', () => {
            sliderRect.scrollLeft += productWidth;
        })
    }

    productSliderNewIn();

    function productSliderMens() {
        const leftBtn = mens.querySelector('.leftBtn');
        const rightBtn = mens.querySelector('.rightBtn');
        const sliderRect = mens.querySelector('.productRect');

        leftBtn.addEventListener('click', () => {
            sliderRect.scrollLeft -= productWidth; 
        });

        rightBtn.addEventListener('click', () => {
            sliderRect.scrollLeft += productWidth;
        })
    }

    productSliderMens();

    function productSliderWomens() {
        const leftBtn = womens.querySelector('.leftBtn');
        const rightBtn = womens.querySelector('.rightBtn');
        const sliderRect = womens.querySelector('.productRect');

        leftBtn.addEventListener('click', () => {
            sliderRect.scrollLeft -= productWidth; 
        });

        rightBtn.addEventListener('click', () => {
            sliderRect.scrollLeft += productWidth;
        })
    }

    productSliderWomens();

    function productSliderKids() {
        const leftBtn = kids.querySelector('.leftBtn');
        const rightBtn = kids.querySelector('.rightBtn');
        const sliderRect = kids.querySelector('.productRect');

        leftBtn.addEventListener('click', () => {
            sliderRect.scrollLeft -= productWidth; 
        });

        rightBtn.addEventListener('click', () => {
            sliderRect.scrollLeft += productWidth;
        })
    }

    productSliderKids();

    // Scrolling

    function scrollingEvent() {
        const menuLinks = document.querySelectorAll('.menuLink');
        const logoLink = document.querySelector('.logoLink');

        let sectionDimentions = section.getBoundingClientRect();
        let sectionHeight = sectionDimentions.height;

        menuLinks.forEach((item,index) => {
            item.addEventListener("click",() => {
                if (index == 0) {
                    html.scrollTop = sectionHeight;
                } else {
                    html.scrollTop = (sectionHeight) * (index+1);
                }
            })
        })

        logoLink.addEventListener('click', () => {
            html.scrollTop = 0;
        })
    }

    scrollingEvent();

    function menuTrigger() {
        const menuLinks = document.querySelector('.menuLinks');
        const menuBtn = document.querySelector('.menuBtn');

        let i = 0;

        menuBtn.addEventListener('click', () => {
            if (i % 2 == 0) {
                menuLinks.style.top = "70px";
                menuLinks.style.opacity = "1";
            } else {
                menuLinks.style.top = "-263px";
                menuLinks.style.opacity = "0";
            }
            i++;
        })
    }

    menuTrigger();

})
