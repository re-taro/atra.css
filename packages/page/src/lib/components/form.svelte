<script lang="ts">
  import ContentHeading from './common/content-heading.svelte';
  import ContentSubHeading from './common/content-sub-heading.svelte';
  import Playground from './common/playground.svelte';
  import PlaygroundItem from './common/playground-item.svelte';
  import ContentList from './common/content-list.svelte';
  import ContentListItem from './common/content-list-item.svelte';
</script>

<ContentHeading>Form</ContentHeading>
<section>
  <ContentSubHeading>Button</ContentSubHeading>
  <Playground>
    <PlaygroundItem>
      <ContentList>
        <ContentListItem>
          <button type="button">Button</button>
        </ContentListItem>
        <ContentListItem>
          <button type="button" disabled> Button disabled </button>
        </ContentListItem>
      </ContentList>
    </PlaygroundItem>
    <PlaygroundItem>
      <ContentList>
        <ContentListItem>
          <button type="submit">Submit</button>
        </ContentListItem>
        <ContentListItem>
          <button type="submit" disabled> Submit disabled </button>
        </ContentListItem>
      </ContentList>
    </PlaygroundItem>
    <PlaygroundItem>
      <ContentList>
        <ContentListItem>
          <button type="reset">Reset</button>
        </ContentListItem>
        <ContentListItem>
          <button type="reset" disabled> Reset disabled </button>
        </ContentListItem>
      </ContentList>
    </PlaygroundItem>
    <PlaygroundItem>
      <ContentList>
        <ContentListItem>
          <input type="button" placeholder="Input button" />
        </ContentListItem>
        <ContentListItem>
          <input type="button" placeholder="Input button disabled" disabled />
        </ContentListItem>
      </ContentList>
    </PlaygroundItem>
  </Playground>
  <ContentSubHeading>Input</ContentSubHeading>
  <Playground>
    <PlaygroundItem>
      <ContentList>
        <ContentListItem>
          <input type="text" placeholder="Text" />
        </ContentListItem>
        <ContentListItem>
          <input type="text" placeholder="Disabled" disabled />
        </ContentListItem>
      </ContentList>
    </PlaygroundItem>
    <PlaygroundItem>
      <ContentList>
        <ContentListItem>
          <input type="password" placeholder="Password" />
        </ContentListItem>
        <ContentListItem>
          <input type="password" placeholder="Disabled" disabled />
        </ContentListItem>
      </ContentList>
    </PlaygroundItem>
    <PlaygroundItem>
      <ContentList>
        <ContentListItem>
          <input type="search" placeholder="Search" />
        </ContentListItem>
        <ContentListItem>
          <input type="search" placeholder="Disabled" disabled />
        </ContentListItem>
      </ContentList>
    </PlaygroundItem>
    <PlaygroundItem>
      <ContentList>
        <ContentListItem>
          <input type="number" placeholder="Number" />
        </ContentListItem>
        <ContentListItem>
          <input type="number" placeholder="Disabled" disabled />
        </ContentListItem>
      </ContentList>
    </PlaygroundItem>
    <PlaygroundItem>
      <ContentList>
        <ContentListItem>
          <input type="email" placeholder="Email" />
        </ContentListItem>
        <ContentListItem>
          <input type="email" placeholder="Disabled" disabled />
        </ContentListItem>
      </ContentList>
    </PlaygroundItem>
    <PlaygroundItem>
      <ContentList>
        <ContentListItem>
          <input type="tel" placeholder="Telephone" />
        </ContentListItem>
        <ContentListItem>
          <input type="tel" placeholder="Disabled" disabled />
        </ContentListItem>
      </ContentList>
    </PlaygroundItem>
    <PlaygroundItem>
      <ContentList>
        <ContentListItem>
          <input type="datetime-local" placeholder="Date and time" />
        </ContentListItem>
        <ContentListItem>
          <input type="datetime-local" placeholder="Disabled" disabled />
        </ContentListItem>
      </ContentList>
    </PlaygroundItem>
    <PlaygroundItem>
      <ContentList>
        <ContentListItem>
          <input type="date" placeholder="Date" />
        </ContentListItem>
        <ContentListItem>
          <input type="date" placeholder="Disabled" disabled />
        </ContentListItem>
      </ContentList>
    </PlaygroundItem>
    <PlaygroundItem>
      <ContentList>
        <ContentListItem>
          <input type="time" placeholder="Time" />
        </ContentListItem>
        <ContentListItem>
          <input type="time" placeholder="Disabled" disabled />
        </ContentListItem>
      </ContentList>
    </PlaygroundItem>
    <PlaygroundItem>
      <ContentList>
        <ContentListItem>
          <input type="file" aria-label="input type[file] sample" />
        </ContentListItem>
        <ContentListItem>
          <input type="file" aria-label="input type[file] sample" disabled />
        </ContentListItem>
      </ContentList>
    </PlaygroundItem>
    <PlaygroundItem>
      <ContentList>
        <ContentListItem>
          <input type="color" aria-label="input type[color] sample" />
        </ContentListItem>
        <ContentListItem>
          <input type="color" aria-label="input type[color] sample" disabled />
        </ContentListItem>
      </ContentList>
    </PlaygroundItem>
    <PlaygroundItem>
      <ContentList>
        <ContentListItem>
          <input type="range" aria-label="input type[range] sample" />
        </ContentListItem>
        <ContentListItem>
          <input type="range" aria-label="input type[range] sample" disabled />
        </ContentListItem>
      </ContentList>
    </PlaygroundItem>
  </Playground>
  <ContentSubHeading>Checkbox</ContentSubHeading>
  <Playground>
    <ContentList>
      <ContentListItem>
        <label>
          <input type="checkbox" />
          <span>Noa Ikushio</span>
        </label>
      </ContentListItem>
      <ContentListItem>
        <label>
          <input type="checkbox" />
          <span>Yuka Hayase</span>
        </label>
      </ContentListItem>
      <ContentListItem>
        <label>
          <input type="checkbox" disabled />
          <span>Koyuki Kurosaki</span>
        </label>
      </ContentListItem>
    </ContentList>
  </Playground>
  <ContentSubHeading>Radio</ContentSubHeading>
  <Playground>
    <ContentList>
      <ContentListItem>
        <label>
          <input type="radio" name="radio" />
          <span>Noa Ikushio</span>
        </label>
      </ContentListItem>
      <ContentListItem>
        <label>
          <input type="radio" name="radio" />
          <span>Yuka Hayase</span>
        </label>
      </ContentListItem>
      <ContentListItem>
        <label>
          <input type="radio" name="radio" disabled />
          <span>Koyuki Kurosaki</span>
        </label>
      </ContentListItem>
    </ContentList>
  </Playground>
  <ContentSubHeading>Textarea</ContentSubHeading>
  <Playground>
    <ContentList>
      <ContentListItem>
        <textarea placeholder="Textarea" />
      </ContentListItem>
      <ContentListItem>
        <textarea placeholder="Textarea disabled" disabled />
      </ContentListItem>
    </ContentList>
  </Playground>
  <ContentSubHeading>Select</ContentSubHeading>
  <Playground>
    <PlaygroundItem>
      <ContentList>
        <ContentListItem>
          <select aria-label="select sample">
            <option>Noa Ikushio</option>
            <option>Yuka Hayase</option>
            <option>Koyuki Kurosaki</option>
          </select>
        </ContentListItem>
        <ContentListItem>
          <select aria-label="select sample" disabled>
            <option>Noa Ikushio</option>
            <option>Yuka Hayase</option>
            <option>Koyuki Kurosaki</option>
          </select>
        </ContentListItem>
      </ContentList>
    </PlaygroundItem>
    <PlaygroundItem>
      <ContentList>
        <ContentListItem>
          <select aria-label="select sample" multiple>
            <option>Noa Ikushio</option>
            <option>Yuka Hayase</option>
            <option>Koyuki Kurosaki</option>
          </select>
        </ContentListItem>
        <ContentListItem>
          <select aria-label="select sample" multiple disabled>
            <option>Noa Ikushio</option>
            <option>Yuka Hayase</option>
            <option>Koyuki Kurosaki</option>
          </select>
        </ContentListItem>
      </ContentList>
    </PlaygroundItem>
    <PlaygroundItem>
      <ContentList>
        <ContentListItem>
          <select aria-label="select sample">
            <optgroup label="Group 1">
              <option>Noa Ikushio</option>
              <option>Yuka Hayase</option>
              <option>Koyuki Kurosaki</option>
            </optgroup>
            <optgroup label="Group 2">
              <option>Sayumi Suzushiro</option>
              <option>Ran Haruka</option>
              <option>Natsune Inui</option>
            </optgroup>
          </select>
        </ContentListItem>
        <ContentListItem>
          <select aria-label="select sample" disabled>
            <optgroup label="Group 1">
              <option>Noa Ikushio</option>
              <option>Yuka Hayase</option>
              <option>Koyuki Kurosaki</option>
            </optgroup>
            <optgroup label="Group 2">
              <option>Sayumi Suzushiro</option>
              <option>Ran Haruka</option>
              <option>Natsune Inui</option>
            </optgroup>
          </select>
        </ContentListItem>
      </ContentList>
    </PlaygroundItem>
    <PlaygroundItem>
      <ContentList>
        <ContentListItem>
          <select aria-label="select sample" multiple>
            <optgroup label="Group 1">
              <option>Noa Ikushio</option>
              <option>Yuka Hayase</option>
              <option>Koyuki Kurosaki</option>
            </optgroup>
            <optgroup label="Group 2">
              <option>Sayumi Suzushiro</option>
              <option>Ran Haruka</option>
              <option>Natsune Inui</option>
            </optgroup>
          </select>
        </ContentListItem>
        <ContentListItem>
          <select aria-label="select sample" multiple disabled>
            <optgroup label="Group 1">
              <option>Noa Ikushio</option>
              <option>Yuka Hayase</option>
              <option>Koyuki Kurosaki</option>
            </optgroup>
            <optgroup label="Group 2">
              <option>Sayumi Suzushiro</option>
              <option>Ran Haruka</option>
              <option>Natsune Inui</option>
            </optgroup>
          </select>
        </ContentListItem>
      </ContentList>
    </PlaygroundItem>
  </Playground>
  <ContentSubHeading>Fieldset and Legend</ContentSubHeading>
  <Playground>
    <fieldset>
      <legend>Choose your favorite character</legend>
      <ContentList>
        <ContentListItem>
          <label>
            <input type="radio" name="character" />
            <span>Noa Ikushio</span>
          </label>
        </ContentListItem>
        <ContentListItem>
          <label>
            <input type="radio" name="character" />
            <span>Yuka Hayase</span>
          </label>
        </ContentListItem>
        <ContentListItem>
          <label>
            <input type="radio" name="character" />
            <span>Koyuki Kurosaki</span>
          </label>
        </ContentListItem>
      </ContentList>
    </fieldset>
  </Playground>
</section>
