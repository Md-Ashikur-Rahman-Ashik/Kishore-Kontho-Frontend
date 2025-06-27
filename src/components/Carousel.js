export default function Carousel({ items }) {
  const isValidItems = Array.isArray(items) && items.length > 0;

  const demoItems = [
    {
      _id: "demo1",
      image: "https://picsum.photos/seed/demo1/600/400",
      title: "Demo Title One",
      description: "This is a short description for demo item one.",
    },
    {
      _id: "demo2",
      image: "https://picsum.photos/seed/demo2/600/400",
      title: "Demo Title Two",
      description: "Here is a description for the second demo item.",
    },
    {
      _id: "demo3",
      image: "https://picsum.photos/seed/demo3/600/400",
      title: "Demo Title Three",
      description: "Another brief description for the third demo item.",
    },
  ];

  const dataToShow = isValidItems ? items : demoItems;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6">
      {dataToShow.map((item) => (
        <div
          key={item._id}
          className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}