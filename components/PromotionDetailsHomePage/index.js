import ConcernCard from "../ConcernCardHome";
import PromotionCard from "../PromotionCardHome/index";
import PropTypes from "prop-types";
import styles from "./services1.module.css";
import Slider from "react-slick";
var settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Promotions = (props) => {
  const { className = "", content } = props;
  return (
    <section className={[styles.services, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.row}>
          <div style={{ flex: "100%" }}>
            <Slider {...settings}>
              {/* <div className="row g-2 gy-4 g-md-5"> */}
              {content?.map((details) => (
                <div>
                  {/* <div className="col col-12 col-md-4"> */}
                  <PromotionCard
                    details={details}
                    placeholderImage="/placeholder-image1@2x.png"
                  />
                  {/* </div> */}
                </div>
              ))}
              {/* </div>
               */}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

Promotions.propTypes = {
  className: PropTypes.string,
};

export default Promotions;
