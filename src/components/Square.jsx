export const Square = ({ children, isSeletected, updateBoard, index }) => {
  const className = `square ${isSeletected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};
