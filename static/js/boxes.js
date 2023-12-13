(() => {
    const $map = document.getElementById("circles");
    const generateHTMLForBoxes = (boxes) => {
        let html = "";
        for (const box of boxes) {
            html += `<div class="box" style="left: ${box.X}; top: ${box.Y};" data-src="${box.img}"></div>`;
        }
        return html;
    };

    const buildUI = () => {
        $map.innerHTML = generateHTMLForBoxes(boxes);
    };

    const initialize = () => {
        buildUI();
    };

    initialize();
})();
