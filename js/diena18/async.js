const getData = async (url) => {
  const response = await fetch(url);
  if (response.status === 200) {
    return response.json();
  } else {
    throw "Ivyko klaida";
  }
};

getData("async.json")
  .then((response) => {
    console.log(response[0]);
  })
  .catch((response) => {
    console.log(response);
  });
getData("async.json")
  .then((response) => {
    console.log(response[1]);
  })
  .catch((response) => {
    console.log(response);
  });
getData("async.json")
  .then((response) => {
    console.log(response[2]);
  })
  .catch((response) => {
    console.log(response);
  });
