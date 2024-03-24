type Props = React.SVGProps<SVGSVGElement> & {
  color?: string;
  width?: number;
  height?: number;
};

export const MoonIcon: React.FC<Props> = (
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
      <path
        d="M10.1353 2.63574C9.66382 4.1958 9.62438 5.85455 10.0212 7.43526C10.418 9.01596 11.2362 10.4594 12.3886 11.6118C13.541 12.7642 14.9845 13.5824 16.5652 13.9792C18.1459 14.376 19.8046 14.3366 21.3647 13.8651C20.9124 15.3522 20.0827 16.6968 18.9564 17.7679C17.8301 18.8391 16.4456 19.6003 14.9378 19.9774C13.4299 20.3545 11.8501 20.3347 10.3521 19.9199C8.8542 19.505 7.48923 18.7093 6.39016 17.6103C5.29109 16.5112 4.4954 15.1462 4.08057 13.6483C3.66574 12.1504 3.64593 10.5705 4.02305 9.06265C4.40017 7.55478 5.16137 6.17028 6.23252 5.04399C7.30367 3.9177 8.64825 3.08801 10.1353 2.63574Z"
        stroke="currentColor" // "#101010"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
