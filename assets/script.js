
// Egy “Keresd a párját” játékot kell készítened
// A játékban két sorban soronként 5 azaz összesen 10 darab kártya látható
// A játék kezdetekor kártyák le vannak fordítva A kártyák másik oldala egy egyszerű ábrát tartalmaz
// Az ábrák szabadon választható képek, vagy akár ikonok is lehetnek a könnyebb felismerhetőség végett
// Minden ábrából összesen két darab van
// Amikor a játékos rákattint egy kártyára az egy egyszerű animáció kíséretében megfordul, felfedve az ábrát
// Az első kártyára való kattintáskor elindul egy számláló, ami a játékidőt mutatja perc/másodperc formában
// Amennyiben egymás után két felfordított kártyán ugyanaz az ábra szerepel, azokat felfordítva kell hagyni a játék végéig, többet nem lehet rájuk kattintani
// Amennyiben a két ábra eltérő, mind a kettőt automatikusan vissza kell fogatni
// A játéknak akkor van vége, amikor az összes kártya képes oldala látszik
// A számláló a játék végén megáll
// 5 másodperc múlva a számláló nullázódik, és az összes kártya visszafordul, kezdődhet egy új játék

(function () {
    const icons = [
        'egy',
        'kettő',
        'három',
        'négy',
        'öt',
    ] 
})();

// <div class="cards-container">
//             <div class="cards">
//                 <div class="cards--front"></div>
//                 <div class="cards--back"></div>
//             </div>

const getOneCard = (icon) => {
    const div = document.createElement('div');
    div.classList.add('cards-container');
    div.innerHTML = `<div class="cards-container">
    <div class="cards">
        <div class="cards--front">teszt ${icon}</div>
        <div class="cards--back"></div>
    </div>`;
    return div;
};
//Shuffle an array  (source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)

const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
      return array;
  }

 // Show cards.
 const icons = [
    'egy',
    'kettő',
    'három',
    'négy',
    'öt',
];
 const iconArray = icons.concat(icons);
 shuffle(iconArray);
 const row1 = document.querySelector('.card-row:first-child');
 const row2 = document.querySelector('.card-row:nth-child(2)');
 let i = 0;
 for (const icon of iconArray) {
     i++;
     const card = getOneCard(icon);
     if (i < 6) {
         row1.appendChild(card);
     } else {
         row2.appendChild(card);
     }
 }