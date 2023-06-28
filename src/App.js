import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App(){ 
  return (
    <div>
      <h2 className='d-flex justify-content-center'>Contador de vocales React</h2>
      <div className='card mr-auto p-4'>
        <div className='card-body'>
          <form onSubmit={vocales} className='input-group '>
            <input type="text" name="texto" className='form-control' placeholder='Introduzca una frase o una palabra'></input>
            <div className='input-group-append'>
              <button type="submit" className='btn btn-outline-success'>Subir</button>
            </div>
          </form>
          </div>
        </div>
        <footer className='d-flex justify-content-center text-muted'>React</footer>
        </div>
    ); 
   }

function vocales(e){
  e.preventDefault();
  const texto = e.target.texto.value;
  const vocales = 'aeiouAEIOU';
  let contador = 0;
  for(let i = 0; i<texto.length; i++){
    if(vocales.includes(texto[i])) contador++;
  }


  alert("Cantidad de vocales: "+contador); 
}

export default App;
