<template>
  <q-header>
        <q-toolbar class="toolbar">          
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
    background-color: #EFF2F5;
    color: black;    
    .title{
        @include no-select;
        font-size: 1rem;
        cursor: pointer;
        
    }    
}
.q-avatar{
    cursor: pointer;
}

</style>