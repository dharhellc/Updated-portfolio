import "./About.css"
import {aboutParagraphs, aboutHighlights,} from "../../data/aboutData";

export default function about(){
    return (
        <section className="about section" id="about">
            <p className="about-eyebrow">GET TO KNOW ME</p>

            <h2 className="about-title">About <span>Me</span></h2>

            <div className="about-content">
                <div className="about-text">
                    {aboutParagraphs.map((paragraph, index) => (<p key ={index}>{paragraph}</p>))}
                </div>

            <div className="about-highlights">
            {aboutHighlights.map((item) => (
                <div className="about-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                </div>
            ))}
            </div>
            </div>
        </section>
    );
}