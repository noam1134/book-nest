import { PUBLIC_SUPABASE_URL } from '$env/static/public';
import { SUPABASE_SERVICE_ROLE_KEY } from '$env/static/private';
import { createClient } from '@supabase/supabase-js';
import { json, type RequestHandler } from '@sveltejs/kit';
import type { Database } from '$lib/types/database.types';

export const PATCH: RequestHandler = async ({ request }) => {
	const supabaseAdmin = createClient<Database>(PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

	const authHeader = request.headers.get('Authorization');
	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		return json({ error: 'Unauthorized' }, { status: 401 });
	}
	const token = authHeader.split(' ')[1];
	try {
		const { data: userData, error: verificationError } = await supabaseAdmin.auth.getUser(token);
		if (verificationError || !userData.user) {
			return json({ error: 'Unauthorized' }, { status: 401 });
		}
		const userId = userData.user.id;
		const { userName, email } = await request.json();
		const { error: updateAuthError } = await supabaseAdmin.auth.admin.updateUserById(userId, {
			email
		});
		if (updateAuthError) {
			return json({ error: 'Error updating email' }, { status: 500 });
		}

		const { error: updateUserProfileError } = await supabaseAdmin
			.from('user_names')
			.update({ name: userName })
			.eq('user_id', userId);

		if (updateUserProfileError) {
			return json({ error: 'Error updating username' }, { status: 500 });
		}

		return json({ message: 'Account updated' });
	} catch (error) {
		return json({ error: 'Unexpected error' }, { status: 500 });
	}
};
