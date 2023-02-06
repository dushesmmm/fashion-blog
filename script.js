const showBtn = document.querySelector(".show__button"),
    hiddenArticles = document.querySelectorAll(".hidden"),
    limit = hiddenArticles.length,
    modeSwitcher = document.querySelector(".mode"),
    body = document.querySelector("body"),
    descr = document.querySelector(".description"),
    tag = document.querySelector(".tag"),
    h1 = document.querySelectorAll("h1"),
    autor = document.querySelectorAll(".autor"),
    logo = document.querySelector(".logo__main"),
    nav = document.querySelectorAll(".button__links");

let counter = 0;


showBtn.addEventListener("click", (e) => {
    let i = counter;

    hiddenArticles[i].classList.remove('hidden');
    hiddenArticles[i + 1].classList.remove('hidden');
    counter += 2;
    console.log(counter);

    if (counter >= limit) {
        showBtn.classList.add("hidden");
    }
});

modeSwitcher.addEventListener("click", (e) => {
    if (modeSwitcher.classList.length == 2) {
        body.style.cssText = 'background-color: #1a1a1a';
        h1.forEach((element) => {element.style.cssText = 'color: #c1c1c1';});
        autor.forEach((element) => {element.style.cssText = 'color: #c1c1c1';});
        modeSwitcher.src = '/img/light.svg';
        logo.src = '/img/logowhite.svg';
        nav.forEach((element) => {element.style.cssText = 'color: #ffff';});
        modeSwitcher.classList.remove("dark");
    } else {
        body.style.cssText = 'background-color: #E5E5E5';
        h1.forEach((element) => {element.style.cssText = 'color: #000000';});
        autor.forEach((element) => {element.style.cssText = 'color: #000000';});
        modeSwitcher.classList.add("dark");
        modeSwitcher.src = '/img/dark.svg';
        logo.src = '/img/logo.svg';
        nav.forEach((element) => {element.style.cssText = 'color: #000000';});
    }
    
});