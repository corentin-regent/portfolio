<!--
The postmail form is not working due to CORS.
I'm leaving this component here as it will be useful later, after some migration.
-->

<script module>
  import Form from '$components/forms/Base.svelte';
  import EmailInput from '$components/inputs/Email.svelte';
  import TextInput from '$components/inputs/Text.svelte';
  import TextArea from '$components/inputs/TextArea.svelte';
  import Label from '$components/Label.svelte';

  const postmailToken = '9212hx4bkn6rtrbd4sp1uvhw';
  const myEmail = 'corentin.regent@gmail.com';
</script>

<script>
  const { message } = $props();
  let email = $state('');
  let subject = $state('');
  let body = $state('');
  let mailtoLink = $derived(
    `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  );
</script>

<Form
  action="https://postmail.invotes.com/send"
  method="post"
  submitMessageId="submit-email-form"
  class="text-left"
>
  <Label for="email-sender" class="mt-2 mb-1">{message('email-label')}</Label>
  <EmailInput name="reply_to" id="email-sender" bind:value={email} required />

  <Label for="email-subject" class="mt-2 mb-1">{message('email-subject-label')}</Label>
  <TextInput
    name="subject"
    id="email-subject"
    placeholder={message('email-subject-placeholder')}
    bind:value={subject}
    required
  />

  <Label for="email-body" class="mt-2 mb-1">{message('email-body-label')}</Label>
  <TextArea
    name="text"
    id="email-body"
    placeholder={message('email-body-placeholder')}
    bind:value={body}
    required
  />

  <input type="hidden" name="access_token" value={postmailToken} />
  <input type="hidden" name="success_url" value=".?success" />
  <input type="hidden" name="error_url" value={mailtoLink} />
</Form>
