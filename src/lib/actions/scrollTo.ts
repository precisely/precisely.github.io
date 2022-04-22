import { now } from 'svelte/internal';
import { cubicInOut } from 'svelte/easing';

const smoothScroll = (start: number, end: number): void => {
	const duration = 500;
	const easing = cubicInOut;
	const clock = now();

	const step = () => {
		const elapsed = now() - clock;
		const position = elapsed > duration ? end : start + (end - start) * easing(elapsed / duration);

		window.scroll(window.scrollX, position);

		if (elapsed < duration) window.requestAnimationFrame(step);
	};

	window.requestAnimationFrame(step);
};

const scrollTo = (node: HTMLElement, id: string) => {
	const handleClick = (event: MouseEvent) => {
		event.preventDefault();

		const element = document.getElementById(id);
		if (!element) return;

		smoothScroll(window.scrollY, element.offsetTop);
	};

	node.addEventListener('click', (event) => handleClick(event));

	return {
		destroy() {
			node.removeEventListener('click', (event) => handleClick(event));
		}
	};
};

export default scrollTo;
