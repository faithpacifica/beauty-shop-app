import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> { }

const GoogleIcon: React.FC<IconProps> = (props) => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 47 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M47 23.0262C47 35.8639 37.6674 45 23.8852 45C10.6713 45 0 34.9476 0 22.5C0 10.0524 10.6713 0 23.8852 0C30.3189 0 35.7316 2.22278 39.9018 5.88811L33.4008 11.7762C24.8965 4.04637 9.08217 9.85282 9.08217 22.5C9.08217 30.3478 15.7373 36.7077 23.8852 36.7077C33.343 36.7077 36.8873 30.3206 37.4459 27.0091H23.8852V19.2702H46.6244C46.8459 20.4224 47 21.5292 47 23.0262Z"
      fill="#F44336"
    />
  </svg>
);

export default GoogleIcon;
