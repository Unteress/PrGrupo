let contador = 0;

function agregarProducto() {
    const categoria = document.getElementById('categoria').value;
    const producto = document.getElementById('producto').value;
    const precio = document.getElementById('precio').value;
    const fechaVencimiento = document.getElementById('fechaVencimiento').value;
    const cantidad = document.getElementById('cantidad').value;

    if (producto && precio && fechaVencimiento && cantidad) {
        const tabla = document.getElementById('tablaProductos').getElementsByTagName('tbody')[0];
        const nuevaFila = tabla.insertRow();
        
        const celdaCategoria = nuevaFila.insertCell(0);
        const celdaProducto = nuevaFila.insertCell(1);
        const celdaPrecio = nuevaFila.insertCell(2);
        const celdaFechaVencimiento = nuevaFila.insertCell(3);
        const celdaCantidad = nuevaFila.insertCell(4);

        celdaCategoria.textContent = categoria;
        celdaProducto.textContent = producto;
        celdaPrecio.textContent = precio;
        celdaFechaVencimiento.textContent = fechaVencimiento;
        celdaCantidad.textContent = cantidad;

        contador++;
        document.getElementById('contadorProductos').textContent = contador;

        document.getElementById('storeForm').reset();
    }
}

function filtrarCategoria() {
    const categoriaFiltro = document.getElementById('filtrarCategoria').value;
    const filas = document.getElementById('tablaProductos').getElementsByTagName('tbody')[0].getElementsByTagName('tr');

    for (let i = 0; i < filas.length; i++) {
        const categoria = filas[i].getElementsByTagName('td')[0].textContent;
        if (categoria === categoriaFiltro || categoriaFiltro === '') {
            filas[i].style.display = '';
        } else {
            filas[i].style.display = 'none';
        }
    }
}




function buscarProducto() {
    const busqueda = document.getElementById('buscarProducto').value.toLowerCase();
    const filas = document.getElementById('tablaProductos').getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    for (let i = 0; i < filas.length; i++) {
        const producto = filas[i].getElementsByTagName('td')[1].textContent.toLowerCase();
        if (producto.includes(busqueda)) {
            filas[i].style.display = '';
        } else {
            filas[i].style.display = 'none';
        }
    }
}

function venderProductos (){


}