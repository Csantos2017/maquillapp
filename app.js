function mostrarSeccion(id) {
  document.querySelectorAll('.seccion').forEach(s => s.classList.remove('activa'));
  document.getElementById(id).classList.add('activa');
}
function mostrarFormularioProducto() {
  document.getElementById('modalProducto').style.display = 'block';
}
function cerrarFormularioProducto() {
  document.getElementById('modalProducto').style.display = 'none';
}
function guardarProducto() {
  const nombre = document.getElementById('nombre').value;
  const categoria = document.getElementById('categoria').value;
  const precio = parseFloat(document.getElementById('precio').value);
  const stock = parseInt(document.getElementById('stock').value);
  const productos = JSON.parse(localStorage.getItem('productos') || '[]');
  productos.push({ nombre, categoria, precio, stock });
  localStorage.setItem('productos', JSON.stringify(productos));
  cerrarFormularioProducto();
  mostrarProductos();
}
function mostrarProductos() {
  const productos = JSON.parse(localStorage.getItem('productos') || '[]');
  const tbody = document.querySelector('#tablaProductos tbody');
  tbody.innerHTML = '';
  productos.forEach((p, i) => {
    tbody.innerHTML += `
      <tr>
        <td>${p.nombre}</td>
        <td>${p.categoria}</td>
        <td>$${p.precio.toFixed(2)}</td>
        <td>${p.stock}</td>
        <td><button onclick="eliminarProducto(${i})">🗑️</button></td>
      </tr>`;
  });
}
function eliminarProducto(index) {
  const productos = JSON.parse(localStorage.getItem('productos') || '[]');
  productos.splice(index, 1);
  localStorage.setItem('productos', JSON.stringify(productos));
  mostrarProductos();
}
document.addEventListener('DOMContentLoaded', mostrarProductos);