import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TrustedBy from "@/components/trusted-by";
import Problem from "@/components/problem";
import HowItWorks from "@/components/how-it-works";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";
import DashboardPreview from "@/components/dashboard-preview";
import AppAvailability from "@/components/app-availability";
import { Analytics } from "@vercel/analytics/next"

export default function HomePage() {
  return (
    <>
	
	<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html:JSON.stringify({

"@context":"https://schema.org",

"@type":"SoftwareApplication",

"name":"SafeSpend",

"applicationCategory":"FinanceApplication",

"operatingSystem":"iOS, Android",

"description":
"SafeSpend helps freelancers separate tax money from income and calculate safe spending amounts.",

})
}}
/>
	
      <Navbar />

      <Hero />

<DashboardPreview />

<TrustedBy />

<Problem />

<HowItWorks />

<Features />

<AppAvailability />

<Testimonials />

<Pricing />

<FAQ />

<FinalCTA />

<Footer />

    </>
  );
  
  
}