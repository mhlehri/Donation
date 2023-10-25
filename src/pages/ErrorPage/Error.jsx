import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="bg-white dark:bg-gray-900 h-[100vh] flex items-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <p className="mb-4 text-lg font-light text-black dark:text-gray-400">
            Sorry, we cant find that page. Youll find lots to explore on the
            home page.{" "}
          </p>
          <Link
            to="/"
            className="inline-flex text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
