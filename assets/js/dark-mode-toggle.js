// dark-mode-toggle.js

function darkModeToggle() {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const html = document.documentElement; // html elementini hedef al

    if (!toggleButton) return;

    // Kullanıcının tercih ettiği temayı uygula
    if (localStorage.getItem("theme") === "dark") {
        html.classList.add("dark-mode");
    }

    // Toggle düğmesine tıklama olayı ekle
    toggleButton.addEventListener("click", () => {
        html.classList.toggle("dark-mode");

        // Kullanıcının tercih ettiği temayı kaydet
        if (html.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.removeItem("theme");
        }
    });
}

// Fonksiyonu export et
export default darkModeToggle;
