const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("activeAcc");
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "rem";
        }

        // Close other panels
        closeOtherPanels(this);
    });
}

function closeOtherPanels(clickedAccordion) {
    for (let i = 0; i < acc.length; i++) {
        if (acc[i] !== clickedAccordion) {
            acc[i].classList.remove("activeAcc");
            const panel = acc[i].nextElementSibling;
            panel.style.maxHeight = null;
        }
    }
}
