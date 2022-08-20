<script lang="ts">
    import { currentMeal } from "./store";

    const promt = "Wie wäre es mit";
</script>

<div class="elc-stack">
    <h2 class="text-align:center">{promt}</h2>

    <h1 class="text-align:center">
        {#if $currentMeal}
            <span class="word-break:break-word">{$currentMeal}?</span>
        {:else}
            <span class="pulse">?</span>
        {/if}
    </h1>
</div>

<style>
    * {
        --stack-margin: var(--s4);
    }
</style>
