<script setup>
    import { onMounted, ref } from 'vue'
    import { initFlowbite } from 'flowbite'
    import Footer from '@/components/Footer.vue';
    import '../components/modais/LoginModal.vue';
import axios from 'axios';

    onMounted(() => {
        initFlowbite();

    });

    const email = ref('');
    const password = ref('');
    const confirmed_password = ref('');

    function coletaEmail (evento) {
        email.value = evento.target.value;
    }

    function coletaPassword (evento) {
        password.value = evento.target.value;
    }

    function coletaConfirmedPassword (evento) {
        confirmed_password.value = evento.target.value;
    }

    async function teste (e) {
        e.preventDefault();

        if (email.value.indexOf('@') === -1 || email.value.indexOf(".com") === -1) {
            alert('Verifique se o email está no formato correto!');
            return
        }

        if (password.value.length < 6) {
            alert('A senha precisa ter pelo menos 6 caracteres.');
            return
        }

        if (password.value !== confirmed_password.value) {
            alert('As senhas não parecem ser iguais, tente novamente!');
            return
        }

        try {

            const result = await axios.post(`https://desafio-bestcontentia-1.onrender.com/api/users/register`, {
                email: email.value,
                password: password.value
            });

            if (result.data.status === 201) {
                alert("Muito bem! Sua conta foi criada com sucesso, faça login em nosso site a qualquer momento! :)");
                return
            }

        } catch (error) {
            alert('Nós lamentamos, não foi possível criar sua conta! :(');
            console.log(error)
            return
        }
    }


</script>

<template>

    <section class="bg-[#111827] dark:bg-gray-900 mt-12">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div class="flex flex-col justify-center">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-50 md:text-5xl lg:text-6xl dark:text-white">{{ $t('Register.firstH1') }}<span class="text-blue-700">{{ $t('Register.firstSpan') }}</span>{{ $t('Register.secondH1') }}</h1>
                <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">{{ $t('Register.firstParagraph') }}</p>
                <p class="mb-6 text-lg font-normal text-blue-700 lg:text-xl dark:text-gray-600">{{ $t('Register.secondParagraph') }}</p>
            </div>
            <div>
                <form @submit="teste" class="max-w-md mx-auto">
                    <div class="relative z-0 w-full mb-5 group">
                        <input @change="coletaEmail" type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-700 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{{ $t('Register.firstLabel') }}</label>
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                        <input @change="coletaPassword" type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-700 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{{ $t('Register.secondLabel') }}</label>
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                        <input @change="coletaConfirmedPassword" type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-700 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{{ $t('Register.thirdLabel') }}</label>
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{{ $t('Register.firstButton') }}</button>
                </form>
            </div>
        </div>
    </section>

    <Footer/>

</template>