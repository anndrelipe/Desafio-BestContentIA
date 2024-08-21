<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import Footer from '@/components/Footer.vue';

onMounted(() => {
    initFlowbite();

});
</script>

<template>

    <div id="container">
        <h3 class="text-3xl mb-2 text-gray-50">Nossa <span class="text-blue-700">missão</span></h3>
        <hr class="border-gray-500">
        <p class="mb-5 mt-3 text-gray-500 dark:text-gray-400">Nossa missão é tornar o universo das modalidades olímpicas acessível e compreensível para todos. Utilizando tecnologia de ponta, nossa plataforma oferece respostas rápidas e precisas às suas dúvidas sobre esportes olímpicos. Queremos que todos, desde entusiastas até atletas, possam explorar e aprender sobre as diferentes modalidades olímpicas de maneira simples e eficiente.</p>
        <h3 class="text-3xl mb-2 text-gray-50">Nossa <span class="text-blue-700">cultura</span></h3>
        <hr class="border-gray-500">
        <p class="mb-5 mt-3 text-gray-500 dark:text-gray-400">Acreditamos no poder transformador do esporte e da tecnologia para impactar vidas de maneira positiva. Esses dois pilares, quando unidos, têm o potencial de inspirar, educar e conectar pessoas em todo o mundo. Esse sentimento de transformação é o que impulsiona nossa cultura. Somos movidos pela paixão por esportes olímpicos e pela inovação tecnológica, acreditando que ambos têm a capacidade de criar novas oportunidades, promover a inclusão e enriquecer o conhecimento.</p>
        <h3 class="text-3xl mb-2 text-gray-50">Nossas <span class="text-blue-700">tecnologias</span></h3>
        <hr class="border-gray-500">
        <p class="mb-2 mt-3 text-gray-500 dark:text-gray-400">Nosso site é construído sobre uma fundação sólida de tecnologias modernas que garantem uma experiência rápida, intuitiva e segura. O front-end do site foi arquitetado com Vue.js, utilizando componentes Flowbite e Tailwind CSS para oferecer uma interface elegante e responsiva. No backend, utilizamos Node.js com Express, garantindo desempenho robusto e escalável para atender às demandas dos nossos usuários.</p>
        <p class="mb-2 mt-3 text-gray-500 dark:text-gray-400">Para armazenamento e gerenciamento de dados, contamos com os serviços da Firebase, incluindo Authentication para a segurança do usuário, Firestore para a gestão de dados em tempo real e Storage para o armazenamento de arquivos. Nosso sistema é projetado para ser ágil e eficiente, permitindo que você acesse as informações que precisa de forma rápida e confiável.</p>
        <p class="mb-2 mt-2 text-gray-500 dark:text-gray-400">Além disso, o coração do nosso site, o bot que responde às suas perguntas sobre modalidades olímpicas, é baseado na API ChatGPT-4o-mini. Essa inteligência artificial de última geração é o que torna possível a experiência interativa e informativa que oferecemos, garantindo que você receba respostas precisas e relevantes a qualquer momento.</p>
        <p class="mb-5 mt-2 text-gray-500 dark:text-gray-400">Para informações mais detalhadas acesse a documentação oficial da API no rodapé abaixo.</p>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <Footer/>

</template>

<style scoped>
    #container {
        margin: 3% 5% 10% 5% ;
    }
</style>