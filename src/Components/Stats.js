export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  } else {
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);
    return (
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You got everything! Ready to GO ✈️"
            : `👜You have {numItems} items on your list, and you alreay packed ${numPacked} (${percentage}%)`}
        </em>
      </footer>
    );
  }
}
