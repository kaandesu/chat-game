<template>
  <q-header bordered class="bg-grey-1">
    <q-toolbar class="toolbar">                    
      <q-btn style="font-size:1rem" class="text-blue" no-caps label="Edit" dense flat unelevated />      
      <label class="title">Chats</label>
      <q-btn class="text-blue" no-caps icon="edit_note" dense flat unelevated />        
    </q-toolbar>
  </q-header>
</template>

<script setup>
  import { onMounted } from 'vue'
  
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
@mixin no-select{
    -webkit-touch-callout: none;  /* iOS Safari */
  -webkit-user-select: none;    /* Safari */
  -khtml-user-select: none;     /* Konqueror HTML */
  -moz-user-select: none;       /* Firefox */
  -ms-user-select: none;        /* Internet Explorer/Edge */
  user-select: none;          
}
.toolbar{
    background-color: #fff;
    color: black;   
    display:flex;
    justify-content: space-between;
    align-items: center; 
    .title{
      font-family: 'Roboto', sans-serif;
        @include no-select;
        font-weight: 500;
        font-size: 1.2rem;                
    }    
}
.q-avatar{
    cursor: pointer;
}
</style>