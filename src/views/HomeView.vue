<script setup>
import html5 from '@/components/logo/html5.vue'
import Css3 from '../components/logo/css3.vue';
import javas from '../components/logo/javas.vue';
import vue3 from '../components/logo/vue3.vue';
import tailwindcss from '../components/logo/tailwindcss.vue';
import firebasevue from '../components/logo/firebase.vue';
import wordpressvue from '../components/logo/wordpress.vue';
import figma from '../components/logo/figma.vue';
import adobe from '../components/logo/adobe.vue';
import davinci from '../components/logo/davinci.vue';


</script>

<template>
    <!-- main -->
    <div>

        <!-- Debut -->
        <div class="lg:flex lg:mx-20">
            <div>
                <div>
                    <h1
                        class="mt-4 2xl:mt-12 text-center titre tracking-[6px] text-[60px] 2xl:text-[100px]  dark:text-white duration-700">
                        MAXIME
                        GOLFIER
                    </h1>
                </div>
                <div>
                    <img src="" alt="">
                    <div class="flex justify-center">
                        <h1 class=" dark:text-white 2xl:text-[24px]">Étudiant en développement Web</h1>
                    </div>
                    <div class="flex justify-center mt-2">
                        <img class="2xl:w-[400px] w-[300px]  " src="/images/maximegolfier.png" alt="">
                    </div>
                </div>
            </div>
            <!-- TEXT Bonjour -->
            <div class="2xl:mt-32 lg:mt-12">
                <div>
                    <h2
                        class=" ml-4 mr-4 font-bold lg:mx-20 2xl:text-7xl lg:text-[52px] text-[44px] dark:text-white duration-700">
                        BONJOUR 👋</h2>
                </div>
                <div class="ml-4 mr-4 lg:mx-20 ">
                    <div>
                        <h2
                            class="2xl:mt-8 lg:mt-4 text-lg lg:text-[20px] 2xl:text-[28px] font-bold tracking-wider dark:text-white duration-700">
                            Qui
                            suis-je ?</h2>
                        <div class="bar-title h-1 mt-2 2xl:w-[200px] lg:w-[150px] w-[130px]"></div>
                    </div>
                    <p class="mt-4 2xl:text-[24px] lg:text-[18px]  dark:text-white duration-700">Étudiant de 23 ans;
                        actuellement en
                        deuxième
                        année en
                        MMI (Métiers du Multimédia et de l’Internet) de Montbéliard.
                    <p class="mt-4 2xl:text-[24px] lg:text-[18px] dark:text-white duration-700">
                        Passionné par le web et son
                        fonctionnement, le
                        métier de développeur
                        web, m'interesse car je considere que ce sont dans ces domaines que l'ont
                        Fasconne les
                        techniques, les outils, et les medias de demain.</p>
                    </p>

                    <p class="mt-4 2xl:text-[24px] lg:text-[18px] dark:text-white duration-700">
                        Curieux, volontaire et motivé, j'essaye avec l'expérience qui est mienne d'élaborer des sites
                        web
                        toujours plus
                        innovants afin d'en apprendre plus sur les nouvelles technologie.
                    </p>
                    <p class="mt-4 2xl:text-[24px] lg:text-[18px] dark:text-white duration-700">
                        Malgré que mon expérience soit encore jeune dans le milieu du web mon intérêt pour ce domaine ne
                        cesse de me motiver et
                        de faire grandir mes ambitions. Si cette présentation n'a pas suffi à vous convaincre de
                        travailler
                        avec moi, vous
                        pouvez en apprendre plus encore plus dans la page :
                        <RouterLink to="/apropos">
                            <span class="dark:text-white duration-700 2xl:text-[24px] lg:text-[18px]">
                                À propos
                            </span>
                        </RouterLink>

                    </p>
                </div>
            </div>
        </div>

        <!-- COMPETENCE -->
        <div class="ml-4 mr-4 lg:mx-20 lg:mt-36">
            <div>
                <h2
                    class="mt-8 text-lg font-bold tracking-wider dark:text-white duration-700 2xl:text-[28px] lg:text-[24px]">
                    Mes
                    Compétences</h2>
                <div class="bar-title h-1 mt-1 2xl:w-[270px] lg:w-[240px] w-[180px]"></div>
            </div>
            <!-- comp -->
            <h3 class="font-bold tracking-[3px] 2xl:text-[24px] lg:text-[20px] mt-8 dark:text-white duration-700">
                &#x27E8;Développement
                Web/&#x3009;</h3>
            <div
                class="mt-4 flex flex-col items-center lg:flex-row 2xl:gap-16 lg:gap-10 lg:justify-center dark:text-white duration-700">

                <div class=" mt-6 flex gap-1 items-center card-dev">
                    <div class="flex flex-col items-center">
                        <html5 class="w-20 h-20 2xl:w-32 2xl:h-32 lg:w-26 lg:h-26"></html5>
                        <p class="2xl:text-[24px] lg:text-[18px] font-bold tracking-widest ">HTML</p>
                    </div>
                </div>
                <div class=" mt-6 flex gap-1 items-center card-dev">
                    <div class="flex flex-col items-center">
                        <Css3 class="w-20 h-20 2xl:w-32 2xl:h-32 lg:w-26 lg:h-26"></Css3>
                        <p class="2xl:text-[24px] lg:text-[18px] font-bold tracking-widest">CSS</p>
                    </div>

                </div>
                <div class=" mt-6 flex gap-1 items-center card-dev">
                    <div class="flex flex-col items-center">
                        <javas class="w-20 h-20 2xl:w-32 2xl:h-32 lg:w-26 lg:h-26"></javas>
                        <p class="2xl:text-[24px] lg:text-[18px] font-bold tracking-widest">JavaScript</p>
                    </div>

                </div>
                <div class=" mt-6 flex gap-1 items-center card-dev">
                    <div class="flex flex-col items-center">
                        <vue3 class="w-20 h-20 2xl:w-32 2xl:h-32 lg:w-26 lg:h-26"></vue3>
                        <p class="2xl:text-[24px] lg:text-[18px] font-bold tracking-widest">Vue3Js</p>
                    </div>

                </div>
                <div class=" mt-6 flex gap-1 items-center card-dev">
                    <div class="flex flex-col items-center">
                        <tailwindcss class="w-20 h-20 2xl:w-32 2xl:h-32 lg:w-26 lg:h-26"></tailwindcss>
                        <p class="2xl:text-[24px] lg:text-[18px] font-bold tracking-widest">Tailwind Css</p>
                    </div>

                </div>
                <div class=" mt-6 flex gap-1 items-center card-dev">
                    <div class="flex flex-col items-center">
                        <firebasevue class="w-20 h-20 2xl:w-32 2xl:h-32 lg:w-26 lg:h-26"></firebasevue>
                        <p class="2xl:text-[24px] lg:text-[18px] font-bold tracking-widest">Firebase / Supabase</p>
                    </div>

                </div>
                <div class=" mt-6 flex gap-1 items-center card-dev">
                    <div class="flex flex-col items-center">
                        <wordpressvue class="w-20 h-20 2xl:w-32 2xl:h-32 lg:w-26 lg:h-26"></wordpressvue>
                        <p class="2xl:text-[24px] lg:text-[18px] font-bold tracking-widest">Wordpress</p>
                    </div>
                </div>
            </div>
            <div class="lg:mt-36">
                <div>
                    <h2 class="font-bold tracking-[3px] 2xl:text-[24px] lg:text-[20px] mt-8 dark:text-white duration-700">
                        Autres
                        Compétences</h2>

                </div>
                <div
                    class="mt-4 flex flex-col items-center lg:flex-row 2xl:gap-16 lg:gap-10 lg:justify-center dark:text-white duration-700">
                    <div class=" mt-6  gap-1 items-center card-dev">
                        <div class="flex flex-col items-center">
                            <figma class="w-20 h-20 2xl:w-32 2xl:h-32 lg:w-26 lg:h-26"></figma>
                            <p class="2xl:text-[24px] lg:text-[18px] font-bold tracking-widest">Figma</p>

                        </div>
                    </div>
                    <div class=" mt-6 flex gap-1 items-center card-dev">
                        <div class="flex flex-col items-center">
                            <adobe class="w-20 h-20 2xl:w-32 2xl:h-32 lg:w-26 lg:h-26"></adobe>
                            <p class="2xl:text-[24px] lg:text-[18px] font-bold tracking-widest">Suite Adobe</p>

                        </div>
                    </div>
                    <div class=" mt-6 flex gap-1 items-center card-dev">
                        <div class="flex flex-col items-center">
                            <davinci class="w-20 h-20 2xl:w-32 2xl:h-32 lg:w-26 lg:h-26"></davinci>
                            <p class="2xl:text-[24px] lg:text-[18px] font-bold tracking-widest">Davinci Resolve</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- mes projets -->

        <div class="ml-4 mr-4 dark:text-white duration-700 lg:mx-20 lg:mt-36">
            <div>
                <h2
                    class="mt-8 text-lg font-bold tracking-wider dark:text-white duration-700 2xl:text-[28px] lg:text-[24px] ">
                    Mes Projets
                </h2>
                <div class="bar-title h-1 mt-1 2xl:w-[200px] lg:w-[170px] w-[130px]"></div>
            </div>

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
                <!-- projet tiktak -->
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
                <p class="mt-6 lg:mt-10 lg:mx-20">Si vous voulez voir plus de projet aller sur la page : Projets</p>
            </div>
        </div>
        <!-- me contacter -->
        <div class="ml-4 mr-4 dark:text-white duration-700 lg:mx-20 lg:mt-36">
            <div>
                <h2
                    class="mt-8 text-lg font-bold tracking-wider dark:text-white duration-700 2xl:text-[28px] lg:text-[24px] ">
                    Me contacter
                    pour un
                    projet</h2>
                <div class="bar-title h-1 mt-1 lg:w-[400px]"></div>
                <p class="mt-4 2xl:text-[24px] lg:text-[18px]">E-Mail : <a href="mailto:contact@maximegolfier.fr"
                        class="text-orange-400">contact@maximegolfier.fr</a>
                </p>
                <p class="mt-2 2xl:text-[24px] lg:text-[18px]">Numéro : 07 71 07 25 94</p>
                <p class="mt-2 2xl:text-[24px] lg:text-[18px]">Ou directement sur la page<RouterLink to="/contact"
                        class="text-orange-400">
                        Contact
                    </RouterLink>
                </p>
            </div>
            <div class="">


            </div>
        </div>
    </div>
</template>

<style>
.bar-title {
    background-image: linear-gradient(90deg, #d946ef, #dc2626, #fb923c);
    border-radius: 2px;
}

.bar-neutral {
    border-radius: 2px;
}


.card-projet {
    width: 70%;
}

@media screen and (max-width: 910px) {
    .card-projet {
        width: 90%;
    }
}

.card-projet {
    transition: 0.3s;
}

.card-projet:hover {
    scale: 1.2;
    
}

.card-dev:hover {
    transform: scale(1.05);
    transition: 0.3s;

}

/* test0 */
</style>