// Simple scroll reveal

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.12
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


// Play button interaction

const playButtons =
    document.querySelectorAll(".play-button, .audio-button");

playButtons.forEach((button) => {

    button.addEventListener("click", () => {

        button.textContent =
            button.textContent.trim() === "▶"
                ? "Ⅱ"
                : "▶";

    });

});
