<script lang="ts">
    import { MEAL } from "./api";
    import { clickOutside } from "./utility";
    import { fade } from "svelte/transition";

    let addMealInput: HTMLInputElement;
    let addMealInputValue: string;

    let inputMode = false;

    const showInput = () => (inputMode = true);

    const addMeal = () =>
        addMealInputValue
            ? (MEAL.add(addMealInputValue),
              (addMealInputValue = ""),
              (inputMode = false))
            : addMealInput.focus();
</script>

<div class="elc-box display:grid">
    {#if inputMode}
        <form
            class="switch"
            use:clickOutside
            on:clickoutside={() => (inputMode = false)}
            on:submit|preventDefault={addMeal}
            on:introend={() => addMealInput.focus()}
            transition:fade
        >
            <input
                class="text-align:center"
                bind:this={addMealInput}
                bind:value={addMealInputValue}
                type="text"
                placeholder="Was gab es gestern?"
            />
            <button class="send">
                <i class="mi-send rotate:90" />
            </button>
        </form>
    {:else}
        <button
            class="pulse-on-click secondary switch"
            on:click={showInput}
            transition:fade
        >
            Eigenen Vorschlag hinzufügen
        </button>
    {/if}
</div>

<style>
    form {
        background-color: var(--color-blue);
        border-radius: var(--border-radius-base);
        display: flex;
        justify-content: space-between;
    }

    input {
        inline-size: 100%;
    }

    input:focus {
        outline: none;
        box-shadow: var(--zero) var(--zero) var(--s-5) var(--color-blue) inset;
    }

    .send {
        background-color: transparent;
    }

    /* see here: https://stackoverflow.com/a/59892853/8722320 */
    .switch {
        grid-column: 1/2;
        grid-row: 1/2;
    }

    i {
        color: var(--color-white);
    }
</style>
