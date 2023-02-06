const showBtn = document.querySelector(".show__button"),
    hiddenArticles = document.querySelectorAll(".hidden"),
    limit = hiddenArticles.length,
    modeSwitcher = document.querySelectorAll(".mode"),
    body = document.querySelector("body"),
    descr = document.querySelector(".description"),
    tag = document.querySelector(".tag"),
    h1 = document.querySelectorAll("h1"),
    autor = document.querySelectorAll(".autor"),
    logo = document.querySelector(".logo__main"),
    nav = document.querySelectorAll(".button__links"),
    navBars = document.querySelectorAll(".bar"),
    burgerMenu = document.querySelector(".header__button"),
    burgerPopUp = document.querySelector(".nav__window"),
    burgerLinks = document.querySelectorAll('.burger__links');

let counter = 0;

showBtn.addEventListener("click", (e) => {
    let i = counter;

    hiddenArticles[i].classList.remove('hidden');
    hiddenArticles[i + 1].classList.remove('hidden');
    counter += 2;

    if (counter >= limit) {
        showBtn.classList.add('hidden');
    }
});

modeSwitcher.forEach((element) => element.addEventListener("click", (e) => {
    if (element.classList.length == 2) {
        body.style.cssText += 'background-color: #1a1a1a';
        h1.forEach((element) => {
            element.style.color = '#c1c1c1';
        });
        autor.forEach((element) => {
            element.style.color = '#c1c1c1';
        });
        element.src = './img/light.svg';
        logo.src = './img/logowhite.svg';
        nav.forEach((element) => {
            element.style.cssText += 'color: #ffff';
        });
        element.classList.remove('dark');
        navBars.forEach((element) => {
            element.classList.remove('darkbar');
            element.classList.add('lightbar');
        });
        burgerLinks.forEach((element) => {
            element.style.color = 'white';
        });
    } else {
        body.style.cssText = 'background-color: #E5E5E5';
        h1.forEach((element) => {
            element.style.cssText += 'color: #000000';
        });
        autor.forEach((element) => {
            element.style.cssText += 'color: #000000';
        });
        element.classList.add("dark");
        element.src = './img/dark.svg';
        logo.src = './img/logo.svg';
        nav.forEach((element) => {
            element.style.cssText += 'color: #000000';
        });
        navBars.forEach((element) => {
            element.classList.remove('lightbar');
            element.classList.add('darkbar');
        });
        burgerLinks.forEach((element) => {
            element.style.color = 'black';
        });
    }

}));

burgerMenu.addEventListener('click', (e) => {
    if (navBars[0].classList.length == 2) {
        navBars.forEach(elem => {
            elem.classList.add("open");
        });
        burgerPopUp.style.bottom = "650px";
        setTimeout(() => {
            burgerPopUp.style.position = "inherit";
        }, 200);
    } else {
        navBars.forEach(elem => {
            elem.classList.remove("open");
        });
        burgerPopUp.style.bottom = "100%";
        setTimeout(() => {
            burgerPopUp.style.position = "absolute";
        }, 200);
    }
});