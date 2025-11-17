import WhyJoinCards from "../components/ui/WhyJoinCards";
import Header from "../components/ui/Header";
import JoinSection from "../components/ui/joinsection";
import Footer from "../components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <WhyJoinCards />
      <JoinSection />
      <main className="flex items-center justify-center"></main>
      <Footer />
    </div>
  );
}
