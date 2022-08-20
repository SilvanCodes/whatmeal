<script lang="ts">
  import AddMeal from "./AddMeal.svelte";
  import ShowMeal from "./ShowMeal.svelte";
  import SearchMeal from "./SearchMeal.svelte";
  import RandomMeal from "./RandomMeal.svelte";
</script>

<main class="elc-center">
  <div class="dummy-for-stack" />
  <div class="elc-stack main-content">
    <ShowMeal />

    <div class="elc-stack elc-center">
      <div class="elc-cluster">
        <SearchMeal />
        <RandomMeal />
      </div>

      <AddMeal />
    </div>
  </div>
</main>

<style>
  * {
    --stack-margin: var(--s4);
    --stack-split: auto;
  }

  .main-content {
    padding: var(--s3);
    margin-block: auto;
  }
</style>
