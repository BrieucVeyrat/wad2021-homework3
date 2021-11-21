<template>
	<div id="app">
		<Header />
		<div>
			<div class="page_background">
				<router-view />
			</div>
		</div>
    <Footer />

	</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
	name: "App",
	components: {
		Header,
    Footer,
	},
};
</script>


<style>
html {
	height: 100%;
	width: 100%;
}

body {
	height: 100%;
	background-color:#1778BD;
	margin: 0;
}

#app {
	height: 100%;
	display: flex;
	flex-flow: column nowrap;

}


.page_background {
    background-color:white;
    width: 50%;
    margin: 0 auto;
    padding: 60px;
}
</style>
