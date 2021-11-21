<template>
	<div class="header">
      <router-link to="/">Posts</router-link> |
      <router-link to="/contactus">Contact us</router-link> |
      <router-link to="/about">About</router-link>
	</div>
</template>

<script>
export default {
	name: "Header",
};
</script>

<style>
.header {
	min-width: 200px;
	display: flex;
	color: black;
	font-size: 25px;
	font-weight: 600;
	justify-content: center;
	background-color: #1d91f0;
	border-style:solid;
	border-width: 0px 0px 2px 0px;
	border-color:rgb(25, 28, 221);
	padding:10px;
	margin-bottom: 10px;


}
</style>