import { useEffect, useState } from 'react';
import '../styles/App.scss';

function App() {
  //estados
  const [list, setList] = useState([]);
  const [nameSelect, setNameSelect] = useState('');
  const [quoteSelect, setQuoteSelect] = useState ('');

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


  //functions
  const renderByNameList = () => {
    if (nameSelect === '') {
      return list.map((quote, index) => (
        <ul key={index} className='list'>
          <li className='list__items'>
            {quote.character} {quote.quote}
          </li>
        </ul>
      ));
    } else {
      const filteredList = list.filter(
        (eachCharacter) => eachCharacter.character === nameSelect
      );
      return filteredList.map((quote, index) => (
        <ul key={index} className='list'>
          <li className='list__items'>
            {quote.character} {quote.quote}
          </li>
        </ul>
      ));
    }
  };

  const renderByQuoteList = () => {
    const filteredQuoteList = list.filter(
      (eachQuote) => eachQuote.quote.toLowerCase().includes(quoteSelect.toLowerCase()));
    return filteredQuoteList.map((quote, index) => (
      
          <li key={index} className='list__items'>
            {quote.character} {quote.quote}
          </li>
        
    ));
  };


  return (
    <div>
      <h1 className='title'>Frases de Friends</h1>
      <section>
        <div>
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
        </div>
        <div>
          <label htmlFor=''>Filtrar por frase </label>
          <input type='text' value={quoteSelect} onChange={handleQuoteSelect} />
        
        </div>
      </section>
      {renderByNameList()}
     <ul  className='list'>
      {renderByQuoteList()}
      </ul>
    </div>
  );
}

/* export*/
export default App;
