// =========================
// SHOPPING CART
// =========================

let cart = [];
let total = 0;

function addToCart(name, price) {

    cart.push({
        name,
        price
    });

    total += price;

    updateCart();

    alert(name + " added to cart!");
}

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {

        const li =
            document.createElement("li");

        li.innerHTML = `
        ${item.name} - $${item.price}
        <button onclick="removeItem(${index})">
        Remove
        </button>
        `;

        cartItems.appendChild(li);
    });

    document.getElementById("total")
        .innerText = total;
}

function removeItem(index) {

    total -= cart[index].price;

    cart.splice(index, 1);

    updateCart();
}

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    let orderSummary = "Your Order:\n\n";

    cart.forEach(item => {

        orderSummary +=
            `${item.name} - $${item.price}\n`;
    });

    orderSummary +=
        `\nTotal: $${total}`;

    alert(orderSummary);

    cart = [];
    total = 0;

    updateCart();
}


// =========================
// HERO SLIDER
// =========================

const slides =
    document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide =>
        slide.classList.remove("active")
    );

    slides[index]
        .classList.add("active");
}

setInterval(() => {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 4000);


// =========================
// REVIEW SLIDER
// =========================

const reviews =
    document.querySelectorAll(".review");

let currentReview = 0;

function showReview(index) {

    reviews.forEach(review =>
        review.classList.remove(
            "active-review"
        )
    );

    reviews[index]
        .classList.add(
            "active-review"
        );
}

setInterval(() => {

    currentReview++;

    if (
        currentReview >= reviews.length
    ) {

        currentReview = 0;
    }

    showReview(currentReview);

}, 5000);


// =========================
// DARK MODE
// =========================

const themeBtn =
    document.getElementById(
        "themeBtn"
    );

themeBtn.addEventListener(
    "click",
    () => {

        document.body
            .classList
            .toggle("light");

        if (
            document.body.classList
            .contains("light")
        ) {

            themeBtn.innerHTML =
                "☀️";

        } else {

            themeBtn.innerHTML =
                "🌙";
        }
    }
);


// =========================
// LOGIN MODAL
// =========================

const loginBtn =
    document.getElementById(
        "loginBtn"
    );

const loginModal =
    document.getElementById(
        "loginModal"
    );

const closeModal =
    document.getElementById(
        "closeModal"
    );

loginBtn.addEventListener(
    "click",
    () => {

        loginModal.style.display =
            "flex";
    }
);

closeModal.addEventListener(
    "click",
    () => {

        loginModal.style.display =
            "none";
    }
);

window.addEventListener(
    "click",
    (e) => {

        if (
            e.target === loginModal
        ) {

            loginModal.style.display =
                "none";
        }
    }
);


// =========================
// MOBILE MENU
// =========================

const menuBtn =
    document.getElementById(
        "menuBtn"
    );

const nav =
    document.getElementById(
        "nav"
    );

menuBtn.addEventListener(
    "click",
    () => {

        nav.classList.toggle(
            "active"
        );
    }
);


// =========================
// SMOOTH MENU SCROLL
// =========================

function scrollMenu() {

    document
        .getElementById("menu")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.querySelector("form");

contactForm.addEventListener(
    "submit",
    function (e) {

        e.preventDefault();

        alert(
            "Message sent successfully!"
        );

        this.reset();
    }
);

function showMessage(){

    alert(
    "Thank you for visiting Crunch Station! We are committed to providing delicious food and excellent service."
    );

}

// =========================
// WHATSAPP ORDER
// =========================

document.querySelector(".call-btn")
.addEventListener("click",function(){

alert("Calling +923353104209");

});
function orderOnphone() {

    if (cart.length === 0) {

        alert("Cart is empty!");

        return;
    }

    let message =
        "Hello Crunch Station%0A%0A";

    cart.forEach(item => {

        message +=
            `${item.name} - $${item.price}%0A`;
    });

    message +=
        `%0ATotal: $${total}`;

    window.open(
        `https://ph.me/92335-3104209?text=${message}`,
        "_blank"
    );
}

document
.querySelectorAll('nav a')
.forEach(link => {

    link.addEventListener('click', function(e){

        const targetId =
        this.getAttribute('href');

        if(targetId.startsWith('#')){

            e.preventDefault();

            document
            .querySelector(targetId)
            .scrollIntoView({
                behavior:'smooth'
            });

        }

    });

});
