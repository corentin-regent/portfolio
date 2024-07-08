<script context="module">
  import Email from '$components/icons/Email.svelte';
  import Social from '$components/Social.svelte';
  import H2 from '$components/text/H2.svelte';
  import messages from '$stores/i18n/messages.svelte.js';

  const myEmail = 'corentin.regent.pro@gmail.com';
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
  <Social
    icon={Email}
    text={myEmail}
    linkUrl={`mailto:${myEmail}`}
    height="h-12"
    width="w-12"
    iconClass="p-2"
  />
</article>
