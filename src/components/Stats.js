export default function Stats({ items }) {
	if (!items.length) {
		return (
			<p className="stats">
				<em>Start adding some items to the list</em>
			</p>
		);
	}

	const numItems = items.length;
	const packedItems = items.filter((item) => item.packed).length;
	const packedItemsPercent = Math.round((packedItems / numItems) * 100);

	return (
		<footer className="stats">
			<em>
				{packedItemsPercent !== 100 &&
					`You have ${numItems} items on your list, and you already packed:
				${packedItems} and Percentage: ${numItems !== 0 ? packedItemsPercent : 0}%`}

				{packedItemsPercent === 100 && "You got everything! You're ready to go"}
			</em>
		</footer>
	);
}
