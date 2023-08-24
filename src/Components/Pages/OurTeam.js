import { useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";




const TeamApi = [
  {
    id: 1,
    img: "/img/team/meharsir.webp",
    name: "Mehar Singh",
    prof: "Founder & CEO",
    twitter: "https://twitter.com/mehars_jalin",
    linkedin: "https://www.linkedin.com/in/mehar-singh-7b96b4130/",
  },
  {
    id: 2,
    img: "/img/team/hemantsir.webp",
    name: "Hemant Kaushik",
    prof: "Co-Founder & CTO",
    twitter: "https://twitter.com/TheHemantKaush",
    linkedin: "https://www.linkedin.com/in/hemant-kaushik-508560160/",
  },
  {
    id: 3,
    img: "/img/team/sunitsir.webp",
    name: "Sunit Panwar",
    prof: "Spl. Advisor",
    twitter: "https://twitter.com/sunit_panwar/",
    linkedin: "https://www.linkedin.com/in/sunitpanwar/",
  },
  // {
  //   id: 4,
  //   img: "/img/team/surinder-kumar.jpeg",
  //   name: "Surinder Kumar",
  //   prof: "Office Admin",
  // },
  {
    id: 5,
    img: "/img/team/amanveer_kaur_hrm.jpeg",
    name: "Amanveer Kaur",
    prof: "Human Resource Manager",
  },
  {
    id: 6,
    img: "/img/team/rajatsir.webp",
    name: "Rajat Jain",
    prof: "Web Developer",
    linkedin: "https://www.linkedin.com/in/rajat-jain-7b672565/",
  },
  // {
  //   id: 7,
  //   img: "/img/team/princesir.webp",
  //   name: "Prince Dhiman",
  //   prof: "Digital Marketing Analyst",
  //   twitter: "https://twitter.com/Prince92427465?s=20&t=o6ykoqGE7ymdHWdmZsPifQ",
  //   linkedin: "https://www.linkedin.com/in/prince-dhiman-7341a2199",
  // },
  {
    id: 8,
    img: "/img/team/nidhi.jpeg",
    name: "Nidhi Bindal",
    prof: "Business Analyst",
  },
  // {
  //   id: 9,
  //   img: "/img/team/akshit.jpeg",
  //   name: "Akshit Soni",
  //   prof: "Business Analyst",
  // },
  {
    id: 10,
    img: "/img/team/akshay.jpeg",
    name: "Akshay Sharma",
    prof: "Web Designer",
  },
  {
    id: 11,
    img: "/img/team/kanchann.jpeg",
    name: "Kanchan Chandel",
    prof: "Graphic Designer",
  },
  {
    id: 12,
    img: "/img/team/gurvinder-singh.jpg",
    name: "Gurvinder Singh",
    prof: "Mobile Developer",
  },
  // {
  //   id: 13,
  //   img: "/img/team/arjun.jpeg",
  //   name: "Arjun",
  //   prof: "Full Stack Developer",
  // },
  // {
  //   id: 14,
  //   img: "/img/team/lalit.jpeg",
  //   name: "Lalit Kumar",
  //   prof: "Web Developer",
  // },
  {
    id: 15,
    img: "/img/team/anchal.jpeg",
    name: "Anchal",
    prof: "Frontend Developer",
  },

  {
    id: 16,
    img: "/img/team/abhishekk.jpeg",
    name: "Abhishek Katwal",
    prof: "Frontend Developer",
  },
  // {
  //   id: 17,
  //   img: "/img/team/indu.jpeg",
  //   name: "Indu",
  //   prof: "Frontend Developer",
  // },
  // {
  //   id: 18,
  //   img: "/img/team/yogesh.jpeg",
  //   name: "Yogesh",
  //   prof: "Frontend Developer",
  // },
];

export const OurTeam = () => {
  const [teamBox, setTeamBox] = useState(TeamApi);
  return (
    <>
      <section className="team-page services-details" style={{marginBottom: "40px"}}>
        <div className="container">
          <div className="service-detail-hd">
            <h1>Our Team</h1>
            <p>Home-Company</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4 className="hd">We help your every business need</h4>
              <p className="sec-para" style={{ fontSize: "20px" }}>
                In order to present their staff to site users and promote their
                accomplishments, businesses can do so on a page called "meet the
                team." <br /> <br /> They are your point of contact with your
                market, your target audience, and the customers that drive your
                business. This page, which may be a subpage of the "About Us"
                page, demonstrates to visitors how your team collaborates.{" "}
              </p>
            </div>

            <div className="col-md-6">
              <img class="d-flex ml-auto" src="img/team/team-page-rt.png" style={{width: "70%"}} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="heading overlay-hd">
            <h2>MEET OUR TEAM</h2>
            <h4 className="hd">MEET OUR TEAM</h4>
          </div>

          <div className="row">
            {teamBox.map((curElem) => {
              const { id, img, name, prof } = curElem;
              return (
                <div className="col-lg-4 col-md-6" key={id}>
                  <div className="single-team-box">
                    <div className="image">
                      <img
                        src={img}
                        className="rounded-circle"
                        alt="image"
                        loading="lazy"
                      />
                    </div>

                    <div className="content">
                      <h3>{name}</h3>
                      <span>{prof}</span>
                      <ul class="social">
                        <li>
                          <a
                            href="https://twitter.com/mehars_jalin"
                            target="_blank"
                          >
                            <AiOutlineTwitter style={{color: "#075471"}} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/mehar-singh-7b96b4130/"
                            target="_blank"
                          >
                            <BiLogoLinkedin style={{color: "#075471"}} />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
