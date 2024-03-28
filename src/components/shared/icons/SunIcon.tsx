type Props = React.SVGProps<SVGSVGElement> & {
  color?: string;
  width?: number;
  height?: number;
};

export const SunIcon: React.FC<Props> = (
  props: React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_131_275)">
        <path
          d="M12 3.75V1.5M6 6L4.5 4.5M6 18L4.5 19.5M18 6L19.5 4.5M18 18L19.5 19.5M3.75 12H1.5M12 20.25V22.5M20.25 12H22.5M17.25 12C17.25 14.8995 14.8995 17.25 12 17.25C9.10051 17.25 6.75 14.8995 6.75 12C6.75 9.10051 9.10051 6.75 12 6.75C14.8995 6.75 17.25 9.10051 17.25 12Z"
          stroke="currentColor" //"white"
          strokeOpacity="0.8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_131_275">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
