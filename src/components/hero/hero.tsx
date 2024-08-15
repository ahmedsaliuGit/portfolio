import ProfilePic from "../../assets/images/profile_ahmed_saliu.jpg";

const HeroSection = () => (
  <section className="">
    <div className="text-center">
      <img
        className="w-32 h-32 mx-auto rounded-full"
        src={ProfilePic}
        alt="Ahmed Saliu"
      />
      <h1 className="text-4xl font-bold text-white mt-4">Ahmed Saliu</h1>
      <p className="text-lg text-gray-300 mt-2">
        Frontend Engineer | Javascript | React.js | Tailwind CSS | UI/UX
        Enthusiast
      </p>
    </div>
  </section>
);

export default HeroSection;
