/***
 * function qui sert a afficher les donnees
 *
 * @params {url}string
 * @return {json}
 */

export function fetchData(url) {
  /* Pour quelqu'un qui ne connait pas encore les promesses, voici quelques liens interessants 
    https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Using_promises
    https://www.youtube.com/watch?v=g3SyrS0wgvU
    */
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        return resolve(result);
      })
      .catch((error) => {
        return console.log(error);
      });
  });
}
