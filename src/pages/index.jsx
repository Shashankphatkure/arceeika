import { useState, useEffect } from "react";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/headers/header";
import ElectronicCategory from "@/components/categories/electronic-category";
import HomeHeroSlider from "@/components/hero-banner/home-hero-slider";
import FeatureArea from "@/components/features/feature-area";
import ProductArea from "@/components/products/electronics/product-area";
import BannerArea from "@/components/banner/banner-area";
import OfferProducts from "@/components/products/electronics/offer-products";
import ProductGadgetArea from "@/components/products/electronics/product-gadget-area";
import ProductBanner from "@/components/products/electronics/product-banner";
import ProductSmArea from "@/components/products/electronics/product-sm-area";
import NewArrivals from "@/components/products/electronics/new-arrivals";
import BlogArea from "@/components/blog/electronic/blog-area";
import InstagramArea from "@/components/instagram/instagram-area";
import CtaArea from "@/components/cta/cta-area";
import Footer from "@/layout/footers/footer";
import Image from "next/image";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Assuming 768px as the breakpoint for mobile
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function initially to set the state based on the initial screen size

    return () => window.removeEventListener("resize", handleResize); // Cleanup on component unmount
  }, []);

  return (
    <Wrapper>
      {/* <SEO pageTitle="Home" />
      <Header />
      <HomeHeroSlider />
      <ElectronicCategory />
      <FeatureArea />
      <ProductArea />
      <BannerArea />
      <OfferProducts />
      <ProductGadgetArea />
      <ProductBanner />
      <NewArrivals />
      <ProductSmArea />
      <BlogArea />
      <InstagramArea />
      <CtaArea />
      <Footer /> */}

      {isMobile ? (
        <video
          src="/arceeika.mp4"
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        />
      ) : (
        <div style={{ height: "100vh", position: "relative" }}>
          <Image
            src="/banner.png" // Path to the image file
            alt="Banner Image" // Alt text for the image
            layout="responsive" // Make the image scale to fit its container
            objectFit="cover" // Control how the image should be resized
            width={1920}
            height={1080}
          />
          <Image
            src="/acbanner.jpg" // Path to the image file
            alt="AC Banner Image" // Alt text for the image
            layout="responsive" // Make the image scale to fit its container
            objectFit="cover" // Control how the image should be resized
            width={1920}
            height={1080}
          />
        </div>
      )}
    </Wrapper>
  );
}
