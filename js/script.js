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