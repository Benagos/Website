// import FloatingNavbar from "@/components/FloatingNavbar";
import Navbar from "@/components/Navbar";
import EatFresh from "@/components/sections/EatFresh";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import LilyPad from "@/components/sections/LilyPad";
import Vision from "@/components/sections/Vision";

export default function Home() {
	return (
		<>
			{/* <FloatingNavbar /> */}
			<Navbar />
			<div className="pt-[72px]">
				<Hero />
				<LilyPad />
				<EatFresh />
				<Vision />
				<Footer />
			</div>
		</>
	);
}
