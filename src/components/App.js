import { useEffect, useState } from 'react';
import '../styles/App.scss';


function App() {
  //estados
  const [list, setList] = useState ([]);

//useEffect
useEffect(() => {
  fetch('https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json')
  .then(response => response.json())
  .then(data => setList(data));
}, []);
 
  return (
  <div>
    <h1 className='title'>Frases de Friends</h1>
    <label htmlFor="character">Filtrar por personaje  </label>
    <select name="character" id="character">
      <option value="Todos">Todos</option>
      <option value="Ross">Ross</option>
      <option value="Monica">Monica</option>
      <option value="Joey">Joey</option>
      <option value="Phoebe">Phoebe</option>
      <option value="Chandler">Chandler</option>
      <option value="Rachel">Rachel</option>
    </select>
    {list.map((quote, index) => (
      <ul key={index} className='list'>
        <li className='list__items'>{quote.character} {quote.quote}</li>
      </ul>
    ))}
  </div>
  );
}

/* export*/
export default App;
