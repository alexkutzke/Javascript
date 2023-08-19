const getValidNumber = (num) => {
	const parsedNumber = parseFloat(num);

	if (Number.isNaN(parsedNumber)) {
		throw new TypeError('Argument is NaN - Not a Number');
	}
	return parsedNumber;
};

const calculateAbsoluteValue = (num) => {
	return num < 0 ? -num : num;
};

const getAbsoluteValue = (num) => {
	const validNumber = getValidNumber(num);
	const absoluteValue = calculateAbsoluteValue(validNumber);
	return absoluteValue;
};

export { getAbsoluteValue };