document.addEventListener("DOMContentLoaded", () => {

    // Плавное появление элементов при прокрутке
    const elements = document.querySelectorAll(
    "section > *, .card"
);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });
    }, {
        threshold: 0.15
    });

    elements.forEach((el) => {
        el.classList.add("hidden");
        observer.observe(el);
    });


    // Плавная отправка формы без перехода на другую страницу
    const form = document.querySelector(".contact-form form");

    if (form) {

        form.addEventListener("submit", async function (e) {

            e.preventDefault();

            const formData = new FormData(form);

            try {

                const response = await fetch(form.action, {
                    method: "POST",
                    body: formData
                });

                if (response.ok) {

    const button = form.querySelector("button");

    button.innerHTML = "✓ Mesaj trimis";

    button.disabled = true;

    form.reset();
}

            } catch (error) {

                alert("Eroare la trimiterea mesajului.");

            }

        });

    }

});