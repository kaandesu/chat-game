<template>
  <q-header bordered class="bg-grey-1">
        <q-toolbar class="toolbar">   
          <q-icon class="backBtn text-blue-13" size="2.4rem" @click="goHome()" name="keyboard_arrow_left" />       
          <q-avatar>
            <img draggable="false" alt="Contact" :src="avatar">
          </q-avatar>

          <q-toolbar-title class="title">{{title}}</q-toolbar-title>
            <q-separator vertical inset class="q-mr-sm" />
          <q-btn unelevated flat round dense icon="expand_more" />
        </q-toolbar>
    </q-header>
</template>

<script setup>
import { useRouter } from "vue-router";
const { push } = useRouter();
defineProps({
  title: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true,
    default:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  }
})

const goHome = () => {
  push({ name: 'main' })
}
</script>

<style lang="scss" scoped>
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
    .title{
      @include no-select;        
      font-size:1rem;
      cursor: pointer;        
    }    
    .backBtn{
      cursor: pointer;
      margin-right: 0.5rem;
      margin-left: -0.5rem;
    }
}
.q-avatar{
    cursor: pointer;
}

</style>