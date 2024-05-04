import React, { useRef } from "react";
import "./Testimonial.css";
import left_arrow from "./../../img/back-icon.png";
import right_arrow from "./../../img/next-icon.png";
// import user_1 from "../../assets/user-1.png";
// import user_2 from "../../assets/user-2.png";
// import user_3 from "../../assets/user-3.png";
// import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <img
        src={left_arrow}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <img
        src={right_arrow}
        alt=""
        className="next-btn"
        onClick={slideForward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712966400&semt=sph" alt="" />
                <div>
                  <h3>Name 1</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium, voluptatum? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Facere, soluta.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src="https://t3.ftcdn.net/jpg/01/42/01/84/360_F_142018449_yR0avsaJqbIx8NA47sINMoaxdtn1sPzh.jpg" alt="" />
                <div>
                  <h3>Name 2</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium, voluptatum? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Facere, soluta.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src="https://media.istockphoto.com/id/661799106/photo/portrait-of-a-young-french-man.jpg?s=612x612&w=0&k=20&c=M-8ccbYQZCvQWmKLLyDF5mYjF3KaBTQwX6HDdzvw_pk=" alt="" />
                <div>
                  <h3>Name 3</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium, voluptatum? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Facere, soluta.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src="https://media.istockphoto.com/id/1496615445/photo/portrait-of-beautiful-happy-woman-smiling-during-sunset-outdoor.webp?b=1&s=170667a&w=0&k=20&c=uAq6GDZ_2q_3DkHuUXwwNkqZhScjnsmcPJhQyeck4Iw=" alt="" />
                <div>
                  <h3>Name 4</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium, voluptatum? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Facere, soluta.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
