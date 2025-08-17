import { draftMode } from "next/headers";
import { getAllPosts, getHeroComponent } from "@/lib/api";
import { Tractor, Trees, LineChart, Contact, ArrowRight, Building2, Timer } from 'lucide-react';
import FeaturedProperties from "./components/fetaured-properties";
import ContactForm from "./components/contact-form";
import { Button } from '@/components/ui/button';
import Image from 'next/image';


function HeroPost({
  title,
  subTitle,
  coverImage

}: {
  title: string;
  coverImage: any;
  subTitle: string;
}) {

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] -z-1" />

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-gray-900/[0.08] to-gray-900/[0.03] rounded-full text-sm">
                <span className="flex h-2 w-2 rounded-full bg-gray-900"></span>
                <span className="font-medium text-gray-600">Premium Investment Opportunities</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                Invest in Premium{' '}
              </span>
              <span className="relative block mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
                  Managed Farmlands
                </span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-gray-900/[0.08] to-gray-900/[0.02]"></span>
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              Turn your investment into growing returns with our managed farmland properties. We handle everything from cultivation to harvest, while you watch your investment grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white px-8 transition-all duration-300"
              >
                View Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-200 hover:bg-gray-50"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700">12+</div>
                <div className="text-sm text-gray-600 mt-1">Premium Properties</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700">95%</div>
                <div className="text-sm text-gray-600 mt-1">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700">15yr</div>
                <div className="text-sm text-gray-600 mt-1">Market Experience</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              {coverImage?.url ? (
                <Image
                  src={coverImage.url}
                  alt="Premium Farmland"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <Building2 className="w-12 h-12 text-gray-400" />
                </div>
              )}
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gray-900/5 rounded-2xl -z-1"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gray-900/5 rounded-2xl -z-1"></div>
          </div>
        </div>
      </div>
    </div>

  );
}


// Features Component showcasing key benefits
const Features = () => {
  const features = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Professional Management",
      description: "Our expert team handles everything from cultivation to harvest, ensuring optimal yields and maximum returns on your investment."
    },
    {
      icon: <Timer className="w-8 h-8" />,
      title: "Premium Locations",
      description: "Carefully selected farmlands in prime agricultural regions with fertile soil and reliable water sources."
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Guaranteed Returns",
      description: "Stable returns through professional crop management and established market connections."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose YUG Estates
          </h2>
          <p className="text-xl text-gray-600">
            We combine agricultural expertise with professional management to deliver
            hassle-free farming investments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 p-8 rounded-2xl transition-all hover:shadow-lg"
            >
              <div className="mb-6 inline-block p-4 bg-gray-900 rounded-xl text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              {/* Decorative line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};





export default async function Page() {
  const { isEnabled } = await draftMode();
  const heroComponent = await getHeroComponent(isEnabled);

  return (
    <div className="">
      {/* <Intro /> */}
      {heroComponent && (
        <HeroPost
          title={heroComponent.title}
          coverImage={heroComponent.coverImage}
          subTitle={heroComponent.subTitle}
        />
      )}
      {/* <OurOfferings /> */}
      <Features />
      <FeaturedProperties />
      <ContactForm />
    </div>
  );
}
