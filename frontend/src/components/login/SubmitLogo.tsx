interface SubmitLogoProps {
    width?: string;
    height?: string;
  }
  
const SubmitLogo = ({
    width = "100%",
    height = "100%",
  }: SubmitLogoProps) => {
    return (
        <div style={{ width, height }}>
            <svg width="100%" height="100%" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g>
            </svg>
        </div>
    )
};

export default SubmitLogo;
  
  