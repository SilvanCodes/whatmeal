<script lang="ts">
    import { MEAL } from "./api";
    import { onMount } from "svelte";
    import { currentMeal } from "./store";

    const getRandomMeal = () => (
        ($currentMeal = ""),
        MEAL.random().then((meal) => (console.log(meal), ($currentMeal = meal)))
    );

    onMount(getRandomMeal);
</script>

<button
    class="font-size:base-plus glow-on-click secondary flex-grow:1"
    on:click={getRandomMeal}
>
    <i class="mi-refresh elc-icon" />
</button>
