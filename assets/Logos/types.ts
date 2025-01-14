export type Props = {
  size: number;
};

export type TeamLogos = {
  [key: string]: (props: Props) => JSX.Element;
};
