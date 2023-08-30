import ReviewSlider from "./ReviewSlider";
import { getAllReviews } from "@/lib/reviews/reviews";
const Reviews = async () => {
  const data = await getAllReviews();
  const reviews = data?.nodes;

  return (
    <div className="overflow-hidden">
      <ReviewSlider reviews={reviews} />
    </div>
  );
};

export default Reviews;
