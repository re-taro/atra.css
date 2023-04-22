<script lang="ts">
  import ContentHeading from './common/content-heading.svelte';
  import ContentSubHeading from './common/content-sub-heading.svelte';
  import Playground from './common/playground.svelte';
</script>

<ContentHeading>Flow Content</ContentHeading>
<section>
  <ContentSubHeading>Table</ContentSubHeading>
  <Playground>
    <table>
      <thead>
        <tr>
          <th colSpan={2}>The table header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The table body</td>
          <td>with two columns</td>
        </tr>
      </tbody>
    </table>
  </Playground>
  <ContentSubHeading>Details</ContentSubHeading>
  <Playground>
    <details>
      <summary>Summary</summary>
      <p>Paragraph</p>
    </details>
  </Playground>
</section>
