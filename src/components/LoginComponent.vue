<template>
    <main class="Centralizar" style="color:white">
        <div class="MenuLogin">
            <div class="DisplayMenu">
                <div class="Cabecalho">
                    <i>
                        <img src="../img/Money.svg" alt="">
                    </i>
                    <p class="ControleAqui">Controle Aqui</p>
                </div>
                <div>
                    <p style="font-size: 13px;font-weight: 600;">Seu controle financeiro, a um clique de distância.</p>
                </div>
                <form action="Login">
                    <div style="position: relative; margin-bottom: 1rem;">
                        <i style="position: absolute;">
                            <img src="../img/Profile.svg" alt="">
                        </i>
                        <input type="text" placeholder="Login" id="Login">
                    </div>
                    <div style="position: relative;">
                        <i style="position: absolute; padding-left: .25rem;">
                            <img src="../img/Padlock.svg" alt="">
                        </i>
                        <input type="password" placeholder="Senha" id="Senha">
                    </div>
                    <div class="EsqueciSenha">
                        <p class="ClickSenha"><u>Esqueci minha senha</u></p>
                    </div>
                </form>
                <section class="FooterButton">
                    <button class="Button Login" >
                        <p>Login</p>
                    </button>
                    <button class="Button Registrar" @click="GoToRegistrar">
                        <p>Registrar</p>
                    </button>
                </section>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'LoginComponent',
    methods:{
        GoToRegistrar(){
            this.$router.push('/Registrar')
        }
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

.EsqueciSenha {
    width: 80%;
    text-align: start;
    padding-top: .5rem;
    font-size: 0.75rem;
}

.DisplayMenu {
    width: 100%;
    height: 100%;
    display: grid;
}

.ClickSenha{
    cursor: pointer;
    width: 46%;
}
.ClickSenha:hover {
    transition-duration: 200ms;
    color: #6D00A0;
}

.ControleAqui {
    padding-left: .5rem;
    padding-top: 1rem;
    font-weight: 500;
}


.MenuLogin {
    width: 360px;
    height: 490px;
    background-color: rgb(217, 217, 217, 0.21);
    border-radius: 1.25rem;
}

.Cabecalho {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
}

.FooterButton {
    display: flex;
    flex-direction: column;
    justify-self: center;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 0.5rem;
    width: 80%;

}

.Button {
    background: none;
    border-radius: 1.25rem;
    width: 100%;
    height: 2.75rem;
    color: white;
}

.Login {
    border: 1px solid white;
    cursor: pointer;
}
.Login:active{
    transform: scale(0.95);
    transition-duration: 200ms;
}

.Registrar {
    background-color: rgb(238, 238, 238, 0.23);
    border: none;
    cursor: pointer;
}
.Registrar:active{
    transform: scale(0.95);
    transition-duration: 200ms;
}

.DisplayGrid2Columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

input::placeholder {
    color: white;
}

input {
    width: 80%;
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    color: white;
    padding: .5rem .5rem .5rem 2rem;
    font-size: .8rem;
}
</style>