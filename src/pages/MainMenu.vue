<template>
    <div class="screen">
        <Main.Header />

        <Main.Section>
            <template #content>
                <Main.ChatBlock v-for="i in 15" :key="i" />
            </template>
        </Main.Section>

        <Main.Footer @selectTab="(e) => selectTab(e)" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import * as Main from '../components/Main/main-components.js'
const selectedTab = ref('');
const selectTab = (tab) => {
    selectedTab.value = tab;
}

</script>

<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@400;600&display=swap');
.screen{
    font-family: 'Arimo', sans-serif;
    background-color: #e9e9e9;    
    width: 100vw;
    height: 100vh;

}

</style>