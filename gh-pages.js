import { publish } from 'gh-pages';

publish(
	'build', // folder of build output
	{
		dotfiles: true
	},
	(err) => {
		if (err) {
			console.error(err);
		} else {
			console.log('Deploy Complete!');
		}
	} // callback function
);
