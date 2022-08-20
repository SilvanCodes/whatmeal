<script lang="ts">
    import { currentMeal } from "./store";

    const searchAdditions = ["Rezept"];

    let searchTerm = [$currentMeal, searchAdditions]
        .join(" ")
        .replace(/\s+/g, "+");
    let searchURL = `https://www.duckduckgo.com/?q=${searchTerm}`;

    const searchMeal = () => $currentMeal && window.open(searchURL, "_blank");
</script>

<button
    class="pulse-on-click font-size:base-plus primary flex-grow:max"
    on:click={searchMeal}
    >Rezept suchen
</button>
