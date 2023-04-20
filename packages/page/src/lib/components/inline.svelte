<script lang="ts">
  import ContentHeading from "./common/content-heading.svelte";
  import Playground from "./common/playground.svelte";
  import PlaygroundItem from "./common/playground-item.svelte";
</script>
<ContentHeading>Inline</ContentHeading>
    <section>
      <Playground>
        <PlaygroundItem>
          <!-- svelte-ignore a11y-invalid-attribute -->
          This is <a href="#">anchor link</a>
        </PlaygroundItem>
        <PlaygroundItem>
          Several species of <mark>salamander</mark> inhabit the temperate rainforest of the Pacific Northwest.
        </PlaygroundItem>
        <PlaygroundItem>
          <s>There will be a few tickets available at the box office tonight.</s>
        </PlaygroundItem>
        <PlaygroundItem>
          You could use this element to highlight <u>speling</u> mistakes, so the writer can <u>corect</u> them.
        </PlaygroundItem>
        <PlaygroundItem>
          <small>This line of text is meant to be treated as fine print.</small>
        </PlaygroundItem>
        <PlaygroundItem>
          ... the most important rule, the rule you can never forget, no matter how much he cries, no matter how much he
          begs:
          <strong>never feed him after midnight</strong>.
        </PlaygroundItem>
        <PlaygroundItem>
          Get out of bed <em>now</em>!
        </PlaygroundItem>
        <PlaygroundItem>
          You can use <abbr title="Cascading Style Sheets">CSS</abbr> to style your{' '}
          <abbr title="HyperText Markup Language">HTML</abbr>.
        </PlaygroundItem>
        <PlaygroundItem>
          <samp>Keyboard not found, Press F1 to continue</samp>
        </PlaygroundItem>
        <PlaygroundItem>
          Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render an MDN page.
        </PlaygroundItem>
        <PlaygroundItem>
          Run <code>pnpm add atra.css</code> to install.
        </PlaygroundItem>
      </Playground>
    </section>
