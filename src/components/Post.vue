<template>
    <div class="Post">
		<div class="blog">
			<div class="label">
				<img :src="avatar"/>
				<p>{{ firstname }} {{ lastname }}</p>
                <p id="creatTime"> {{ creatTime }}</p>
			</div>
			<div v-if="image" class="article_image">
                <img :src="image"/>
		    </div>
			<div class="blog_title">
				<p>{{ text }}</p>
			</div>
            <div class="like_button">
                <img v-on:click="addLikes(id)" src="@/assets/Like-Button.jpg"/>
                <p>Likes: {{ like }}</p>
            </div>


		</div>
	</div>
</template>

<script>
export default {
	name: "Post",
	props: [
		"id", "avatar", "firstname", "lastname","creatTime", "text", "image","like"],
	methods: {
		addLikes(id) {
			this.$store.dispatch("method_addLikes", id);
		}
	}
};
</script>

<style>

.blog {
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100%;
    margin: 10px auto;
    justify-content: center;
    box-shadow: 0px 0px 5px rgb(116, 116, 116);
    padding-top: 5px;
    padding-bottom: 5px;
}

.blog:hover {
    box-shadow: 0px 0px 7px rgb(0, 0, 0);
}

.label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 15px;
}


.label img {
    max-width: 50px;
    height: auto;
}

#creatTime {
    font-size: 15px;
    color: rgb(116, 116, 116);
    margin-left: 40%;
}

.author {
    font-size: 15px;
    color: rgb(0, 0, 0);
    margin-left: 2%;
    font-weight: bold;
}


.blog_title {
    font-weight: bold;
    font-size: 30px;
    margin-left: 15px;
}

.article_image img{
	margin-top:10px;
	width: 100%;
	height: auto;
}

.like_button img {
    max-width: 50px;
    height: auto;
    margin-left: 15px;
}

.like_button p {
	margin-left:10px;

}
.like_button img:hover {
    box-shadow: 0px 0px 7px rgb(255, 0, 0);
}
</style>
