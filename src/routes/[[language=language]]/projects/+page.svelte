<script module>
  import { getMessage, getResolve } from '$runes/index.svelte.js';

  import AssemblifeEmbed from '$components/embeds/Assemblife.svelte';
  import MsgspecEmbed from '$components/embeds/Msgspec.svelte';
  import PoetrelEmbed from '$components/embeds/Poetrel.svelte';
  import PortfolioEmbed from '$components/embeds/Portfolio.svelte';
  import RateControlEmbed from '$components/embeds/RateControl.svelte';

  import TextAssemblife from './TextAssemblife.svelte';
  import TextMsgspec from './TextMsgspec.svelte';
  import TextPoetrel from './TextPoetrel.svelte';
  import TextPortfolio from './TextPortfolio.svelte';
  import TextRateControl from './TextRateControl.svelte';

  import Bash from '$technologies/Bash.svelte';
  import C from '$technologies/C.svelte';
  import Css from '$technologies/Css.svelte';
  import Docker from '$technologies/Docker.svelte';
  import GithubActions from '$technologies/GithubActions.svelte';
  import Go from '$technologies/Go.svelte';
  import Html from '$technologies/Html.svelte';
  import Javascript from '$technologies/Javascript.svelte';
  import Linux from '$technologies/Linux.svelte';
  import Nasm from '$technologies/Nasm.svelte';
  import Python from '$technologies/Python.svelte';
  import Svelte from '$technologies/Svelte.svelte';
  import Svg from '$technologies/Svg.svelte';
  import Typescript from '$technologies/Typescript.svelte';

  import H3 from '$components/text/H3.svelte';
  import Project from './Project.svelte';

  const myProjects = [
    {
      nameId: 'rate-control',
      Embed: RateControlEmbed,
      Text: TextRateControl,
      technologies: [Python, GithubActions],
      urls: ['https://github.com/corentin-regent/rate-control'],
    },
    {
      nameId: 'poetrel',
      Embed: PoetrelEmbed,
      Text: TextPoetrel,
      technologies: [Typescript, Bash, GithubActions],
      urls: ['https://github.com/corentin-regent/poetrel'],
    },
    {
      nameId: 'assemblife',
      Embed: AssemblifeEmbed,
      Text: TextAssemblife,
      technologies: [Nasm, Linux, Docker, GithubActions],
      urls: ['https://github.com/corentin-regent/assemblife'],
    },
    {
      nameId: 'portfolio',
      Embed: PortfolioEmbed,
      Text: TextPortfolio,
      technologies: [Svelte, Html, Css, Javascript, Svg, Go, Docker, GithubActions],
      urls: [
        'https://github.com/corentin-regent/portfolio',
        'https://github.com/corentin-regent/portfolio-back',
        'https://github.com/corentin-regent/portfolio-deploy',
      ],
    },
  ];

  const openSourceContributions = [
    {
      nameId: 'msgspec',
      Embed: MsgspecEmbed,
      Text: TextMsgspec,
      technologies: [C, Python],
      urls: ['https://github.com/jcrist/msgspec'],
    },
  ];
</script>

<script>
  const message = $derived(getMessage());
  const resolve = $derived(getResolve());
</script>

{#snippet projects(titleId, projectList)}
  <section class="mb-4" id={titleId}>
    <H3 class="mb-4">{message(titleId)}</H3>
    <ul>
      {#each projectList as project, index}
        <li
          class={[
            `px-2 lg:px-0 mx-auto mb-4 max-w-screen-sm lg:max-w-screen-xl
            not-first:pt-4 not-first:border-t not-first:border-anti-bg1
            lg:border-none lg:mb-0 lg:not-first:pt-0 lg:not-first:before:block
            lg:not-first:before:h-0.5 lg:not-first:before:my-4
            lg:not-first:before:bg-gradient-to-r`,
            index % 2
              ? 'lg:not-first:before:from-transparent lg:not-first:before:to-anti-bg1'
              : 'lg:not-first:before:from-anti-bg1',
          ]}
        >
          <Project {message} {resolve} {...project} toLeft={index % 2} />
        </li>
      {/each}
    </ul>
  </section>
{/snippet}

{@render projects('my-projects', myProjects)}
{@render projects('open-source-contributions', openSourceContributions)}
