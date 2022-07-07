<script lang="ts">
  import { onMount } from "svelte";
  import { MEAL } from "./api";

  let suggestion: Promise<string>;
  let addMealInput: HTMLInputElement;
  let addMealInputValue: string;

  const getRandomMeal = () => {
    suggestion = MEAL.random().then((name) => (currentSuggestion = name));
  };

  const promt = "Wie wäre es mit";

  let currentSuggestion = "";

  const addMeal = () =>
    addMealInputValue
      ? (MEAL.add(addMealInputValue), (addMealInputValue = ""))
      : addMealInput.focus();

  const deleteMeal = () =>
    currentSuggestion && (MEAL.delete(currentSuggestion), getRandomMeal());

  const shareMeal = () =>
    currentSuggestion &&
    window.navigator.share({
      title: "WhatMeal?",
      text: [promt, `${currentSuggestion}?`].join(" "),
      url: `https://${window.location.host}`,
    });

  onMount(getRandomMeal);
</script>

<div class="elc-cover" style="--cover-padding: var(--s3)">
  <div class="dummy-for-cover-layout" />

  <div class="elc-center elc-stack" style="--stack-margin: var(--s4)">
    <h2 class="text-align:center">{promt}</h2>

    <h1 class="text-align:center">
      {#await suggestion}
        <span class="pulse">?</span>
      {:then name}
        <span class="word-break:break-word">{name}?</span>
      {/await}
    </h1>

    <div class="elc-cluster">
      <button
        class="pulse-on-click font-size:base-plus primary flex-grow:max"
        on:click={getRandomMeal}>Anderer Vorschlag</button
      >
      <button
        class="font-size:base-plus glow-on-click secondary flex-grow:1"
        on:click={shareMeal}
      >
        <i class="mi-share elc-icon" />
      </button>
    </div>
  </div>

  <div class="elc-center">
    <div class="elc-stack">
      <form on:submit|preventDefault={addMeal} class="elc-box elc-stack">
        <input
          bind:this={addMealInput}
          bind:value={addMealInputValue}
          type="text"
          placeholder="Was gab es gestern?"
          class="text-align:center"
        />
        <button class="pulse-on-click secondary"
          >Eigenen Vorschlag hinzufügen</button
        >
      </form>

      <div class="elc-box">
        <button on:click={deleteMeal} class="pulse-on-click secondary"
          >Angezeigten Vorschlag löschen</button
        >
      </div>
    </div>
  </div>
</div>
