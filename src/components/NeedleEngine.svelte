<script lang="ts">
  import { onMount } from "svelte";
  import "../generated/gen.js";
  import "@needle-tools/engine";
  
  onMount(() => {
    const needleEngine = document.querySelector("needle-engine");
    const shadowRoot = needleEngine?.shadowRoot;
    const needleMenu = shadowRoot?.querySelector("needle-menu");
    needleMenu!.shadowRoot!.innerHTML = "";
  });
</script>

<needle-engine></needle-engine>

<style>
  needle-engine {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
