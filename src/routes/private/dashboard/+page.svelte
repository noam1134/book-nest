<script lang="ts">
	import { BookCard } from '$components';
	import BookCategory from '$components/BookCategory.svelte';
	import StarRating from '$components/StarRating.svelte';
	import { getUserState } from '$lib/state/user-state.svelte';
	import Icon from '@iconify/svelte';
	import _ from 'lodash';

	let userContext = getUserState();
	let { userName, allBooks } = $derived(userContext);
</script>

<div class="dashboard">
	<div class="dashboard-header mb-m">
		{#if allBooks.length}
			<a href="/private/scan-shelf" class="add-book">
				<Icon icon="icons8:plus" width={'72'} height={'72'} />
				<p>Add Book</p>
			</a>
		{/if}
		<div class="headline">
			<h3 class="bold mb-xs">
				Welcome Back, {userName ? _.startCase(_.toLower(userName)) : 'User'}
			</h3>
			<p>Nothing like the joy of a new book! Have you found your next read yet?</p>
		</div>
	</div>
	{#if allBooks.length}
		{#if userContext.getHighestRatedBooks().length}
			<BookCategory
				booksToDisplay={userContext.getHighestRatedBooks()}
				categoryName={'Your most loved books'}
			/>
		{/if}
		<BookCategory
			booksToDisplay={userContext.getUnreadBooks()}
			categoryName={'Recently added unread books'}
		/>
		{#if userContext.getFavoriteGenre()}
			<BookCategory
				booksToDisplay={userContext.getBooksFromFavoriteGenre()}
				categoryName={`Highest rated books from your favorite genre: ${userContext.getFavoriteGenre()}`}
			/>
		{/if}
	{:else}
		<a href="/private/scan-shelf" class="upload-hint mt-l">
			<h3>Upload your first book!</h3>
			<div class="mt-m">
				<Icon icon="icons8:plus" width={'72'} height={'72'} />
				<p>Add Books</p>
			</div></a
		>
	{/if}
</div>

<style>
	.dashboard-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		width: 100%;
	}

	.add-book {
		display: flex;
		align-items: center;
		text-decoration: none;
	}

	.add-book p {
		margin-left: 8px;
	}

	.headline {
		text-align: right;
		max-width: 30%;
		min-width: 300px;
		margin-left: auto;
	}

	.upload-hint {
		text-decoration: none;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.upload-hint div {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
