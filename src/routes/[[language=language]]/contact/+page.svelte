<script context="module">
  import EmailForm from '$components/forms/Email.svelte';
  import MailtoLink from '$components/links/Mailto.svelte';
  import H2 from '$components/text/H2.svelte';
  import messages from '$stores/i18n/messages.svelte.js';
</script>

<article class="max-w-screen-md w-full mx-auto px-4 text-center">
  <H2>{$messages.get('page-header')}</H2>
  <p>{$messages.get('page-main-text')}</p>

  <p>{$messages.get('contact-through-form')}</p>
  <EmailForm />

  <p>{$messages.get('contact-through-socials')}</p>
  <MailtoLink email="corentin.regent.pro@gmail.com" />
</article>
