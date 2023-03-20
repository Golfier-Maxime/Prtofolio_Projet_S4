<script setup>

</script>

<template>
    <div class="ml-4 mr-4 lg:mx-36 dark:text-white duration-700">
        <h1
            class="mt-4 lg:mt-12 text-center titre tracking-[6px] text-[50px] 2xl:text-[100px]  dark:text-white duration-700">
            CONTACT</h1>
        <div class="">
            <p class="mt-4 lg:text-[24px]">Vous voulez directement me contacter, vous pouvez le faire via ce formulaire.</p>
            <p class="mt-4 lg:text-[24px]">Ou simplement avec :</p>

            <p class="mt-4 lg:text-[24px]">E-Mail : <a href="mailto:contact@maximegolfier.fr"
                    class="">contact@maximegolfier.fr</a></p>
            <p class="mt-4 lg:text-[24px]">Numéro : 07 71 07 25 94</p>
        </div>
        <div class="lg:mx-80">
            <form action="https://api.web3forms.com/submit" method="POST" class="space-y-8">
                <input type="hidden" name="access_key" value="6c199d9f-bd2b-40fb-b83f-538406f464a7">
                <div>
                    <label for="email" class="block mb-2 mt-4 lg:text-[24px]  dark:text-white duration-700">E-Mail</label>
                    <input type="email" id="email"
                        class="shadow-sm bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Votre@adress.fr" required>
                </div>
                <div>
                    <label for="subject" class="block mb-2 mt-4 lg:text-[24px]   dark:text-white duration-700">Sujet
                        du mail</label>
                    <input type="text" id="subject"
                        class="block p-3 w-full mt-4 lg:text-[18px]  bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Quelle est votre demande ?" required>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 mt-4 lg:text-[24px]   dark:text-white duration-700">Votre
                        message</label>
                    <textarea id="message" rows="6"
                        class="block p-2.5 w-full mt-4 lg:text-[18px] bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Message"></textarea>
                </div>
                <input type="hidden" name="redirect" value="https://web3forms.com/success">
                <button type="submit" class="">Envoyer</button>
            </form>
        </div>
    </div>
</template>

<style></style>