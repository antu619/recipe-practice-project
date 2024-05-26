// import banner1 from "../../assets/image_01.jpeg";
import banner2 from "../../assets/banner.jpg";

export default function Banner() {
  return (
    <div
      className="hero min-h-[600px] "
      style={{
        backgroundImage: `url(${banner2})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-start text-neutral-content">
        <div className="text-center">
          <h1 className="mb-5 text-6xl font-bold leading-tight">Get Your Delicious Food <br /> From <span className="text-rose-600">Recipes</span></h1>
          <p className="mb-8">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi <br /> exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-outline border-white text-white hover:bg-rose-600 hover:border-rose-600 w-40">Get Started</button>
        </div>
      </div>
    </div>
  );
}
