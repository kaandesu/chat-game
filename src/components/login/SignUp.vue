<template>  
    <seciton class="loginBox" :class="props.activeClass" style="--size:450px">
        <label class="title">Sign Up Page</label>        
        <!-- use q-stepper for signup -->
        <div class="inner">
            <q-input class="input" color="purple" label="E-mail" type="email" v-model="userInfo.email"/>
            <q-input class="input" color="purple" label="Name" v-model="userInfo.name"/>            
            <q-input class="input" color="purple" label="Password" :type="hidePwd ? 'password' : 'text'" v-model="userInfo.password" >        
                <template v-slot:append>
                    <q-icon
                        :name="hidePwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="hidePwd = !hidePwd"
                    />
                </template>
            </q-input>
            <q-input class="input" color="purple" label="Confirm Password" :type="hidePwdConf ? 'password' : 'text'" v-model="userInfo.confirmPassword" >        
                <template v-slot:append>
                    <q-icon
                        :name="hidePwdConf ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="hidePwdConf = !hidePwdConf"
                    />
                </template>
            </q-input>
        </div>
        <q-btn :disable="userInfo.password != userInfo.confirmPassword || userInfo.password == ''" class="q-mt-md" size="1.1rem" push color="purple" label="sign up" @click="signUp()"/>           
        <label>Already have an account? <a href="javascript:;" @click="emit('toggle')">Sign in</a></label>     
    </seciton>  
</template>

<script setup>
    import { ref } from 'vue'
    const userInfo = ref({
        email: '',
        name: '',
        password: '',
        confirmPassword: ''
    })
    const hidePwd = ref(true);
    const hidePwdConf = ref(true);
    const emit = defineEmits(['toggle']);
    const props = defineProps({
    activeClass: {
        type: String,            
    }
    })
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Yeon+Sung&display=swap');
.landscape{
    &.loginBox{
        width:100%;
        position: absolute;    
        &::after{    
            clip-path: ellipse(14% 50% at 100% 50%);    
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size:contain;
            animation:bgMoveHor 40s linear infinite alternate;  
        }
        &::before{    
            clip-path: ellipse(14% 50% at 0% 50%);    
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size:contain ;
            animation:bgMoveHor 40s linear infinite alternate;         
        }
        .inner{
            width: 80%;         
        }
    }    
}
.loginBox{        
    position: relative;
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    align-items: center;
    filter:hue-rotate(100deg);
    gap: 1rem;
    width: min(var(--size),100%);
    height: 100%;
    background-color: #fff;       
    .inner{
        width: 100%;        
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: center;                
        .input{
            width: 40%;
        }
    }
    .title{
        font-size: 3rem;        
        background: linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(42,35,170,1) 23%, rgba(57,0,134,1) 50%, rgba(137,5,207,1) 74%, rgba(253,187,45,1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        width: 100%;
        text-align: center;
        font-family: 'Yeon Sung', cursive;
        color: #000;
    }     
     &::before{
        content: "";
        position: absolute;
        clip-path: ellipse(92% 80% at 90% 85%);
        pointer-events: none;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 28%;
        background: url('https://i.etsystatic.com/13015978/r/il/218ac6/2026689079/il_fullxfull.2026689079_4bjr.jpg');
        opacity: 0.6;
        background-size: cover;        
        animation:bgMove 20s linear infinite alternate;        
    }
     &::after{
        content: "";
        position: absolute;
        clip-path: ellipse(92% 80% at 10% 15%);
        pointer-events: none;
        top: 0;
        left: 0;
        width: 100%;
        height: 28%;
        background: url('https://i.etsystatic.com/13015978/r/il/218ac6/2026689079/il_fullxfull.2026689079_4bjr.jpg');
        opacity: 0.6;
        background-size: cover;        
        animation:bgMove 20s linear infinite alternate;         
    }
    @keyframes bgMove{
        0%{
            background-position: 0 0;
        }
        100%{
            background-position: 100% 100%;
        }
    }
     @keyframes bgMoveHor{
        0%{
            background-position-x: -100%;
        }
        100%{
            background-position-x: 100%;
        }
    }
    
}
</style>