import React, { useState } from 'react';
import './App.css';

const Wizytowka = ({ imie, tytul, opis, onPokazDane, pokazDane }) => {
  return (
    <div className="card">
      <h2>{imie}</h2>
      {tytul && <h3>{tytul}</h3>} 
      {opis && <p>{opis}</p>}
      <button onClick={onPokazDane}>
        {pokazDane ? 'Schowaj dane' : 'Pokaz dane'}
      </button>
    </div>
  );
};

function App() {
  const osoby = [
    {
      imie: 'Paweł Filonik',
      tytul: 'Twórca Strony',
      opis: 'Pasjonuje się carrowaniem jadźki w Rainbow Six Siege.',
    },
    {
      imie: 'Mateusz Kondraciuk',
      tytul: 'Twórca Strony',
      opis: 'Pasjonuje się carrowaniem jadźki w Fortnite.',
    }
  ];


  const [pokazDane, setPokazDane] = useState([false, false]);


  const przelaczDane = (index) => {
    const zaktualizowanePokazDane = [...pokazDane];
    zaktualizowanePokazDane[index] = !zaktualizowanePokazDane[index];
    setPokazDane(zaktualizowanePokazDane);
  };

  return (
    <div className="App">
      <h1>Wizytowki Firmowe</h1>
      <div className="cards-container">
        {osoby.map((osoba, index) => (
          <Wizytowka
            key={index}
            imie={osoba.imie}
            tytul={pokazDane[index] ? osoba.tytul : null}
            opis={pokazDane[index] ? osoba.opis : null}
            onPokazDane={() => przelaczDane(index)}
            pokazDane={pokazDane[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
