import { IoPeopleOutline } from "react-icons/io5";

function AboutCard({title}) {
    return (
        <div className="about-card w-100">
            <div className="d-flex justify-content-between align-items-center top-box">
                <div className="d-flex rounded-pill align-items-center justify-content-center about-icon  ">
                    <IoPeopleOutline />
                </div>
                <p className="mb-0">{title}</p>
            </div>
            <div className="under-box rounded">
                <p>-  The best products start 
                with Figma</p>
                <p>- Design with real data</p>
                <p>- Lightning fast prototyping</p>
                <p>- Fastest way to organize</p>
                <p>- Work at the speed of thought.</p>
                <a href="#">Learn More</a>
            </div>
        </div>
    )
}

export default AboutCard
