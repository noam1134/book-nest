export async function convertFileToBase64(file: File) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onloadend = () => {
			const base64String = reader.result?.toString().split(',')[1];
			if (base64String) {
				resolve(base64String);
			} else {
				reject('Failed to convert file to base64');
			}
		};

        reader.onerror = () => {
			reject('Failed to convert file to base64');
		};

		reader.readAsDataURL(file);
	});
}
