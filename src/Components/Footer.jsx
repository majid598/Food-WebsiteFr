import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full text-white relative">
      <div className="w-full bg-zinc-900 justify-between flex lg:px-20 px-10 lg:flex-row md:flex-row flex-col bottom-0">
        <div className="py-20 lg:text-start md:text-start text-center">
          <h2 className="text-4xl font-bold lg:text-start md:text-start text-center">
            MM Burger Wala
          </h2>

          <p className="mt-6 px-6 lg:text-start md:text-start text-center">
            We are trying to give you the best taste possible.
          </p>
          <br />

          <em>We give attention to genuine feedback.</em>

          <strong className="lg:text-start md:text-start text-center">
            All right received @Mr raju mmburgerwala
          </strong>
        </div>

        <aside className="flex flex-col gap-6 lg:w-1/5 md:w-1/5 w-full text-2xl items-center">
          <h4 className="font-bold mt-6">Follow Us</h4>
          <div className="flex lg:flex-col md:flex-col gap-6 flex-row justify-center lg:pb-0 md:pb-0 pb-10 lg:w-auto md:w-auto w-full">
          <a target="_blank" href="https://youtube.com/6packprogrammer">
            <AiFillYoutube className="text-3xl" />
          </a>
          <a target="_blank" href="https://www.instagram.com/code_with_raju01/">
            <AiFillInstagram className="text-3xl" />
          </a>
          <a
            target="_blank"
            className="text-3xl"
            href="https://github.com/majid598"
          >
            <AiFillGithub />
          </a>
          </div>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
