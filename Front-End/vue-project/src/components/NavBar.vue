<script setup>
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'
import { RouterLink } from 'vue-router'
import LoginModal from './modais/LoginModal.vue';

const isAdminOptAllowed = ref(false);

if (sessionStorage.getItem('uid') !== "SvasUQxwmfba0bLy7BihkKXh3DC2") {
    isAdminOptAllowed.value = false
} else {
    isAdminOptAllowed.value = true
}

const name = ref('');
const email = ref('')

if (!!sessionStorage.getItem('email')) {
    name.value = ref(sessionStorage.getItem('email').split('@')[0]);
    email.value = ref(sessionStorage.getItem('email'))
}


const isAuthenticated = ref(!!sessionStorage.getItem('authToken'));

const isDropdownVisible = ref(false);

function exibirDropdown () {
    isDropdownVisible.value = !isDropdownVisible.value;
}

function esconderDropdown () {
    isDropdownVisible.value = false
}

onMounted(() => {
    initFlowbite();

})


</script>

<script>
    export default {
        methods: {
            setLocale(locale) {
                this.$i18n.locale = locale
                }
            }   
        }
</script>


<template>

<nav class="bg-gray-800 border-gray-200 dark:bg-gray-900 shadow-lg">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-[#f8f7f7]"><span class="self-center text-2xl font-semibold whitespace-nowrap text-blue-700 dark:text-white">{{ $t('NavBar.firstSpan') }}</span>{{ $t('NavBar.secondSpan') }}</span>
    </RouterLink>


        <!-- QUANDO LOGADO USAR ESSE -->
        <div v-if="isAuthenticated"class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" @click="exibirDropdown" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span class="sr-only">{{ $t('NavBar.thirdSpan') }}</span>
            <img class="w-8 h-8 rounded-full" src="../assets/65fI2KVe_400x400.jpg" alt="user photo">
        </button>
        <!-- Dropdown menu -->
        <div v-show="isDropdownVisible" class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
            <div class="px-4 py-3">
            <span class="block text-sm text-gray-900 dark:text-white">{{ name }}</span>
            <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">{{ email }}</span>
            </div>
            <ul class="py-2" aria-labelledby="user-menu-button">
                <li v-if="isAdminOptAllowed">
                    <RouterLink to="/admin" @click="esconderDropdown" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Admin</RouterLink>
                </li>
            </ul>
        </div>
        <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
            <span class="sr-only">{{ $t('NavBar.fourthSpan') }}</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
    </div>

    <!-- DESLOGADO USAR ESSE: -->

    <div v-else="isAuthenticated" class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-5">
            {{ $t('NavBar.firstButton') }}
        </button>
        <LoginModal/>
        <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
            <span class="sr-only">{{ $t('NavBar.fifthSpan') }}</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
    </div>


    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-800 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
            <RouterLink to="/chat" class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:dark:text-blue-500 hover:underline" aria-current="page">{{ $t('NavBar.firstRouterLink') }}</RouterLink>
        </li>
        <li>
            <RouterLink to="/docs" class="block py-2 px-3 md:p-0 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Docs</RouterLink>
        </li>
        <li>
            <RouterLink to="/about" class="block py-2 px-3 md:p-0 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{{ $t('NavBar.secondRouterLink') }}</RouterLink>
        </li>
        <li>

            <a href="#" class="block py-2 px-3 md:p-0 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">
    <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="block py-2 px-3 md:p-0 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 inline-flex items-center" type="button">
        {{ $t('NavBar.secondButton') }} 
        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
    </button>

    <div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
            <li>
                <a @click="setLocale('pt_BR')" href="#" class="block px-4 py-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600">{{ $t('NavBar.firstATag') }}</a>
            </li>
            <li>
                <a @click="setLocale('en_US')" href="#" class="block px-4 py-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600">{{ $t('NavBar.secondATag') }}</a>
            </li>
        </ul>
    </div>
</a>
        </li>
        </ul>
    </div>
    </div>
    </nav>

</template>