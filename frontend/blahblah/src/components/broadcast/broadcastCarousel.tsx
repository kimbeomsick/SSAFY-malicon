// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/effect-cards";
import "swiper/css/effect-cards";
import { EffectCards, Navigation, Pagination } from "swiper";
import { Grid } from "@mui/material";
import BroadcastCarouselItem from "./broadcastCarouselItem";
// Import Swiper styles
import CarouselComp from "../common/CarouselComp";

const BroadcastCarousel: React.FC<{ sessions: any[] }> = (props) => {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid item>
        <div
          style={{
            // height: "100",
            // maxHeight: "40vw",
            // minHeight: 0,
            // minWidth: 0,
            maxWidth: "60vw",
            width: "100%",
            // overflow: "hidden",
          }}
        >
          {/* 캐러셀 안 나올 때 아래 h1 태그를 추가해볼 것 */}
          {/* <h1 style={{ color: "white" }}>Hi</h1> */}
          <Swiper
            modules={[EffectCards, Navigation, Pagination]}
            navigation
            effect={"cards"}
            spaceBetween={30}
            pagination={{ clickable: true }}
            loop={true}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="mySwiper"
          >
            {props.sessions.length !== 0 ? (
              props.sessions.map((session) => (
                <SwiperSlide key={session.sessionId}>
                  <CarouselComp nth={3} title={session.title} caption={true}>
                    <img
                      src={session.thumbnail}
                      alt={session.title}
                      // style={{ width: "90%" }}
                    />
                  </CarouselComp>
                </SwiperSlide>
              ))
            ) : (
              <div>실시간 방송이 없습니다.</div>
            )}
          </Swiper>
        </div>
      </Grid>
    </Grid>
  );
};

export default BroadcastCarousel;
