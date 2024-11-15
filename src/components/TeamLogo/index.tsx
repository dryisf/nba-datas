import teamLogos from "@/assets/Logos";

type Props = {
  size: number;
  teamAbbreviation: string;
};

const TeamLogo = ({ size, teamAbbreviation }: Props) => {
  const Logo = teamLogos[teamAbbreviation];

  return <Logo size={size} />;
};

export default TeamLogo;
