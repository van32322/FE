import React, { memo } from "react";
import '../../styles/Breadcrumb.scss'
import useBreadCrumbs from "use-react-router-breadcrumbs"
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumb = ({ title, category }) => {
    const routes = [
        { path: "/:category", breadcrumb: category },
        { path: "/", breadcrumb: "Home" },
        { path: "/:category/:pid/:title", breadcrumb: title }

    ]
    const breadcrumb = useBreadCrumbs(routes)
    return (
        <div className="breadcrumb_container" >
            {breadcrumb?.filter(el => !el.match.route === false).map(({ match, breadcrumb }, index, self) => (
                <Link className="breadcrumb_info" key={match.pathname} to={match.pathname}>
                    <span style={{textTransform:'capitalize'}}>{breadcrumb}</span>
                    {index !== self.length - 1 && <IoIosArrowForward />}
                </Link>
            ))}
        </div>
    )
}
export default memo (Breadcrumb);