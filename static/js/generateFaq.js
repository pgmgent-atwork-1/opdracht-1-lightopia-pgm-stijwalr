(() => {
    const $list = document.getElementById("list");

    const generateHTMLForQuestions = (faqs) => {
        let html = "";
        for (const question of faqs) {
            html += `
            <div class="openBorder">
                <button class="accordion">${question.question}</button>
                <div class="panel">
                <p>
                ${question.answer}
                </p>
                </div>
            </div>
            `;
        }
        return html;
    };

    const generateHTMLForFaqs = (faqs) => {
        const types = [
            "Algemeen",
            "parcours",
            "Eten en Drinken",
            "toegankelijkheid",
            "route & parking",
            "tickets",
            "contact",
        ];
        let html = "";
        for (const type of types) {
            const filteredQuestions = faqs.filter((faqs) => {
                return faqs.type === type;
            });

            html += ` 
                <h2>${type}</h2> 
                ${generateHTMLForQuestions(filteredQuestions)}   
                    `;
        }
        return html;
    };

    const buildUI = () => {
        $list.innerHTML = generateHTMLForFaqs(faqs);
    };

    const initialize = () => {
        buildUI();
    };

    initialize();
})();
