<template>
  <div class="layer-title">
    <div>
      <h2>{{ title }}</h2>
      <p v-html="description"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.layer-title {
  position: relative;
  background: url("@/assets/images/line_h2_text.gif") 0 100% repeat-x;
  margin-top: 2rem;
  margin-bottom: 3rem;

  div {
    h2 {
      margin: 0;
      margin-right: 1rem;
      display: inline-block;
      color: #e51c23;
      font-size: 2rem;
      font-weight: normal;
      height: 100%;
      background: url("@/assets/images/line_h2_title.gif") 0 100% repeat-x;
      position: absolute;
    }

    p {
      font-size: 13px;
      display: inline-block;
      color: #9e9e9e;
      margin: 0;
      padding: 3.5rem 0 2rem 0;
      span {
        color: #e51c23;
        font-weight: bold;
      }
    }
  }
}

@include mobile {
  .page-title {
    div {
      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  }
}
</style>