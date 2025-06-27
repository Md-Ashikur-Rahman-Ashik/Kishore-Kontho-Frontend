import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PostList({ posts }) {
  if (!Array.isArray(posts) || posts.length === 0) {
    return (
      <div className="text-center text-muted-foreground text-sm py-10">
        No posts available.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pb-10">
      {posts.map((post) => (
        <Card key={post._id}>
          <CardHeader>
            <CardTitle className="text-base">{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {post.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}