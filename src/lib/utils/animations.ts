// Preset animations
export type AnimateFunction = (t: number) => string;

export const fade: AnimateFunction = (t) => {
	return `opacity: ${t}`;
};

export const fromRight: AnimateFunction = (t) => {
	return `
  transform: translate(${20 * (1 - t)}%,0);
  opacity: ${t};
  `;
};

export const fromBottom: AnimateFunction = (t) => {
	return `
  transform: translate(0,${20 * (1 - t)}%);
  opacity: ${t};
  `;
};
