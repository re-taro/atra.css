<div>
  <slot />
</div>
<style lang="scss">
  @use "../../style/variable" as var;

  div {
    &:not(:first-child) {
      margin-left: calc(var.$spacing * 1.5);
    }

    @media (max-width: 767px) {
      width: 100%;

      &:not(:first-child) {
        margin-top: calc(var.$spacing * 1.5);
        margin-left: 0;
      }
    }
  }
</style>
