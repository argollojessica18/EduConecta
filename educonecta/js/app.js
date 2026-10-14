
document.addEventListener('DOMContentLoaded', () => {

    
    const botonesFiltro = document.querySelectorAll('.btn-filtro');
    const tarjetasLibros = document.querySelectorAll('.card-libro');
    const inputBuscador = document.getElementById('input-buscador');
    const tituloSeccion = document.getElementById('titulo-seccion');

    
    let categoriaActual = 'todos';

 
    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', (e) => {
            // Remover la clase 'active' de todos los botones y asignarla al presionado
            botonesFiltro.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            
            categoriaActual = e.target.getAttribute('data-categoria');

            actualizarTituloSeccion(categoriaActual);

            
            filtrarLibros();
        });
    });

  
    inputBuscador.addEventListener('input', () => {
        filtrarLibros();
    });

   
    function filtrarLibros() {
        const textoBusqueda = inputBuscador.value.toLowerCase().trim();

        tarjetasLibros.forEach(tarjeta => {
  
            const categoriaLibro = tarjeta.getAttribute('data-categoria');


            const textoTarjeta = tarjeta.textContent.toLowerCase();

           
            const coincideCategoria = (categoriaActual === 'todos') || (categoriaLibro === categoriaActual);

            
            const coincideBusqueda = textoTarjeta.includes(textoBusqueda);

          
            if (coincideCategoria && coincideBusqueda) {
                tarjeta.style.display = 'flex';
            } else {
                tarjeta.style.display = 'none';
            }
        });
    }

   
    function actualizarTituloSeccion(categoria) {
        switch (categoria) {
            case 'sociales':
                tituloSeccion.textContent = 'Catálogo: Ciencias Sociales';
                break;
            case 'filosofia':
                tituloSeccion.textContent = 'Catálogo: Filosofía';
                break;
            case 'biologia':
                tituloSeccion.textContent = 'Catálogo: Biología';
                break;
            default:
                tituloSeccion.textContent = 'Catálogo Bibliográfico General';
                break;
        }
    }
});