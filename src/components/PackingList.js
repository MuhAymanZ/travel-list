import Item from "./Item";
import { useState } from "react";

export default function PackingList({
	items,
	onDeleteItems,
	onToggleItem,
	onDeleteAllItems,
}) {
	const [sortBy, setSortBy] = useState("input");
	let sortedItems;
	if (sortBy === "input") sortedItems = items;
	if (sortBy === "desc")
		sortedItems = items
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));
	if (sortBy === "packed")
		sortedItems = items
			.slice()
			.sort((a, b) => Number(a.packed) - Number(b.packed));

	return (
		<div className="list">
			<ul>
				{sortedItems.map((item) => (
					<Item
						item={item}
						key={item.id}
						onDeleteItems={onDeleteItems}
						onToggleItem={onToggleItem}
					/>
				))}
			</ul>
			<div className="actions">
				<select
					value={sortBy}
					onChange={(e) => setSortBy((sort) => (sort = e.target.value))}
				>
					<option value="input">Sort By Input Order</option>
					<option value="desc">Sort By Descritption</option>
					<option value="packed">Sort By Packed Stats</option>
				</select>
				<button onClick={() => onDeleteAllItems()}>Clear List</button>
			</div>
		</div>
	);
}
