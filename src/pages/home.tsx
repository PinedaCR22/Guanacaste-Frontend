import GalleryPreview from "../sections/galeria/GalleryPreview"
import CategoriesSection from "../sections/home/categories"
import ConoceMasSobreGuanacaste from "../sections/home/conocemassobreguanacaste"
import EstoEsGuanacaste from "../sections/home/estoesguanacaste"
import FeaturedSection from "../sections/home/featured"
import HeroSection from "../sections/home/hero"
import SponsorsSection from "../sections/home/sponsors"

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <FeaturedSection />
      <ConoceMasSobreGuanacaste />
      <EstoEsGuanacaste />
      <GalleryPreview />
      <SponsorsSection />
    </div>
  )
}

export default Homepage
