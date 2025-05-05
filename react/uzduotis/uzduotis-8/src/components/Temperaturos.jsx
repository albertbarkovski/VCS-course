// Komponentas „Temperaturos“
// 1. Komponente susikurkite formą su įvesties laukeliu ir mygtuku. Į įvesties laukelį vartotojas galės įvesti bet kokią norimą temperatūrą.
// 2. Susikurkite temperatūrų masyvą, kuris pradžioje gali turėtų reikšmių.
// 3. Išveskite šio masyvo informaciją atskirame blokelyje ar paragrafe.
// 4. Padarykite, kad masyvo nespausdintų (blokelio ar paragrafo), jeigu masyvas yra tuščias.
// 5. Padarykite, kad patvirtinus formą (įvedus reikšmę ir paspaudus enter arba paspaudus ant mygtuko), būtų paimta informacija iš įvesties laukelio ir ji būtų įdėta į masyvo pabaigą.
// 6. Jeigu pradžioje masyve turėjote pradinių reikšmių, padarykite, kad pradžioje jis būtų tuščias (useState([])).
// 7. Susikurkite funkciją, kuri paskaičiuotų vidutinę dienos temperatūrą. Iškvieskite šią funkciją paragrafe. Padarykite, kad paragrafas nebūtų rodomas, kol nebus įvestos nei vienos temperatūros į masyvą.
// 8. Susikurkite funkciją ir ją iškvieskite paragrafe arba iškart parodykite paragrafe, kiek iš viso temperatūrų yra suvestų į masyvą. Šį paragrafą rodykite visada, tačiau jeigu nėra įvestų temperatūrų į masyvą, tai rašykite, kad yra 0 įvestos informacijos, kitu atveju rašykite kiek masyve yra duomenų.
// 9. Susikurkite funkciją, kuri surastų žemiausią užfiksuotą temperatūrą. Šią funkciją iškvieskite paragrafe. Nerodykite paragrafo jeigu nėra įvestos informacijos.
// 10. Susikurkite funkciją, kuri surastų didžiausią užfiksuotą temperatūrą. Šią funkciją iškvieskite  paragrafe. Nerodykite paragrafo jeigu nėra įvestos informacijos.
// 11. Susikurkite funkciją, kuri surastų skirtumą tarp didžiausios ir mažiausios užfiksuotos temperatūros (jeigu reikia susikurkite pagalbinius kintamuosius šiai informacijai saugoti, kad būtų lengviau palyginti). Arba skaičiavimą galite atlikti tiesiai paragrafe. Jeigu funkcionalumą darėte per funkciją, tai iškvieskite šią funkciją paragrafe. Nerodykite paragrafo jeigu nėra įvestų duomenų.
// 12. Sukurkite mygtuką, kuris pasirodytų tik jeigu bus įvesta bent viena temperatūra. Šis mygtukas turėtų išvalyti visą temperatūrų masyvą. Susikurkite funkciją, kurią iškviestumėte ant tokio mygtuko paspaudimo, funkcija išvalo visą masyvą.

import { useRef, useState } from "react";

const Temperaturos = () => {
  const tempRef = useRef();

  const [temperatura, setTemperatura] = useState([]);

  const newTempHandler = (event) => {
    event.preventDefault();
    let newTemp = parseFloat(tempRef.current.value);
    if (!isNaN(newTemp)) {
      setTemperatura([...temperatura, newTemp]);
      tempRef.current.value = "";
    }
  };

  const tempAvg = () => {
    return temperatura.reduce((a, b) => a + b, 0) / temperatura.length;
  };

  const minTemp = () => {
    return Math.min(...temperatura);
  };

  const maxTemp = () => {
    return Math.max(...temperatura);
  };

  const cleanBtnHandler = () => {
    setTemperatura([]);
  };

  return (
    <div>
      <div>
        <form action="addTemp" onSubmit={newTempHandler}>
          <label htmlFor="temp">
            <strong>Iveskite temperatura</strong>
          </label>
          <br />
          <input type="number" id="temp" ref={tempRef} />
          <button type="submit">Papildyt</button>
        </form>
      </div>
      {temperatura.length > 0 && (
        <div>
          <h4>Temperaturu sarasas</h4>
          {temperatura.map((temp, index) => (
            <p key={index}>{temp}°C</p>
          ))}
        </div>
      )}
      {temperatura.length > 0 && (
        <div>
          <h4>Vidutine temperatura</h4>
          <p>Vidutine saraso temperatura yra {tempAvg().toFixed(2)}°C</p>
        </div>
      )}
      <div>
        {temperatura.length > 0
          ? "Masyvo ilgis " + temperatura.length
          : "0 įvestos informacijos"}
      </div>
      {temperatura.length > 0 && (
        <div>
          <h4>Maziausia temperatura</h4>
          <p>Maziausia saraso temperatura yra {minTemp()}°C</p>
          <h4>Didziausia temperatura</h4>
          <p>Didziausia saraso temperatura yra {maxTemp()}°C</p>
          <p>MAX ir MIN temp skirtumas yra {maxTemp() - minTemp()}°C</p>
          <button onClick={cleanBtnHandler}>Isvalyti sarasa</button>
        </div>
      )}
    </div>
  );
};

export default Temperaturos;
