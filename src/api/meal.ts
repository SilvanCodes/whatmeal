import API from '.';

// API paths as constants
const RANDOM_MEAL_PATH = "/v1/meal/random";
const MEAL_PATH = '/v1/meal';

// Raw API access
const getRandomMeal = async () => API.GET(RANDOM_MEAL_PATH);
const postMealFromName = async (name: string) => API.POST(MEAL_PATH, { name });
const deleteMealByName = async (name: string) => API.DELETE(MEAL_PATH, { name })

// Application logic access to API
const MEAL = {
    random: async () => (await getRandomMeal())["name"],
    add: postMealFromName,
    delete: deleteMealByName
}

export default MEAL;