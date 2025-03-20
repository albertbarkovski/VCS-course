// async function fetchMovie(url) {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data[0]);

//   document.getElementById(
//     "movie"
//   ).innerHTML = `<img src="${data[0].show.image.medium}" alt="${data[0].show.name}"><h3>${data[0].show.name}(${data[0].show.premiered})</h3><p>Genres:${data[0].show.genres}</p><p>${data[0].show.summary}</p>`;
// }
// fetchMovie("https://api.tvmaze.com/search/shows?q=girls");

//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------

// async function fetchMovie(url) {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
//   return data;
// }
// fetchMovie("https://api.tvmaze.com/search/shows?q=batman")
//   .then((data) => {
//     const moviesContainer = document.createElement("div");
//     moviesContainer.className = "movies-container";

//     for (const item of data) {
//       const title = item.show.name;
//       const year = item.show.premiered.slice(0, -6);
//       const imgLink = item.show.image.medium;
//       const genres = item.show.genres;
//       const summary = item.show.summary;

//       const movieDiv = document.createElement("div");
//       movieDiv.className = "movie";
//       movieDiv.innerHTML = `
//       <img src="${imgLink}" alt="${title}">
//       <h3>${title}(${year})</h3>
//       <p>Genres:${genres.join(", ")}</p>
//       <p>${summary}</p>`;
//       moviesContainer.appendChild(movieDiv);
//     }
//     document.body.appendChild(moviesContainer);
//   })
//   .catch((err) => console.log(err));

//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------

// axios
//   .get("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => console.log(response.data))
//   .catch((err) => console.log(err));

//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------

// const naujaUzduotis = {
//   userID: 1,
//   id: 101,
//   title: "Mano nauja uzduotis",
//   body: "Reikia uzsakyti picos",
// };

// axios
//   .post("https://jsonplaceholder.typicode.com/posts", naujaUzduotis)
//   .then((response) => console.log(response.data))
//   .catch((err) => console.log(err));

//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------

// async function fetchData(url) {
//   try {
//     const response = await axios.get(url);
//     console.log("Response:", response.data);
//   } catch (e) {
//     console.log("Error:", e);
//   }
// }

// fetchData("https://jsonplaceholder.typicode.com/posts/8");

//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------

// const instence = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com",
//   timeout: 5000,
//   headers: { "Content-Type": "application/json" },
// });

// instence
//   .get("/posts/5")
//   .then((response) => {
//     console.log(("Response:", response.data));
//   })
//   .catch((e) => {
//     console.log("Error:", e);
//   });
// instence
//   .get("/posts/3")
//   .then((response) => {
//     console.log(("Response:", response.data));
//   })
//   .catch((e) => {
//     console.log("Error:", e);
//   });
// instence
//   .get("/posts/53")
//   .then((response) => {
//     console.log(("Response:", response.data));
//   })
//   .catch((e) => {
//     console.log("Error:", e);
//   });

//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------

// const getStoreProducts = async () => {
//   try {
//     const res = await axios.get("https://pokeapsi.co/api/v2/ability/6");
//     console.log("Responsive:", res);
//   } catch (err) {
//     console.log("Error:", err);
//   }
// };

// const instence = axios.create({
//   baseURL: "https://pokeapsi.co/api/v2/ability",
//   timeout: 5000,
//   headers: { "Content-Type": "application/json" },
// });

// instence
//   .get("/1")
//   .then((response) => {
//     console.log(("Response:", response.data));
//   })
//   .catch((e) => {
//     console.log("Error:", e);
//   });

//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------

// https://fakestoreapi.com/products/

// const getStoreProducts = () => {
//   axios.get("https://fakestoreapi.com/products/").then((response) => {
//     console.log(response);
//   });
// };

//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------

// axios
//   .get("https://fakestoreapi.com/products/")
//   .then(function (response) {
//     console.log(response);

//     const itemsConatiner = document.createElement("div");
//     itemsConatiner.className = "item-container";

//     for (const item of response.data) {
//       const imgLink = item.image;
//       const title = item.title;

//       const itemDiv = document.createElement("div");
//       itemDiv.className = "item";
//       itemDiv.innerHTML = `
//           <img src="${imgLink}" alt="${title}">
//           <h3>${title}</h3>
//         <button>Peržiurėti</button>     `;
//       itemsConatiner.appendChild(itemDiv);
//     }
//     document.body.appendChild(itemsConatiner);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   });

//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
