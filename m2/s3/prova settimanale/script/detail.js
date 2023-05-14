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
let address = new URLSearchParams(window.location.search);
let eventId = address.get("eventId");
console.log(eventId);
console.log(address);

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

let getProduct = function () {
  fetch(fetchUrl + eventId, {
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
    .then((event) => {
        console.log(event)
            let col = `
                <div class="col col-md-7">
                  <img class='img-fluid' src="${event.imageUrl}" alt="">
                </div>
                <div class="col col-md-5 d-flex flex-column flex-wrap">
                  <h5 class="card-title fs-1 mb-3">
                    ${event.name}
                  </h5>
                  <hr>
                  <p class="card-text fs-3 mt-3">
                    ${event.description}
                  </p>
                  <hr>
                  <p class="fs-3 mt-3">
                    ${event.brand} - ${event.price}€
                  </p>
                  <a href="./backoffice.html?eventId=${event._id}" class="btn btn-warning mb-5">MODIFICA</a>
                </div>
                `;
            detailContainer.innerHTML = col;
        })
        .catch((err) => {
            console.log(err);
        });
    };

window.onload = () => {
  getProduct();
};
