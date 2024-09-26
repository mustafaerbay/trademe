<script>
  import CustomHeader from "$lib/components/+CustomHeader.svelte";
  import Header_1 from "$lib/components/+Header_1.svelte";
  // This is where global layout logic can go, such as fetching user state, etc.
</script>

<main>
  <Header_1></Header_1>
  <slot />
</main>

<style>
  main {
    /* background-image: url("assets/images/logo.jpg"); */
  }
</style>
