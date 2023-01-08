<template>
    <div class="screen">
        <Main.Header />

        <Main.Section>
            <template #content>                
                <Main.ChatBlock
                 v-for="(chat,index) in Scenarios"
                 :key="index"
                 :title="chat.title"
                 :avatar="chat.avatar"
                 :firstLine="chat.story[0][0].text"                
                 :game="chat.game"
                />
            </template>
        </Main.Section>

        <Main.Footer @selectTab="(e) => selectTab(e)" />
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue'
    import * as Main from '../components/Main/main-components.js'
    import * as Scenarios from '../components/scenarios/chat-scenarios.js'
    const selectedTab = ref('');
    const selectTab = (tab) => {
        selectedTab.value = tab;
    }    
    const initGame = (chat) => {
        alert(chat);
    }
</script>

<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@400;600&display=swap');
.screen{
    font-family: 'Arimo', sans-serif;     
    width: 100vw;
    height: 100vh;

}
.body--light{
    .screen{    
        background-color:#fff;  
    }
}
.body--dark{
    .screen{    
        background-color:$dark;  
    }
}
</style>