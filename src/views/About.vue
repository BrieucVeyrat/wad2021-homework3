<template>
	<div class="About">
		<div>
			<h1>Team</h1>
            <ul>
                <li>
                    <h2>Brieuc Veyrat</h2>
                    <p>Man - 20 years old</p>
                    <p>Exchange student from France</p>
                    <p>Studying engineering at ECAM Lyon</p>
                </li>
                <li>
                    <h2>Théo Muller</h2>
                    <p>Man - 21 years old</p>
                    <p>Exchange student from France</p>
                    <p>Studying engineering at ECAM Lyon</p>

                </li>
            </ul>
		</div>
	</div>
</template>

<script>
  export default {
	  name: "About",
};
</script>

<style>

h1{
    display: flex;
    justify-content: center;
}

ul {
	list-style: none;
	display: flex;
	justify-content: space-around;
}

</style>
