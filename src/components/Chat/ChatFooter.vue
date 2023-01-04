<template>
  <q-footer>
    <q-toolbar>
        <q-icon @click="showAttachments = !showAttachments" size="1.75rem" :class="!showAttachments ? 'rotate-45' : ''" class="paper-clip" name="attach_file" />
        <section class="attachments">
            <q-btn
                v-for="btn in attachmentList"
                :key="btn.icon" 
                :class="[{show:showAttachments,hide:!showAttachments}, btn.color, 'btn text-white']" 
                
                glossy 
                size="1.1rem" 
                :icon="`${btn.icon}`" 
                round flat 
                :style="`--order:${btn.order}`" />            
        </section>
        
        <div class="input" />
        <q-btn icon="send" class="sendbtn" dense round flat unelevated color="blue-5" />
    </q-toolbar>
    </q-footer>
</template>

<script setup>
import { ref } from 'vue';
    const showAttachments = ref(false);
    const attachmentList = ref([
        {
            icon: 'person',
            color: 'bg-blue-6',
            order:3,
            func: () => {
                console.log('person');
            }                        
        },
        {
            icon: 'upload_file',
            color: 'bg-teal-4', 
            order:2,
            func: () => {
                alert('heyy!');
            }           
        },
        {
            icon: 'image',
            color: 'bg-pink-5',
            order:1,
            func: () => {
                console.log('person');
            }            
        }
    ]);
</script>

<style scoped lang="scss">
.body--light{
    .q-footer{
        background-color: #EFF2F5;
        .input{
            background: #fff;
        }
    }
}
.body--dark{
    .q-footer{
        background-color: $dark;
        color: white;
        .input{
            background: #2b2b2b;
        }
    }
}
.q-footer{    
    color:black;        
    display: flex;
    padding: 0rem 0.25rem;
    justify-content: space-between;
    flex-flow: row nowrap;        
    .paper-clip{        
        opacity: 1;
        transition: all 0.3s ease-in-out;
        cursor: pointer;       
        margin-left:0.5rem; 
    }    
    .input{
        height: 55%;
        width: 100%;
        margin-left: 1rem ;
        border-radius: 5px;        
        display: flex;
        justify-content: flex-start;        
        align-items: center;
        cursor: text;
        &::before{
            content:'Type a message';
            margin-left: 10px;            
            color:#9a9a9a;
        }
    }  
    .sendbtn{
        margin-left: 0.5rem;
    }
}
.attachments{
    position: absolute;
    display:flex;    
    bottom:50px;    
    flex-flow: column nowrap;
    justify-content: space-evenly;
    height:12rem;    
         
    .btn.show{    
        opacity:0;   
        transform-origin: bottom;      
        animation: slideIn 0.45s ease-out forwards;
        animation-delay:calc(calc(var(--order) - 1) * 0.05s);
    }
 
    .btn.hide{              
        transform-origin: 50% 100%;
        animation: slideOut 0.5s ease-in-out forwards;        
        animation-delay:calc(calc(var(--order) - 1) * 0.05s);
    }
   
}
@keyframes slideIn{
    0%{
        opacity: 0;            
        transform: scale(0) translateY(150%);
    }    
    20%{
        opacity: 0.1;                    
    }
    70%{                        
        transform: scale(1.10);
    }     
    100%{
        opacity: 1;
        transform: scale(1) translateY(0px);
    }
}
    @keyframes slideOut{
    0%{
        opacity: 1;
        transform: scale(1) translateY(0px);
    }
    50%{
        opacity: 0.7;            
        transform: scale(0.95);
    }
    100%{
        opacity: 0;            
        transform: scale(0) translateY(200%);
    }            
    
}
</style>