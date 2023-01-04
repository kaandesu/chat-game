<template>
<!-- create both message types in h() and use <component /> -->
  <section :style="{'justify-content':isMine ? 'flex-end' : 'flex-start'}">
    <q-chat-message                
        :text="[message]"
        :sent="isMine"
        :stamp="timestamp"
        :bg-color="isMine? 'green-11' : 'white'"
        class="chat-message"     
      />      
  </section>
</template>

<script setup>
import { defineProps, ref } from 'vue'

defineProps({
  message: {
    type: String,
    required: true
  },
  timestamp: {
    type: String,
    required: true,
    default: 'now'
  },
  isMine: {
    type: Boolean,
    required: true,    
  },
  isRead: {
    type: Boolean,
    required: true
  },
  isDelivered: {
    type: Boolean,
    required: true,    
  },
  isSent: {
    type: Boolean,
    required: true,
    default:true,
  }
})
</script>

<style scoped lang="scss">
section{
    width:100%;
    height:5rem;    
    display: flex;
    flex-flow: row nowrap;    
    align-items: center;
    .chat-message{        
        max-width: 80%;          
    }
}
</style>