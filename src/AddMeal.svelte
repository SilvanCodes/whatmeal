<script lang="ts">
    import { MEAL } from "./api";

    let addMealInput: HTMLInputElement;
    let addMealInputValue: string;

    const addMeal = () =>
        addMealInputValue
            ? (MEAL.add(addMealInputValue), (addMealInputValue = ""))
            : addMealInput.focus();
</script>

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
