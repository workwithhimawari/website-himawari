import { useLanguage } from "@/contexts/LanguageContext";

interface NewsItem {
  id: string;
  date: string;
  category: string;
  titleKey: string;
  contentKey: string;
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    date: "02 Desember 2023",
    category: "COLLAB",
    titleKey: "newsAitakataTitle",
    contentKey: "newsAitakataContent",
  },
  {
    id: "2",
    date: "22 September 2024",
    category: "ANNIVERSARY",
    titleKey: "news1stAnniversaryTitle",
    contentKey: "news1stAnniversaryContent",
  },
  {
    id: "3",
    date: "30 Juli 2025",
    category: "MUSIC",
    titleKey: "newsDebutSingleTitle",
    contentKey: "newsDebutSingleContent",
  },
  {
    id: "4",
    date: "11 November 2025",
    category: "MUSIC",
    titleKey: "newsIsshoNiArukouTitle",
    contentKey: "newsIsshoNiArukouContent",
  },
  {
    id: "5",
    date: "03 Februari 2026",
    category: "MUSIC",
    titleKey: "newsPandanganPertamaTitle",
    contentKey: "newsPandanganPertamaContent",
  },
  {
    id: "6",
    date: "19 Februari 2026",
    category: "UPDATE",
    titleKey: "newsLatestUpdateTitle",
    contentKey: "newsLatestUpdateContent",
  },
];

const categoryColors: Record<string, string> = {
  LAUNCH: "bg-primary",
  MUSIC: "bg-secondary",
  EVENT: "bg-accent",
  MERCH: "bg-primary",
  STREAM: "bg-secondary",
  COLLAB: "bg-accent",
  ANNIVERSARY: "bg-primary",
  UPDATE: "bg-accent",
};

const News = () => {
  const { t } = useLanguage();

  return (
    <section id="news" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-primary border-4 border-foreground rotate-12 opacity-30" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-secondary border-4 border-foreground -rotate-6 opacity-30" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-foreground text-background px-8 py-4 border-4 border-foreground shadow-brutal rotate-1 mb-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wider">
              {t("newsTitle")}
            </h2>
          </div>
        </div>

        {/* News Grid - 6 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {newsItems.map((item, index) => (
            <div
              key={item.id}
              className="group border-4 border-foreground bg-card shadow-brutal hover:shadow-brutal-lg hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* Header bar */}
              <div className="flex items-center gap-3 p-4 border-b-4 border-foreground bg-muted">
                <span className="text-xs font-mono bg-foreground text-background px-2 py-1">
                  {item.date}
                </span>
                <span
                  className={`text-xs font-black px-2 py-1 border-2 border-foreground ${categoryColors[item.category] || "bg-muted"}`}
                >
                  {item.category}
                </span>
              </div>
              
              {/* Content */}
              <div className="p-4 md:p-5 flex flex-col flex-grow">
                <h3 className="font-black text-lg leading-tight mb-3">
                  {t(item.titleKey)}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground flex-grow">
                  {t(item.contentKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;