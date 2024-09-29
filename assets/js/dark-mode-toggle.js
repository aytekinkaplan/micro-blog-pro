// dark-mode-toggle.js

export default function darkModeToggle() {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    if (!toggleButton) return;

    // Kullanıcının tercih ettiği temayı uygula
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

    // Toggle düğmesine tıklama olayı ekle
    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        // Kullanıcının tercih ettiği temayı kaydet
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.removeItem("theme");
        }
    });
}
