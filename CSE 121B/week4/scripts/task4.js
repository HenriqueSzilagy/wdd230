/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
    let myInfo = {};
// Step 2: Inside of the object, add a property named name with a value of your name as a string
myInfo.name = "Carlos Henrique Szilagy";

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
myInfo.photo = "images/myphoto.png";
myInfo.photoName =  "A picture of me";
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
myInfo.favoriteFoods = ['French Fries', 'Chicken parmigiana', 'Barbecue', 'Hamburguer'];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
myInfo.Hobbies = ['Watch Series', 'Read Fantasy Books', 'Play Games']

// Step 6: Add another property named placesLived with a value of an empty array
myInfo.placesLived = [];
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
myInfo.placesLived.push({ place: "",years: ""});
// Step 8: For each property, add appropriate values as strings
myInfo.placesLived[0].place = "São Bernardo do campo";
myInfo.placesLived[0].years = "16 years";
// Step 9: Add additional objects with the same properties for each place you've lived
myInfo.placesLived.push({ place: "Santa rosa de viterbo", years: "6 years" });

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
let names = document.getElementById('name');
names.innerHTML = myInfo.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
let photo = document.getElementById('photo')
photo.src = myInfo.photo;
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
photo.alt = myInfo.photoName;
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
    myInfo.favoriteFoods.forEach(favoriteFood => {
        let foodlist = document.createElement('li');
        foodlist.textContent = favoriteFood;
        let favoriteFoodsList = document.getElementById("favorite-foods");
        favoriteFoodsList.appendChild(foodlist);
    })

   
   
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods


// Step 6: Repeat Step 4 for each hobby in the hobbies property
myInfo.Hobbies.forEach(hobbie => {
    let hobbieslist = document.createElement('li');
    hobbieslist.textContent = hobbie;
    let HobbieList = document.getElementById("hobbies");
    HobbieList.appendChild(hobbieslist);
})
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies




// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element

let placesLived = document.getElementById('places-lived');
myInfo.placesLived.forEach(place => {
let placeItem = document.createElement('dt')
placeItem.textContent = place.place;
let lengthItem = document.createElement('dd')
lengthItem.textContent = place.years;
placesLived.append(placeItem);
placesLived.append(lengthItem);
})
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
