<script lang="ts">
  import ContentHeading from './common/content-heading.svelte';
  import ContentSubHeading from './common/content-sub-heading.svelte';
  import Playground from './common/playground.svelte';
  import PlaygroundItem from './common/playground-item.svelte';
</script>

<ContentHeading>Text</ContentHeading>
<section>
  <ContentSubHeading>Heading</ContentSubHeading>
  <Playground>
    <h1>heading 1</h1>
    <h2>heading 2</h2>
    <h3>heading 3</h3>
    <h4>heading 4</h4>
    <h5>heading 5</h5>
    <h6>heading 6</h6>
  </Playground>
  <ContentSubHeading>Paragraph</ContentSubHeading>
  <Playground>
    <p>
      The <code>&lt;p&gt;</code> HTML element represents a paragraph. Paragraphs are usually represented in visual media
      as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs
      can be any structural grouping of related content, such as images or form fields.
    </p>
  </Playground>
  <ContentSubHeading>List</ContentSubHeading>
  <Playground>
    <PlaygroundItem>
      <ul>
        <li>unordered list</li>
        <li>unordered list</li>
        <li>unordered list</li>
      </ul>
    </PlaygroundItem>
    <PlaygroundItem>
      <ol>
        <li>ordered list</li>
        <li>ordered list</li>
        <li>ordered list</li>
      </ol>
    </PlaygroundItem>
  </Playground>
  <ContentSubHeading>Blockquote</ContentSubHeading>
  <Playground>
    <blockquote>Our mission is to make cloud computing accessible to everyone.</blockquote>
  </Playground>
  <ContentSubHeading>Code Block</ContentSubHeading>
  <Playground>
    <pre>
        <code>pnpm add atra.css</code>
      </pre>
  </Playground>
  <ContentSubHeading>Description</ContentSubHeading>
  <Playground>
    <dl>
      <dt>Noa Ikushio</dt>
      <dd>
        She belongs to Millennium Science School and is the secretary of the student council &ldquot;Seminar&rdquo;.
      </dd>
      <dt>Yuka Hayase</dt>
      <dd>
        She belongs to Millennium Science School and is the treasurer of the student council &ldquot;Seminar&rdquo;.
      </dd>
      <dt>Koyuki Kurosaki</dt>
      <dd>
        She belongs to Millennium Science School and is a troublemaker and genius girl in the student council
        &ldquot;Seminar&rdquo;.
      </dd>
    </dl>
  </Playground>
  <ContentSubHeading>Horizontal Rule</ContentSubHeading>
  <Playground>
    <p>This is the first paragraph of text.</p>
    <hr />
    <p>This is the second paragraph of text.</p>
  </Playground>
</section>
