<script lang="ts">
  import { onMount } from "svelte";
  import { MEAL } from "./api";

  let suggestion: Promise<string>;
  let addMealInput: string;
  let deleteMealInput: string;

  const getRandomMeal = () => {
    suggestion = MEAL.random();
  };

  const addMeal = () =>
    addMealInput && (MEAL.add(addMealInput), (addMealInput = ""));

  const deleteMeal = () =>
    deleteMealInput && (MEAL.delete(deleteMealInput), (deleteMealInput = ""));

  onMount(getRandomMeal);
</script>

<div class="elc-cover">
  <div class="elc-center">
    <h2>Wie wäre es mit:</h2>
    <h1>
      {#await suggestion}
        ?
      {:then name}
        {name}
      {/await}
    </h1>
  </div>
  <div class="elc-center">
    <div class="elc-stack">
      <button on:click={getRandomMeal}>Anderer Vorschlag</button>
      <div class="elc-box elc-stack">
        <input bind:value={addMealInput} on:change={addMeal} type="text" />
        <button on:click={addMeal}>Hinzufügen</button>
      </div>
      <div class="elc-box elc-stack">
        <input
          bind:value={deleteMealInput}
          on:change={deleteMeal}
          type="text"
        />
        <button on:click={deleteMeal}>Löschen</button>
      </div>
    </div>
  </div>
</div>
