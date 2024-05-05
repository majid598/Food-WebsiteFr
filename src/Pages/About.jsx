import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";

const About = () => {
  return (
    <div className="about bg-pink-200 w-full h-[calc(100vh-rem)]">
      <main className="max-w-[900px] bg-white mx-auto h-full">
        <h1 className="text-4xl font-semibold text-pink-700 uppercase bg-zinc-800 py-[1rem] px-[2rem]">
          About Us
        </h1>

        <article className="my-[2rem]">
          <h4 className="text-3xl uppercase font-extralight text-center text-zinc-600 py-[2rem]">
            MM Burger Wala
          </h4>
          <p className="tracking-[3px] p-[2rem] w-1/2 text-center mx-auto break-[10px]">
            We are MM Burger Wala. The place for most tasty burgers on the
            enitre earth.
          </p>

          <p className="tracking-[3px] p-[2rem] w-1/2 text-center mx-auto break-[10px]">
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>

          <Link
            to="/"
            className="w-12 h-12 rounded-full mx-auto flex items-center hover:text-pink-700 hover:scale-105 justify-center bg-zinc-800 text-white text-xl transition-all duration-300"
          >
            <RiFindReplaceLine />
          </Link>
        </article>

        <div className="p-[2rem] bg-zinc-800 text-white">
          <h2 className="text-center uppercase">Founder</h2>
          <article className="flex items-center justify-center">
            <div className="m-[2rem]">
              <img
                className="w-[150px] rounded-full h-[150px]"
                src={"./assets/founder.webp"}
                alt="Founder"
              />
              <h3 className="m-[1rem]">Mr Raju</h3>
            </div>

            <p className="mx-[1rem] w-1/2 tracking-[2px] leading-[150%]">
              I am Majid Ali, the founder of MBA Burger Wala. Affiliated to God
              Taste...
            </p>
          </article>
        </div>
      </main>
    </div>
  );
};

export default About;
