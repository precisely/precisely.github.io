import { publish } from 'gh-pages';

publish(
	'build', // folder of build output
	(err) => {
		if (err) {
			console.error(err);
		} else {
			console.log('Deploy Complete!');
		}
	} // callback function
);
