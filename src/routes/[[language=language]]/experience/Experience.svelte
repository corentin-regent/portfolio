<script context="module">
  import Technologies from '$components/Technologies.svelte';
  import H4 from '$components/text/H4.svelte';
  import P from '$components/text/P.svelte';
  import i18nDates from '$stores/i18n/dates.svelte.js';
  import messages from '$stores/i18n/messages.svelte.js';
</script>

<script>
  const { positionId, organization, period, cityId, countryId, text, logo, technologies } =
    $props();
</script>

<article class="text-left flex gap-2 sm:gap-4">
  <div class="sm:flex sm:items-center mt-1 sm:mt-0">
    <svelte:component
      this={logo}
      class="w-14 min-w-14 sm:w-24 sm:min-w-24 h-14 sm:h-auto max-h-20"
    />
  </div>
  <div class="flex flex-col">
    <H4>
      {$messages.get(positionId)}
      <div class="sm:inline sm:before:content-['_–_']">
        {organization}
      </div>
    </H4>
    <small class="mb-1">
      {$i18nDates.periodToString(...period)}
      <div class="sm:inline sm:before:content-['|_']">
        {$messages.get(cityId)}, {$messages.get(countryId)}
      </div>
    </small>
    {#if technologies}
      <Technologies {technologies} class="my-1" />
    {/if}
    <P class="xs:text-justify"><svelte:component this={text} /></P>
  </div>
</article>
