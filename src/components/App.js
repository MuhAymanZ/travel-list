import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useLocalStorageState } from "./useLocalStorageState";

function App() {
	const [items, setItems] = useLocalStorageState([], "listed");

	function handleAddItems(item) {
		setItems((items) => (items = [...items, item]));
		console.log(items);
	}

	function handleDeleteItems(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}

	function handleToggleItem(id) {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}
	function handleDeleteAllItems() {
		const confirmed = window.confirm(
			"Are you sure you want to delete all items?"
		);
		confirmed && setItems([]);
	}

	return (
		<div className="app">
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList
				items={items}
				onDeleteItems={handleDeleteItems}
				onToggleItem={handleToggleItem}
				onDeleteAllItems={handleDeleteAllItems}
			/>
			<Stats items={items} />
		</div>
	);
}
export default App;
