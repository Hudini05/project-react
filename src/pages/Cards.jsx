import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Wizytowka = ({ imie, tytul, opis, wiek, onPokazDane, pokazDane }) => {
  return (
    <div className="card">
      <h2>{imie}</h2>
      {tytul && <h3>{tytul}</h3>}
      {opis && <p>{opis}</p>}
      {wiek && <p>{wiek}</p>}
      <button onClick={onPokazDane}>
        {pokazDane ? 'Schowaj dane' : 'Pokaż dane'}
      </button>
    </div>
  );
};

function Cards() {
  const osoby = [
    {
      imie: 'Paweł Filonik',
      tytul: 'Twórca Strony',
      opis: 'Pasjonuje się carrowaniem jadźki w Rainbow Six Siege.',
      wiek: 'Wiek: 19 lat',
    },
    {
      imie: 'Mateusz Kondraciuk',
      tytul: 'Twórca Strony',
      opis: 'Pasjonuje się carrowaniem jadźki w Fortnite.',
      wiek: 'Wiek: 19 lat',
    },
    {
      imie: 'Marcin Filianowicz',
      tytul: 'Twórca Strony',
      opis: 'Pasjonuje się carrowaniem jadźki IRL.',
      wiek: 'Wiek: 20 lat',
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
      <h1>Wizytówki Uczniów</h1>
      
      <div className="cards-container">
        {osoby.map((osoba, index) => (
          <Wizytowka
            key={index}
            imie={osoba.imie}
            tytul={pokazDane[index] ? osoba.tytul : null}
            opis={pokazDane[index] ? osoba.opis : null}
            wiek={pokazDane[index] ? osoba.wiek : null}
            onPokazDane={() => przelaczDane(index)}
            pokazDane={pokazDane[index]}
          />
        ))}
      </div>
      <Link to='/about'>Przejdz do strony About</Link>
    </div>
  );
}

export default Cards;
