<header>
  <h1>atara.css</h1>
  <p>A lightly modern reset CSS</p>
  <nav>
    <div>
      <a href="#example" class="guide-button">
        Get started
      </a>
    </div>
    <div>
      <a
        href="https://github.com/re-taro/atra.css"
        target="_blank"
        rel="noreferrer"
        class="guide-github"
      >
        GitHub
      </a>
    </div>
  </nav>
</header>
<style lang="scss">
  @use '../../style/variable' as var;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(var.$spacing * 40);
    min-height: 100vh;
    margin-bottom: calc(var.$spacing * 10);
    font-family: var.$font;

    h1 {
      color: var.$accent-7;
      font-size: 3rem;
      font-weight: 800;
    }

    p {
      margin-top: calc(var.$spacing * 2);
      color: var.$accent-5;
    }

    nav {
      display: flex;
      margin-top: calc(var.$spacing * 6);

      div:not(:first-child) {
        margin-left: calc(var.$spacing * 1.5);
      }
    }
  }

  .guide-button {
    display: block;
    padding: 0.75rem 1.5rem;
    transition: background-color 0.2s ease;
    border-radius: 4px;
    background-color: var.$accent-5;
    color: #fff;
    font-size: 1rem;
    letter-spacing: 0.025rem;
    text-decoration: none;

    &:hover {
      background-color: var.$accent-6;
    }
  }

  .guide-github {
    display: block;
    padding: 0.75rem 1.5rem;
    transition: background-color 0.2s ease;
    border-radius: 4px;
    background-color: var.$accent-5;
    color: #fff;
    font-size: 1rem;
    letter-spacing: 0.025rem;
    text-decoration: none;

    &:hover {
      background-color: var.$accent-8;
    }
  }
</style>
