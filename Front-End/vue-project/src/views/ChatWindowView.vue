<script setup>
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'
import axios from 'axios';

onMounted(() => {
    initFlowbite();
});

const pergunta = ref('');
const resposta = ref('Sua resposta...');

function preparaPergunta(evento) {
    pergunta.value = evento.target.value;
}

function sendQuestion (evento) {
    evento.preventDefault();

    axios.post('http://127.0.0.1:3000/api/question', {
        question: pergunta.value
    })
    .then((response) => resposta.value = response.data.content);
}

</script>

<template>
    <div id="container" class="flex flex-col h-screen">
        <!-- Área de conteúdo que rola se necessário -->
        <div id="child" class="flex-grow p-2 overflow-y-auto text-white">
            {{resposta}}
        </div>

        <!-- Formulário fixado na parte inferior da tela -->
        <form @submit="sendQuestion" class="p-4 bg-gray-800 fixed bottom-0 w-full">
            <label for="chat" class="sr-only">Your message</label>
            <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                <textarea @change="preparaPergunta" id="chat" rows="1" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                    <svg class="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                    </svg>
                    <span class="sr-only">Send message</span>
                </button>
            </div>
        </form>
    </div>
</template>


<style scoped>

</style>