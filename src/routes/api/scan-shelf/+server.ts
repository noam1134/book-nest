import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const { base64 } = await request.json();
	// console.log({ base64 });

	// return json({ success: true });

	const bookArray = [
		{ bookTitle: 'The Hobbit', author: 'J.R.R. Tolkien' },
		{ bookTitle: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
		{ bookTitle: 'The Silmarillion', author: 'J.R.R. Tolkien' },
		{ bookTitle: 'The Children of Hurin', author: 'J.R.R. Tolkien' },
		{ bookTitle: 'Another book', author: 'J.R.R. Tolkien' },
		{ bookTitle: 'The History of Middle-earth', author: 'J.R.R. Tolkien' }
	];
	return json({ bookArray });
};
