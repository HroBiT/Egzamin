import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const kursy = ["programowanie w c#", "Angular", "Kurs Django"];
  const [imie, setImie] = useState("");
  const [wybor, setWybor] = useState("");

  const ZapiszImie = (e) => { setImie(e.target.value); }
  const ZapiszWybor = (e) => { setWybor(e.target.value); }

  const Wyslij = (e) => {
    e.preventDefault();
    if (imie === "" || wybor === "") {
      alert("Wypełnij wszystkie pola");
    } else {
      const kursIndex = parseInt(wybor) - 1;
      if (kursIndex >= 0 && kursIndex < kursy.length) {
        console.log("imie i nazwisko: " + imie);
        console.log("Nazwa kursu: " + kursy[kursIndex]);
      } else {
        console.log("Nieprawidłowy numer kursu");
      }
    }
  }

  return (
    <div className="container">
      <h1>Liczba kursów: {kursy.length}</h1>
      <ol>
        {kursy.map((kurs, index) => (
          <li key={index}>{kurs}</li>
        ))}
      </ol>
      <form onSubmit={Wyslij}>
        <div className="form-group">
          <label htmlFor="imie">imie i nazwisko</label>
          <input type="text" className="form-control" id="imie" onChange={ZapiszImie} />
        </div>
        <div className="form-group">
          <label htmlFor="wybor">wybor kursow</label>
          <select className="form-control" id="wybor" onChange={ZapiszWybor}>
            <option value=""></option>
            {kursy.map((kurs, index) => (
              <option key={index} value={index + 1}>{index + 1}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">zapisz</button>
      </form>
    </div>
  );
}

export default App;