/*
1. Napišite Promise koji čeka funkciju getX, i na povratnu vrijednost true radi resolved sa console.log-om vrijednosti vraćene vrijednosti, a na false rejecta sa console.log-om stringa "Oh no!"

2. Ako već niste, prepišite sve funkcije u arrow funkcije
*/


function getX() {
	return Math.random() >= 0.5;
}

const myPromise = new Promise((resolve, reject) => {
    const x = getX()

    if (x) {
        return setTimeout(resolve, 1000);
    }

    return setTimeout(reject, 1000);
});

myPromise
.then(() => {
    console.log("YAY!");
})
.catch(() => {
    console.log("OH NO!");
});