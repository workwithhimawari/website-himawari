interface MemberCardProps {
  name: string;
  birthday: string;
  image: string;
  index: number;
}

const MemberCard = ({ name, birthday, image, index }: MemberCardProps) => {
  const rotations = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2', 'rotate-0'];
  const rotation = rotations[index % rotations.length];

  return (
    <div className={`card-brutal group hover:-translate-y-3 hover:translate-x-1 hover:rotate-0 transition-all duration-300 ${rotation}`}>
      {/* Member Image */}
      <div className="aspect-[3/4] relative overflow-hidden border-b-[6px] border-foreground">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-foreground/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <span className="text-background font-black text-6xl">♪</span>
        </div>

        {/* Corner decoration */}
        <div className="absolute bottom-4 right-4 w-8 h-8 bg-foreground" />
      </div>

      {/* Member Info */}
      <div className="p-5 bg-background">
        <h3 className="font-black text-xl md:text-2xl uppercase tracking-tight mb-1">{name}</h3>
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 bg-primary border-2 border-foreground" />
          <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
            ★ {birthday}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
