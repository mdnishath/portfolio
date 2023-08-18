import Container from "@/components/shared/Container";
import Link from "next/link";
export const metadata = {
  title:
    "Enhance User Experience with Google Address Autocomplete for Your WordPress Forms",
  description:
    "Simplify address input on your WordPress site using our Google Address Autocomplete plugin. Streamline form filling with accurate suggestions from the Google Places API, making it easier for users to provide accurate addresses. Improve user satisfaction and form submission rates today.",
};

const AutocompletePage = () => {
  return (
    <section className="px-4">
      <Container>
        <div className="grid items-center grid-cols-1 overflow-hidden md:h-screen md:gap-10 md:grid-cols-2 py-[100px] md:py-0">
          <div>
            <h1 className={"text-white md:text-5xl text-2xl"}>
              Google Autocomplete
            </h1>

            <p className="mt-3 text-lg font-normal text-white">
              Simplify address input on your WordPress site using our Google
              Address Autocomplete plugin. Streamline form filling with accurate
              suggestions from the Google Places API, making it easier for users
              to provide accurate addresses. Improve user satisfaction and form
              submission rates today.
            </p>
            <div className="flex gap-4 my-4">
              <Link
                href={
                  "https://wordpress.org/plugins/autocomplete-google-address/"
                }
                target="_blank"
                className="px-10 py-2 font-semibold text-black rounded-full bg-primary"
              >
                Download
              </Link>
              <Link
                href={"https://nishathltd.onfastspring.com/"}
                target="_blank"
                className="px-10 py-2 font-semibold text-black rounded-full bg-primary"
              >
                Buy Now
              </Link>
            </div>
          </div>
          <div>
            {/* <Image
              className="w-full mx-auto rounded-lg"
              src={autoImage}
              alt="Autocomplete"
            /> */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/2vVqEOcOvKk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AutocompletePage;
