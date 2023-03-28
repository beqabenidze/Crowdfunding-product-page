function Stand(props) {
  return (
    <div id={props.id} className="stand-box">
      <div className="stand-flex">
        <h4>{props.title}</h4>
        <h5>{props.pledge}</h5>
      </div>
      <p>{props.paragraph}</p>
      <h2>
        {props.number}
        <span>{props.left}</span>
      </h2>
      <button
        onClick={() => {
          props.handleSelectClick();
        }}
      >
        {props.button}
      </button>
    </div>
  );
}

export default Stand;
