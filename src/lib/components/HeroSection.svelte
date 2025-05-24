<script lang="ts">
	import heroImage from '$assets/hero.png';
	import Button from './Button.svelte';
</script>

<section class="default-margin hero">
	<div class="hero-text">
		<h1>Book Nest</h1>
		<h3>Your Personal Book Library!</h3>
		<h4 class="mt-l">
			Create your very own book library and never lose track of your books again.
		</h4>
		<h4 class="mb-s">
			Our app offers a user-friendly interface to manage your books, add reviews, and keep track of
			your reading progress.
		</h4>
		<Button href="/register">Sign Up</Button>
	</div>
	<img src={heroImage} class="hero-image" alt="" />
</section>

<style>
	.hero {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 100px;
		margin-bottom: 80px;
	}

	.hero-image {
		width: 40%;
	}

	.hero-text {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 55%;
		padding-right: 50px;
	}
</style>
