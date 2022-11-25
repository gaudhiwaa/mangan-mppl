const GreenLocationIcon = ({width, height, marginLeft}) => {
  return (
    <svg
      width={"120px" || width}
      height={"40px" || height}
      style={{marginLeft: marginLeft}}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="19.5" fill="white" stroke="#2DBE78" />
      <g clip-path="url(#clip0_1_3500)">
        <path
          d="M27.6852 12.0601C27.5241 11.9793 27.3344 11.9793 27.1733 12.0601L12.3167 19.4884C12.0344 19.6296 11.9202 19.9729 12.0614 20.2551C12.1418 20.4157 12.293 20.5292 12.4698 20.5615L18.3661 21.634L19.4387 27.5304C19.4826 27.7721 19.6761 27.9587 19.9192 27.9938C19.9461 27.9977 19.9732 27.9996 20.0003 27.9995C20.2169 27.9996 20.4149 27.8773 20.5118 27.6835L27.9401 12.8269C28.0815 12.5447 27.9673 12.2014 27.6852 12.0601Z"
          fill="#2DBE78"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_3500">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(12 12)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default GreenLocationIcon;
