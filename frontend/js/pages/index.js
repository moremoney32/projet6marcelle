import { fetchData } from "../helpers/fetchData.mjs";
import { displayImages } from "../widgets/displayImages.mjs";

document.addEventListener("DOMContentLoaded", () => {
  fetchData("http://jsonplaceholder.typicode.com/users ").then((response) => {
    console.log(response);
    displayImages(response);
  });
});
