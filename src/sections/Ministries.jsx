import { myProjects } from '../constants/index.js';

const Ministries = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Our Ministries</h3>
      <div className="ministry-container">
        {myProjects.map((ministry) => (
          <div key={ministry.title} className="ministry">
            <h4 className="ministry-title">{ministry.title}</h4>
            <p className="ministry-desc">{ministry.desc}</p>
            <p className="ministry-subdesc">{ministry.subdesc}</p>
            <a href={ministry.href} className="ministry-link">Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ministries;