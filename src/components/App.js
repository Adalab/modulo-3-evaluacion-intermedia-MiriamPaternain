import { useEffect, useState } from 'react';
import '../styles/App.scss';

function App() {
  //estados
  const [list, setList] = useState([]);
  const [nameSelect, setNameSelect] = useState('');
  const [quoteSelect, setQuoteSelect] = useState('');
  const [filterQuote, setFilterQuote] = useState('');

  //useEffect
  useEffect(() => {
    fetch(
      'https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json'
    )
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  //events
  const handleNameSelect = (event) => {
    setNameSelect(event.target.value);
  };

  const handleQuoteSelect = (event) => {
    setQuoteSelect(event.target.value);
  };

  const renderQuotes = ()=>{
  return list.filter((quote) =>{
    return quote.quote.toLowerCase().includes(filterQuote.toLowerCase());
  })
  .filter((quote)=> {
    return quote.character.toLowerCase().includes(nameSelect.toLowerCase());
  })
  .map((quote, idx)=>{
  return <li className='list__items'key={quote, idx}>{quote.quote}
  {quote.character}
  </li>
})
}

  return (
    <div>
      <h1 className='title'>Frases de Friends</h1>
      <section>
        <form>
          <label htmlFor='character'>Filtrar por personaje </label>
          <select
            name='character'
            id='character'
            value={nameSelect}
            onChange={handleNameSelect}
          >
            <option value='Todos'>Todos</option>
            <option value='Ross'>Ross</option>
            <option value='Monica'>Monica</option>
            <option value='Joey'>Joey</option>
            <option value='Phoebe'>Phoebe</option>
            <option value='Chandler'>Chandler</option>
            <option value='Rachel'>Rachel</option>
          </select>
        </form>
        <form>
          <label htmlFor='text'>Filtrar por frase </label>
          <input
            id='text'
            type='text'
            value={quoteSelect}
            onChange={handleQuoteSelect}
          />
        </form>
      </section>

      <ul className='list'>{renderQuotes()}</ul>
    </div>
  );
}

export default App;

