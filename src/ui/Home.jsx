import { useSelector } from "react-redux";
import { getTestimonial } from "../services/apiRestaurant";
import CreateUser from "../features/user/CreateUser";
import HomeSlider from "./HomeSlider";
import Button from "./Button";
import { useLoaderData } from "react-router-dom";

function Home() {
  const username = useSelector((state) => state.user.username);
  const testimonials = useLoaderData();
  // const testimonialsLength = testimonials.length;

  return (
    <div className="my-10 grid h-[80vh] grid-rows-[7rem_5rem_auto] justify-between px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-medium md:text-3xl">
        Fresh bakery store
        <br />
        <span className="italic text-amber-800">
          Straight out of the oven, straight to you
        </span>
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <span className="place-self-center">
          <Button to="/menu" type="primary">
            Continue ordering, {username}
          </Button>
        </span>
      )}

      <HomeSlider testimonials={testimonials} />
    </div>
  );
}

export async function loader() {
  const testimonial = await getTestimonial();
  return testimonial;
}

export default Home;
