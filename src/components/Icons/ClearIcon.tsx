interface Props {
  className?: string;
}

const ClearIcon = (props: Props) => {
  const { className } = props;

  return (
    <svg
      className={className}
      fill="#000"
      height="800px"
      viewBox="0 0 32 32"
      width="800px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z" />
    </svg>
  );
};

export default ClearIcon;
