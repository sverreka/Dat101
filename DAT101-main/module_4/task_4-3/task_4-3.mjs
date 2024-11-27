"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
];

const task2Words = [];

document.getElementById('cmbTask1Calculate').addEventListener('click', function() {
  const width = parseFloat(document.getElementById('txtRectWidth').value);
  const height = parseFloat(document.getElementById('txtRectHeight').value);

  if (isNaN(width) || isNaN(height)) {
    document.getElementById('txtTask1Output').textContent = 'Please enter valid numbers for width and height.';
    return;
  }

  const perimeter = 2 * (width + height);
  const area = width * height;

  document.getElementById('txtTask1Output').textContent = `Circumference = ${perimeter}, Area = ${area}`;
});

document.getElementById('txtTask2Word').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const word = event.target.value.trim();
    if (word) {
      task2Words.push(word);
      document.getElementById('txtTask2Output').textContent = `Number of words = ${task2Words.length}: ${task2Words.join(', ')}`;
      event.target.value = '';
    }
  }
});

document.getElementById('cmbTask3CheckAnswer').addEventListener('click', function() {
  const checkboxes = document.querySelectorAll('input[name="chkTask3"]:checked');
  const selectedValues = Array.from(checkboxes).map(checkbox => checkbox.value);
  
  if (selectedValues.length > 0) {
    document.getElementById('txtTask3Output').textContent = `Selected values: ${selectedValues.join(', ')}`;
  } else {
    document.getElementById('txtTask3Output').textContent = 'No checkboxes selected.';
  }
});

// Create radio buttons for car types
const divTask4Cars = document.getElementById('divTask4Cars');

CarTypes.forEach(car => {
  const label = document.createElement('label');
  const radio = document.createElement('input');
  radio.type = 'radio';
  radio.name = 'carType';
  radio.value = car.caption;
  label.appendChild(radio);
  label.appendChild(document.createTextNode(car.caption));
  divTask4Cars.appendChild(label);
  divTask4Cars.appendChild(document.createElement('br'));
});

// Add event listener to handle radio button selection
divTask4Cars.addEventListener('change', function(event) {
  if (event.target.name === 'carType') {
    document.getElementById('txtTask4Output').textContent = `Selected car: ${event.target.value}`;
  }
});

document.getElementById('selectTask5Animals').addEventListener('change', function(event) {
  const selectedAnimal = event.target.options[event.target.selectedIndex].text;
  document.getElementById('txtTask5Output').textContent = `You selected: ${selectedAnimal}`;
});

// Populate selectTask6Girls with options from GirlsNames array
const selectTask6Girls = document.getElementById('selectTask6Girls');

GirlsNames.forEach(name => {
  const option = document.createElement('option');
  option.value = name;
  option.textContent = name;
  selectTask6Girls.appendChild(option);
});

// Add event listener to handle selection change
selectTask6Girls.addEventListener('change', function(event) {
  const selectedName = event.target.value;
  document.getElementById('txtTask6Output').textContent = `You selected: ${selectedName}`;
});

// Populate selectMovieGenre with options from MovieGenre array
const selectMovieGenre = document.getElementById('selectMovieGenre');

MovieGenre.forEach(genre => {
  const option = document.createElement('option');
  option.value = genre;
  option.textContent = genre;
  selectMovieGenre.appendChild(option);
});

// Add event listener to handle adding a new movie
document.getElementById('cmbAddMovie').addEventListener('click', function() {
  const title = document.getElementById('txtMovieTitle').value.trim();
  const genre = document.getElementById('selectMovieGenre').value;
  const director = document.getElementById('txtMovieDirector').value.trim();
  const rate = document.getElementById('txtMovieRate').value;

  if (title && genre && director && rate) {
    const table = document.getElementById('tblMovies');
    const row = table.insertRow();
    row.insertCell(0).textContent = table.rows.length - 1; // Movie number
    row.insertCell(1).textContent = title;
    row.insertCell(2).textContent = genre;
    row.insertCell(3).textContent = director;
    row.insertCell(4).textContent = rate;

    // Clear input fields after adding the movie
    document.getElementById('txtMovieTitle').value = '';
    document.getElementById('selectMovieGenre').selectedIndex = 0;
    document.getElementById('txtMovieDirector').value = '';
    document.getElementById('txtMovieRate').value = 5;
  } else {
    alert('Please fill in all fields.');
  }
});