<template>
	<div class="Posts">
		<button v-on:click="resetLikes()">Reset posts' likes !</button>
		<Post
			v-for="post in posts"
      		:key="post.id"
			:id="post.id"
			:avatar="post.author.avatar"
			:firstname="post.author.firstname"
			:lastname="post.author.lastname"
			:creatTime="post.creatTime"
			:text="post.article.text"
			:image="post.article.image"
			:like="post.like_button.like"
      		:icon="post.like_button.icon"
		/>
	</div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
	name: "Posts",
	components: {
		Post,
	},
	computed: {
		posts() {
			return this.$store.state.posts;
		},
	},
	methods: {
		resetLikes() {
			this.$store.dispatch("method_resetLikes");
		}
	}
};
</script>

<style>

</style>