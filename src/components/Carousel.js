export default function Carousel({ items }) {
  if (!Array.isArray(items)) {
    return <p className="text-center text-red-500">No carousel items available.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
      {items.map((item) => (
        <div key={item._id} className="rounded overflow-hidden shadow bg-white">
          <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
