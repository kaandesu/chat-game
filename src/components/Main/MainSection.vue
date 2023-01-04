<template>
  <section>
    <q-scroll-area 
    class="scrollArea"
    :visible="false"
    :thumb-style="{ opacity: 0.5,'pointer-events':'none','background-color':'rgba(0,0,0,0)' }"
    >
      <slot name="content" />
    </q-scroll-area>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
section{
  width:100%;
  height: calc(100% - 6.75rem);  
}
.scrollArea{
  width:100%;
  height:100%;  
  padding: 0.5rem 0rem ;
}
</style>