import { draftMode } from "next/headers";
import { getAllPosts, getHeroComponent } from "@/lib/api";
import { Tractor, Trees, LineChart, Contact } from 'lucide-react';
import FeaturedProperties from "./components/fetaured-properties";
import ContactForm from "./components/contact-form";


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
    // <section className="relative w-full h-screen">

    //   <div className="flex items-center justify-between px-24 py-10">
    //     <div className="text-slate-200 font-bold text-5xl justify-self-center">
    //       YUG
    //     </div>

    //     <ul className="inset-0 w-full flex gap-4 justify-end text-slate-200">
    //       <li>
    //         About us
    //       </li>
    //       <li>
    //         Contact us
    //       </li>
    //       <li>
    //         Blog
    //       </li>
    //     </ul>
    //   </div>

    //   <Image className="absolute -z-10 inset-0 w-full h-full brightness-50 object-cover" src={coverImage.url} alt="hero cover image" width={500} height={500} />
    //   <div className=" w-full h-full flex flex-col justify-center p-24 gap-2"> 

    //     <div className="text-slate-200 font-bold mb-4 text-5xl ">
    //       Yug Estates
    //     </div>
    //         <h3 className="mb-4 text-xl font-light lg:text-2xl leading-tight text-slate-200 max-w-2xl">
    //           At Yug we provide some the best Farm lands and Plots for sale in Karnataka to diverfy your investment portfolio.
    //         </h3>

    //         <button type="button" className="text-white bg-gradient-to-tl from-green-400 to-green-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-fit">CONTACT US</button>


    //   </div>

    // </section>
    <div className="flex flex-wrap bg-white overflow-hidden justify-between">
      <div className="max-w-7xl mx-auto w-full lg:w-1/2">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28">
          <div className="pt-6 px-4 sm:px-6 lg:px-8">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Invest in Premium</span>
                  <span className="block text-green-600">Managed Farmlands</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Turn your investment into growing returns with our managed farmland properties. We handle everything from cultivation to harvest, while you watch your investment grow.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                    >
                      View Properties
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="w-0 lg:w-1/2 p-12">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full"
          src={coverImage.url}
          alt="Farmland"
        />
      </div>
    </div>
    // <section className="relative min-h-screen">
    //   {/* Background Image with Overlay */}
    //   <div className="absolute inset-0">
    //     <img 
    //       src={coverImage.url}
    //       alt="Scenic farmland" 
    //       className="w-full h-full object-cover"
    //     />
    //     <div className="absolute inset-0 bg-black/60" />
    //   </div>

    //   {/* Content Container */}
    //   <div className="relative container mx-auto px-4 h-screen flex items-center">
    //     <div className="max-w-3xl">
    //       <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
    //         Invest in Premium Farmlands with Guaranteed Returns
    //       </h1>
    //       <p className="text-lg md:text-xl text-gray-200 mb-8">
    //         Let us handle your agricultural investment while you reap the benefits. 
    //         Professional management, transparent operations, and sustainable farming practices.
    //       </p>
    //       <div className="flex flex-col sm:flex-row gap-4">
    //         <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
    //           Explore Properties
    //         </button>
    //         <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors">
    //           Book Consultation
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}


// Features Component showcasing key benefits
const Features = () => {
  const features = [
    {
      icon: <Tractor className="w-12 h-12 text-green-600" />,
      title: "Professional Management",
      description: "Our expert team handles everything from cultivation to harvest, ensuring optimal yields and maximum returns on your investment."
    },
    {
      icon: <Trees className="w-12 h-12 text-green-600" />,
      title: "Premium Locations",
      description: "Carefully selected farmlands in prime agricultural regions with fertile soil and reliable water sources."
    },
    {
      icon: <LineChart className="w-12 h-12 text-green-600" />,
      title: "Guaranteed Returns",
      description: "Stable returns through professional crop management and established market connections."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose YUG Estates
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine agricultural expertise with professional management to deliver
            hassle-free farming investments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};





export default async function Page() {
  const { isEnabled } = draftMode();
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
