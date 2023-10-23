function comenzarMision() {
  alert("Misión espacial iniciada. ¡Buena suerte, astronauta!");

  let segundos = 10;
  const cuentaRegresivaElement = document.getElementById("cuentaRegresiva");

  function actualizarCuentaRegresiva() {
    cuentaRegresivaElement.textContent = `La misión comenzará en ${segundos} segundos...`;
    segundos--;

    if (segundos < 0) {
      cuentaRegresivaElement.textContent = "¡La misión ha comenzado!";
    }
  }

  setInterval(actualizarCuentaRegresiva, 1000);
}
