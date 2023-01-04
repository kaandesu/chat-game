<template>
  <q-footer>
    <q-toolbar class="toolbar">                    
        <div @click="selectTab(tab.name);callFunc(tab.method)" v-for="tab in tabs" :key="tab.name" :class="selectedTab === tab.name ?'text-blue' : 'text-grey'" class="btn">
            <q-icon size="md" :name="tab.icon"  />        
            <label>{{tab.name}}</label>
        </div>                        
    </q-toolbar>
  </q-footer>
</template>

<script setup>
  import { onMounted, ref, defineEmits } from 'vue'
  import { useQuasar } from 'quasar'
  const $q = useQuasar();
  const selectedTab = ref('Chats');
  const tabs = ref([{name:'Contacts',icon:'account_circle',method:false},{name:'Chats',icon:'forum',method:false},{name:'Settings',icon:'settings',method:() => {$q.dark.toggle();}}]);
  const emit = defineEmits(['select']);
  const selectTab = (tab) => {
    selectedTab.value = tab;    
    emit('selectTab',selectedTab.value);
  }
  const callFunc = (func) => {if(func) func();}
  onMounted(() => {
    emit('selectTab',selectedTab.value);
  })
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
.body--light{
    .toolbar{    
        background-color:#EFF2F5;  
    }
     .btn:hover{
        background-color: #dedede80;
    }
}
.body--dark{
    .toolbar{    
        background-color:$dark;  
    }
    .btn:hover{
        background-color: #54545480;
    }
}
.toolbar{    
    color: black;   
    display:flex;
    justify-content: space-evenly;
    align-items: center; 
    .title{
      font-family: 'Roboto', sans-serif;
        @include no-select;
        font-weight: 500;
        font-size: 1.2rem;                
    }   
    .btn{
        cursor: pointer;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        font-size: 0.65rem;        
        color: grey;
        margin-top:0.2rem;        
        width:100%;
        @include no-select;
        transition:background-color 0.25s ease-in-out;        
    } 
}
.q-avatar{
    cursor: pointer;
}
</style>