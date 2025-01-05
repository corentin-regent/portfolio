<script module>
  import { getDateUtils, getMessage, getResolve } from '$runes/index.svelte.js';

  import Geodis from '$logos/Geodis.svelte';
  import Leaguesgg from '$logos/Leaguesgg.svelte';
  import Polytech from '$logos/Polytech.svelte';
  import Sncf from '$logos/Sncf.svelte';

  import TextGeodisData from './TextGeodisData.svelte';
  import TextLeaguesggIntern from './TextLeaguesggIntern.svelte';
  import TextPolytechIdia from './TextPolytechIdia.svelte';
  import TextPolytechPeip from './TextPolytechPeip.svelte';
  import TextSncfSis from './TextSncfSis.svelte';
  import TextSncfTrace from './TextSncfTrace.svelte';

  import Airflow from '$technologies/Airflow.svelte';
  import Angular from '$technologies/Angular.svelte';
  import Ansible from '$technologies/Ansible.svelte';
  import AzurePipelines from '$technologies/AzurePipelines.svelte';
  import Cloudera from '$technologies/Cloudera.svelte';
  import Css from '$technologies/Css.svelte';
  import Html from '$technologies/Html.svelte';
  import Java from '$technologies/Java.svelte';
  import Javascript from '$technologies/Javascript.svelte';
  import Kafka from '$technologies/Kafka.svelte';
  import Nifi from '$technologies/Nifi.svelte';
  import Node from '$technologies/Node.svelte';
  import Python from '$technologies/Python.svelte';
  import Scala from '$technologies/Scala.svelte';
  import Spark from '$technologies/Spark.svelte';
  import SpringBoot from '$technologies/SpringBoot.svelte';
  import Sql from '$technologies/Sql.svelte';
  import Svelte from '$technologies/Svelte.svelte';
  import Typescript from '$technologies/Typescript.svelte';

  import H3 from '$components/text/H3.svelte';
  import Experience from './Experience.svelte';

  const professionalExperiences = [
    {
      positionId: 'data-engineer',
      organization: 'Geodis (Sopra Steria)',
      period: ['2023-08', null],
      cityId: 'saint-herblain',
      countryId: 'france',
      Text: TextGeodisData,
      Logo: Geodis,
      technologies: [Kafka, Nifi, Spark, Scala, Ansible, Airflow, Cloudera, Python, AzurePipelines],
    },
    {
      positionId: 'software-engineer',
      organization: 'SNCF (Sopra Steria)',
      period: ['2024-07', '2024-08'],
      cityId: 'saint-herblain',
      countryId: 'france',
      Text: TextSncfTrace,
      Logo: Sncf,
      technologies: [Angular, Html, Css, Typescript, Java, SpringBoot],
    },
    {
      positionId: 'software-engineer',
      organization: 'Leagues.gg',
      period: ['2023-06', '2023-08'],
      cityId: 'copenhagen',
      countryId: 'denmark',
      Text: TextLeaguesggIntern,
      Logo: Leaguesgg,
      technologies: [Svelte, Html, Css, Javascript, Node, Sql],
    },
    {
      positionId: 'software-engineer',
      organization: 'SNCF (Sopra Steria)',
      period: ['2022-10', '2023-06'],
      cityId: 'saint-herblain',
      countryId: 'france',
      Text: TextSncfSis,
      Logo: Sncf,
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
      Text: TextPolytechIdia,
      Logo: Polytech,
    },
    {
      positionId: 'polytech-peip',
      organization: 'Polytech Nantes',
      period: ['2020-09', '2022-05'],
      cityId: 'nantes',
      countryId: 'france',
      Text: TextPolytechPeip,
      Logo: Polytech,
    },
  ];
</script>

<script>
  const DateUtils = $derived(getDateUtils());
  const message = $derived(getMessage());
  const resolve = $derived(getResolve());
</script>

{#snippet experiences(titleId, experienceList)}
  <section id={titleId}>
    <H3 class="mb-4">{message(titleId)}</H3>
    <ul>
      {#each experienceList as experience}
        <li
          class={`px-2 lg:px-4 mb-4 mx-auto xl:max-w-screen-xl
            not-first:pt-4 not-first:border-t not-first:border-anti-bg1`}
        >
          <Experience {DateUtils} {message} {resolve} {...experience} />
        </li>
      {/each}
    </ul>
  </section>
{/snippet}

{@render experiences('professional-journey', professionalExperiences)}
{@render experiences('education', studies)}
