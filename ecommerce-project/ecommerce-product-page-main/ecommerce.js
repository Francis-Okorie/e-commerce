const menuToggle = document.querySelector(".hamburger");
const menuItem = document.querySelector('.mole');
const closeNav = document.querySelector(".closetoggle");
const modalToggle = document.querySelector(".close-toggle");
const modalContent = document.querySelector(".product-modal");
const productContent = document.querySelector(".product-sub");
const modalContentThumbnail = document.querySelector(".product-modal-thumbnail");
const thumbnailToggle = document.querySelector(".modal-toggle-thumbnail");
const minusButton = document.querySelector(".minus");
const plusButton = document.querySelector(".plus");
const numberValue = document.querySelector(".number");
const cartIconValue = document.querySelector(".cart-icon-value");
const cart = document.querySelector(".cart");
const cartMainContent = document.querySelector(".cart-content");
const actionCart = document.querySelector(".btn-cc");
const productPrice = document.querySelector(".product-pricing");
const CountValue = document.querySelector(".count-digit");
const productOutput =document.querySelector(".output");
const nextBtn = document.querySelector(".next-arrow");
const prevBtn = document.querySelector(".previous-arrow");
const productQuery = document.querySelector(".product-display-sub");
const cartDetail = document.querySelector(".cart-details");
const emptyCart = document.querySelector(".cart-empty");
const deleteBtn = document.querySelector(".delete");
const gallery = document.querySelector(".thumnail-img");



let count = 0;

cart.addEventListener("click", () => {
    const visibilty = cartMainContent.getAttribute("data-visible");

    if(visibilty === "false") {
        cartMainContent.setAttribute("data-visible", true);
    } else if(visibilty === "true") {
        cartMainContent.setAttribute("data-visible", false);
    }
});

plusButton.addEventListener("click", () => {
     count++;
     numberValue.innerHTML = count;
     cartIconValue.innerHTML = count;
     emptyCart.style.display = "none";
     cartDetail.style.display = "block";
     cartDetail.style.display = "flex";
});

minusButton.addEventListener("click", () => {
    if(count > 0) {
        count--;
        numberValue.innerHTML = count;
        cartIconValue.innerHTML = count;
        
    } else if(count === 0) {
        cartDetail.style.color = "red"; 
        console.log("test");
    }
});





menuToggle.addEventListener("click", () => {
    const visibilty = menuItem.getAttribute("data-visible");

    if(visibilty === "false") {
        menuItem.setAttribute("data-visible", true);
    }

    console.log("clicked");
});

closeNav.addEventListener("click", () => {
    const visibilty = menuItem.getAttribute("data-visible");
    if(visibilty === "true") {
        menuItem.setAttribute("data-visible", false);
    }
});

//modalToggle.addEventListener("click", () => {
 //   const visibilty = modalContent.getAttribute("data-visible");

  //  if(visibilty === "false") {
    //    modalContent.setAttribute("data-visible", true);
    //    productContent.setAttribute("data-visible", true);
  //  } else{
  //      modalToggle.setAttribute("data-visible", false);
 //   }
 //});


productContent.addEventListener("click", () => {
    const visibilty = modalContentThumbnail.getAttribute("data-visible");
     
    if(visibilty === "false") {
        modalContentThumbnail.setAttribute("data-visible", true);
    }
});

thumbnailToggle.addEventListener("click", () => {
    const visibilty = modalContentThumbnail.getAttribute("data-visible");

    if(visibilty === "true") {
        modalContentThumbnail.setAttribute("data-visible", false);
    }
});

actionCart.addEventListener("click", () => {
    let newProductPrice = 128;
    productPrice.innerHTML = newProductPrice;
    const productPriceNew = (parseInt(productPrice.innerHTML));
    
    CountValue.innerHTML = count;
    
    productOutput.innerHTML = productPriceNew * count;
    const visibilty = cartDetail.getAttribute("data-visible");

    if(count === 0) {
        cartDetail.style.display = "none"; 
        emptyCart.style.display = "block";
        console.log("test");
    }
});

deleteBtn.addEventListener("click", () => {
    cartDetail.style.display = "none";
    emptyCart.style.display = "block";
    cartIconValue.innerHTML = 0;
    numberValue.innerHTML = 0;
});

nextBtn.addEventListener("click", () => {
    let imageIndex = getCurrentImageIndex();
    imageIndex++;
    if (imageIndex > 4) {
        imageIndex = 1;
    }

    setHeroImage(imageIndex);
});

prevBtn.addEventListener("click", () => {
    let imageIndex = getCurrentImageIndex();
    imageIndex--;
    if (imageIndex < 1) {
        imageIndex = 4;
    }

    setHeroImage(imageIndex);
});

function getCurrentImageIndex() {
    const imageIndex = parseInt(productContent.src.split('\\').pop().split('/').pop().replace('.jpg', '').replace('image-product-', ''));
    return imageIndex;
}

function setHeroImage(imageIndex) {
    productContent.src = `./images/image-product-${imageIndex}.jpg`;
    //images are not sync
    gallery.forEach(img => {
        img.classList.remove('active');
    });
    //set active thumbnail
    gallery[imageIndex-1].classList.add('active');
}

function onThumbClick(event) {
    //clear active state for all thumbnails
    gallery.forEach(img => {
        img.classList.remove('active');
    });
    //set active thumbnail
    event.target.parentElement.classList.add('active');
    //update hero image
    productContent.src = event.target.src.replace('-thumbnail', '');
}













