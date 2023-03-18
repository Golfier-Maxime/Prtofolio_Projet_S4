<script setup>
</script>

<template>
    <div class="ml-4 mr-4 dark:text-white duration-700">
        <h1
            class="mt-4 lg:mt-12 text-center titre tracking-[6px] text-[50px] lg:text-[76px] 2xl:text-[100px]  dark:text-white duration-700">
            PROJETS</h1>
        <div class="ml-4 mr-4 dark:text-white duration-700 lg:mx-20 lg:mt-36">


            <div>
                <div class="bar-neutral bg-Dark-Blue dark:bg-B-White h-1 mt-16 lg:mx-20 w-[100hv]"></div>
                <!-- ufc arene -->
                <RouterLink to="/ufcarene">
                    <div class="flex  justify-center ">
                        <div class="lg:mt-16 flex flex-col lg:flex-row  lg:gap-11 card-projet">
                            <img src="/images/UFCarene.png" alt=""
                                class="2xl:w-[250px] lg:w-[200px] rounded-md mt-4 lg:mt-0">
                            <div>
                                <p class="text-[28px] font-bold mt-4 lg:mt-0">UFC Arene</p>
                                <p class="2xl:text-[24px] lg:text-[18px]">Mise en place du site spécialisé sur l'arène
                                    d'Unified
                                    Champions Club.
                                    Système d'inscription + participation au tournois.
                                    Produit avec <span class="text-blue-400"> wordpress</span> + <span class="text-red-400">
                                        Sportpress</span>.</p>
                            </div>
                        </div>
                    </div>
                </RouterLink>
                <div class="bar-neutral bg-Dark-Blue dark:bg-B-White h-1 mt-16 lg:mx-20 w-[100hv]"></div>
                <!-- projet axolott app-->
                <RouterLink to="/axolottapp">
                    <div class="flex  justify-center ">
                        <div class="lg:mt-16 flex flex-col lg:flex-row  lg:gap-11 card-projet">
                            <img src="/images/axolott_app.png" alt=""
                                class="2xl:w-[250px] lg:w-[200px] rounded-md mt-4 lg:mt-0">
                            <div>
                                <p class="text-[28px] font-bold mt-4 lg:mt-0">Axolott App</p>
                                <p class="2xl:text-[24px] lg:text-[18px]">Mise en place d'une application mobile avec
                                    interaction et base
                                    de
                                    données.
                                    Produit avec <span class="text-green-400">Vue3js</span> + <span
                                        class="text-blue-400">Tailwind</span> + <span
                                        class="text-yellow-400">FireBase</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </RouterLink>



                <div class="bar-neutral bg-Dark-Blue dark:bg-B-White h-1 mt-16 lg:mx-20 w-[100hv]"></div>
                <!-- projet axolott landing page -->
                <RouterLink to="/tiktak">
                    <div class="flex  justify-center ">
                        <div class="lg:mt-16 flex flex-col lg:flex-row  lg:gap-11 card-projet">
                            <img src="/images/tiktak.png" alt="" class="2xl:w-[250px] lg:w-[200px] rounded-md mt-4 lg:mt-0">
                            <div>
                                <p class="text-[28px] font-bold mt-4 lg:mt-0">Tik-Tak</p>
                                <p class="2xl:text-[24px] lg:text-[18px]">Mise en place d'un site de vente de montre
                                    connecter
                                    customisable par le client.
                                    Produit avec <span class="text-green-400">Vue3js</span> + <span
                                        class="text-blue-400">Tailwind</span>+ <span class="text-green-400">Supabase</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </RouterLink>
                <div class="bar-neutral bg-Dark-Blue dark:bg-B-White h-1 mt-16 lg:mx-20 w-[100hv]"></div>

            </div>
        </div>
    </div>
</template>

<style scoped></style>