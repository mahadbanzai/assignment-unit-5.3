console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];
function addToCollection(collection, title, artist, yearPublished) {
let Album = {
    title: title ,
    artist: artist,
    yearPublished: yearPublished
}
collection.push (Album);
return Album; 
}

let album0 = addToCollection(myCollection, "Eternal Atake", "Lil Uzi Vert", 2020);
console.log(album0);
let album1 = addToCollection(myCollection, "Whole Lotta Red", "Playboi Carti", 2020);
console.log(album1);
let album2 = addToCollection(myCollection, "Get Rich or Die Tryin'", "50 Cent", 2003);
console.log(album2);
let album3 = addToCollection(myCollection, "The Life of Pi'erre 4", "Pierre Bourne", 2019);
console.log(album3);
let album4 = addToCollection(myCollection, "Wunna", "Gunna", 2020);
console.log(album4);
let album5 = addToCollection(myCollection, "My Turn", "Lil Baby", 2020);
console.log(album5);


console.log(myCollection);

function showCollection(collection) {
  for (let i = 0; i < collection.length; i++) {
    let album = collection[i];
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}.`);
  }
}
function findByArtist(collection, artist) {
  let matchingAlbums = [];

  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist) {
      matchingAlbums.push(collection[i]);
    }
  }
  return matchingAlbums;
}
console.log(findByArtist(myCollection, "Lil Uzi Vert"));

console.log(findByArtist(myCollection, "Kendrick Lamar"));




// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
