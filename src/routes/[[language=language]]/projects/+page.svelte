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

  import Bash from '$technologies/Bash.svelte';
  import C from '$technologies/C.svelte';
  import Css from '$technologies/Css.svelte';
  import Docker from '$technologies/Docker.svelte';
  import GithubActions from '$technologies/GithubActions.svelte';
  import Html from '$technologies/Html.svelte';
  import Javascript from '$technologies/Javascript.svelte';
  import Linux from '$technologies/Linux.svelte';
  import Nasm from '$technologies/Nasm.svelte';
  import Nginx from '$technologies/Nginx.svelte';
  import Python from '$technologies/Python.svelte';
  import SvelteKit from '$technologies/SvelteKit.svelte';
  import Svg from '$technologies/Svg.svelte';
  import Typescript from '$technologies/Typescript.svelte';

  import H3 from '$components/text/H3.svelte';
  import messages from '$stores/i18n/messages.svelte.js';
  import classes from '$utils/classes.js';
  import Project from './Project.svelte';

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
      technologies: [SvelteKit, Html, Css, Javascript, Svg, GithubActions, Docker, Nginx],
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

{#snippet projects(titleId, projectList)}
  <section id={titleId}>
    <H3 class="my-4">{$messages.get(titleId)}</H3>
    <ul>
      {#each projectList as project, index}
        <li
          class={classes(
            'px-2 lg:px-0 mx-auto mb-4 max-w-screen-sm lg:max-w-screen-xl',
            'not-first:pt-4 not-first:border-t not-first:border-anti-bg1',
            'lg:border-none lg:mb-0 lg:not-first:pt-0 lg:not-first:before:block',
            'lg:not-first:before:h-0.5 lg:not-first:before:my-4',
            'lg:not-first:before:bg-gradient-to-r',
            index % 2
              ? 'lg:not-first:before:from-transparent lg:not-first:before:to-anti-bg1'
              : 'lg:not-first:before:from-anti-bg1'
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
