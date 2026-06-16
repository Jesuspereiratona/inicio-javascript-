function mostrarError() {
  const indice = Math.floor(Math.random() * errores.length);
  const caja = document.getElementById("mensaje");
  caja.textContent = "❌ " + errores[indice];
  caja.style.display = "block";
}