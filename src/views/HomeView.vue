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
                <h1
                    class="mt-4 lg:mt-12 text-center titre tracking-wider text-[60px] 2xl:text-[100px]  dark:text-white duration-700">
                    MAXIME
                    GOLFIER
                </h1>
                <div>
                    <img src="" alt="">
                    <div class="flex justify-center">
                        <h1 class=" dark:text-white lg:text-[28px]">Étudiant Web developement</h1>
                    </div>
                    <div class="flex justify-center mt-2">
                        <img class="lg:w-[400px] w-[300px]  " src="/images/maximegolfier.png" alt="">
                    </div>
                </div>
            </div>
            <!-- TEXT Bonjour -->
            <div class="lg:mt-32">
                <div>
                    <h2 class=" ml-4 mr-4 font-bold lg:mx-20 lg:text-7xl dark:text-white duration-700">BONJOUR 👋</h2>
                </div>
                <div class="ml-4 mr-4 lg:mx-20 ">
                    <div>
                        <h2 class="mt-8 text-lg lg:text-[28px] font-bold tracking-wider dark:text-white duration-700"> Qui
                            suis-je ?</h2>
                        <div class="bar-title h-1 mt-1 w-[120px]"></div>
                    </div>
                    <p class="mt-4 lg:text-[24px]  dark:text-white duration-700">Étudiant de 23 ans, actuellement en
                        deuxième
                        année en
                        MMI (Métiers du Multimédia et de l’Internet) de Montbéliard.
                    <p class="mt-4 lg:text-[24px] dark:text-white duration-700">
                        Passionné par le web et son
                        fonctionnement, le
                        métier de développeur
                        web, m'interesse car je considere que ce sont dans ces domaines que l'on
                        fasconne les
                        techniques, les outils, et les medias de demain.</p>
                    </p>

                    <p class="mt-4 lg:text-[24px] dark:text-white duration-700">
                        Curieux, volontaire et motivé, j'essaye avec l'expérience qui est mienne d'éllaborer des sites
                        web
                        toujours plus
                        innovants afin d'en apprendre plus sur les nouvelles technologie.
                    </p>
                    <p class="mt-4 lg:text-[24px] dark:text-white duration-700">
                        Malgré que mon expérience soit encore jeune dans le milieu du web mon intérêt pour ce domaine ne
                        cesse de me motiver et
                        de faire grandir mes ambitions. Si cette présentation n'a pas suffi à vous convaincre de
                        travailler
                        avec moi, vous
                        pouvez en apprendre plus encore plus dans la page :
                        <span class="dark:text-white duration-700 lg:text-[24px]">
                            À propos
                        </span>

                    </p>
                </div>
            </div>
        </div>

        <!-- COMPETENCE -->
        <div class="ml-4 mr-4 lg:mx-20 lg:mt-36">
            <div>
                <h2 class="mt-8 text-lg font-bold tracking-wider dark:text-white duration-700"> Mes Compétences</h2>
                <div class="bar-title h-1 mt-1 w-[170px]"></div>
            </div>
            <!-- comp -->
            <h3 class="font-bold tracking-wider dark:text-white duration-700">Développement Web</h3>
            <div class="mt-4 flex flex-col items-center lg:flex-row dark:text-white duration-700">

                <div class=" mt-6 flex gap-1 items-center">
                    <div class="flex flex-col items-center">
                        <html5 class="w-16 h-16"></html5>
                        <p class="">HTML</p><svg class="mt-1 ml-2" width="164" height="9" viewBox="0 0 166 9" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="164.242" height="7.02148"
                                class="stroke-Dark-Blue dark:stroke-white"></rect>
                            <rect width="150.242" height="8.02148" class="fill-Dark-Blue dark:fill-white">
                            </rect>
                        </svg>
                    </div>

                </div>
                <div class=" mt-6 flex gap-1 items-center">
                    <div class="flex flex-col items-center">
                        <Css3 class="w-16 h-16"></Css3>
                        <p class="">CSS</p><svg class="mt-1 ml-2" width="164" height="9" viewBox="0 0 166 9" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="164.242" height="7.02148"
                                class="stroke-Dark-Blue dark:stroke-white"></rect>
                            <rect width="145.242" height="8.02148" class="fill-Dark-Blue dark:fill-white">
                            </rect>
                        </svg>
                    </div>

                </div>
                <div class=" mt-6 flex gap-1 items-center">
                    <div class="flex flex-col items-center">
                        <javas class="w-16 h-16"></javas>
                        <p class="">JavaScript</p><svg class="mt-1 ml-2" width="164" height="9" viewBox="0 0 166 9"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="164.242" height="7.02148"
                                class="stroke-Dark-Blue dark:stroke-white"></rect>
                            <rect width="100.242" height="8.02148" class="fill-Dark-Blue dark:fill-white">
                            </rect>
                        </svg>
                    </div>

                </div>
                <div class=" mt-6 flex gap-1 items-center">
                    <div class="flex flex-col items-center">
                        <vue3 class="w-16 h-16"></vue3>
                        <p class="">Vue3Js</p><svg class="mt-1 ml-2" width="164" height="9" viewBox="0 0 166 9" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="164.242" height="7.02148"
                                class="stroke-Dark-Blue dark:stroke-white"></rect>
                            <rect width="140.242" height="8.02148" class="fill-Dark-Blue dark:fill-white">
                            </rect>
                        </svg>
                    </div>

                </div>
                <div class=" mt-6 flex gap-1 items-center">
                    <div class="flex flex-col items-center">
                        <tailwindcss class="w-16 h-16"></tailwindcss>
                        <p class="">Tailwind Css</p><svg class="mt-1 ml-2" width="164" height="9" viewBox="0 0 166 9"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="164.242" height="7.02148"
                                class="stroke-Dark-Blue dark:stroke-white"></rect>
                            <rect width="130.242" height="8.02148" class="fill-Dark-Blue dark:fill-white">
                            </rect>
                        </svg>
                    </div>

                </div>
                <div class=" mt-6 flex gap-1 items-center">
                    <div class="flex flex-col items-center">
                        <firebasevue class="w-16 h-16"></firebasevue>
                        <p class="">Firebase / Supabase</p><svg class="mt-1 ml-2" width="164" height="9" viewBox="0 0 166 9"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="164.242" height="7.02148"
                                class="stroke-Dark-Blue dark:stroke-white"></rect>
                            <rect width="90.242" height="8.02148" class="fill-Dark-Blue dark:fill-white">
                            </rect>
                        </svg>
                    </div>

                </div>
                <div class=" mt-6 flex gap-1 items-center">
                    <div class="flex flex-col items-center">
                        <wordpressvue class="w-16 h-16"></wordpressvue>
                        <p class="">Wordpress</p><svg class="mt-1 ml-2" width="164" height="9" viewBox="0 0 166 9"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="164.242" height="7.02148"
                                class="stroke-Dark-Blue dark:stroke-white"></rect>
                            <rect width="80.242" height="8.02148" class="fill-Dark-Blue dark:fill-white">
                            </rect>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="mt-12 flex flex-col items-center dark:text-white duration-700">
                <h3 class="font-bold tracking-wider">Autres compétences</h3>
                <div class=" mt-6 flex gap-1 items-center">
                    <div class="flex flex-col items-center">
                        <figma class="w-16 h-16"></figma>
                        <p class="">Figma</p><svg class="mt-1 ml-2" width="164" height="9" viewBox="0 0 166 9" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="164.242" height="7.02148"
                                class="stroke-Dark-Blue dark:stroke-white"></rect>
                            <rect width="100.242" height="8.02148" class="fill-Dark-Blue dark:fill-white">
                            </rect>
                        </svg>
                    </div>
                </div>
                <div class=" mt-6 flex gap-1 items-center">
                    <div class="flex flex-col items-center">
                        <adobe class="w-16 h-16"></adobe>
                        <p class="">Suite Adobe</p><svg class="mt-1 ml-2" width="164" height="9" viewBox="0 0 166 9"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="164.242" height="7.02148"
                                class="stroke-Dark-Blue dark:stroke-white"></rect>
                            <rect width="70.242" height="8.02148" class="fill-Dark-Blue dark:fill-white">
                            </rect>
                        </svg>
                    </div>
                </div>
                <div class=" mt-6 flex gap-1 items-center">
                    <div class="flex flex-col items-center">
                        <davinci class="w-16 h-16"></davinci>
                        <p class="">Davinci Resolve</p><svg class="mt-1 ml-2" width="164" height="9" viewBox="0 0 166 9"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="164.242" height="7.02148"
                                class="stroke-Dark-Blue dark:stroke-white"></rect>
                            <rect width="50.242" height="8.02148" class="fill-Dark-Blue dark:fill-white">
                            </rect>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <!-- mes projets -->
        <div class="ml-4 mr-4 dark:text-white duration-700">
            <div class="">
                <h2 class="mt-8 text-lg font-bold tracking-wider dark:text-white duration-700"> Mes Projets</h2>
                <div class="bar-title h-1 mt-1 w-[120px]"></div>
            </div>
            <div class="flex justify-center">
                <div class="mt-4 w-60  card-jeu">
                    <a class="  " href="https://maximegolfier.fr/">
                        <img class="rounded-t-md  " src="/images/UFCarene.png" alt="">
                        <div class="mt-1">
                            <p class="text-lg ml-1 mr-1">UFC Arene</p>
                            <p class="text-xs ml-1 mr-1">Mise en place du site spécialisé sur l'arène d'Unified
                                Champions Club.
                                Système d'inscription + participation au tournois.
                                Produit avec <span class="text-blue-400"> wordpress</span> + <span class="text-red-400">
                                    Sportpress</span>.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="flex justify-center">
                <div class="mt-4 w-60  card-jeu">
                    <a class="  " href="https://www.axolottapp.maximegolfier.fr/">
                        <img class="rounded-t-md  " src="/images/axolott.png" alt="">
                        <div class="mt-1">
                            <p class="ml-1 mr-1 text-lg">Axolott App</p>
                            <p class="text-xs ml-1 mr-1">Mise en place d'une application mobile avec interaction et base
                                de
                                données.
                                Produit avec <span class="text-green-400">Vue3js</span> + <span
                                    class="text-blue-400">Tailwind</span> + <span class="text-yellow-400">FireBase</span>.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="flex justify-center">
                <div class="mt-4 w-60  card-jeu">
                    <a class="  " href="https://www.axolott.maximegolfier.fr/">
                        <img class="rounded-t-md  " src="/images/axolott.png" alt="">
                        <div class="mt-1">
                            <p class="ml-1 mr-1 text-lg">Axolott Landing Page</p>
                            <p class="ml-1 mr-1 text-xs">Mise en place d'une landing page pour l'application Axolott.
                                Produit avec <span class="text-blue-400">HTML</span> + <span
                                    class="text-blue-400">Grid</span>.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="flex justify-center">
                <div class="mt-4 w-60  card-jeu">
                    <a class="  " href="https://tiktak.maximegolfier.fr/">
                        <img class="rounded-t-md  " src="/images/tiktak.png" alt="">
                        <div class="mt-1">
                            <p class="ml-1 mr-1 text-lg">Tik-Tak</p>
                            <p class="text-xs ml-1 mr-1">Mise en place d'un site de vente de montre connecter
                                customisable par le
                                client.
                                Produit avec <span class="text-green-400">Vue3js</span> + <span
                                    class="text-blue-400">tailwind</span> + <span class="text-green-400">Supabase</span>.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="flex justify-center">
                <div class="mt-4 w-60  card-jeu">
                    <a class="  " href="https://tpwordpress.maximegolfier.fr/">
                        <img class="rounded-t-md  " src="/images/MC.png" alt="">
                        <div class="mt-1">
                            <p class="ml-1 mr-1 text-lg">Mountain Climbers</p>
                            <p class="text-xs ml-1 mr-1">Mise en place d'un site vitrine pour débuter avec wordpress.
                                Produit avec <span class="text-blue-400">Wordpress</span> + <span
                                    class="text-red-400">Avada</span> + <span class="text-red-400">Revolution
                                    Slider</span>.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="flex justify-center">
                <div class="mt-4 w-60  card-jeu">
                    <a class="  " href="https://dataviz-maxime-golfier.netlify.app/">
                        <img class="rounded-t-md  " src="/images/MC.png" alt="">
                        <div class="mt-1">
                            <p class="ml-1 mr-1 text-lg">Data Museum</p>
                            <p class="text-xs ml-1 mr-1">Mise en place d'un site de Data Visualisation de donnée sur les
                                musées.
                                Produit avec <span class="text-green-400">Vue3js</span> + <span
                                    class="text-blue-400">Tailwind</span> + <span class="text-red-400">ChartJs
                                </span>+ <span class="text-pink-400">API Data.gouv.fr </span>.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <!-- me contacter -->
        <div class="ml-4 mr-4 dark:text-white duration-700">
            <div class="">
                <h2 class="mt-8 text-lg font-bold tracking-wider dark:text-white duration-700"> Me contacter pour un
                    projet</h2>
                <div class="bar-title h-1 mt-1 w-[220px]"></div>
                <p class="mt-4">E-Mail : <a href="mailto:contact@maximegolfier.fr"
                        class="text-orange-400">contact@maximegolfier.fr</a>
                </p>
                <p class="mt-2">Numéro : 07 71 07 25 94</p>
                <p class="mt-2">Ou directement sur la page<RouterLink to="/contact" class="text-orange-400"> Contact
                    </RouterLink>
                </p>
            </div>
        </div>
    </div>
</template>

<style>
.bar-title {
    background-image: linear-gradient(90deg, #d946ef, #dc2626, #fb923c);
    border-radius: 2px;
}

.card-jeu {
    border: 1px solid #C2C2C2;
    box-shadow: 0px 0px 2px #C2C2C2;
    border-radius: 8px;
}

.card-jeu:hover {
    transform: scale(1.05);
    transition: 0.4s;
    box-shadow: 0px 0px 10px #C2C2C2;
}
</style>