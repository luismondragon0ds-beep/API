let personajes = [];


fetch('https://dragonball-api.com/api/characters?limit=58')
  .then(res => res.json())
  .then(data => {
    personajes = data.items;
    mostrar(personajes);
  });


function mostrar(lista) {
  document.getElementById('contenedor').innerHTML = lista.map(p => `
    <div class="card">
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p><strong>Ki:</strong> ${p.ki}</p>
      <p><strong>Max Ki:</strong> ${p.maxKi}</p>
    </div>
  `).join('');
}


document.getElementById('busqueda').addEventListener('input', (e) => {
  const texto = e.target.value.toLowerCase();
  const filtrados = personajes.filter(p => p.name.toLowerCase().includes(texto));
  mostrar(filtrados);
});