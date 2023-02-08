const showBtn = document.querySelector(".show__button"),
    hiddenArticles = document.querySelectorAll(".hidden"),
    limit = hiddenArticles.length;
    
let counter = 0;

showBtn.addEventListener("click", () => {
    let i = counter;

    hiddenArticles[i].classList.remove('hidden');
    hiddenArticles[i + 1].classList.remove('hidden');
    counter += 2;

    if (counter >= limit) {
        showBtn.classList.add('hidden');
    }
});