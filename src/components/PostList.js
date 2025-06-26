export default function PostList({ posts }) {
  if (!Array.isArray(posts)) {
    return <p className="text-center text-red-500">No posts available.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pb-10">
      {posts.map((post) => (
        <div key={post._id} className="border rounded p-4 shadow bg-white">
          <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
          <p className="text-sm">{post.description}</p>
        </div>
      ))}
    </div>
  );
}