console.log("JavaScript Working");

// Navbar Shadow on Scroll

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.15)";
    } else {
        navbar.style.boxShadow =
            "0 2px 10px rgba(0,0,0,0.05)";
    }
});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Add To Cart

let cartCount = 2;

const cartBadge =
document.querySelector(".cart span");

const cartButtons =
document.querySelectorAll(".product-card button");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        if(cartBadge){
            cartBadge.textContent = cartCount;
        }

        button.innerHTML =
            "✓ Added";

        button.style.background =
            "#4CAF50";

        setTimeout(() => {

            button.innerHTML =
                "Add To Cart";

            button.style.background =
                "#2e7d32";

        },1500);

    });

});


// Reveal Animation

const reveals =
document.querySelectorAll(
".category-card, .product-card, .feature, .review"
);

function revealElements(){

    reveals.forEach(element => {

        const top =
        element.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;

        if(top < windowHeight - 100){

            element.classList.add("show");

        }

    });

}

window.addEventListener(
"scroll",
revealElements
);

revealElements();


// Back To Top Button

const topBtn =
document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});