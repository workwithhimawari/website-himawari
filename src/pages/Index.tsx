import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Members from "@/components/Members";
import News from "@/components/News";
import Merch from "@/components/Merch";
import Cart from "@/components/Cart";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Members />
        <News />
        <Merch />
      </main>
      <Footer />
      <Cart />
    </div>
  );
};

export default Index;
