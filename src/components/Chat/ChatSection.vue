<template>
  <section>
    <q-scroll-area 
    :visible="false" 
    ref="scroll"
    @click="emit('next')"
    style="width:100%;height:100%"    
    :thumb-style="{ opacity: 0.5,'pointer-events':'none','background-color':'rgba(0,0,0,0)' }"
    @scroll="(e)=>{toggleScrollBtn(e.verticalPercentage)}"
    >
        <slot name="message" />
    </q-scroll-area>  
    <q-btn 
    icon="expand_more"
    dense     
    round    
    class="bg-white text-grey-7 scrollbtn"
    :class="showScrollBtn ? 'show' : 'hide'"
    @click="scrollToBottom()"
    />
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
  const scroll = ref(null);
  onMounted(() => {    
    scrollToBottom(0);
  });
  const scrollToBottom = (ms=300) => {
    let sHeight = scroll.value.getScroll().verticalSize;
    scroll.value.setScrollPosition('vertical',sHeight,ms);
  }
  const showScrollBtn = ref(false);
  const toggleScrollBtn = (per) => {    
    if(per > 0.8) showScrollBtn.value = false;
    else showScrollBtn.value = true;    
   
  }
  const emit = defineEmits(['next']);
  defineExpose({
  scrollToBottom,  
})
</script>

<style scoped lang="scss">
.scrollbtn{
    position: absolute;
    right:1em;
    bottom:calc(3.125rem + 6.5rem + 1rem);
    width:50px;
    height:50px;    
    transition:all 0.3s ease-in-out;
    
}
.hide{
      opacity:0;
      transform: scale(0);
    }        
    .show{
      opacity:1;
      transform: scale(1);
    }
section{    
    width:100%;
    height:calc(100% - 6.25rem);   
    padding:0.4rem; 
}
</style>