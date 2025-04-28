import "./App.css";
import Skaicius from "./components/Skaicius";

function App() {
  return (
    <>
      <Skaicius />
    </>
  );
}

export default App;

// Komponentas „Kelione“
// 1. Komponente susikurkite įvesties laukelį, kuriame vartotojas galėtų įvesti kiek iš viso dėl kelionės reikės nuvažiuoti kilometrų. Taip pat, įvesties laukelį, kuriame bus galima suvesti kiek vidutinių kuro sąnaudų turi automobilis 100-ui kilometrų (pvz 7 litrus). Ir galiausiai įvesties laukelį, kur žmogus galėtų nurodyti kuro kainą už litrą. Taip pat turėtų būti mygtukas, kuris patvirtintų įvestį.
// 2. Komponente susikurkite visus reikiamus kintamuosius informacijai saugoti (kelionės km suma; vidutinės sąnaudos; litro kaina).
// 3. Padarykite, kad paspaudus ant mygtuko visa informacija iš įvesties laukelių būtų paimta ir sudėta į atitinkamus kintamuosius.
// 4. Išveskite šią informaciją paragrafe žemiau.
// 5. Susikurkite funkciją, kuri paskaičiuotų kiek kuro bus išnaudota kelionei. Iškvieskite šią funkciją naujame paragrafe.
// 6. Susikurkite funkcija, kuri paskaičiuotų kiek iš viso turėtų kainuoti kuras. Iškvieskite šią funkciją naujame paragrafe.
// 7. Padarykite, kad po įvedimo (mygtuko paspaudimo) visi laukeliai išsivalytų.
// 8. Padarykite, kad informacijos išvedimas ir skaičiavimai būtų parodomi tik tuo atveju jeigu yra suvestos informacijos.

// Komponentas „MedzioApdirbejas“
// 1. Komponente susikurkite įvesties laukelius, kur būtų galima suvesti kiek iš viso kainavo visos medžiagos, kiek iš viso valandų žmogus dirbo prie projekto, koks turėtų būti valandinis uždarbis. Sukurkite mygtuką, kuris patvirtintų įvestį.
// 2. Komponente susikurkite visus reikiamus kintamuosius informacijai saugoti.
// 3. Padarykite, kad po mygtuko paspaudimo visa ši informacija būtų išsaugota į atitinkamus kintamuosius.
// 4. Išveskite visų šių įvestų kintamųjų informaciją atskirame paragrafe.
// 5. Padarykite, kad po įvesties (po mygtuko paspaudimo) visi turimi įvesties laukeliai išsivalytų.
// 6. Padarykite, kad jeigu dar nėra įvestos informacijos, paragrafas išvedantis tą įvestą informaciją nebūtų rodomas.
// 7. Susikurkite funkciją, kuri paskaičiuotų bendras projekto išlaidas (darbuotojo valandos padaugintos iš norimo valandinio uždarbio ir atimta medžiagų kaina). Iškvieskite šią funkciją atskirame paragrafe.
// 8. Susikurkite funkciją, kuri paskaičiuotų kiek produktas turėtų kainuoti (pridėkite 30 procentų ant turimų išlaidų, pvz jeigu pagaminti kainuoja 100 eurų, tai turėtume parduoti už 130 eurų), kad medžio apdirbėjas galėtų ką nors iš to uždirbti. Iškvieskite šią funkciją paragrafe.
// 9. Padarykite, kad skaičiavimų paragrafai nebūtų rodomi tol kol vartotojas nesuvedė jokios informacijos.

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

// Komponentas „Prekes“
// 1. Susikurkite formą su keliais įvesties laukeliais ir mygtuku. Įvesties laukeliai leistų suvesti vienos prekės informaciją, o apie vieną prekę yra žinoma ši informacija: pavadinimas; kaina; kiekis. Po mygtuko paspaudimo forma yra patvirtinama ir informacija suvedama.
// 2. Komponente susikurkite masyvą, kur būtų saugoma visų prekių informacija (masyvas su prekių objektais).
// 3. Po formos patvirtinimo (mygtuko paspaudimo), susirinkite visą informaciją iš visų įvesties laukelių, suformuluokite naujos prekės objektą ir jį įdėkite į masyvo priekį.
// 4. Po įvesties visus įvesties laukelius išvalykite.
// 5. Susikurkite div bloką, kuriame būtų atvaizduojamos visos prekės. Kiekvieną prekę atvaizduokite jos atskirame div elemente, išvedant visą prekės informaciją. (bus div blokas visoms prekėms ir daug atskirų div kiekvienai atskirai prekei).
// 6. Padarykite, kad jeigu prekių yra išvestų šias prekes, o jeigu prekių nėra išvestų paragrafą su tekstu „kol kas nėra įvestų prekių“.
// 7. Sukurkite funkciją, kuri leistų išvalyti visus produktus iš masyvo. Įdėkite mygtuką, kuris iškviestų šią funkciją. Mygtukas turi matytis tik jeigu yra įdėtų prekių į masyvą.
// 8. Sukurkite funkciją, kuri išfiltruotų / atrinktų tik tas prekes, kurių liko mažai (mažiau nei 5 vnt.). Šią funkciją panaudokite taip, kad išsivestų atskiruose blokeliuose visos atrinktos prekės, tai galima padaryti įsivedant dar vieną atskirą masyvą ir funkcija sudėtų informaciją į šį masyvą, arba ją galima iškviesti tiesiai spausdinime).
// 9. Nerodykite šių prekių (mažų likučių) blokelio išvis jeigu pradiniame masyve nėra jokios informacijos.

// Komponentas „Kepyklele“
// 1. Komponente susikurkite keletą įvesties laukelių bendrai kepyklėlės informacijai išsaugoti. Šie laukeliai turėtų leisti įvesti šią informaciją: darbuotojų skaičius; vieno darbuotojo kepinių kiekis per valandą; darbo valandų per dieną kiekis. Susikurkite kintamuosius, kurie saugotų šią įvestą informaciją. Padarykite, kad į kintamuosius būtų įkeliama informacija po bet kokio pasikeitimo įvesties laukeliuose, atskiro mygtuko patvirtinimui daryti nereikia.
// 2. Taip pat, komponente susikurkite įvesties laukelį su mygtuku, kur būtų galima suvesti visus dienos užsakymus. Komponente susikurkite masyvą, kuriame saugotumėte visų užsakymų skaičius. Padarykite, kad paspaudus ant mygtuko, būtų paimta informacija iš šio įvesties laukelio ir ji būtų įkeliama į masyvo pabaigą. Po paspaudimo užsakymo įvesties laukelis turi būti išvalytas.
// 3. Sukurkite funkciją, kuri surastų bendrą užsakymų sumą. Iškvieskite šią funkciją parodant jos atsakymą. Taip pat, padarykite, kad jeigu nėra įvestos informacijos į masyvą, tai ši išvestis nebūtų rodoma.
// 4. Sukurkite funkciją, kuri surastų bendrą kepyklos pajėgumą (įvertinkite kiek turite darbuotojų, kiek kiekvienas gali iškepti per valandą ir kiek darbo valandų yra dienoje). Iškvieskite šią funkciją parodant jos atsakymą. Padarykite, kad atsakymas būtų išvedamas tik tuo atveju jei visa informacija yra įvesta.
// 5. Palyginkite ir išveskite ar kepykla spės įgyvendinti visus dienos užsakymus. Šį atsakymą išveskite tik jeigu turite visą tam reikalingą informaciją.
