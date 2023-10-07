export default function Item({ item, onDeleteItems, onToggleItem }) {
	return (
		<li>
			<input
				type="checkbox"
				checked={item.packed}
				onChange={() => onToggleItem(item.id)}
			/>
			<span style={item.packed ? { textDecoration: "line-through" } : null}>
				{item.description} {item.quantity}
			</span>
			<button onClick={() => onDeleteItems(item.id)}>❌</button>
		</li>
	);
}
