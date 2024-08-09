<template>
    <div class="BackGround">
        <registrationComponent/>
    </div>
</template>

<script>
import RegistrationComponent from '@/components/RegistrationComponent.vue';

export default{
  components: { RegistrationComponent },
    name: 'RegistrationPage',
    import:{
        RegistrationComponent
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