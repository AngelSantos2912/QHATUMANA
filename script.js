document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".tab-link");
    const contents = document.querySelectorAll(".tab-content");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Eliminar la clase 'active' de todos los enlaces y contenidos
            links.forEach(link => link.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));

            // Añadir la clase 'active' al enlace y contenido correspondiente
            const target = this.getAttribute("data-target");
            document.getElementById(target).classList.add("active");
            this.classList.add("active");
        });
    });
});
