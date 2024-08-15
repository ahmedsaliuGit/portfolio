import StaticJob from "../../assets/images/ScreenshotDesktopStaticJobListings.png";
import Shortly from "../../assets/images/localhost_3000_url-shortener.png";
import DashPic from "../../assets/images/acme-dashboard.png";

const projects = [
  {
    title: "Job Listing Site",
    description:
      "A tool for browsing job listings with advanced filtering options. Users can refine their search by location, industry, experience level, and job type, making it easy to find the perfect match for their career goals.",
    img: StaticJob,
    link: "https://ahmedsaliugit.github.io/static-job-listings/",
  },
  {
    title: "Shortly",
    description:
      "A simple and efficient URL shortener that converts long links into compact, easy-to-share URLs. Perfect for social media, marketing, and tracking link performance.",
    img: Shortly,
    link: "https://ahmedsaliugit.github.io/url-shortener/",
  },
  {
    title: "Dashoard",
    description:
      "A user-friendly dashboard site that consolidates key metrics, data, and insights in one place. Customize views, track progress, and make informed decisions with real-time updates and intuitive visualizations.",
    img: DashPic,
    link: "https://acme-dashboard-gamma-inky.vercel.app/dashboard",
  },
];

const ProjectsSection = () => (
  <section className="py-12 bg-gray-100 opacity-90 rounded px-8">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-semibold text-gray-800">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map(({ title, description, img, link }) => (
          <div
            key={title}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img src={img} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
              <p className="text-gray-600 mt-2">{description}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-4 inline-block"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
