<template>
    <main class="Centralizar" style="color:white">
        <div class="MenuRegistration">
        </div>
    </main>
</template>

<script>
export default {
    name:'RegistrationComponent',
    mounted() {
    console.log('Olá');
  },
    methods:{
        
    }
}
</script>

<style>
.Centralizar {
    display: flex;
    height: 100vh;
    flex-flow: column;
    justify-content: center;
    text-align: -webkit-center;
    align-items: center;
}

.MenuRegistration {
    width: 800px;
    height: 490px;
    background-color: rgb(217, 217, 217, 0.21);
    border-radius: 1.25rem;
}
</style>