import { listaCursos, carrito,vaciarCarritoBtn } from './../selectores/selectores.js';
import { agregarCurso,eliminarCurso,vaciarCarrito } from './../Funciones/funciones.js';

	class App {
		constructor() {
			this.event();
		}

		event() {
			listaCursos.addEventListener('click', agregarCurso);
			carrito.addEventListener('click', eliminarCurso);
			vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
		}
	}

	export default App;