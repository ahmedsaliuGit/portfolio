const skills = [
  {
    skill: "React.js",
    icon: "https://img.icons8.com/?size=100&id=t4YbEbA834uH&format=png&color=000000",
  },
  {
    skill: "Tailwind CSS",
    icon: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
  },
  {
    skill: "JavaScript",
    icon: "https://img.icons8.com/?size=100&id=39854&format=png&color=000000",
  },
  {
    skill: "HTML & CSS",
    icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  },
];

const SkillsSection = () => (
  <section className="py-8 pr-5 bg-gray-100 rounded opacity-90">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-semibold text-gray-800">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {skills.map(({ skill, icon }) => (
          <div key={skill} className="flex flex-col items-center">
            <img src={icon} alt={skill} className="w-12 h-12" />
            <span className="mt-2 text-lg text-gray-700">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
