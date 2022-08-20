<script lang="ts">
    import { MEAL } from "./api";
    import { clickOutside } from "./utility";
    import { fade } from "svelte/transition";

    let addMealInput: HTMLInputElement;
    let addMealInputValue: string;

    let state: "input" | "success" | "idle" = "idle";

    const showInput = () => (state = "input");
    const showSuccess = () => (state = "success");
    const showIdle = () => (state = "idle");

    const invitingPlaceholder = "Gericht hinzufügen";
    const supportingPlaceholder = "Was gab es gestern?";

    const addMeal = () =>
        addMealInputValue
            ? (MEAL.add(addMealInputValue),
              (addMealInputValue = ""),
              showSuccess())
            : addMealInput.focus();
</script>

<div class="display:grid add-meal-container">
    {#if state === "input"}
        <form
            class="switch"
            transition:fade
            use:clickOutside
            on:clickoutside={showIdle}
            on:submit|preventDefault={addMeal}
            on:introend={() => addMealInput.focus()}
        >
            <input
                class="text-align:center"
                bind:this={addMealInput}
                bind:value={addMealInputValue}
                type="text"
                placeholder={supportingPlaceholder}
            />
            <button class="secondary">
                <i class="mi-send  display:inline-block transform:rotateZ:90" />
            </button>
        </form>
    {:else if state === "success"}
        <!-- will be shown for roughly var(--t-5) = 1000ms / var(--ratio)^5 ~= 370ms -->
        <button
            class="secondary switch"
            transition:fade
            on:introend={() => setTimeout(showIdle, 370)}
        >
            <i class="mi-check" />
        </button>
    {:else if state === "idle"}
        <form
            class="switch"
            transition:fade
            on:click|preventDefault={showInput}
        >
            <input
                class="text-align:center"
                type="text"
                placeholder={invitingPlaceholder}
            />
            <button class="secondary">
                <i class="mi-send  display:inline-block transform:rotateZ:90" />
            </button>
        </form>
    {/if}
</div>

<style>
    .add-meal-container {
        inline-size: 100%;
    }
    form {
        background-color: var(--color-blue);
        border-radius: var(--border-radius-base);
        display: flex;
        justify-content: space-between;
    }

    input {
        inline-size: 100%;
        outline: none;
        box-shadow: var(--zero) var(--zero) var(--s-5) var(--color-blue) inset;
    }

    /* see here: https://stackoverflow.com/a/59892853/8722320 */
    .switch {
        grid-column: 1/2;
        grid-row: 1/2;
    }
</style>
