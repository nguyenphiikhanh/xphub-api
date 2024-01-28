<template>
    <main class="bg-theme-500 flex items-center justify-center min-h-screen">
        <div class="bg-theme-50 flex rounded-2xl shadow-lg max-w-5xl items-center">
            <div class="px-8 md:px-16 py-8">
                <slot></slot>
            </div>
        </div>
    </main>
</template>

<script>

import {defineComponent} from 'vue'
import {trans} from '@/helpers/i18n';

export default defineComponent({
    name: "Auth",
    setup() {

        let AppConfig = window.AppConfig;

        return {
            trans,
            AppConfig
        }
    }
});
</script>
