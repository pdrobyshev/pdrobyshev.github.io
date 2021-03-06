import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import {elements, renderLoader, clearLoader} from './views/base';

/************************
* GLOBAL STATE OF THE APP
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
* ***********************/
const state = {};

/********************
 * SEARCH CONTROLLER
********************/
const controlSearch = async () => {
	// 1) Get the query from the view
	const query = searchView.getInput();

	if (query) {
		// 2) New search object and add to state
		state.search = new Search(query);

		// 3) Prepare UI for results
		searchView.clearInput();
		searchView.clearResults();
		renderLoader(elements.searchRes);

		try {
			// 4) Search for recipes
			await state.search.getResults();

			// 5) Render results on UI
			clearLoader();
			searchView.renderResults(state.search.result);
		} catch (err) {
			alert('Something went wrong with the search...');
			clearLoader();
		}
	}
};

elements.searchForm.addEventListener('submit', e => {
	e.preventDefault();
	controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
	const btn = e.target.closest('.btn-inline');
	if (btn) {
		const goToPage = parseInt(btn.dataset.goto, 10);
		searchView.clearResults();
		searchView.renderResults(state.search.result, goToPage);
	}
});

/********************
 * RECIPE CONTROLLER
 ********************/

const controlRecipe = async () => {
	// Get ID from url
	const id = window.location.hash.replace('#', '');

	if (id) {
		// Prepare the UI for changes
		recipeView.clearRecipe();
		renderLoader(elements.recipe);

		//Highlight selected search item
		if (state.search) searchView.highlightSelected(id);

		// Create new recipe object
		state.recipe = new Recipe(id);

		try {
			// Get recipe data and parse ingredients
			await state.recipe.getRecipe();
			state.recipe.parseIngredients();

			// Calculate servings and time
			state.recipe.calcServings();
			state.recipe.calcTime();

			// Render the recipe
			clearLoader();
			recipeView.renderRecipe(state.recipe);
		} catch (err) {
			alert('Error processing recipe!');
		}
	}
};

// ['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));
['hashchange'].forEach(event => window.addEventListener(event, controlRecipe));


// Handling recipes button clicks
elements.recipe.addEventListener('click', e => {
	if (e.target.matches('.btn-decrease, .btn-decrease *')) {
		if (state.recipe.servings > 1) {
			state.recipe.updateServings('dec');
			recipeView.updateServingsIngredients(state.recipe);
		}
	} else if (e.target.matches('.btn-increase, .btn-increase *')) {
		state.recipe.updateServings('inc');
		recipeView.updateServingsIngredients(state.recipe);
	}
});

window.l = new List();