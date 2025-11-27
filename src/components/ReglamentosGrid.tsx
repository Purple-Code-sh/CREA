import { FaRobot, FaRoute, FaShieldHalved } from "react-icons/fa6";
import { IoFootball } from "react-icons/io5";

type Regulation = {
  name: string;
  link: string;
};

type CategoryCardProps = {
  name: string;
  link: string;
};

const regulationsData: Regulation[] = [
  {
    name: "Minisumo autónomo profesional",
    link: "https://docs.google.com/document/d/1k5rlef1_2SyRy3tnRFDPJI_7D0vdKj6_lh6LedBeh5c/edit#heading=h.lrxxfbed5gkl",
  },
  {
    name: "Minisumo RC profesional",
    link: "https://docs.google.com/document/d/1k5rlef1_2SyRy3tnRFDPJI_7D0vdKj6_lh6LedBeh5c/edit#heading=h.lrxxfbed5gkl",
  },
  {
    name: "Minisumo autónomo amateur",
    link: "https://docs.google.com/document/d/1k5rlef1_2SyRy3tnRFDPJI_7D0vdKj6_lh6LedBeh5c/edit#heading=h.lrxxfbed5gkl",
  },
  {
    name: "Minisumo RC amateur",
    link: "https://docs.google.com/document/d/1k5rlef1_2SyRy3tnRFDPJI_7D0vdKj6_lh6LedBeh5c/edit#heading=h.lrxxfbed5gkl",
  },
  {
    name: "Microsumo",
    link: "https://docs.google.com/document/d/1Zd5_bKdkOZDldijVbBp4a5fnF_jPxZENVx-3VbZYtbQ/edit#heading=h.lrxxfbed5gkl",
  },
  // {
  //   name: "Midisumo",
  //   link: "https://docs.google.com/document/d/1cIoabS2r8yPsKuxU3GErV-bnoNiSVQJP2PMdBAeiTRM/edit?usp=sharing",
  // },
  {
    name: "Seguidor de línea profesional",
    link: "https://docs.google.com/document/d/1Rf05I65rkRRZ-yZVycBUTn5rYrbeFq3orRDf3bm4B-w/edit#heading=h.32gsyl5eo0v1",
  },
  {
    name: "Seguidor de línea amateur",
    link: "https://docs.google.com/document/d/1Rf05I65rkRRZ-yZVycBUTn5rYrbeFq3orRDf3bm4B-w/edit#heading=h.32gsyl5eo0v1",
  },
  {
    name: "Guerra 1 lb",
    link: "https://docs.google.com/document/d/17QN0frI29Gl5NHOOpmWr1Euv9XmDuQrkkwxR0Wv0xMI/edit#heading=h.mh48o2h9ps9f",
  },
  {
    name: "Guerra 3 lb",
    link: "https://docs.google.com/document/d/17QN0frI29Gl5NHOOpmWr1Euv9XmDuQrkkwxR0Wv0xMI/edit#heading=h.mh48o2h9ps9f",
  },
  // {
  //   name: "Guerra 12 lb",
  //   link: "https://docs.google.com/document/d/17QN0frI29Gl5NHOOpmWr1Euv9XmDuQrkkwxR0Wv0xMI/edit#heading=h.mh48o2h9ps9f",
  // },
  {
    name: "Robosoccer",
    link: "https://docs.google.com/document/d/1An3iLLKc9C9CeJBwyR-7pms6LVJqUl4SOI4Y18ReCD8/edit",
  },
];

const getCategoryIcon = (name: string) => {
  const lowerCaseName = name.toLowerCase();
  if (lowerCaseName.includes("sumo")) {
    return <FaRobot className="w-10 h-10 mb-4 text-slate-300" />;
  }
  if (lowerCaseName.includes("seguidor")) {
    return <FaRoute className="w-10 h-10 mb-4 text-slate-300" />;
  }
  if (lowerCaseName.includes("guerra")) {
    return <FaShieldHalved className="w-10 h-10 mb-4 text-slate-300" />;
  }
  if (lowerCaseName.includes("robosoccer")) {
    return <IoFootball className="w-10 h-10 mb-4 text-slate-300" />;
  }
  // Ícono por defecto
  return <FaRobot className="w-10 h-10 mb-4 text-slate-300" />;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ name, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group max-w-96 w-full mx-auto flex flex-col items-center justify-center p-6 bg-shPurple-500/30 rounded-xl shadow-lg 
                 border border-shPurple-400 hover:border-accent-600 hover:bg-shPurple-400/80 
                 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
    >
      {getCategoryIcon(name)}
      <h3 className="text-center font-semibold text-txt_white_p text-lg group-hover:text-primary-500 transition-colors">
        {name}
      </h3>
    </a>
  );
};

const ReglamentosGrid: React.FC = () => {
  return (
    <div className="bg-shAccent-500/25 rounded-xl w-full p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center font-zen text-white mb-10 md:mb-12 xl:mb-16">
          Reglamentos por Categoría
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {regulationsData.map((reg) => (
            <CategoryCard key={reg.name} name={reg.name} link={reg.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReglamentosGrid;
