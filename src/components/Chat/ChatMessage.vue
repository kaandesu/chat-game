<template>
<!-- create both message types in h() and use <component /> -->
  <section :style="{'justify-content':isMine ? 'flex-end' : 'flex-start'}">
    <q-chat-message                
        :text="[message]"
        :sent="isMine"
        :stamp="timestamp"
        :bg-color="bgColor"
        class="chat-message"     
      />      
  </section>
</template>

<script setup>
import { computed, defineProps, ref } from 'vue'
import { useQuasar } from 'quasar'
const $q = useQuasar();
const bgColor = computed(() => {
  if(props.isMine && $q.dark.isActive) return 'secondary'
  if(!props.isMine && $q.dark.isActive) return 'white'
  if(props.isMine && !$q.dark.isActive) return 'primary'
  if(!props.isMine && !$q.dark.isActive) return 'white'
  return 'primary'
});

const props = defineProps({
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
    default: false 
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
.body--light{
    .section{    
        .chat-message{
            
        }
    }
}
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