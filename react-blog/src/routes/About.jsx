import { useEffect } from "react";
import image from "../assets/images/altImage.png"
import Footer from "../components/Footer";
import Header from "../components/Header"

const images = [image, image, image, image]

const socialLinks = ["Email", "Linkedin", "Twitter/X", "GitHub"]

const resume = [
  {
    image,
    position: "position",
    company: "company",
    date: "2021 - Now",
    description: "description",
  },
  {
    image,
    position: "position",
    description: "description",
    company: "company",
    date: "2016 - 2021"
  },
  {
    image,
    position: "position",
    description: "description",
    company: "company",
    date: "2013 - 2016"
  },
]

const About = () => {
  useEffect(() => {
    document.body.classList.add("about-page")
    document.title = "My Blog - About"
  }, []);

  return (
    <>
      <Header />

      <main className="container resume">
        <section className="resume--gallery">
          {images.map((image, index) => (
            <span key={image}>
              <img src={image} alt={`image ${index + 1}`} />
            </span>
          ))}
        </section>

        <section className="resume--about">
          <h4>About Me</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            cupiditate harum sapiente quasi necessitatibus inventore aspernatur
            veritatis tempora voluptas eaque velit fugiat sint, dolor ullam autem
            magnam tempore. Ipsam nostrum quaerat rerum pariatur similique
            distinctio voluptatum optio alias, praesentium deserunt perspiciatis,
            provident possimus excepturi odit nesciunt magnam repellat et officia!
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            tenetur nobis veniam, aliquam ab vero exercitationem! Ad quia
            veritatis ipsum quo. Veniam, illo perferendis repudiandae doloremque
            consequuntur quae, laboriosam harum placeat ullam voluptas numquam
            asperiores.
          </p>
        </section>

        <section className="resume--connect">
          <h4>Connect</h4>
          <ul>
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link}>{link}</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="resume--work">
          <h4>Work</h4>
          <ul className="resume--work__list">
            {resume.map((resume, index) => (
              <li className="resume--work__project" key={index}>
                <span className="project_image">
                  <img src={resume.image} alt="" />
                </span>
                <div className="project_info">
                  <p className="project__position">{resume.position}</p>
                  <p className="project__company">{resume.company}</p>
                </div>
                <span className="project__date">{resume.date}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="resume--side resume--work">
          <h4>Side Projects</h4>
          <ul className="resume--work__list">
            {resume.map((resume, index) => (
              <li className="resume--work__project" key={index}>
                <span className="project_image">
                  <img src={resume.image} alt="" />
                </span>
                <div className="project_info">
                  <p className="project__position">title</p>
                  <p className="project__company">{resume.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;