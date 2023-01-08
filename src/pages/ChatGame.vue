<template>
  <div class="screen" v-if="activeScenario !== null">
    <Chat.Header 
     :title="activeScenario.title"
     :avatar="activeScenario.avatar"
    />    
    <Chat.Section ref="section">
      <template #message>
        <Chat.Message
          v-for="(msg,index) in shownScenario"
          :key="index"
          :message="msg.text"
          :timestamp="msg.timestamp"
          :isMine="msg.isMine"          
          :isDelivered="true"
          :loading="false"              
        />
        <Chat.Message
        v-if="currentProgress.myTurn"
        :isMine="false"
        :timestamp="''"      
        :loading="true"  
        />                                       
      </template>
    </Chat.Section>
    <Chat.Footer @next="nextChat()" />    
  </div>
</template>

<script setup>
  import { onMounted, ref } from "vue";
  import * as Chat from '../components/Chat/chat-components.js'
  import * as Scenarios from '../components/scenarios/chat-scenarios.js'  
  const activeScenario = ref(null);
  const currentProgress = ref({
    msgIndex:0,
    storyIndex:0,
    myTurn:false,
  });
  const shownScenario = ref([]);
  const props = defineProps({
    game: {
      type: String,
      required: true,      
    },  
  });
  const timeout = ref(null);
  const timeout2 = ref(null);
  // refs
  const section = ref(null);


  const nextChat = () => {  
    section.value.scrollToBottom();
    clearTimeout(timeout.value);
    clearTimeout(timeout2.value);
    currentProgress.value.myTurn = false;
    if(activeScenario.value.story[currentProgress.value.storyIndex].length-1 == currentProgress.value.msgIndex) return;              
    // go next message
    currentProgress.value.msgIndex++;
    // show the writing icon, if its not my turn    
    timeout.value = setTimeout(() => {   
      if(activeScenario.value.story[currentProgress.value.storyIndex].length-1 == currentProgress.value.msgIndex) return;               
    currentProgress.value.myTurn = activeScenario.value.story[currentProgress.value.storyIndex][currentProgress.value.msgIndex].isMine;            
      timeout2.value = setTimeout(() => {        
        currentProgress.value.msgIndex++;
        shownScenario.value.push(activeScenario.value.story[currentProgress.value.storyIndex][currentProgress.value.msgIndex]);
        currentProgress.value.myTurn = activeScenario.value.story[currentProgress.value.storyIndex][currentProgress.value.msgIndex].isMine;    
      }, activeScenario.value.story[currentProgress.value.storyIndex][currentProgress.value.msgIndex+1].text.length * 50);
    }, 1000);
    
    shownScenario.value.push(activeScenario.value.story[currentProgress.value.storyIndex][currentProgress.value.msgIndex]);
  }
  onMounted(() => {    
    activeScenario.value = Scenarios[props.game];
    shownScenario.value.push(activeScenario.value.story[currentProgress.value.storyIndex][currentProgress.value.msgIndex]);        
  });

</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@400;600&display=swap');
.body--light{
    .screen{    
        background-color:#e9e9e9;  
    }
}
.body--dark{
    .screen{    
        background-color:$dark;  
        &::before{
          filter:invert(2);
        }
    }
}
.screen{
    font-family: 'Arimo', sans-serif;    
    
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