<section>
  <slot />
</section>

<style lang="scss">
  @use '../../style/variable' as var;

  section {
    margin-bottom: calc(var.$spacing * 3);
    padding: 1.5rem;
    border: 1px solid var.$accent-2;
    border-radius: calc(var.$spacing * 0.5);
  }
</style>
