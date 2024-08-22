<script setup>
    import { onMounted, ref } from 'vue'
    import { initFlowbite } from 'flowbite'
    import { RouterLink } from 'vue-router';
    import axios from 'axios';

    const isAuthenticated = ref(false);
    
    onMounted(() => {
        initFlowbite();

    });

    const email = ref('');
    const password = ref('');

    function closeModal () {
        const modal = document.getElementById('authentication-modal');
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    function coletaEmail (evento) {
        email.value = evento.target.value;
    }

    function coletaPassword (evento) {
        password.value = evento.target.value;
    }

    async function signInFunction (e) {
        e.preventDefault()

        if (email.value.indexOf('@') === -1 || email.value.indexOf(".com") === -1) {
            alert('Verifique se o email está no formato correto!');
            return
        }

        if (password.value.length < 6) {
            alert('A senha precisa ter pelo menos 6 caracteres.');
            return
        }

        try {
                const result = await axios.post(`https://desafio-bestcontentia-1.onrender.com/api/users/login`, {
                email       : email.value,
                password    : password.value
            }); 

            const uid = result.data.content.uid
            const token = result.data.content.token;
            
            sessionStorage.setItem('authToken', token);
            sessionStorage.setItem('email', email.value);
            sessionStorage.setItem('uid', uid);


            isAuthenticated.value = true;

            window.location.reload();
        } catch (error) {
            alert('Não foi possível fazer login, verifique email e senha e tente novamente.');
            console.log(error)
            return
        }
    }


    function logOut () {
        sessionStorage.removeItem('authToken');
        isAuthenticated.value = false;
    }

</script>

<template>

    <div  class="inline justify-center">
        <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-md max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        {{ $t('LoginModal.firstH3') }}
                    </h3>
                    <button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">{{ $t('LoginModal.firstSpan') }}</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-4 md:p-5">
                    <form @submit="signInFunction" class="space-y-4" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ $t('LoginModal.firstLabel') }}</label>
                            <input @change="coletaEmail" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="seunome@dominio.com" required />
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ $t('LoginModal.secondLabel') }}</label>
                            <input @change="coletaPassword" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{{ $t('LoginModal.firstButton') }}</button>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                            {{ $t('LoginModal.firstDiv') }} <RouterLink to="/register" class="text-blue-700 hover:underline dark:text-blue-500" @click="closeModal">{{ $t('LoginModal.firstRouterLink') }}</RouterLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </div>

</template>