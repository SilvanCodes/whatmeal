<script lang="ts">
    import { MEAL } from "./api";
    import { currentMeal } from "./store";

    const deleteMeal = () => $currentMeal && MEAL.delete($currentMeal);
</script>

<div class="elc-box">
    <button on:click={deleteMeal} class="pulse-on-click secondary"
        >Angezeigten Vorschlag löschen</button
    >
</div>
