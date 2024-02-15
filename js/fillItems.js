const sale = document.querySelector('.sale');
const newIn = document.querySelector('.newIn');
const mens = document.querySelector('.mens');
const womens = document.querySelector('.womens');
const kids = document.querySelector('.kids');

const html = document.querySelector('html');

let htmlDimentions = html.getBoundingClientRect();
let htmlWidth = htmlDimentions.width;

export function fillItems(array, condition) {

    if (condition === "sale") {
            const productInner = sale.querySelector('.productInner');
            let i = 0;
            array.forEach(element => {
            
            let productSale = document.createElement('div');
            productSale.setAttribute("class","product");

            productSale.innerHTML = `
            <div class="productImg" style="background-image: url(${element.image});">
                <div class="saleBanner">
                ${element.sale}
                </div>
            </div>
            <div class="productInfo">
                <h2 class="productName">${element.name}</h2>
                <p class="productDescrption black">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Saepe, fugit eos neque, odio a illo illum veritatis.</p>
                <div class="prices">
                    <span class="oldPrice red">${element.oldPrice}</span>
                    <span class="newPrice black">${element.newPrice}</span>
                </div>
                <div class="productBtnWrapper">
                    <a class="productBtn">
                        ADD TO CART
                    </a>
                </div>
            </div>`;

            if (element.sale !== "none") {
                productInner.appendChild(productSale);
                i++;
            }

        });

        if (htmlWidth >= 1200) {
            productInner.style.width = (i * 550) + "px";
        } else {
            productInner.style.width = (i * 75) + "vw";
        }
        
        
    } else if (condition === "newIn") {

        const productInner = newIn.querySelector('.productInner');
        let i = 0;

        for (let i = array.length - 5; i < array.length; i++) {

            if (array[i].sale !== "none") {

                let productNewIn = document.createElement('div');
                productNewIn.setAttribute("class","product blue");

                productNewIn.innerHTML = `
                <div class="productImg" style="background-image: url(${array[i].image});">
                    <div class="saleBanner">
                    ${array[i].sale}
                    </div>
                </div>
                <div class="productInfo">
                    <h2 class="productName">${array[i].name}</h2>
                    <p class="productDescrption black">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Saepe, fugit eos neque, odio a illo illum veritatis.</p>
                    <div class="prices">
                        <span class="oldPrice blue">${array[i].oldPrice}</span>
                        <span class="newPrice black">${array[i].newPrice}</span>
                    </div>
                    <div class="productBtnWrapper">
                        <a class="productBtn">
                            ADD TO CART
                        </a>
                    </div>
                </div>`;

                productInner.appendChild(productNewIn);
            } else {

                let productNewIn = document.createElement('div');
                productNewIn.setAttribute("class","product blue");

                productNewIn.innerHTML = `
                <div class="productImg" style="background-image: url(${array[i].image});"></div>
                <div class="productInfo">
                    <h2 class="productName">${array[i].name}</h2>
                    <p class="productDescrption black">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Saepe, fugit eos neque, odio a illo illum veritatis.</p>
                    <div class="prices">
                        <span class="newPrice black">${array[i].oldPrice}</span>
                    </div>
                    <div class="productBtnWrapper">
                        <a class="productBtn">
                            ADD TO CART
                        </a>
                    </div>
                </div>`;

                productInner.appendChild(productNewIn);

            }
        }

        if (htmlWidth >= 1200) {
            productInner.style.width = (5 * 550) + "px";
        } else {
            productInner.style.width = (5 * 75) + "vw";
        }

    } 

}

export function fillItemsMens(array) {

        let i = 0;

        const productInner = mens.querySelector('.productInner');

        array.forEach((element) => {
            if (element.type === "male") {
                if (element.sale !== "none") {

                    const productNewIn = document.createElement('div');
                    productNewIn.setAttribute("class","product orange");
                    
    
                    productNewIn.innerHTML = `
                    <div class="productImg" style="background-image: url(${element.image});">
                        <div class="saleBanner">
                        ${element.sale}
                        </div>
                    </div>
                    <div class="productInfo">
                        <h2 class="productName">${element.name}</h2>
                        <p class="productDescrption black">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Saepe, fugit eos neque, odio a illo illum veritatis.</p>
                        <div class="prices">
                            <span class="oldPrice orange">${element.oldPrice}</span>
                            <span class="newPrice black">${element.newPrice}</span>
                        </div>
                        <div class="productBtnWrapper">
                            <a class="productBtn">
                                ADD TO CART
                            </a>
                        </div>
                    </div>`;
    
                    productInner.appendChild(productNewIn);
                    i++;
                } else {
                    let productNewIn = document.createElement('div');
                    productNewIn.setAttribute("class","product orange");
    
                    productNewIn.innerHTML = `
                    <div class="productImg" style="background-image: url(${element.image});"></div>
                    <div class="productInfo">
                        <h2 class="productName">${element.name}</h2>
                        <p class="productDescrption black">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Saepe, fugit eos neque, odio a illo illum veritatis.</p>
                        <div class="prices">
                            <span class="newPrice black">${element.oldPrice}</span>
                        </div>
                        <div class="productBtnWrapper">
                            <a class="productBtn">
                                ADD TO CART
                            </a>
                        </div>
                    </div>`;
    
                    productInner.appendChild(productNewIn);
                    i++;
                }
            }
        })
        
        if (htmlWidth >= 1200) {
            productInner.style.width = (i * 550) + "px";
        } else {
            productInner.style.width = (i * 75) + "vw";
        }

}

