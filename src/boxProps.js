function Box(props) {
  const { handleChange, activeNum, itemNumber } = props;
  return (
    <div id={props.id} className="box">
      <div className="box-header">
        <label>
          <input
            type="radio"
            name="option"
            value="flex"
            className="checkbox"
            onChange={() => handleChange(itemNumber)}
          />
        </label>

        <div className="topic-flex">
          <h2>{props.h2}</h2>
          <h3>{props.h3}</h3>
        </div>
      </div>
      <p>{props.paragraph}</p>
      <div className="number">
        <h2>{props.number}</h2>
        <span>{props.span}</span>
      </div>
      {activeNum === itemNumber ? (
        <div className="additional-div">
          <hr></hr>
          <p>Enter your pladge</p>
          <div className="input-div">
            <input type="number"></input>
            <button onClick={() => props.handleContinueClick()}>
              Continue
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Box;
