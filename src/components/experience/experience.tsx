const experiences = [
  {
    role: "Web Developer",
    company: "Smart App Ltd",
    duration: "July 2023 - July 2024",
    details:
      "Developed web application using Laravel and JavaScript, encouraged agile processes that bring the team together and <br />ensure successful task completion. Wrote a reusable functions that can be reused throughout the entire application UI interface.",
  },
  {
    role: "Frontend Engineer",
    company: "Lunchbox Inc",
    duration: "October 2021 - July 2022",
    details:
      "Assisted in implement client's responsive websites and improving UI/UX using modern JavaScript frameworks. Onboarded new clients on <br />a multi-tenant front-end application. Conducted reviews that assured code quality, and industry best practices",
  },
  {
    role: "Associate Frontend Developer",
    company: "Techvibes Intl Limited",
    duration: "October 2016 - September 2019",
    details:
      "Managed a team of 4 developers and conducted code reviews to ensure code quality and best practices. Built user <br />profiles, and dashboards for admin, agent and sub-agent.",
  },
];

const ExperienceSection = () => (
  <section className="py-12 px-8 bg-gray-100 opacity-90 rounded">
    <div className="container mx-auto">
      <h2 className="text-3xl font-semibold text-gray-800 text-center">
        Experience
      </h2>
      <div className="mt-8 space-y-8">
        {experiences.map(({ role, company, duration, details }) => (
          <div key={role} className="flex items-start">
            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mt-2.5"></div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">{role}</h3>
              <span className="text-gray-600">
                {company} | {duration}
              </span>
              <p
                className="text-gray-700 mt-2"
                dangerouslySetInnerHTML={{
                  __html: details,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
