import "../css/index.css";

// Import JS
import darkModeToggle from "./dark-mode-toggle";
import microCard from "./micro-card";

// DOM tamamen yüklendiğinde fonksiyonları çağır
document.addEventListener("DOMContentLoaded", () => {
    darkModeToggle();
    microCard(); // Burada microCard fonksiyonunu çağırıyoruz
});
