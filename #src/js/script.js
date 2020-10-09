
let menuIsOpen = false;
let menuLinks = document.querySelectorAll('.menu > ul > li > a');

tognav.onclick = function () {
    menuIsOpen = !menuIsOpen;
    if (menuIsOpen) {
        topmenu.classList.add('active');
        tognav.classList.add('active');
    }
    else {
        topmenu.classList.remove('active');
        tognav.classList.remove('active');
    }
}

for (i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function () {
        menuIsOpen = !menuIsOpen;
        topmenu.classList.remove('active');
        tognav.classList.remove('active');
    });
}

watch.onclick = function () {
    popupbg.style.display = 'flex';
}
popupbg.onclick = function () {
    popupbg.style.display = 'none';
}

let reviewImg = document.querySelectorAll('.review-person > img');

for (i = 0; i < reviewImg.length; i++) {
    reviewImg[i].addEventListener('click', function () {
        rewiewImgMin();
        reviwImgMax(this);
    });
}

function rewiewImgMin() {
    let imgs = document.querySelectorAll('.review-person > img');
    for (let img of imgs) {
        img.classList.remove('active');
    }
}

function reviwImgMax(obj) {
    rewiewImgMin();
    obj.classList.add('active');
    let text = obj.getAttribute("textofreview");
    let name = obj.getAttribute("name");
    let post = obj.getAttribute("post");
    let textBlock = document.querySelector('.quote-text');
    let nameBlock = document.querySelector('.review-person-name');
    textBlock.innerHTML = text;
    nameBlock.innerHTML = name + "<p>" + post + "</p>";
}

reviwImgMax(reviewImg[2]);

