<script lang="ts">
  import ContentHeading from "./common/content-heading.svelte";
  import ContentSubHeading from "./common/content-sub-heading.svelte";
  import Playground from "./common/playground.svelte";
</script>
<ContentHeading>Image</ContentHeading>
<section>
  <ContentSubHeading>Basic</ContentSubHeading>
    <Playground>
      <img src="/sample.webp" width="320" height="320" alt="Tokyo Tower" loading="lazy" />
    </Playground>
    <ContentSubHeading>figure + figcaption</ContentSubHeading>
    <Playground>
      <figure>
        <img src="/sample.webp" width="320" height="320" alt="Tokyo Tower" loading="lazy" />
        <figcaption>Tokyo Tower</figcaption>
      </figure>
    </Playground>
</section>
