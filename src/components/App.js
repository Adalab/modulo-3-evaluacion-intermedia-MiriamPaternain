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
    {list.map((quote, index) => (
      <ul key={index}>
        <li >{quote.character} {quote.quote}</li>
      </ul>
    ))}
  </div>
  );
}

/* export*/
export default App;
