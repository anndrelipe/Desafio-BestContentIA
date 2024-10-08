<script setup>
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'
import axios from 'axios';

onMounted(() => {
    initFlowbite();
});

const pergunta = ref('');
const resposta = ref('Olá! Sou seu especialista olímpico. Me faça uma pergunta.');
const imageLink = ref('');

const data = new Date();

const horas = data.getHours();
var minutos = data.getMinutes();
var isDisabled = false;
var isReadOnly = false;

if (minutos < 10) {
    minutos = "0" + minutos
}

function preparaPergunta(evento) {
    pergunta.value = evento.target.value;
}

async function sendQuestion (evento) {
    evento.preventDefault();

    
    const image_url = await getAnImage();

    const botao = document.getElementById("enviar");
    botao.classList.remove("cursor-pointer")
    botao.classList.add("cursor-not-alowed");

    isDisabled = true;

    resposta.value = '. . .';

    axios.post(`https://desafio-bestcontentia-1.onrender.com/api/question`, {
        question: pergunta.value
    })
    .then((response) => {
        isDisabled = false;
        botao.classList.remove("cursor-not-allowed");
        botao.classList.add("cursor-pointer");
        resposta.value = response.data.content + '\n\n\n';
        isReadOnly = true;
        imageLink.value = image_url;
    });

}

function coletaPalavrasChaveDaPergunta () {

    const palavras_filtradas = [];
    var arrayPalavras = pergunta.value.replace(/,/g, '').replace(/\?/g, '').replace(/\./g, '');
    arrayPalavras = arrayPalavras.split(' ');

    const stopWords = [
        "e", "mas", "um", "uma", "uns", "umas", "o", "a", "os", "as", "de", "do", "da", 
        "dos", "das", "em", "no", "na", "nos", "nas", "por", "para", "com", "sem", 
        "sobre", "sob", "entre", "até", "eu", "tu", "ele", "ela", "nós", "vós", 
        "eles", "elas", "meu", "minha", "teu", "tua", "seu", "sua", "nosso", 
        "nossa", "vosso", "vossa", "deles", "delas", "me", "te", "se", "nos", 
        "vos", "lhe", "lhes", "um", "uma", "uns", "umas", "qual", "quais", 
        "quem", "que", "o", "a", "os", "as", "isso", "aquilo", "isto", 
        "quando", "onde", "como", "porquê", "porque", "se", "já", "não", 
        "sim", "também", "ou", "mas", "então", "só", "aqui", "ali", "lá", 
        "qualquer", "algum", "nenhum", "todo", "tudo", "cada", "outro", "outra", 
        "outros", "outras", "mesmo", "mesma", "mesmos", "mesmas", "ele", "ela", 
        "eles", "elas", "eu", "tu", "nós", "vós", "é", "mais", '', ' ', '  '
        ];
    

        arrayPalavras.forEach((palavra) => {
        if (!stopWords.includes(palavra.toLowerCase())) {
            palavras_filtradas.push(palavra)
        }
    });

    return palavras_filtradas
}

async function comparaPalavrasChavesERetornaImagem(lista) {
    var quantidade_palavras_comum = [];
    const docs = await axios.get(`https://desafio-bestcontentia-1.onrender.com/api/images-data`);

    docs.data.content.forEach((doc) => {
        var somador = 0
        for (const palavra of lista) {
            if (doc.keywords_list.map((item) => item.toLowerCase()).includes(palavra.toLowerCase())) {
                somador += 1;
            }
        }
        quantidade_palavras_comum.push(somador);
    });

    const better_choice = quantidade_palavras_comum.findIndex((item) => item === Math.max(...quantidade_palavras_comum));

    if (better_choice !== -1) {
        console.log(quantidade_palavras_comum[better_choice])
        if (quantidade_palavras_comum[better_choice] === 0 ) {
            return ''
        }
        return docs.data.content[better_choice].image_name;
    }

    return ''; 
}


async function getAnImage () {

    const palavras_chave = coletaPalavrasChaveDaPergunta();
    const imagem_name = await comparaPalavrasChavesERetornaImagem(palavras_chave);

    if (imagem_name !== '') {
        const finalURL = await axios.get(`https://desafio-bestcontentia-1.onrender.com/api/images-dowload/${imagem_name}`)
        return finalURL.data.content
    }

    return ''

}

</script>

<template>
    <div id="container" class="flex flex-col h-screen">
        <!-- Área de conteúdo que rola se necessário -->
        <div id="child" class="flex-grow p-2 overflow-y-auto text-white ">
            <div class="flex items-start gap-2.5 justify-center m-5">
                <img class="h-8 w-8 rounded-full" src="../assets/65fI2KVe_400x400.jpg" alt="Bot image" />
                <div class="flex flex-col gap-2.5 justify-center">
                    <div class="flex items-center space-x-2 rtl:space-x-reverse">
                        <span class="text-sm font-semibold text-gray-500 dark:text-white">{{ $t('Chat.firstSpan') }}</span>
                        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">{{ horas }}:{{ minutos }}</span>
                    </div>
                    <div class="leading-1.5 flex w-full max-w-[500px] flex-col">
                        <textarea :readonly="isReadOnly" rows="20" cols="100" style="resize: none;" class="text-sm font-normal text-gray-500 dark:text-white bg-[#111827] border-none w-full outline-none">{{ resposta }}</textarea>
                        <div class="group relative mt-2">
                    </div>
                </div>
            </div>
        </div>

        <div id="imagem">
            <img :src="imageLink" class="rounded-lg max-w-[400px] mb-5"/>
        </div>

        <br>
        <br>
        <br>

    </div>

        <!-- Formulário fixado na parte inferior da tela -->
        <form @submit="sendQuestion" class="p-4 bg-gray-800 fixed bottom-0 w-full">
            <label for="chat" class="sr-only">{{ $t('Chat.firstLabel') }}</label>
            <div class="flex items-center justify-center px-3 py-2 rounded-lg bg-gray-800 dark:bg-gray-700 max-w-lg mx-auto">
                <textarea @change="preparaPergunta" :disabled="isDisabled" id="chat" rows="1" style="resize: none;" class="block mx-4 p-2.5 w-full text-sm text-gray-50 bg-[#111827] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Faça a sua pergunta..."></textarea>
                <button id="enviar" :disabled="isDisabled" type="submit" class="inline-flex justify-center p-2 text-blue-100 hover:text-blue-900 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600 transition-transform duration-800 transform hover:scale-110">
                    <svg class="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                    </svg>
                    <span class="sr-only">{{ $t('Chat.secondSpan') }}</span>
                </button>
            </div>
        </form>
    </div>
    
</template>


<style scoped>
    #container {
        margin-bottom: 5%;
    }
    #imagem {
        display: flex;
        justify-content: center
    }
</style>