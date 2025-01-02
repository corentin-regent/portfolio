<script module>
  import Link from '$components/links/Primary.svelte';
</script>

<script>
  const { message, resolve } = $props();
</script>

{message('text-leagues-intern-until-webapp-link')}<Link {resolve} url="https://leagues.gg">
  leagues.gg
</Link>{message('text-leagues-intern-until-lol-player-page')}<Link
  {resolve}
  url="https://leagues.gg/en/league-of-legends/KR/Hide%20on%20bush-KR1"
>
  {message('text-leagues-intern-lol-player-page')}
</Link>{message('text-leagues-intern-until-successfully-hosted')}<Link
  {resolve}
  url="https://www.leagueoflegends.com/en-gb/news/esports/nlc-national-league-launch/"
>
  {message('text-leagues-intern-successfully-hosted')}
</Link>{message('text-leagues-intern-after-successfully-hosted')}
