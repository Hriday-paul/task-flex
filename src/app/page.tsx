import Footer from "@/components/Shared/Footer/Footer";
import HomeBanner from "@/components/Shared/HomeBanner/HomeBanner";
import HomeFeature2 from "@/components/Shared/HomeFeature2/HomeFeature2";
import HomeFeature3 from "@/components/Shared/HomeFeature3/HomeFeature3";
import HomeFeature4 from "@/components/Shared/HomeFeature4/HomeFeature4";

export default function Home() {
  return (
    <div>
      <main className="">
        <HomeBanner />
        <HomeFeature2 />
        <HomeFeature3 />
        <HomeFeature4 />
      </main>
      <Footer />
    </div>
  );
}
