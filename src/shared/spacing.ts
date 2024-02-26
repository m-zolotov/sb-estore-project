export const unit = 8;

const spacing = (...args: number[]) =>
	args
		.map((multiplier = 0) => multiplier && `${unit * multiplier}px`)
		.join(' ');

export default spacing;
