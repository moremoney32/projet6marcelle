/*****
 * function qui sert d 'affichage des photos
 *
 * @params {tableau} arrayOfjson
 * @return {htmlDom}
 */

export function displayImages(arrayOfjson) {
  let imageHtml = "";

  arrayOfjson.forEach((json) => {
    console.log(json);
    imageHtml += `


   <div class="blocImage">
    <span>${json.email}</span>
   <span>${json.username}</span>
   </div>
        
        
        
        
        
        `;
  });

  document.querySelector("#header").innerHTML = imageHtml;
}
