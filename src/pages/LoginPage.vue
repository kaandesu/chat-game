<template>
  <div ref="screen" class="screen">    
    <transition class="page" name="page" mode="out-in">
        <Login.Login         
        @toggle="haveAccount = !haveAccount"
        v-if="haveAccount"
        :activeClass="activeClass"
        />
        <Login.SignUp        
        @toggle="haveAccount = !haveAccount"
        :activeClass="activeClass"
        v-else
        />
    </transition>
    <q-resize-observer @resize="onResize" />
  </div>
</template>

<script setup>
    import { computed, ref } from 'vue'
    import { useQuasar } from 'quasar'
    const $q = useQuasar()
    import * as Login from '../components/login/login-component.js'
    const haveAccount = ref(true);
    const size = ref({width: 0, height: 0});
    const screen = ref(null);
    const onResize = () => {
        size.value.width = screen.value.clientWidth;
        size.value.height = screen.value.clientHeight;        
    }
    const activeClass = computed(()=>{
        return ((size.value.width > size.value.height) && ($q.platform.is.mobile??false)) ? 'landscape' : 'none'    
    });
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Yeon+Sung&display=swap');
.screen{
    width: 100vw;
    height: 100vh;    
    display:flex;    
    justify-content: center;
    align-items: center;
    background: #512d42;   
}
.screen .q-input{
        width: 70%;
    }   
.page{
    clip-path: circle(100% at 50% 50%);    
}
.page-enter-active {
  animation: changePage 0.60s reverse;
}
.page-leave-active {
  animation: changePage 0.60s;
}
@keyframes changePage{
    0%{
        clip-path: circle(100% at 50% 50%);
    }
    100%{
        clip-path: circle(0% at 50% 50%);
    }
}


</style>