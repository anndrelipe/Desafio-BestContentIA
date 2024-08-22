<script setup>
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'
import axios from 'axios';
import Footer from '@/components/Footer.vue';

onMounted(() => {
    initFlowbite();
})

const raw_key_words = ref();
var key_words = []

const files = ref([]);

function preparaArquivo (evento) {
    files.value = Array.from(evento.target.files)
}

function preparaPalavrasChave (evento) {
    raw_key_words.value = Array.from(evento.target.value);
    key_words = raw_key_words._rawValue.join('').split(', ');

}

async function enviaPalavrasChave (keywords_list, files) {

    const formData = new FormData();
    
    files.forEach(file => {
        formData.append('files', file);
    });

    await axios.post('http://127.0.0.1:3000/api/images-data', {
        image_name : formData.get('files').name,
        keywords_list : keywords_list
    })
    .then(console.log('Enviado Palavras' + formData))
}

async function enviaArquivosImagem (files) {

    const formData = new FormData();
    files.forEach(file => {
        formData.append('files', file);
    });

    document.getElementById("progresso").classList.remove("hidden");

    await axios.post('http://127.0.0.1:3000/api/images-upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: function (progressEvent) {
            const porcentagemCompleta = Math.round((progressEvent.loaded / progressEvent.total) * 100);
            document.getElementById("barra_progresso").style.width = porcentagemCompleta + "%";

        }
    })
    .then(() => {
        document.getElementById("progresso").classList.add("hidden");
        document.getElementById("barra_progresso").style.width = "0%";
    })
}
function testandoPersistividade (e) {
    e.preventDefault();
    
    enviaArquivosImagem(files.value);
    enviaPalavrasChave(key_words, files.value);
}

</script>

<template>

    <div id="container">
        <form @submit="testandoPersistividade" class="max-w-md mx-auto">
            <div class="relative z-0 w-full mb-5 group">
                <label class="block mb-2 text-sm font-medium text-gray-500 dark:text-white" for="user_avatar">Upload arquivos</label>
                <input @change="preparaArquivo" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" required aria-describedby="user_avatar_help" id="user_avatar" type="file">
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Defina as palavras chave separadas por virgula</label>
                <textarea @change="preparaPalavrasChave" required id="message" rows="4" style="resize: none;" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Palavra 1, Palavra 2, Palavra 3... "></textarea>
            </div>

            <div id="progresso" class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-5 mb-5 hidden">
                <div id="barra_progresso" class="bg-blue-600 h-2.5 rounded-full" style="width: 0%"></div>
            </div>

            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
        </form>
    </div>
    <Footer/>
</template>

<style scoped>
    #container {
        margin: 5%;
    }
</style>