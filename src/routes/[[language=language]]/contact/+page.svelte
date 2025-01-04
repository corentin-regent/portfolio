<script module>
  import Email from '$components/icons/Email.svelte';
  import Discord from '$logos/Discord.svelte';
  import Github from '$logos/Github.svelte';
  import Linkedin from '$logos/Linkedin.svelte';
  import { getMessage, getResolve } from '$runes/index.svelte.js';
  import Social from './Social.svelte';

  const myEmail = 'corentin.regent@gmail.com';
  const socials = [
    { Icon: Email, text: myEmail, linkUrl: `mailto:${myEmail}` },
    {
      Icon: Linkedin,
      text: 'Corentin Régent',
      linkUrl: 'https://www.linkedin.com/in/corentin-regent',
    },
    { Icon: Github, text: 'corentin-regent', linkUrl: 'https://github.com/corentin-regent' },
    {
      Icon: Discord,
      text: '@cocorigon',
      linkUrl: `https://discord.com/users/497849667728703497`,
    },
  ];
</script>

<script>
  const message = $derived(getMessage());
  const resolve = $derived(getResolve());
</script>

<ul class="grid lg:grid-cols-2 lg:mx-8 xl:mx-28 2xl:mx-40 justify-center gap-y-6">
  {#each socials as social}
    <li>
      <Social {message} {resolve} {...social} height="h-12" width="w-12" iconClass="p-2" />
    </li>
  {/each}
</ul>
