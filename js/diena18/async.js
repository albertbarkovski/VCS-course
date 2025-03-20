const getData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw `Įvyko klaida: ${response.status} - ${response.statusText}`;
    }
    return await response.json();
  } catch (error) {
    console.error("Klaida gaunant duomenis:", error);
    return null;
  }
};

async function patikrintiZodzioIlgi(cbfunkcija) {
  const zodziai = await getData(
    "https://jsonplaceholder.typicode.com/comments"
  );

  if (!zodziai) return;

  const pirmasPavadinimoZodis = zodziai.map(
    (irasas) => irasas.name.split(" ")[0]
  );
  pirmasPavadinimoZodis.forEach(cbfunkcija);
}

function zodzioIlgis(zodis) {
  console.log(zodis, "ilgis", zodis.length);
}

patikrintiZodzioIlgi(zodzioIlgis);
