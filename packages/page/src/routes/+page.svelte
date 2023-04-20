<script lang="ts">
  import LayoutContent from "$lib/components/common/layout-content.svelte";
  import TextSection from "$lib/components/text.svelte";
  import InlineSection from "$lib/components/inline.svelte";
  import FormSection from "$lib/components/form.svelte";
  import ImageSection from "$lib/components/image.svelte";
  import FlowContentSection from "$lib/components/flow-content.svelte";
</script>
<section class="section-container">
  <h2 class="section-heading" id="installation">
    Installation
  </h2>
  <section>
    <LayoutContent>
      <h3 class="content-heading">package manager</h3>
      <pre class="install-content-performatted">
        <code>pnpm add atra.css</code>
      </pre>
    </LayoutContent>
    <LayoutContent>
      <h3 class="content-heading">CDN</h3>
      <pre class="install-content-performatted">
        <code>https://unpkg.com/atra.css@latest/dist/atra.min.css</code>
      </pre>
    </LayoutContent>
  </section>
</section>
<section class="section-container">
  <h2 class="section-heading" id="example">
    Example
  </h2>
  <section>
    <LayoutContent>
      <TextSection />
    </LayoutContent>
    <LayoutContent>
      <InlineSection />
    </LayoutContent>
    <LayoutContent>
      <FormSection />
    </LayoutContent>
    <LayoutContent>
      <ImageSection />
    </LayoutContent>
    <LayoutContent>
      <FlowContentSection />
    </LayoutContent>
  </section>
</section>
<style lang="scss">
  @use "../lib/style/variable" as var;

  .section-heading {
    margin-bottom: calc(var.$spacing * 4);
    color: var.$accent-7;
    font-family: var.$font;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
  }

  .section-container {
    margin-bottom: calc(var.$spacing * 15);
  }

  .install-content-performatted {
    padding: 1rem 1.5rem;
    overflow: auto;
    border-radius: 6px;
    background-color: var.$accent-2;
    font-size: 1rem;
    line-height: 1.45;
    user-select: all;
  }

  .content-heading {
    margin-bottom: calc(var.$spacing * 2);
    color: var.$accent-7;
    font-family: var.$font;
    font-size: 1.6rem;
    font-weight: 600;
  }
</style>
