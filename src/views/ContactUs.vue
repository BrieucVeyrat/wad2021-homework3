<template>
	<div class="ContactUs">
		<div>
			<h1>Contact us</h1>
            <ul>
                <li>
                    <h2>Brieuc Veyrat</h2>
                    <p>Mail Adress : brieucad@ut.ee</p>
                    <p>Phone Number : +33 6 51 85 85 80</p> 
                </li>
                <li>
                    <h2>Théo Muller</h2>
                    <p>Mail Adress : theoleon@ut.ee</p>
                    <p>Phone Number : +33 6 16 61 23 85</p> 
                </li>
            </ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "ContactUs",
};
</script>

<style>

h1{
    display: flex;
    justify-content: center;
    text-decoration: underline;
}

ul {
	list-style: none;
	display: flex;
	justify-content: space-around;
}

</style>

