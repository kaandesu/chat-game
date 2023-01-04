<template>
  <div class="screen">
    <Chat.Header 
     :title="activeScenario.title"
     :avatar="activeScenario.avatar"
    />
    <Chat.Section>
      <template #message>
        <Chat.Message
          v-for="(msg,index) in activeScenario.story"
          :key="index"
          :message="msg.text"
          :timestamp="msg.timestamp"
          :isMine="msg.isMine"          
          :isDelivered="true"          
        />
      </template>
    </Chat.Section>
    <Chat.Footer />    
  </div>
</template>

<script setup>
  import { onMounted, ref } from "vue";
  import * as Chat from '../components/Chat/chat-components.js'
  import * as Scenarios from '../components/scenarios/chat-scenarios.js'
  console.log(Scenarios.ChatOne.story);
  const activeScenario = ref(Scenarios.ChatOne);
  


</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@400;600&display=swap');
.screen{
    font-family: 'Arimo', sans-serif;
    background-color: #e9e9e9;
    
    width: 100vw;
    height: 100vh;
    

    &::before{
        content: '';
        position: absolute;
        background-image:url('https://theabbie.github.io/blog/assets/official-whatsapp-background-image.jpg');
        background-size: contain;
        opacity: 0.13;
        width: 100%;
        height: 100%;
    }
}
</style>