<template>
  <q-header bordered :class="!$q.dark.isActive ? 'bg-grey-1' :'bg-black'">
    <q-toolbar class="toolbar">                    
      <q-btn style="font-size:1rem" class="text-blue" no-caps label="Edit" dense flat unelevated />      
      <label class="title">Chats</label>
      <q-btn class="text-blue" no-caps icon="edit_note" dense flat unelevated />        
    </q-toolbar>
  </q-header>
</template>

<script setup>
  import { onMounted } from 'vue'
  import { useQuasar } from 'quasar'
  const $q = useQuasar();
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

.body--light{
    .toolbar{    
        background-color:#fff;  
    }  
}
.body--dark{
    .toolbar{    
        background-color:$dark; 
        color: white; 
    }   
}
.toolbar{    
    color: black;   
    display:flex;
    justify-content: space-between;
    align-items: center; 
    .title{
      font-family: 'Roboto', sans-serif;        
        font-weight: 500;
        font-size: 1.2rem;                
    }    
}
.q-avatar{
    cursor: pointer;
}
</style>