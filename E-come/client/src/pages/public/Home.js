import React from "react";
import { Banner, Sidebar, BestSellers, DealDaily, FeatureProduct, CustomSlider } from "../../components";
import "../../styles/Home.scss"
import { useSelector } from "react-redux";
import icons from "../../utils/icons";
const { IoIosArrowForward } = icons
const Home = () => {

    const { newProducts } = useSelector((state) => state.products);
    const { categories } = useSelector((state) => state.app);
    const { isLoggedIn,current } = useSelector((state) => state.user);

    return (
        <>
            <div className="home_container">
                <div className="home_container_sidebar">
                    <Sidebar />
                    {/* <DealDaily /> */}
                </div>
                <div className="home_container_banner">
                    <Banner />
                    <BestSellers />
                </div>
            </div>
            <div className="home_container_featureProduct">
                <FeatureProduct />
            </div>
            <div className="home_container_newArrival">
                <h3 className="home_container_newArrival_title">New Arrivals</h3>
                <div className="home_container_newArrival_slider">
                    <CustomSlider products={newProducts} />
                </div>
            </div>
            <div className="home_container_newArrival">
                <h3 className="home_container_newArrival_title">Hot Collection</h3>
                <div className="home_container_hotCollection">
                    {categories?.filter(el => el.brand.length > 0)?.map(el => (
                        <div key={el.id} className="home_container_hotCollection_items">
                            <div className="home_container_hotCollection_item">
                                <img src={el?.image} alt="" className="home_container_hotCollection_image"></img>
                                <div style={{ flex: 1, color: 'gray' }}>
                                    <h4 className="home_container_hotCollection_item_title">{el.title}</h4>
                                    <ul className="home_container_hotCollection_list">
                                        {el?.brand?.map(item => (
                                            <span key={item} className="home_container_hotCollection_list_item">
                                                <IoIosArrowForward size={14} />
                                                <li >{item}</li>
                                            </span>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div  className="home_container_newArrival">
                <h3 className="home_container_newArrival_title">BLOG POSTS </h3>

            </div>
            
        </>
    )
}
export default Home;