interface ScrollTriggerTypes {
	onEnter: () => void;
	onExit: () => void;
}

const scrollTrigger = (node: HTMLElement, options: ScrollTriggerTypes) => {
	const { onEnter, onExit } = options;

	const observer = new IntersectionObserver(
		(entries) => {
			if (entries[0].isIntersecting && entries[0].intersectionRatio === 1) {
				if (onEnter) onEnter();
			}
			if (!entries[0].isIntersecting) {
				if (onExit) onExit();
			}
		},
		{ threshold: [0, 1.0] }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};

export default scrollTrigger;
