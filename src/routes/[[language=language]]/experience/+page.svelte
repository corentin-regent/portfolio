<script module>
  import Geodis from '$logos/Geodis.svelte';
  import Leaguesgg from '$logos/Leaguesgg.svelte';
  import Polytech from '$logos/Polytech.svelte';
  import Sncf from '$logos/Sncf.svelte';
  import SopraSteria from '$logos/SopraSteria.svelte';

  import TextGeodisData from './TextGeodisData.svelte';
  import TextLeaguesggIntern from './TextLeaguesggIntern.svelte';
  import TextPolytechIdia from './TextPolytechIdia.svelte';
  import TextPolytechPeip from './TextPolytechPeip.svelte';
  import TextSncfSis from './TextSncfSis.svelte';
  import TextSncfTrace from './TextSncfTrace.svelte';
  import TextSopraSteriaApprentice from './TextSopraSteriaApprentice.svelte';

  import Airflow from '$technologies/Airflow.svelte';
  import Angular from '$technologies/Angular.svelte';
  import Ansible from '$technologies/Ansible.svelte';
  import AzurePipelines from '$technologies/AzurePipelines.svelte';
  import Cloudera from '$technologies/Cloudera.svelte';
  import Css from '$technologies/Css.svelte';
  import Html from '$technologies/Html.svelte';
  import Java from '$technologies/Java.svelte';
  import Javascript from '$technologies/Javascript.svelte';
  import Node from '$technologies/Node.svelte';
  import Python from '$technologies/Python.svelte';
  import Scala from '$technologies/Scala.svelte';
  import Spark from '$technologies/Spark.svelte';
  import SpringBoot from '$technologies/SpringBoot.svelte';
  import Sql from '$technologies/Sql.svelte';
  import SvelteKit from '$technologies/SvelteKit.svelte';
  import Typescript from '$technologies/Typescript.svelte';

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
      text: TextSopraSteriaApprentice,
      logo: SopraSteria,
    },
    {
      positionId: 'data-engineer',
      organization: 'Geodis',
      period: ['2023-08', null],
      cityId: 'saint-herblain',
      countryId: 'france',
      text: TextGeodisData,
      logo: Geodis,
      technologies: [Spark, Scala, Ansible, Airflow, Cloudera, Python, AzurePipelines],
    },
    {
      positionId: 'full-stack-developer',
      organization: 'SNCF',
      period: ['2024-07', '2024-08'],
      cityId: 'saint-herblain',
      countryId: 'france',
      text: TextSncfTrace,
      logo: Sncf,
      technologies: [Angular, Html, Css, Typescript, Java, SpringBoot],
    },
    {
      positionId: 'full-stack-developer',
      organization: 'Leagues.gg',
      period: ['2023-06', '2023-08'],
      cityId: 'copenhagen',
      countryId: 'denmark',
      text: TextLeaguesggIntern,
      logo: Leaguesgg,
      technologies: [SvelteKit, Html, Css, Javascript, Node, Sql],
    },
    {
      positionId: 'software-engineer',
      organization: 'SNCF',
      period: ['2022-10', '2023-06'],
      cityId: 'saint-herblain',
      countryId: 'france',
      text: TextSncfSis,
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
      text: TextPolytechIdia,
      logo: Polytech,
    },
    {
      positionId: 'polytech-peip',
      organization: 'Polytech Nantes',
      period: ['2020-09', '2022-05'],
      cityId: 'nantes',
      countryId: 'france',
      text: TextPolytechPeip,
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
