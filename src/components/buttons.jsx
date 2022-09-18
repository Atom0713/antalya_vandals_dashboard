export const BlueButton = (handleClick, text) => {
  return (
    <div className="page-header">
      <button
        onClick={handleClick}
        type="button"
        className="btn btn-primary btn-fw"
      >
        {text}
      </button>
    </div>
  );
};
