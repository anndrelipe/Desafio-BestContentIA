<script setup>
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'
import axios from 'axios';

onMounted(() => {
    initFlowbite();
});

const pergunta = ref('');
const resposta = ref('');

function preparaPergunta(evento) {
    pergunta.value = evento.target.value;
}

function sendQuestion (evento) {
    evento.preventDefault();
    resposta.value = '. . .'

    axios.post('http://127.0.0.1:3000/api/question', {
        question: pergunta.value
    })
    .then((response) => resposta.value = response.data.content + '\n\n\n');

}

</script>

<template>
    <div id="container" class="flex flex-col h-screen">
        <!-- Área de conteúdo que rola se necessário -->
        <div id="child" class="flex-grow p-2 overflow-y-auto text-white ">

                        <div class="flex items-start gap-2.5 justify-center m-5">
            <img class="h-8 w-8 rounded-full" src="https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg" alt="Jese image" />
            <div class="flex flex-col gap-2.5">
                <div class="flex items-center space-x-2 rtl:space-x-reverse">
                    <span class="text-sm font-semibold text-gray-500 dark:text-white">Bonnie Green</span>
                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
                </div>
                <div class="leading-1.5 flex w-full max-w-[500px] flex-col">
                    <textarea rows="25" cols="100" style="resize: none;" class="text-sm font-normal text-gray-500 dark:text-white bg-[#111827] border-none w-full outline-none">{{ resposta }}</textarea>
                    <div class="group relative mt-2">
                        <div class="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                            <button data-tooltip-target="download-image" class="inline-flex items-center justify-center rounded-full h-10 w-10 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50">
                                <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"/>
                                </svg>
                            </button>
                            <div id="download-image" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                Download image
                                <div class="tooltip-arrow" data-popper-arrow></div>
                            </div>
                        </div>
                        <img src="" class="rounded-lg" />
                    </div>
                </div>
            </div>
            </div>

        </div>

        <!-- Formulário fixado na parte inferior da tela -->
        <form @submit="sendQuestion" class="p-4 bg-gray-800 fixed bottom-0 w-full">
            <label for="chat" class="sr-only">Your message</label>
            <div class="flex items-center justify-center px-3 py-2 rounded-lg bg-gray-800 dark:bg-gray-700 max-w-lg mx-auto">
                <textarea @change="preparaPergunta" id="chat" rows="1" style="resize: none;" class="block mx-4 p-2.5 w-full text-sm text-gray-50 bg-[#111827] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                <button type="submit" class="inline-flex justify-center p-2 text-blue-100 hover:text-blue-900 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600 transition-transform duration-800 transform hover:scale-110">
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