let nomeInput = document.getElementById('name')
let descrizioneInput = document.getElementById('description')
let brandInput = document.getElementById('brand')
let priceInput = document.getElementById('price')
let imgInput = document.getElementById('img')
let fetchUrl = 'https://striveschool-api.herokuapp.com/api/product/'
let saveButton = document.getElementById('save-button')
let deleteButton = document.getElementById('delete-button')
let rowReference = document.getElementById('product-container')


function Phone(
    name = nomeInput.value,
    description = descrizioneInput.value, 
    brand = brandInput.value, 
    price = priceInput.value, 
    image = imgInput.value
) 
{
    this.name = name;
    this.description = description;
    this.brand = brand;
    this.price = price;
    this.imageUrl = image;
}

let getProduct = function () {
    fetch(fetchUrl, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDQxODg4Zjc0MDAwMTQyODc0N2QiLCJpYXQiOjE2ODM4ODMwMzMsImV4cCI6MTY4NTA5MjYzM30.3qQmK43HJJsEYcGbkaRtb4GppuDS4s4mdTqU0aC_uas"
        }})
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('Errore')
            }
        })
        .then ((data) => {
        console
        data.forEach((event) => {
            let col = `
            <div class="col-12 col-md-3">
            <div class="card shadow">
            <img class='w-100' style="height: 175px" src="${event.imageUrl}" alt="">
            <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">
            ${event.description}
            </p>
            <p>${event.brand} - ${
                event.price
            }€</p>
            <a href="./backoffice.html?eventId=${
                event._id
            }" class="btn btn-primary">MODIFICA</a>
            </div>
            </div>
            </div>
            `
            rowReference.innerHTML += col
        })
        .catch((err) => {
            console.log(err)
        })
    })}
    
    
    
    window.onload = () => {
        getProduct()
    }
    
    let address = new URLSearchParams(window.location.search)
    let eventId = address.get('eventId')
    console.log('eventId')

if (eventId) {
    deleteButton.addEventListener('click', () =>{
        fetch(fetchUrl + eventId , {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDQxODg4Zjc0MDAwMTQyODc0N2QiLCJpYXQiOjE2ODM4ODMwMzMsImV4cCI6MTY4NTA5MjYzM30.3qQmK43HJJsEYcGbkaRtb4GppuDS4s4mdTqU0aC_uas"
            }})
            .then((res) =>{
                if(res.ok) {
                    location.assign('./homepage.html')
                } else {
                    throw new Error('problema')
                }
            })
            .catch((err) =>{
                console.log(err)
            })
    })
}




fetch(fetchUrl, {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDQxODg4Zjc0MDAwMTQyODc0N2QiLCJpYXQiOjE2ODM4ODMwMzMsImV4cCI6MTY4NTA5MjYzM30.3qQmK43HJJsEYcGbkaRtb4GppuDS4s4mdTqU0aC_uas"
}})
.then((res) => {
    if (res.ok) {
        return res.json()
    } else {
        throw new Error("Errore nel recupero del prodotto")
    }
})
.then((product) => {
    console.log(
        'DATI DEL SINGOLO MODELLO, RECUPERATO TRAMITE AMO VECCHIO (MAGIKARP)', product
    )
})
.catch((err) =>
console.log(err)
)


saveButton.addEventListener('click', function (e) {
    e.preventDefault()
    fetch(fetchUrl, {
    method: 'POST',
    body: JSON.stringify(new Phone()),
    headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDQxODg4Zjc0MDAwMTQyODc0N2QiLCJpYXQiOjE2ODM4ODMwMzMsImV4cCI6MTY4NTA5MjYzM30.3qQmK43HJJsEYcGbkaRtb4GppuDS4s4mdTqU0aC_uas",
    'Content-Type': 'application/json'
    }})
    .then((res) =>
    console.log(res),
    location.assign('./homepage.html')
    )
    .catch((err) =>
        console.log(err)
    )
})





