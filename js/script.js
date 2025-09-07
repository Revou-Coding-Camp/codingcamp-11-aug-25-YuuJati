welcomeSpeech();
function welcomeSpeech() {
    let userName = prompt("Please enter your name:");
    if (userName !== '') {
        document.getElementById("user-greeting").textContent = userName;
    }
}


// cuma ucapan terimakasih , ga sampe nyimpen database, belum bisa
function sendMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("yourmessage").value;
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
    } else {
        alert("Please fill in all fields.");
    }
}


// UNTUK SIDEBAR
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';

}
function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar();
    });
});

document.querySelector('.close-button').addEventListener('click', () => {
    closeSidebar();
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

function setActive(id) {
    navLinks.forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
    });
}, {
    root: null,
    rootMargin: "-40% 0px -50% 0px", // hanya aktif jika kira-kira di tengah layar
    threshold: 0
});

sections.forEach(sec => observer.observe(sec));

/* aktifkan link sesuai hash saat halaman dibuka/refresh */
window.addEventListener("load", () => {
    const id = location.hash.replace("#", "") || sections[0].id;
    setActive(id);
});


