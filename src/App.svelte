<script lang="ts">
  //import NeedleEngine from "./components/NeedleEngine.svelte";
  import RootLayout from "./components/RootLayout.svelte";
</script>

<main>
  {#await import("./components/NeedleEngine.svelte")}
    <div class="text-gl text-white animate-pulse">Loading...</div>
  {:then { default: NeedleEngine }}
    <NeedleEngine/>
    <RootLayout/>
  {/await}
</main>

<style>
  main {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    user-select: none;
  }
</style>
