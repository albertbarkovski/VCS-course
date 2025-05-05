// Vaikinis komponentas „Delione“
// 1. Padarykite, kad šis komponentas galėtų gauti informaciją, galite daryti per props, išskaidant gautą objektą į dalis arba prisiskiriant prie vidinio kintamojo.
// 2. Išveskite visą gautą informaciją pasirinktu būdu.
// 3. Susikurkite funkciją, kuri patikrintų dėlionės detalių kiekį ir išvestų kokio sudėtingumo ši dėlionė yra (0-500 lengva; 500-1000 vidutinė; 1000+ sunki). Iškvieskite šią funkciją paragrafe.
import React from "react";

const Delione = ({ pavadinimas, detaliuKiekis, plotis, aukstis }) => {
  const arSudetinga = () => {
    if (detaliuKiekis > 1000) return "Delione yra sunki";
    else if (detaliuKiekis > 500) return "Delione yra vidutinio sunkumo";
    else return "Delione yra lengva";
  };
  return (
    <div>
      <p>
        Delione <strong>{pavadinimas}</strong>
      </p>
      <p>
        Detaliu sk: {detaliuKiekis}vnt, plotis: {plotis}cm, aukstis:{aukstis}cm
      </p>
      <strong>{arSudetinga()}</strong>
      <hr />
    </div>
  );
};

export default Delione;
