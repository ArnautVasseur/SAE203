<template>
    <section class="flex items-center p-16 dark:bg-dark_gray dark:text-gray-100">
		<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
			<div class="max-w-md text-center">
				<h2 class="mb-40 font-extrabold text-9xl dark:text-gray-600">
					<span class="sr-only">Error</span>404
				</h2>
				<p class="text-2xl font-semibold md:text-3xl">Désolé, nous n'avons pas pu trouver cette page.</p>
				<p class="mt-4 mb-8 dark:text-gray-400">Mais ne vous inquiétez pas, vous pouvez trouver beaucoup d'autres choses sur notre page d'accueil.</p>
				<router-link to="/">
                    <redbuttonVue>
                        <slot class="text-xs">
                            Page d'accueil
                        </slot>
                    </redbuttonVue>
                </router-link>
			</div>
		</div>
	</section>
</template>

<script>
import redbuttonVue from '../components/redbutton.vue'

export default{
    components:{
        redbuttonVue
    },
    created() {
        document.body.style.backgroundColor = "rgb(17 24 39)";
    }
}
</script>

<style>
html{
    height: 100%;
}
</style>