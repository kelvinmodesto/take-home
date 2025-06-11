type Props = {
  title?: string;
};

export const Header = ({ title = "Pop Movies" }: Props) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};
