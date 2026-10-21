
import "./Skills.css";
import { skillGroups } from "../../data/skillsData";

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <p className="skills-eyebrow">WHAT I WORK WITH</p>

      <h2 className="skills-title">
        Technical <span>Skills</span>
      </h2>

      <p className="skills-description">
        Technologies and tools I use in software development,
        database management, and quality assurance.
      </p>

      <div className="skills-groups">
        {skillGroups.map((group) => (
          <div className="skills-group" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skills-list">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
