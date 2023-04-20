<section>
  <slot />
</section>
<style lang="scss">
  @use "../../style/variable" as var;

  section {
    margin-bottom: calc(var.$spacing * 6);
  }
</style>
