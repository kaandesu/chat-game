<template>
  <section>
    <q-scroll-area 
    :visible="true" 
    style="width:100%;height:100%"    
    :thumb-style="{ opacity: 0.5,'pointer-events':'none','background-color':'rgba(0,0,0,0)' }"
    >
        <slot name="message" />
    </q-scroll-area>
  </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
section{    
    width:100%;
    height:calc(100% - 6.25rem);   
    padding:0.4rem; 
}
</style>