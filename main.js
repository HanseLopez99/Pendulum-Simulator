function initPendulum(type) {
  console.log("Initializing pendulum:", type); // Debugging line
  clearSimulation();
  if (type === 'double') {
    doublePendulum();
  } else if (type === 'triple') {
    triplePendulum();
  }
}

document.getElementById('doublePendulum').addEventListener('click', function () {
  console.log("Double Pendulum button clicked"); // Debugging line
  initPendulum('double');
});

document.getElementById('triplePendulum').addEventListener('click', function () {
  console.log("Triple Pendulum button clicked"); // Debugging line
  initPendulum('triple');
});
