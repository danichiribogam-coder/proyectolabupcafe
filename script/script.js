
        // Función para mostrar la sección seleccionada y ocultar las demás
        function showSection(sectionId) {
            // Ocultar todas las secciones
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Mostrar la sección seleccionada
            document.getElementById(sectionId).classList.add('active');
            
            // Actualizar la navegación activa
            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('onclick') === `showSection('${sectionId}')`) {
                    link.classList.add('active');
                }
            });
            
            // Si es la sección de inicio, hacer scroll al principio
            if (sectionId === 'inicio') {
                window.scrollTo(0, 0);
            }
        }
        
        // Función para filtrar el menú por categorías
        function filterMenu(category) {
            const items = document.querySelectorAll('.drink-card');
            const buttons = document.querySelectorAll('.category-btn');
            
            // Actualizar botones activos
            buttons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('onclick') === `filterMenu('${category}')`) {
                    btn.classList.add('active');
                }
            });
            
            // Mostrar/ocultar items según categoría
            items.forEach(item => {
                if (category === 'todos' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }
        
        // Mostrar la sección de inicio al cargar la página
        document.addEventListener('DOMContentLoaded', function() {
            showSection('inicio');
        });

        function Confirmacion(){
        alert("Confirmar asistencia")
        }