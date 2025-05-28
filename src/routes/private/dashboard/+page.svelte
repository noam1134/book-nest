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

<StarRating value={4} isReadOnly={false} />

<div class="dashboard">
	<div class="dashboard-header mb-m">
		<a href="/private/scan-shelf" class="add-book">
			<Icon icon="icons8:plus" width={'72'} height={'72'} />
			<p>Add Book</p>
		</a>
		<div class="headline">
			<h3 class="bold mb-xs">
				Welcome Back, {userName ? _.startCase(_.toLower(userName)) : 'User'}
			</h3>
			<p>Nothing like the joy of a new book! Have you found your next read yet?</p>
		</div>
	</div>
	<!-- {#each allBooks as book}
		<BookCard {book}></BookCard>
	{/each} -->
	<BookCategory
		booksToDisplay={userContext.getHighestRatedBooks()}
		categoryName={'Your most loved books'}
	/>
	<!--Book Categories-->
	<BookCategory
		booksToDisplay={userContext.getUnreadBooks()}
		categoryName={'Recently added unread books'}
	/>
	<BookCategory
		booksToDisplay={userContext.getBooksFromFavoriteGenre()}
		categoryName={`Highest rated books from your favorite genre: ${userContext.getFavoriteGenre()}`}
	/>
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
