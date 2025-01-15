import teamLogos, { NBALogo } from "@/assets/Logos";

type Props = {
  size: number;
  teamAbbreviation: string;
};

const TeamLogo = ({ size, teamAbbreviation }: Props) => {
  const Logo = teamLogos[teamAbbreviation];

  return Logo ? <Logo size={size} /> : <NBALogo size={size} />;
};

export default TeamLogo;
