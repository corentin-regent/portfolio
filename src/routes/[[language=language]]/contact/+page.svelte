<script context="module">
  import Email from '$components/icons/Email.svelte';
  import Discord from '$logos/Discord.svelte';
  import Github from '$logos/Github.svelte';
  import Linkedin from '$logos/Linkedin.svelte';
  import Social from './Social.svelte';

  const myEmail = 'corentin.regent.pro@gmail.com';
  const socials = [
    { icon: Email, text: myEmail, linkUrl: `mailto:${myEmail}` },
    {
      icon: Linkedin,
      text: 'Corentin Régent',
      linkUrl: 'https://www.linkedin.com/in/corentin-regent',
    },
    { icon: Github, text: 'corentin-regent', linkUrl: 'https://github.com/corentin-regent' },
    {
      icon: Discord,
      text: '@cocorigon',
      linkUrl: `https://discord.com/users/497849667728703497`,
    },
  ];
</script>

<ul class="grid lg:grid-cols-2 lg:mx-8 xl:mx-28 2xl:mx-40 justify-center gap-y-3 mt-4">
  {#each socials as social}
    <li>
      <Social {...social} height="h-12" width="w-12" iconClass="p-2" />
    </li>
  {/each}
</ul>
