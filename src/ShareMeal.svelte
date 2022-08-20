<script lang="ts">
    import { currentMeal } from "./store";

    const promt = "Wie wäre es mit";

    const shareURL = window.location.href;

    const shareMeal = () =>
        $currentMeal &&
        window.navigator.share({
            title: "WhatMeal?",
            text: [promt, `${$currentMeal}?`].join(" "),
            url: shareURL,
        });
</script>

<button
    class="font-size:base-plus glow-on-click secondary flex-grow:1"
    on:click={shareMeal}
>
    <i class="mi-copy elc-icon" />
</button>
