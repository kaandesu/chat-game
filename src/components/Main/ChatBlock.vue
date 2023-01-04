<template>             
    <q-item @click="initGame(game)" clickable v-ripple class="item">
    <q-item-section avatar>
        <q-avatar size="3.5rem">
            <img :src="avatar">
        </q-avatar>
    </q-item-section>

    <q-item-section>
        <q-item-label lines="1">{{title}}</q-item-label>
        <q-item-label caption lines="2">        
        {{firstLine}}
        </q-item-label>
    </q-item-section>

    <q-item-section side top>
        Today
    </q-item-section>
    </q-item>    
    <q-separator inset="item" />
</template>

<script setup>
  import { useRouter } from "vue-router";
const { push } = useRouter();
    const initGame = (chat) => {
        push({ name: 'chat', params: { game: chat } })
    }    
    defineProps({
        avatar: {
            type: String,
            required: true,
            default:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        },
        title: {
            type: String,
            required: true,
            default:'Unknown number'
        },
        firstLine: {
            type: String,
            required: true,
            default:'hello'
        },
        game: {
            type: String,
            required: true,        
        }
    })
</script>

<style lang="scss" scoped>
.item{
    height: 4.6rem;
}
.body--light{
    .item{    
        background-color:#fff;  
    }
}
.body--dark{
    .item{    
        background-color:$dark;  
    }
}
</style>