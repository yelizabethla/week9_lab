/*** Object Constructors ***/
function Cat(name, age) {
  this.name = name;
  this.age = age;
  this.image = "cat.jpg";
  this.type = "Cat";
}

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.image = "dog.jpg"
  this.type = "Dog";
}

function Bird(name, age) {
  this.name = name;
  this.age = age;
  this.image = "bird.jpg"
  this.type = "Bird";
}

/*** Global Variables ***/
var animals = [new Cat(), new Dog(), new Bird()];
var names = ["Toothless", "Marshmallow", "Momo", "Coco", "Ollie", "Oscar", "Bella", "Ruby", "Apples"];

/*** Functions ***/
// get a random index for an array from 0 to maxIndex (not inclusive)
function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

// generates either a Cat, Dog, or Bird with a random name and random age
function generateRandomAnimal() {
  var randomIdx = getRandomIndex(animals.length);
  var randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Cat) 
  {
    return new Cat(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Dog) 
  {
    return new Dog(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Bird) 
  {
    return new Bird(generateRandomName(), generateRandomAge());
  }
}

// generates a random name from list of names
function generateRandomName() {
  var randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}

// generates a random age from 0 to 5
function generateRandomAge() {
  var randomIdx = getRandomIndex(5);
  return randomIdx;
}

/*** Document Load ****/
function onLoad() {

  var animal = JSON.parse(localStorage.getItem("savedAnimal"));
  var hasSavedAnimal = false;
  if (animal === null) {
    document.getElementById("storage").textConent = "Save Animal";
    animal = generateRandomAnimal();
  }
  else {
    document.getElementById("storage").textContent = "Clear";
    hasSavedAnimal = true;
  }
  console.log(animal)
  // update the page based on the animal properties
  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + " years old";
  document.getElementById("animal-img").setAttribute("src", animal.image)

  document.getElementById("storage").addEventListener("click", function() {
    if (hasSavedAnimal) {
      localStorage.removeItem("savedAnimal");
      document.getElementById("storage").style.display = "none";
      document.getElementById("button-text").textContent = "Cleared!";
      document.getElementById("buttom-text").style.display = "block";
    }
    else {
      localStorage.setItem("savedAnimal", JSON.stringify(animal));
      document.getElementById("storage").style.display = "none";
      document.getElementById("button-text").textContent = "Saved!";
      document.getElementById("buttom-text").style.display = "block";
    }
  })
};
