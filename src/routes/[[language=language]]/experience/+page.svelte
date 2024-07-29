<script context="module">
  import Geodis from '$components/icons/logos/Geodis.svelte';
  import Leaguesgg from '$components/icons/logos/Leaguesgg.svelte';
  import Polytech from '$components/icons/logos/Polytech.svelte';
  import Sncf from '$components/icons/logos/Sncf.svelte';
  import SopraSteria from '$components/icons/logos/SopraSteria.svelte';

  import GeodisDataText from './GeodisDataText.svelte';
  import LeaguesggInternText from './LeaguesggInternText.svelte';
  import PolytechIdiaText from './PolytechIdiaText.svelte';
  import PolytechPeipText from './PolytechPeipText.svelte';
  import SncfSisText from './SncfSisText.svelte';
  import SncfTraceText from './SncfTraceText.svelte';
  import SopraSteriaApprenticeText from './SopraSteriaApprenticeText.svelte';

  import Airflow from '$components/icons/technologies/Airflow.svelte';
  import Angular from '$components/icons/technologies/Angular.svelte';
  import Ansible from '$components/icons/technologies/Ansible.svelte';
  import AzurePipelines from '$components/icons/technologies/AzurePipelines.svelte';
  import Cloudera from '$components/icons/technologies/Cloudera.svelte';
  import Css from '$components/icons/technologies/Css.svelte';
  import Html from '$components/icons/technologies/Html.svelte';
  import Javascript from '$components/icons/technologies/Javascript.svelte';
  import Node from '$components/icons/technologies/Node.svelte';
  import Python from '$components/icons/technologies/Python.svelte';
  import Scala from '$components/icons/technologies/Scala.svelte';
  import Spark from '$components/icons/technologies/Spark.svelte';
  import Sql from '$components/icons/technologies/Sql.svelte';
  import SvelteKit from '$components/icons/technologies/SvelteKit.svelte';
  import Typescript from '$components/icons/technologies/Typescript.svelte';

  import H3 from '$components/text/H3.svelte';
  import messages from '$stores/i18n/messages.svelte.js';
  import classes from '$utils/classes.js';
  import Experience from './Experience.svelte';

  const professionalExperiences = [
    {
      positionId: 'apprentice-computer-science',
      organization: 'Sopra Steria',
      period: ['2022-10', '2025-10'],
      cityId: 'saint-herblain',
      countryId: 'france',
      text: SopraSteriaApprenticeText,
      logo: SopraSteria,
    },
    {
      positionId: 'data-engineer',
      organization: 'Geodis',
      period: ['2023-08', null],
      cityId: 'saint-herblain',
      countryId: 'france',
      text: GeodisDataText,
      logo: Geodis,
      technologies: [Spark, Scala, Ansible, Airflow, Cloudera, Python, AzurePipelines],
    },
    {
      positionId: 'web-developer',
      organization: 'SNCF',
      period: ['2024-08', '2024-09'],
      cityId: 'saint-herblain',
      countryId: 'france',
      text: SncfTraceText,
      logo: Sncf,
      technologies: [Angular, Html, Css, Typescript],
    },
    {
      positionId: 'full-stack-developer',
      organization: 'Leagues.gg',
      period: ['2023-06', '2023-08'],
      cityId: 'copenhagen',
      countryId: 'denmark',
      text: LeaguesggInternText,
      logo: Leaguesgg,
      technologies: [SvelteKit, Html, Css, Javascript, Node, Sql],
    },
    {
      positionId: 'software-engineer',
      organization: 'SNCF',
      period: ['2022-10', '2023-06'],
      cityId: 'saint-herblain',
      countryId: 'france',
      text: SncfSisText,
      logo: Sncf,
      technologies: [Angular, Html, Css, Typescript],
    },
  ];

  const studies = [
    {
      positionId: 'polytech-idia',
      organization: 'Polytech Nantes',
      period: ['2022-10', '2025-10'],
      cityId: 'nantes',
      countryId: 'france',
      text: PolytechIdiaText,
      logo: Polytech,
    },
    {
      positionId: 'polytech-peip',
      organization: 'Polytech Nantes',
      period: ['2020-09', '2022-05'],
      cityId: 'nantes',
      countryId: 'france',
      text: PolytechPeipText,
      logo: Polytech,
    },
  ];
</script>

{#snippet experiences(titleId, experienceList)}
  <section id={titleId}>
    <H3 class="my-4">{$messages.get(titleId)}</H3>
    <ul>
      {#each experienceList as experience}
        <li
          class={classes(
            'px-2 lg:px-4 mb-4 mx-auto xl:max-w-screen-xl',
            'not-first:pt-4 not-first:border-t not-first:border-anti-bg1'
          )}
        >
          <Experience {...experience} />
        </li>
      {/each}
    </ul>
  </section>
{/snippet}

{@render experiences('professional-journey', professionalExperiences)}
{@render experiences('education', studies)}
