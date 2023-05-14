let nomeInput = document.getElementById("name");
let descrizioneInput = document.getElementById("description");
let brandInput = document.getElementById("brand");
let priceInput = document.getElementById("price");
let imgInput = document.getElementById("img");
let fetchUrl = "https://striveschool-api.herokuapp.com/api/product/";
let saveButton = document.getElementById("save-button");
let deleteButton = document.getElementById("delete-button");
let rowReference = document.getElementById("product-container");
let detailContainer = document.getElementById("detail-container");
let resetButton = document.getElementById("reset-button")
// CARD CONSTRUCTOR

 function validateForm() {
    if (nomeInput.value === "")
    {alert("inserisci nome"); return false}
    else if (descrizioneInput.value === "")
    {alert("inserisci descrizione"); return false}
    else if (brandInput.value === "")
    {alert("inserisci brand"); return false}
    else if (priceInput.value == "")
    {alert("inserisci prezzo"); return false}
    else if (imgInput.value === "")
    {alert("inserisci imagine"); return false}
    return true
}



function Phone(
  name = nomeInput.value,
  description = descrizioneInput.value,
  brand = brandInput.value,
  price = priceInput.value,
  image = imgInput.value
) {
  this.name = name;
  this.description = description;
  this.brand = brand;
  this.price = price;
  this.imageUrl = image;
}

// CREATE CARD

let getProduct = function () {
  fetch(fetchUrl, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDQxODg4Zjc0MDAwMTQyODc0N2QiLCJpYXQiOjE2ODM4ODMwMzMsImV4cCI6MTY4NTA5MjYzM30.3qQmK43HJJsEYcGbkaRtb4GppuDS4s4mdTqU0aC_uas",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore");
      }
    })
    .then((data) => {
      data
        .forEach((event) => {
          let col = `
            <div class="col-12 col-md-4 mb-4">
            <div class="card shadow bg-white text-black rounded overflow-hidden">
            <img style="height: 175px; object-fit:cover" src="${event.imageUrl}" alt="">
            <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text" style="white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;">
            ${event.description}
            </p>
            <p>${event.brand} - ${event.price}€</p>
            <a href="./backoffice.html?eventId=${event._id}" class="btn btn-outline-warning">MODIFICA</a>
            <a href="./detail.html?eventId=${event._id}" class="m-2 ms-0 btn btn-outline-primary" id="dettagli">DETTAGLI</a>
            </div>
            </div>
            </div>
            `;
          rowReference.innerHTML += col;
        })
      })
      .catch((err) => {
        console.log(err);
    });
};

window.onload = () => {
  getProduct();
};

let address = new URLSearchParams(window.location.search);
let eventId = address.get("eventId");
console.log("eventId");

// DELETE CARD

if (eventId) {
  document.getElementsByTagName("h2")[0].innerText =
    "Backoffice page - Modifica prodotto";
  document.getElementById("save-button").innerText = "MODIFICA PRODOTTO";
  document.getElementById("save-button").classList.add("btn-outline-warning");
  document.getElementById("save-button").classList.remove("btn-primary");
  document.getElementById("delete-button").classList.remove("d-none");
  document.getElementById("reset-button").classList.remove("d-none");
  document.getElementById("reset-button").classList.remove("btn-danger");
  document.getElementById("reset-button").classList.add("btn-primary");
  deleteButton.addEventListener("click", () => {
    fetch(fetchUrl + eventId, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDQxODg4Zjc0MDAwMTQyODc0N2QiLCJpYXQiOjE2ODM4ODMwMzMsImV4cCI6MTY4NTA5MjYzM30.3qQmK43HJJsEYcGbkaRtb4GppuDS4s4mdTqU0aC_uas",
      },
    })
      .then((res) => {
        if (res.ok) {
          location.assign("./homepage.html");
        } else {
          throw new Error("problema");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

// PRIMO GET

fetch(fetchUrl, {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDQxODg4Zjc0MDAwMTQyODc0N2QiLCJpYXQiOjE2ODM4ODMwMzMsImV4cCI6MTY4NTA5MjYzM30.3qQmK43HJJsEYcGbkaRtb4GppuDS4s4mdTqU0aC_uas",
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Errore nel recupero del prodotto");
    }
  })
  .then((product) => {
    console.log(
      "DATI DEL SINGOLO MODELLO, RECUPERATO TRAMITE AMO VECCHIO (MAGIKARP)",
      product
    );
  })
  .catch((err) => console.log(err));

//   SOLO POST

// saveButton.addEventListener('click', function (e) {
//     e.preventDefault()
//     fetch(fetchUrl, {
//     method: 'POST',
//     body: JSON.stringify(new Phone()),
//     headers: {
//     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDQxODg4Zjc0MDAwMTQyODc0N2QiLCJpYXQiOjE2ODM4ODMwMzMsImV4cCI6MTY4NTA5MjYzM30.3qQmK43HJJsEYcGbkaRtb4GppuDS4s4mdTqU0aC_uas",
//     'Content-Type': 'application/json'
//     }})
//     .then((res) =>
//     console.log(res),
//     location.assign('./homepage.html')
//     )
//     .catch((err) =>
//         console.log(err)
//     )
// })

//  PUT + POST
saveButton.addEventListener("click", function (e) {
  e.preventDefault();
  let validate = validateForm()
  
  if (validate){
  fetch(eventId ? fetchUrl + eventId : fetchUrl, {
    method: eventId ? "PUT" : "POST",
    body: JSON.stringify(new Phone()),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDQxODg4Zjc0MDAwMTQyODc0N2QiLCJpYXQiOjE2ODM4ODMwMzMsImV4cCI6MTY4NTA5MjYzM30.3qQmK43HJJsEYcGbkaRtb4GppuDS4s4mdTqU0aC_uas",
      "Content-Type": "application/json",
    },
  })
    
    .then((res) =>{
    console.log(res), location.assign("./homepage.html")})
    .catch((err) => console.log(err));}
  })


  //ripopolo il form
  fetch(fetchUrl + eventId, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDQxODg4Zjc0MDAwMTQyODc0N2QiLCJpYXQiOjE2ODM4ODMwMzMsImV4cCI6MTY4NTA5MjYzM30.3qQmK43HJJsEYcGbkaRtb4GppuDS4s4mdTqU0aC_uas",
    },
  })
  .then((res) => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error("Errore")
    }
  })
  .then((event) => {
    document.getElementById('name').value = event.name
    document.getElementById('description').value = event.description
    document.getElementById('brand').value = event.brand
    document.getElementById('price').value = event.price
    document.getElementById('img').value = event.imageUrl
  })
  .catch((error) => {
    console.log(error)
  })

resetButton.addEventListener('click', () => {
  fetch(fetchUrl + eventId, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDQxODg4Zjc0MDAwMTQyODc0N2QiLCJpYXQiOjE2ODM4ODMwMzMsImV4cCI6MTY4NTA5MjYzM30.3qQmK43HJJsEYcGbkaRtb4GppuDS4s4mdTqU0aC_uas",
    },
  })
  .then((res) => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error("Errore")
    }
  })
  .then((event) => {
    document.getElementById('name').value = ""
    document.getElementById('description').value = ""
    document.getElementById('brand').value = ""
    document.getElementById('price').value = ""
    document.getElementById('img').value = ""
  })
  .catch((error) => {
    console.log(error)
  })
})
  