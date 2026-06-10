/* =========================
   ANIMACIONES AL HACER SCROLL
========================= */

const elementosAnimados = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

elementosAnimados.forEach((elemento) => {
    observer.observe(elemento);
});


/* =========================
   FORMULARIO → WHATSAPP
========================= */

const formulario = document.getElementById("casoForm");

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    // Obtener valores
    const necesidad = document.getElementById("necesidad").value.trim();
    const situacion = document.getElementById("situacion").value.trim();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const nacionalidad = document.getElementById("nacionalidad").value.trim();

    const generoSeleccionado = document.querySelector(
        'input[name="genero"]:checked'
    );

    const genero = generoSeleccionado
        ? generoSeleccionado.value
        : "";

    /* =========================
       VALIDACIONES
    ========================= */

    if (
        necesidad === "" ||
        situacion === "" ||
        nombre === "" ||
        telefono === "" ||
        nacionalidad === "" ||
        genero === ""
    ) {

        alert("Por favor completa todos los campos obligatorios.");

        return;
    }

    /* =========================
       MENSAJE DE WHATSAPP
    ========================= */

    const mensaje = `Hola, necesito orientación legal.%0A%0A` +

        `📌 ¿Qué necesito hacer?%0A${necesidad}%0A%0A` +

        `📝 Mi situación:%0A${situacion}%0A%0A` +

        `👤 Datos personales:%0A` +
        `• Nombre: ${nombre}%0A` +
        `• Teléfono: ${telefono}%0A` +
        `• Correo: ${correo || "No proporcionado"}%0A` +
        `• Género: ${genero}%0A` +
        `• Nacionalidad: ${nacionalidad}%0A%0A` +

        `Quisiera recibir orientación sobre mi caso.`;

    /* =========================
       REDIRECCIÓN
    ========================= */

    const numeroWhatsApp = "573152616931";

    const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

    window.open(url, "_blank");

    /* =========================
       OPCIONAL: LIMPIAR FORMULARIO
    ========================= */

    formulario.reset();

});


/* =========================
   SCROLL SUAVE PARA ANCLAS
========================= */

document.querySelectorAll('a[href^="#"]').forEach((enlace) => {

    enlace.addEventListener("click", function (e) {

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        if (destino) {

            e.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });

});


/* =========================
   EFECTO HEADER AL HACER SCROLL
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(7,26,53,0.98)";
        header.style.padding = "0";

    } else {

        header.style.background = "rgba(7,26,53,0.92)";
    }

});