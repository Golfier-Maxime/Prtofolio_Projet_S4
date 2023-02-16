<script setup>
</script>

<template>
    <div class="ml-4 mr-4 dark:text-white duration-700">
        <h1 class="mt-4 text-center titre tracking-wider text-[60px]  dark:text-white duration-700">CONTACT</h1>
        <p class="mt-4">Vous voulez directement me contacter, vous pouvez le faire via ce formulaire.</p>
        <p class="mt-4">Ou simplement avec :</p>

        <p>E-Mail : <a href="mailto:contact@maximegolfier.fr" class="">contact@maximegolfier.fr</a></p>
        <p>Numéro : 07 71 07 25 94</p>
        <div>
            <form action="contact@maximegolfier.fr" class="space-y-8">
                <div>
                    <label for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-Mail</label>
                    <input type="email" id="email"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Votre@adress.fr" required>
                </div>
                <div>
                    <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sujet
                        du mail</label>
                    <input type="text" id="subject"
                        class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Quelle est votre demande ?" required>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Votre
                        message</label>
                    <textarea id="message" rows="6"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Message"></textarea>
                </div>
                <button type="submit" class="">Envoyer</button>
            </form>
        </div>
    </div>
</template>

<style>

</style>