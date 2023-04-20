<h3>
  <slot />
</h3>
<style lang="scss">
  @use "../../style/variable" as var;

  h3 {
    margin-bottom: calc(var.$spacing * 1.8);
    color: var.$accent-6;
    font-family: var.$font;
    font-size: 1.4rem;
  }
</style>
