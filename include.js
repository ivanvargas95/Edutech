document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("navbar-container").innerHTML = data;
        loadCourses();  // Aseguramos que se carguen los cursos después de cargar el navbar
      });
  
    fetch("footer.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("footer-container").innerHTML = data;
        initFooter();
      });
  });
  
  function loadCourses() {
    const dbUrl = 'https://cursos-74fa1-default-rtdb.firebaseio.com/cursos.json';
    fetch(dbUrl)
      .then(response => response.json())
      .then(data => {
        const courseDropdown = document.getElementById('courseDropdown');
        courseDropdown.innerHTML = ''; // Limpiar el contenido anterior
  
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const course = data[key];
            const courseLink = document.createElement('a');
            courseLink.href = `cursos.html?cursoId=${key}`;
            courseLink.textContent = course.nombredelcurso;
            courseDropdown.appendChild(courseLink);
          }
        }
      })
      .catch(error => console.error('Error al cargar los cursos:', error));
  }
  
  function initFooter() {
    // Incluir cualquier funcionalidad adicional necesaria para el footer
  }