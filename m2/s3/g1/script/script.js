// esercizio 1

 class User { constructor(firstName, Lastname, age, location) {
    this.firstName = firstName;
    this.Lastname = Lastname;
    this.age = age;
    this.location = location;
        } 
    
    compareAge(otherUser) {
        if (this.age > otherUser.age) {
            return `${this.firstName} e' piu' vecchio di ${otherUser.firstName}`;
        }
        else if (this.age < otherUser.age) {
            return `${this.firstName} e' piu' giovane di ${otherUser.firstName}`
        }
        else {
            return `${this.firstName} ha la stessa eta' di ${otherUser.firstName}`
        }
    }
}

const user1 = new User("Mario", "Rossi", 18, "Roma");
const user2 = new User("Franco", "Rossi", 20, "Palermo")

console.log(user1.compareAge(user2))

// esercizio 2

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed
    }
    
    sameOwner(pet) {
        return this.ownerName === pet.ownerName
    }
}

function createPet() {
    const petName = document.querySelector('#pet-name').value;
    const ownerName = document.querySelector('#owner-name').value;
    const species = document.querySelector('#species').value;
    const breed = document.querySelector('#breed').value;
    const pet = new Pet(petName, ownerName, species, breed)
    return console.log(pet)
}

