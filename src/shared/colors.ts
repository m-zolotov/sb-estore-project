const getRGBA = (rgb: string, a: string | number) => `rgba(${rgb}, ${a})`;

export const colors = {
	primary: {
		white: getRGBA('255, 255, 255', 1), // #FFFFFF
		black: getRGBA('0, 0, 0', 1), // #000000
		main: getRGBA('255, 228, 77', 1), // #FFE44D
		darker: getRGBA('255, 170, 13', 1), // #FFAA0D
		lighter: getRGBA('255, 245, 192', 1), // #FFF5C0
	},
	custom: {
		red: getRGBA('244, 67, 54', 1), // #F44336
		blue: getRGBA('3, 169, 244', 1), // #03A9F4
		green: getRGBA('1, 165, 78', 1), // #01A54E
	},
	text: {
		main: getRGBA('26, 26, 26', 1), // #1A1A1A
		secondary: getRGBA('123, 142, 152', 1), // #7B8E98
		outline: getRGBA('207, 216, 220', 1), // #CFD8DC
		form: getRGBA('236, 239, 241', 1), // # ECEFF1
	},
};

export const bg = {
	main: '#FFE44D',
	success: '#0DC268',
	error: '#ED0A34',
	notify: '#FF9E00',
	white: '#FFFFFF',
	fountainBlue: '#4db6ac',
};

export default colors;
