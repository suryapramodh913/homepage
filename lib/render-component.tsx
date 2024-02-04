import React from "react"
import dynamic from "next/dynamic"
const ServiceComponent = dynamic(() => import("../src/components/ServicesComponent/ServiceComponent"))
const HeroBannerComponent = dynamic(() => import("../src/components/HeroBanner/HeroBannerComponent"))
const CategoryComponent = dynamic(() => import("../src/components/Categories/CategoryComponent"))
const ThreeCardGridComponent = dynamic(() => import("../src/components/ThreeCardGrid/ThreeCardGridComponent"))
const BrandComponent = dynamic(() => import("../src/components/Brands/BrandComponent"))
const InstagramComponent = dynamic(() => import("../src/components/InstagramComponent/InstagramComponent"))

export const renderComponent = (props: any) => {
    const type = props?.type
    switch (type) {
        case "hero-banner":
            return <HeroBannerComponent {...props} />
        case "categories":
            return <CategoryComponent {...props} />
        case "3-card-grid":
            return <ThreeCardGridComponent {...props} />
        case "brands":
            return <BrandComponent {...props} />
        case "instagramWidget":
            return <InstagramComponent {...props} />
        case "storeServicesWdiget":
            return <ServiceComponent {...props} />
        default:
            return <></>
    }
}
