const modeSwitcher = document.querySelectorAll(".mode"),
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
    burgerLinks = document.querySelectorAll('.burger__links'),
    prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (localStorage.getItem("theme") == null) {
    if (prefersDarkScheme.matches) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
}



if (localStorage.getItem("theme") == "dark") {
    setLightTheme();
} else if (localStorage.getItem("theme") == "light") {
    setDarkTheme();
}



function setLightTheme() {
    body.style.cssText = 'background-color: #E5E5E5';
    h1.forEach((element) => {
        element.style.cssText += 'color: #000000';
    });
    autor.forEach((element) => {
        element.style.cssText += 'color: #000000';
    });
    modeSwitcher.forEach((element) => {
        element.classList.add("dark");
    });
    modeSwitcher.forEach((element) => {
        element.src = '/src/img/dark.svg';
    });
    logo.src = '/src/img/logo.svg';
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
    localStorage.setItem("theme", "dark");
}

function setDarkTheme() {
    if (localStorage.getItem("theme") == "light") {
        body.style.cssText += 'background-color: #1a1a1a';
        h1.forEach((element) => {
            element.style.color = '#c1c1c1';
        });
        autor.forEach((element) => {
            element.style.color = '#c1c1c1';
        });
        modeSwitcher.forEach((element) => {
            element.src = '/src/img/light.svg';
        });
        logo.src = '/src/img/logowhite.svg';
        nav.forEach((element) => {
            element.style.cssText += 'color: #ffff';
        });
        modeSwitcher.forEach((element) => {
            element.classList.remove('dark');
        });
        navBars.forEach((element) => {
            element.classList.remove('darkbar');
            element.classList.add('lightbar');
        });
        burgerLinks.forEach((element) => {
            element.style.color = 'white';
        });
        localStorage.setItem("theme", "light");
    }
}

modeSwitcher.forEach((element) => element.addEventListener("click", (e) => {
    if (localStorage.getItem("theme") == "dark") {
        body.style.cssText += 'background-color: #1a1a1a';
        h1.forEach((element) => {
            element.style.color = '#c1c1c1';
        });
        autor.forEach((element) => {
            element.style.color = '#c1c1c1';
        });
        element.src = '/src/img/light.svg';
        logo.src = '/src/img/logowhite.svg';
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
        localStorage.setItem("theme", 'light');
    } else {
        localStorage.setItem("theme", "dark");
        body.style.cssText = 'background-color: #E5E5E5';
        h1.forEach((element) => {
            element.style.cssText += 'color: #000000';
        });
        autor.forEach((element) => {
            element.style.cssText += 'color: #000000';
        });
        element.classList.add("dark");
        element.src = '/src/img/dark.svg';
        logo.src = '/src/img/logo.svg';
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
        localStorage.setItem("theme", 'dark');
    }

}));

burgerMenu.addEventListener('click', (e) => {
    if (navBars[0].classList.length == 2) {
        navBars.forEach(elem => {
            elem.classList.add("open");
        });
        burgerPopUp.style.bottom = "600px";
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