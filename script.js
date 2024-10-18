// JQuery 

$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.logo-social').toggleClass('social-toggle');
        $('.nav').toggleClass('toggle-nav');
    });
});

$(document).ready(function () {
    $('.cart-btn').click(function () {
        $('.single-product').show();
    });
});

$(document).ready(function () {
    $('.close').click(function () {
        $('.single-product').hide();
    });
});

$(document).ready(function () {
    $('.article-btn').click(function () {
        $('.single-article-heading').show();
        $('#single-article').show();
        $('#article').hide();
    });
});

$(document).ready(function () {
    $('.block').click(function () {
        $('.page').slideToggle("slow");
    });
});


// JS 

const pluse = document.querySelector(".pluse"),
    minus = document.querySelector(".minus"),
    n = document.querySelector(".count"),
    total = document.querySelector(".total"),
    price = document.querySelector("#price");

let a = 1;

pluse.addEventListener("click", () => {
    a++;
    a = (a < 10) ? "0" + a : a;
    n.innerText = a;
    total.innerText = a;
    price.innerHTML = "$ " + a * 30.00 + " USD";
});
minus.addEventListener("click", () => {
    if (a > 1) {
        a--;
        a = (a < 10) ? "0" + a : a;
        n.innerText = a;
        total.innerText = a;
        price.innerHTML = "$ " + a * 30 + ".00 USD";
    }
});


