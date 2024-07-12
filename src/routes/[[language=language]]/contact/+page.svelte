<script context="module">
  import Email from '$components/icons/Email.svelte';
  import Discord from '$components/icons/logos/Discord.svelte';
  import Github from '$components/icons/logos/Github.svelte';
  import Linkedin from '$components/icons/logos/Linkedin.svelte';
  import Social from '$components/Social.svelte';
  import H2 from '$components/text/H2.svelte';
  import messages from '$stores/i18n/messages.svelte.js';

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

<article class="w-full px-4 text-center">
  <div class="max-w-screen-md mx-auto">
    <H2>{$messages.get('page-header')}</H2>
    <p>{$messages.get('page-main-text')}</p>

    <!--
    Email form, currently disabled due to CORS
    <p>{$messages.get('contact-through-form')}</p>
    <EmailForm />
    -->

    <p>{$messages.get('contact-through-socials')}</p>
  </div>

  <ul class="grid lg:grid-cols-2 justify-center gap-y-3 mt-4">
    {#each socials as social}
      <li>
        <Social {...social} height="h-12" width="w-12" iconClass="p-2" />
      </li>
    {/each}
  </ul>
</article>
