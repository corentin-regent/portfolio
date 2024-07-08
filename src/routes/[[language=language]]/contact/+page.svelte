<script context="module">
  import Email from '$components/icons/Email.svelte';
  import MailtoLink from '$components/links/Mailto.svelte';
  import Social from '$components/Social.svelte';
  import H2 from '$components/text/H2.svelte';
  import messages from '$stores/i18n/messages.svelte.js';
</script>

<article class="w-full px-4 text-center">
  <div class="max-w-screen-md mx-auto">
    <H2>{$messages.get('page-header')}</H2>
    <p>{$messages.get('page-main-text')}</p>

    <!--
    Email form, currently disabled to due CORS
    <p>{$messages.get('contact-through-form')}</p>
    <EmailForm />
    -->

    <p>{$messages.get('contact-through-socials')}</p>
  </div>
  <Social icon={Email} class="p-2" height="h-12" width="w-12">
    <MailtoLink email="corentin.regent.pro@gmail.com" />
  </Social>
</article>
