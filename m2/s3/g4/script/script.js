// Your API key: lNsrHCj4Km5jrFXFgL0gebVAZ9uEZ31SfOWzLoRuRxURL5yQZLOQY9RA
let card = document.getElementsByClassName('card')
console.log(card)


fetch('https://api.pexels.com/v1/search?query=nature&per_page=9',
{
    headers: {
    authorization:'lNsrHCj4Km5jrFXFgL0gebVAZ9uEZ31SfOWzLoRuRxURL5yQZLOQY9RA'
}})

.then((res) => {
    if (res.ok) {
        return res.json()
    } else {
        throw new Error ('afammoc')
    }
})

.then ((photos) => {
    
console.log(photos)
photos.photos.forEach((element , i) => {
    let load = document.querySelector('#load')
    load.addEventListener('click' , () => {
        card[i].firstElementChild.remove();
        let newImg = document.createElement('img');
        newImg.classList.add('img-fluid')
        newImg.height = '225';
        newImg.src = element.src.landscape 
        card[i].prepend(newImg)
    })
});
})

.catch((err) => {
console.log(err)
})

fetch('https://api.pexels.com/v1/search?query=nature&per_page=9',
{
    headers: {
    authorization:'lNsrHCj4Km5jrFXFgL0gebVAZ9uEZ31SfOWzLoRuRxURL5yQZLOQY9RA'
}})

.then((res) => {
    if (res.ok) {
        return res.json()
    } else {
        throw new Error ('afammoc')
    }
})

.then ((photos) => {
    
console.log(photos)
photos.photos.forEach((element , i) => {
    let loadSec = document.querySelector('#load-secondary')
    loadSec.addEventListener('click' , () => {
        card[i].firstElementChild.remove();
        let newImg = document.createElement('img');
        newImg.classList.add('img-fluid')
        newImg.height = '225';
        newImg.src = element.src.landscape 
        card[i].prepend(newImg)
    })
});
})

.catch((err) => {
console.log(err)
})

let buttonGrp = document.querySelectorAll('.btn-group button:nth-child(2)')
console.log(buttonGrp)

buttonGrp.forEach(element => {
    element.textContent = 'Hide'
    element.addEventListener('click' , function() {
        element.closest('.col-md-4').remove()
    })
});

let idP = document.querySelectorAll('.d-flex .text-muted')
console.log(idP)

idP.forEach((element,i) => {
    console.log(element)
    console.log(i)
    element.innerText = photos[i].photos.id
});