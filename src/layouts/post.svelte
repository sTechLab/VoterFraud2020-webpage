<script>
  export let title;
  export let description;
</script>

<slot />

<svelte:head>
  <title>{title} | Chola</title>
  <meta name="description" content={description} />
</svelte:head>
