import { useLanguage } from "@/contexts/LanguageContext";
import MemberCard from "./MemberCard";

import nynaImg from "@/assets/members/NYNA.jpg";
import azzaImg from "@/assets/members/AZZA.jpg";
import ebyImg from "@/assets/members/EBY.jpg";
import elmaImg from "@/assets/members/ELMA.jpg";
import joannaImg from "@/assets/members/JOANNA.jpg";
import nadaImg from "@/assets/members/NADA.jpg";
import nindaImg from "@/assets/members/NINDA.jpg";
import ociImg from "@/assets/members/OCI.jpg";
import pattyImg from "@/assets/members/PATTY.jpg";
import risaImg from "@/assets/members/RISA.jpg";

const members = [
  { name: "NYNA", birthday: "3 April", image: nynaImg },
  { name: "AZZA", birthday: "13 Juni", image: azzaImg },
  { name: "EBY", birthday: "13 Maret", image: ebyImg },
  { name: "ELMA", birthday: "4 Januari", image: elmaImg },
  { name: "JOANNA", birthday: "24 Juli", image: joannaImg },
  { name: "NADA", birthday: "5 Januari", image: nadaImg },
  { name: "NINDA", birthday: "26 Oktober", image: nindaImg },
  { name: "OCI", birthday: "27 November", image: ociImg },
  { name: "PATTY", birthday: "29 November", image: pattyImg },
  { name: "RISA", birthday: "9 Februari", image: risaImg },
];

const Members = () => {
  const { t } = useLanguage();

  return (
    <section id="members" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 -right-20 w-64 h-64 bg-secondary/30 border-[6px] border-foreground/20 rotate-12" />
      <div className="absolute bottom-20 -left-20 w-48 h-48 bg-accent/30 border-[6px] border-foreground/20 -rotate-12" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block rotate-2 mb-6">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight bg-primary px-8 py-4 border-[6px] border-foreground shadow-brutal-lg">
              {t("meet our members")}
            </h2>
          </div>
          <p className="text-xl font-bold uppercase tracking-widest text-muted-foreground">
             ONE FAMILY • LIMITLESS ENERGY 
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-6 md:gap-8">
          {members.map((member, index) => (
            <MemberCard
              key={index}
              name={member.name}
              birthday={member.birthday}
              image={member.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
