<script lang="ts">
  import { onMount } from "svelte";
  import { DELETE, GET, POST } from "./api";

  let suggestion = "?";
  let addMealInput: string;
  let deleteMealInput: string;

  const getRandomMeal = async () => {
    suggestion = (await GET("/meal/random"))["name"];
  };

  const addMeal = () => {
    addMealInput
      ? (POST("/meal", { meal: addMealInput }), (addMealInput = ""))
      : null;
  };

  const deleteMeal = () => {
    deleteMealInput
      ? (DELETE("/meal", { meal: deleteMealInput }), (deleteMealInput = ""))
      : null;
  };

  onMount(getRandomMeal);
</script>

<div class="elc-cover">
  <div class="elc-center">
    <h2>Wie waere es mit:</h2>
    <h1>{suggestion}</h1>
  </div>
  <div class="elc-center">
    <div class="elc-stack">
      <button on:click={getRandomMeal}>Anderer Vorschlag</button>
      <div class="elc-box elc-stack">
        <input bind:value={addMealInput} type="text" />
        <button on:click={addMeal}>Hinzufuegen</button>
      </div>
      <div class="elc-box elc-stack">
        <input bind:value={deleteMealInput} type="text" />
        <button on:click={deleteMeal}>Loeschen</button>
      </div>
    </div>
  </div>
</div>
