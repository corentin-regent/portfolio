<script context="module">
  import Form from '$components/forms/Base.svelte';
  import EmailInput from '$components/inputs/Email.svelte';
  import TextInput from '$components/inputs/Text.svelte';
  import TextArea from '$components/inputs/TextArea.svelte';
  import messages from '$stores/i18n/messages.svelte.js';

  const postmailToken = '9212hx4bkn6rtrbd4sp1uvhw';
  const myEmail = 'corentin.regent.pro@gmail.com';
</script>

<script>
  let email = $state('');
  let subject = $state('');
  let body = $state('');
  let mailtoLink = $derived(
    `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  );
</script>

<Form action="https://postmail.invotes.com/send" method="post" submitMessageId="submit-email-form">
  <EmailInput name="reply_to" bind:value={email} required />
  <TextInput
    name="subject"
    placeholder={$messages.get('email-subject-placeholder')}
    bind:value={subject}
    required
  />
  <TextArea
    name="text"
    placeholder={$messages.get('email-body-placeholder')}
    bind:value={body}
    required
  />
  <input type="hidden" name="access_token" value={postmailToken} />
  <input type="hidden" name="success_url" value=".?success" />
  <input type="hidden" name="error_url" value={mailtoLink} />
</Form>
