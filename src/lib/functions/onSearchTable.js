export default (arr, searchtext) => {
	searchtext = String(searchtext).toLowerCase();
	return arr.filter((object) =>
		Object.values(object).some((objValue) => String(objValue).toLowerCase().includes(searchtext))
	);
};
