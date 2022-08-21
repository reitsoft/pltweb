export default (_array, _property) => {
	const distinct = _array.reduce((arr1, arr2) => {
		if (!arr1.includes(arr2[_property])) {
			arr1.push(arr2[_property]);
		}
		return arr1;
	}, []);

	let arr = distinct.map((item, id) => ({
		id: id + 1,
		text: item
	})).sort((a, b) => (a.text > b.text) ? 1 : -1);

	return [{ id: "0", text: 'Alle' }, ...arr];
};
