const searchBox= document.querySelector('.searchBox');
const searchBtn= document.querySelector('.searchBtn');
const recipContainer= document.querySelector('.recipe-container');
const recipeCloseBtn= document.querySelector('.recipe-close-btn');
const recipeDetailsContent= document.querySelector('.recipe-details-content');


const fetchRecipe= async(query)=>{
    recipContainer.innerHTML="Fetching Recipe......";
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();

recipContainer.innerHTML="";
    response.meals.forEach(meal => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML=`
<img src="${meal.strMealThumb}">
<h3>${meal.strMeal}</h3>
<p>${meal.strArea}</p>
<p>${meal.strCategory}</p>

`
const button = document.createElement('button');
button.textContent ="View Recipe";
recipeDiv.appendChild(button);

button.addEventListener('click',()=>{
    openRecipePopup(meal);
})




recipContainer.appendChild(recipeDiv);
});
    }

const openRecipePopup =(meal)=>{
recipeDetailsContent.textContent= `
<h2>${meal.strMeal}</h2>
`

recipeDetailsContent.parentElement.style.display="block";

}




searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const searchInput=searchBox.value.trim();
    fetchRecipe(searchInput);
console.log("button clicked")



});