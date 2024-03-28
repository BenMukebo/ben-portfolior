type Props = React.SVGProps<SVGSVGElement> & {
  color?: string;
  width?: number;
  height?: number;
};

export const BurgerMenuIcon: React.FC<Props> = (
  props: React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 16H27M5 8H27M5 24H27"
        stroke="currentColor" //"white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
