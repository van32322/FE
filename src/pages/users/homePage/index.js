import Carousel from "react-multi-carousel";
import { memo } from "react";
import 'react-multi-carousel/lib/styles.css'
import bannerImg from "../../../assets/users/images/hero/banner.png";
import "./style.scss";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ProductCard from "components/ProductCard";

const HomePage = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    const slideItems = [
        {
            bgImg: bannerImg,
            name: "cam tuoi",
        },
        {
            bgImg: bannerImg,
            name: "cam tuoi",
        },
        {
            bgImg: bannerImg,
            name: "cam tuoi",
        },
        {
            bgImg: bannerImg,
            name: "cam tuoi",
        },
        {
            bgImg: bannerImg,
            name: "cam tuoi",
        },
    ]
    const featProducts = {
        all: {
            title: "Toan bo",
            products: [
                {
                    img: bannerImg,
                    name: "chuoi",
                    price: 200,
                },
                {
                    img: bannerImg,
                    name: "chuoicc",
                    price: 2002,
                },
            ]
        },
        fresh: {
            title: "fresh",
            products: [
                {
                    img: bannerImg,
                    name: "chuoi213",
                    price: 200,
                }
            ]
        }
    }
    const renderFeaturedProduct = (data) => {
        const tabList = [];
        const tabPanels = [];

        Object.keys(data).forEach((key, index) => {
            tabList.push(<Tab key={index}>{data[key].title}</Tab>);
            const tabPanel = [];
            data[key].products.forEach((item, j) => {
                tabPanel.push(
                    <div className="col-lg-3" key={j}>
                        <ProductCard name={item.name} img={item.img} price={item.price} />
                    </div>
                )
            });
            tabPanels.push(tabPanel);
        });
        return <Tabs>
            <TabList>
                {tabList}
            </TabList>
            {tabPanels.map((item, key) => (
                <TabPanel key={key}>
                    <div className="row">
                        {item}
                    </div>
                </TabPanel>
            ))}

        </Tabs>
    }
    return (
        <>
            <div className="container container_categories_slider ">
                <Carousel responsive={responsive} className="categories_slider">
                    {
                        slideItems.map((item, key) => (
                            <div className="categories_slider_item"
                                style={{ backgroundImage: `url(${item.bgImg})` }}
                                key={key}
                            >
                                <p>{item.name}</p>
                            </div>
                        ))
                    }

                </Carousel>
            </div>
            <div className="container">
                <div className="featured">
                    <div className="section_title">
                        <h2>San pham noi bat</h2>

                    </div>
                    {renderFeaturedProduct(featProducts)}
                </div>
            </div>
        </>
    );
};
export default memo(HomePage);