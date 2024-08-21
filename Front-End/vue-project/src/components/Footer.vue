<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();

})
</script>

<template>
    <footer class="bg-gray-800 shadow-2xl dark:bg-gray-900 fixed bottom-0 w-full z-10">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-[#f8f7f7]"><span class="self-center text-2xl font-semibold whitespace-nowrap text-blue-700 dark:text-white">IA</span> Olimpica</span>
                </RouterLink>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <RouterLink to="/about" class="hover:underline me-4 md:me-6">Mais sobre</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/docs" class="hover:underline me-4 md:me-6">Documentação</RouterLink>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Documentação da api</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.linkedin.com/in/andré-lima-peixoto-592567297" class="hover:underline">André Lima Peixoto™</a>. Todos os direitos reservados.</span>
        </div>
    </footer>
</template>