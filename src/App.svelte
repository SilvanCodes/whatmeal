<script lang="ts">
  import { onMount } from "svelte";
  import { MEAL } from "./api";
  import AddMeal from "./AddMeal.svelte";

  const promt = "Wie wäre es mit";

  const searchAdditions = ["Rezept"];

  let currentSuggestion = "";

  let suggestion: Promise<string>;

  let searchTerm: string;
  let searchURL: string;

  const getRandomMeal = () =>
    (suggestion = MEAL.random().then(
      (name) => (
        (searchTerm = [name, searchAdditions].join(" ").replace(/\s+/g, "+")),
        (searchURL = `https://www.duckduckgo.com/?q=${searchTerm}`),
        (currentSuggestion = name)
      )
    ));

  const deleteMeal = () =>
    currentSuggestion && (MEAL.delete(currentSuggestion), getRandomMeal());

  // const shareMeal = () =>
  //   currentSuggestion &&
  //   window.navigator.share({
  //     title: "WhatMeal?",
  //     text: [promt, `${currentSuggestion}?`].join(" "),
  //     url: searchURL,
  //   });

  const searchMeal = () =>
    currentSuggestion && window.open(searchURL, "_blank");

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
        on:click={searchMeal}>Rezept suchen</button
      >
      <button
        class="font-size:base-plus glow-on-click secondary flex-grow:1"
        on:click={getRandomMeal}
      >
        <i class="mi-refresh elc-icon" />
      </button>
      <!--
      <button
        class="font-size:base-plus glow-on-click secondary flex-grow:1"
        on:click={shareMeal}
      >
        <i class="mi-copy elc-icon" />
      </button>
      -->
    </div>
  </div>

  <div class="elc-center">
    <div class="elc-stack">
      <AddMeal />

      <div class="elc-box">
        <button on:click={deleteMeal} class="pulse-on-click secondary"
          >Angezeigten Vorschlag löschen</button
        >
      </div>
    </div>
  </div>
</div>
