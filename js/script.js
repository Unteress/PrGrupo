function buscarProducto() {
    const busqueda = document.getElementById('buscarProducto').value.toLowerCase();
    const filas = document.getElementById('tablaProductos').getElementsByTagName('tbody')[0].getElementsByTagName('tr');
