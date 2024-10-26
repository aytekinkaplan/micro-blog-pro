export default function microCard() {
    document.querySelectorAll(".read-more-link").forEach((button) => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const postItem = button.closest(".PostItem");
            const contentSection = postItem.querySelector(".e-content");

            if (contentSection.classList.contains("expanded")) {
                contentSection.classList.remove("expanded");
                button.textContent = "Read more";
            } else {
                contentSection.classList.add("expanded");
                button.textContent = "Show less";
            }
        });
    });
}
