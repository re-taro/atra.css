<div>
  <slot />
</div>
<style lang="scss">
  @use "../../style/variable" as var;

  div {
    &:not(:first-child) {
      margin-top: calc(var.$spacing * 2);
    }

    @media (max-width: 767px) {
      width: 100%;
    }
  }
</style>
