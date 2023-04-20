<h2>
  <slot />
</h2>
<style lang="scss">
  @use "../../style/variable" as var;

  h2 {
    margin-bottom: calc(var.$spacing * 2);
    color: var.$accent-7;
    font-family: var.$font;
    font-size: 1.6rem;
    font-weight: 600;
  }
</style>
