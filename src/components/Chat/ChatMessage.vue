<template>
<!-- create both message types in h() and use <component /> -->
  <section :style="{'justify-content':isMine ? 'flex-end' : 'flex-start'}">
    <q-chat-message    
        v-if="!loading"            
        :text="[message]"
        :sent="isMine"
        :stamp="timestamp"
        :bg-color="bgColor"
        class="chat-message"     
        :text-color="$q.dark.isActive ? 'white' : 'black'"
    />      
    <q-chat-message                        
        v-if="loading"
        :sent="isMine"        
        :bg-color="bgColor"
        class="chat-message"     
        :text-color="$q.dark.isActive ? 'white' : 'black'"
      >      
      <q-spinner-dots size="2rem" /> 
    </q-chat-message>
      
  </section>
</template>

<script setup>
import { computed, defineProps, ref } from 'vue'
import { useQuasar } from 'quasar'
const $q = useQuasar();
const bgColor = computed(() => {
  if(props.isMine && $q.dark.isActive) return 'primary'
  if(!props.isMine && $q.dark.isActive) return 'grey-9'
  if(props.isMine && !$q.dark.isActive) return 'secondary'
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
  },
  isSent: {
    type: Boolean,
    required: true,
    default:true,
  },
  loading: {
    type: Boolean,
    required: true,
    default: true
  }
})
</script>

<style scoped lang="scss">
@use 'src/css/app.scss' as *;
.body--dark{
    .section{    
        .chat-message{
            color: white;
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