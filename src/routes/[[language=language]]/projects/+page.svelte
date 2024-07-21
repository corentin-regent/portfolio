<script context="module">
  import AssemblifeEmbed from '$components/embeds/Assemblife.svelte';
  import MsgspecEmbed from '$components/embeds/Msgspec.svelte';
  import PoetrelEmbed from '$components/embeds/Poetrel.svelte';
  import PortfolioEmbed from '$components/embeds/Portfolio.svelte';
  import RateControlEmbed from '$components/embeds/RateControl.svelte';

  import AssemblifeText from './AssemblifeText.svelte';
  import MsgspecText from './MsgspecText.svelte';
  import PoetrelText from './PoetrelText.svelte';
  import PortfolioText from './PortfolioText.svelte';
  import RateControlText from './RateControlText.svelte';

  import Bash from '$components/icons/technologies/Bash.svelte';
  import C from '$components/icons/technologies/C.svelte';
  import Css from '$components/icons/technologies/Css.svelte';
  import GithubActions from '$components/icons/technologies/GithubActions.svelte';
  import Html from '$components/icons/technologies/Html.svelte';
  import Javascript from '$components/icons/technologies/Javascript.svelte';
  import Linux from '$components/icons/technologies/Linux.svelte';
  import Nasm from '$components/icons/technologies/Nasm.svelte';
  import Python from '$components/icons/technologies/Python.svelte';
  import SvelteKit from '$components/icons/technologies/SvelteKit.svelte';
  import Svg from '$components/icons/technologies/Svg.svelte';
  import Typescript from '$components/icons/technologies/Typescript.svelte';

  import Project from '$components/Project.svelte';
  import H2 from '$components/text/H2.svelte';
  import H3 from '$components/text/H3.svelte';
  import P from '$components/text/P.svelte';
  import messages from '$stores/i18n/messages.svelte.js';
  import classes from '$utils/classes.js';

  const myProjects = [
    {
      nameId: 'rate-control',
      embed: RateControlEmbed,
      text: RateControlText,
      technologies: [Python, GithubActions],
    },
    {
      nameId: 'poetrel',
      embed: PoetrelEmbed,
      text: PoetrelText,
      technologies: [GithubActions, Typescript, Bash],
    },
    {
      nameId: 'assemblife',
      embed: AssemblifeEmbed,
      text: AssemblifeText,
      technologies: [Nasm, Linux],
    },
    {
      nameId: 'portfolio',
      embed: PortfolioEmbed,
      text: PortfolioText,
      technologies: [SvelteKit, Html, Css, Javascript, Svg, GithubActions],
    },
  ].map(({ nameId, ...rest }) => ({
    nameId,
    url: 'https://github.com/corentin-regent/' + nameId,
    ...rest,
  }));

  const openSourceContributions = [
    {
      nameId: 'msgspec',
      embed: MsgspecEmbed,
      text: MsgspecText,
      technologies: [C, Python],
      url: 'https://jcristharif.com/msgspec/',
    },
  ];
</script>

<div class="max-w-screen-md mx-auto">
  <H2 class="mb-2">{$messages.get('page-header')}</H2>
  <P>{$messages.get('page-main-text')}</P>
</div>

{#snippet projects(titleId, projectList)}
  <section id={titleId}>
    <H3 class="my-4">{$messages.get(titleId)}</H3>
    <ul class="flex flex-col">
      {#each projectList as project, index}
        <li
          class={classes(
            'py-4 lg:py-0 px-2 lg:px-0 mx-auto max-w-screen-sm lg:max-w-screen-xl',
            '[&:not(:first-child)]:border-t-2 [&:not(:first-child)]:border-anti-bg1 lg:border-none',
            'lg:[&:not(:first-child)]:before:block lg:[&:not(:first-child)]:before:h-0.5 lg:[&:not(:first-child)]:before:my-4',
            'lg:[&:not(:first-child)]:before:bg-gradient-to-r',
            index % 2
              ? 'lg:[&:not(:first-child)]:before:from-transparent lg:[&:not(:first-child)]:before:to-anti-bg1'
              : 'lg:[&:not(:first-child)]:before:from-anti-bg1'
          )}
        >
          <Project {...project} toLeft={index % 2} />
        </li>
      {/each}
    </ul>
  </section>
{/snippet}

{@render projects('my-projects', myProjects)}
{@render projects('open-source-contributions', openSourceContributions)}
