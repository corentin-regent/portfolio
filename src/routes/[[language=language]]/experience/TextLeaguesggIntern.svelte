<script module>
  import Link from '$components/links/Primary.svelte';
  import messages from '$stores/i18n/messages.svelte.js';
</script>

{$messages.get('text-leagues-intern-until-webapp-link')}<Link url="https://leagues.gg">
  leagues.gg
</Link>{$messages.get('text-leagues-intern-until-lol-player-page')}<Link
  url="https://leagues.gg/en/league-of-legends/KR/Hide%20on%20bush-KR1"
>
  {$messages.get('text-leagues-intern-lol-player-page')}
</Link>{$messages.get('text-leagues-intern-until-successfully-hosted')}<Link
  url="https://www.leagueoflegends.com/en-gb/news/esports/nlc-national-league-launch/"
>
  {$messages.get('text-leagues-intern-successfully-hosted')}
</Link>{$messages.get('text-leagues-intern-after-successfully-hosted')}
