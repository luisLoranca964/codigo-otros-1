const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

// Se corrigen las selecciones de elementos utilizando un selector de clase o id
// Se quita el simbolo de pesos a las variables
const n = document.querySelector('#name'); 
const b = document.querySelector('#blog'); 
const l = document.querySelector('#location');

// Se agrega la expresión async permitiendo usar await
async function displayUser(username) {
  n.textContent = 'Cargando...';  
  //se agrega try/catch
  try {
      const response = await fetch(`${usersEndpoint}/${username}`);  
      const data = await response.json();  
      if (!response.ok) {
          throw new Error(data.message || 'Error al obtener los datos del usuario');
      }
      n.textContent = data.name;
      b.textContent = data.blog || 'No hay blog disponible';  
      l.textContent = data.location || 'No hay ubicación disponible';  
  } catch (err) {
      handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err.message || err}`;  
}


displayUser('stolinski').catch(handleError);
