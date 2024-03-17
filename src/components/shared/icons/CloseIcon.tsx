type Props = React.SVGProps<SVGSVGElement> & {
  color?: string;
  width?: number;
  height?: number;
};

export const ClosedIcon: React.FC<Props> = (
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
        d="M25 7L7 25M25 25L7 7"
        stroke="CurrentColor" //"white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