export function fillItemsWomens(array) {

    let i = 0;

    const productInner = womens.querySelector('.productInner');

    array.forEach((element) => {
        if (element.type === "female") {
            if (element.sale !== "none") {

                const productNewIn = document.createElement('div');
                productNewIn.setAttribute("class","product");
                

                productNewIn.innerHTML = `
                <div class="productImg" style="background-image: url(${element.image});">
                    <div class="saleBanner">
                    ${element.sale}
                    </div>
                </div>
                <div class="productInfo">
                    <h2 class="productName">${element.name}</h2>
                    <p class="productDescrption black">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Saepe, fugit eos neque, odio a illo illum veritatis.</p>
                    <div class="prices">
                        <span class="oldPrice red">${element.oldPrice}</span>
                        <span class="newPrice black">${element.newPrice}</span>
                    </div>
                    <div class="productBtnWrapper">
                        <a class="productBtn">
                            ADD TO CART
                        </a>
                    </div>
                </div>`;

                productInner.appendChild(productNewIn);
                i++;
            } else {
                let productNewIn = document.createElement('div');
                productNewIn.setAttribute("class","product");

                productNewIn.innerHTML = `
                <div class="productImg" style="background-image: url(${element.image});"></div>
                <div class="productInfo">
                    <h2 class="productName">${element.name}</h2>
                    <p class="productDescrption black">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Saepe, fugit eos neque, odio a illo illum veritatis.</p>
                    <div class="prices">
                        <span class="newPrice black">${element.oldPrice}</span>
                    </div>
                    <div class="productBtnWrapper">
                        <a class="productBtn">
                            ADD TO CART
                        </a>
                    </div>
                </div>`;

                productInner.appendChild(productNewIn);
                i++;
            }
        }
    })
    
    if (htmlWidth >= 1200) {
        productInner.style.width = (i * 550) + "px";
    } else {
        productInner.style.width = (i * 75) + "vw";
    }

}

export function fillItemsKids(array) {

    let i = 0;

    const productInner = kids.querySelector('.productInner');

    array.forEach((element) => {
        if (element.type === "kids") {
            if (element.sale !== "none") {

                const productNewIn = document.createElement('div');
                productNewIn.setAttribute("class","product yellow");
                

                productNewIn.innerHTML = `
                <div class="productImg" style="background-image: url(${element.image});">
                    <div class="saleBanner">
                    ${element.sale}
                    </div>
                </div>
                <div class="productInfo">
                    <h2 class="productName">${element.name}</h2>
                    <p class="productDescrption black">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Saepe, fugit eos neque, odio a illo illum veritatis.</p>
                    <div class="prices">
                        <span class="oldPrice yellow">${element.oldPrice}</span>
                        <span class="newPrice black">${element.newPrice}</span>
                    </div>
                    <div class="productBtnWrapper">
                        <a class="productBtn">
                            ADD TO CART
                        </a>
                    </div>
                </div>`;

                productInner.appendChild(productNewIn);
                i++;
            } else {
                let productNewIn = document.createElement('div');
                productNewIn.setAttribute("class","product yellow");

                productNewIn.innerHTML = `
                <div class="productImg" style="background-image: url(${element.image});"></div>
                <div class="productInfo">
                    <h2 class="productName">${element.name}</h2>
                    <p class="productDescrption black">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Saepe, fugit eos neque, odio a illo illum veritatis.</p>
                    <div class="prices">
                        <span class="newPrice black">${element.oldPrice}</span>
                    </div>
                    <div class="productBtnWrapper">
                        <a class="productBtn">
                            ADD TO CART
                        </a>
                    </div>
                </div>`;

                productInner.appendChild(productNewIn);
                i++;
            }
        }
    })
    
    if (htmlWidth >= 1200) {
        productInner.style.width = (i * 550) + "px";
    } else {
        productInner.style.width = (i * 75) + "vw";
    }

}