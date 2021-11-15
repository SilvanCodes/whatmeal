import API from '.';

// API paths as constants
const RANDOM_MEAL_PATH = "/v1/meal/random";
const ADD_MEAL_PATH = '/v1/meal/add';
const DELETE_MEAL_PATH = '/v1/meal/delete';

// Raw API access
const getRandomMeal = async () => API.POST(RANDOM_MEAL_PATH, {});
const postMealFromName = async (name: string) => API.POST(ADD_MEAL_PATH, { name });
const deleteMealByName = async (name: string) => API.POST(DELETE_MEAL_PATH, { name })

// Application logic access to API
const MEAL = {
    random: async () => (await getRandomMeal())["name"],
    add: postMealFromName,
    delete: deleteMealByName
}

export default MEAL;