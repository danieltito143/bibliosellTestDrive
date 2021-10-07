// Section 2
sec2Cards = document.querySelectorAll(".sec2-card");

const setOrangeCard = (cardElement) => {
    cardElement.style.backgroundColor = "orange";
    cardElement.style.color = "white";
}

const removeOrangeCard = (cardElement) => {
    cardElement.style.backgroundColor = "";
    cardElement.style.color = "black";
}

for (let i = 0; i < sec2Cards.length; i++) {
    sec2Cards[i].addEventListener("mouseover", function () {
        setOrangeCard(sec2Cards[i]);
    });
    sec2Cards[i].addEventListener("mouseleave", function () {
        removeOrangeCard(sec2Cards[i]);
    });
}