// Micro Card Expand/Collapse Functionality
document.addEventListener("DOMContentLoaded", () => {
    // Initialize read more/less functionality on all cards
    const initMicroCards = () => {
        const readMoreLinks = document.querySelectorAll(".read-more-link");

        readMoreLinks.forEach((link) => {
            link.addEventListener("click", toggleContent);
        });
    };

    // Function to toggle content expansion/collapse
    const toggleContent = (event) => {
        event.preventDefault();
        const button = event.currentTarget;
        const postItem = button.closest(".gh-micro-card");
        const contentSection = postItem.querySelector(".tweet-content");

        if (contentSection.style.maxHeight) {
            // Eğer içerik genişletilmişse eski durumuna getir
            contentSection.style.maxHeight = null;
            button.textContent = "Read more";
        } else {
            // İçeriği genişletmek için tüm yüksekliği al
            contentSection.style.maxHeight = contentSection.scrollHeight + "px";
            button.textContent = "Show less";
        }
    };

    // Initialize the micro card functionality on page load
    initMicroCards();
});
