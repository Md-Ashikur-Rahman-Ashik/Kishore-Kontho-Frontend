import Marquee from "@/components/Marquee";
import Carousel from "@/components/Carousel";
import SectionTitle from "@/components/SectionTitle";
import PostList from "@/components/PostList";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default async function HomePage() {
  const [infoRes, postRes, carouselRes] = await Promise.all([
    fetch("https://kishore-kontho.vercel.app/api/v1/info", { cache: "no-store" }),
    fetch("https://kishore-kontho.vercel.app/api/v1/post/landing", { cache: "no-store" }),
    fetch("https://kishore-kontho.vercel.app/api/v1/carousel", { cache: "no-store" })
  ]);

  const info = await infoRes.json();
  const postData = await postRes.json();
  const carousels = await carouselRes.json();

  return (
    <main className="min-h-screen">
      <Navbar />
      <Marquee text={info?.marqueeText} />
      <SectionTitle title="Highlights" />
      <Carousel items={carousels?.data} />
      <SectionTitle title="Latest Posts" />
      <PostList posts={postData?.data} />
      <Footer />
    </main>
  );
};