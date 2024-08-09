<template>
    <div class="BackGround">
        <LoginComponent/>
    </div>
</template>

<script>
import LoginComponent from '../components/LoginComponent.vue';


export default {
    name: 'LoginPage',
    components: {
        LoginComponent
    }

}
</script>

<style>
.BackGround {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(209deg, #120838f7, #12083873);
}
</style>