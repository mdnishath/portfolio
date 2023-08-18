"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Image from "next/image";

const ReviewSlider = ({ reviews }) => {
  console.log(reviews);
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="w-[300px] overflow-x-hidden md:w-[350px] h-[370px] mt-10"
    >
      {reviews?.map((review) => (
        <SwiperSlide key={review.id}>
          <div className="flex py-4 flex-col items-center justify-center rounded-[18px] text-xl font-bold text-white bg-[#1e293b]">
            <Image
              className="w-[60px] h-[60px] rounded-full ring-1 ring-slate-600 mx-auto"
              src={review.featuredImage.node.mediaItemUrl}
              alt="Profile"
              width={60}
              height={60}
            />
            <h3 className="mt-4 text-lg text-center">{review?.title}</h3>
            <p className="scrolbar h-[200px] overflow-y-scroll text-base text-center px-2 font-normal">
              {review?.content}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSlider;
