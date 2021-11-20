<script lang="ts">
  import { onMount } from "svelte";
  import { MEAL } from "./api";

  let suggestion: Promise<string>;
  let addMealInput: HTMLInputElement;
  let addMealInputValue: string;

  const getRandomMeal = () => {
    suggestion = MEAL.random().then((name) => (currentSuggestion = name));
  };

  let currentSuggestion = "";

  const addMeal = () =>
    addMealInputValue
      ? (MEAL.add(addMealInputValue), (addMealInputValue = ""))
      : addMealInput.focus();

  const deleteMeal = () =>
    currentSuggestion && (MEAL.delete(currentSuggestion), getRandomMeal());

  onMount(getRandomMeal);
</script>

<div class="elc-cover" style="--cover-padding: var(--s1)">
  <div class="elc-stack" style="--stack-margin: calc(var(--s2) * 0.75)">
    <div class="elc-stack" style="--stack-margin: calc(var(--s1))">
      <div class="elc-stack elc-center">
        <h2 style="font-size: xx-large;">Wie wäre es mit</h2>
        <h1 style="font-size: xxx-large;">
          {#await suggestion}
            <span class="pulse">?</span>
          {:then name}
            <span style="word-break: break-word;">{name}</span>
          {/await}
        </h1>
      </div>
      <div class="elc-center">
        <button on:click={getRandomMeal}>Anderer Vorschlag</button>
      </div>
    </div>

    <div class="elc-center">
      <div class="elc-stack">
        <div class="elc-box elc-stack">
          <input
            bind:this={addMealInput}
            bind:value={addMealInputValue}
            on:change={addMeal}
            type="text"
          />
          <button on:click={addMeal}>Vorschlag hinzufügen</button>
        </div>

        <div class="elc-box elc-stack">
          <button on:click={deleteMeal}>Vorschlag löschen</button>
        </div>
      </div>
    </div>
  </div>
</div>
