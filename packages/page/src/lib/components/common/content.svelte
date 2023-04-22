<section>
  <slot />
</section>

<style lang="scss">
  @use '../../style/variable' as var;

  section {
    margin-bottom: calc(var.$spacing * 1.8);
    color: var.$accent-6;
    font-family: var.$font;
    font-size: 1.4rem;
  }
</style>
