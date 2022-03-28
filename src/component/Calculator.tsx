interface IPCalculator {}
export const Calculator = (props: IPCalculator) => {
  return (
    <div>
      <h2>Calculator</h2>
      <div className="calculator-container">
        <div>
					<div className="send-input">
						<div> You send</div>
            <input type="number" />
          </div>
        </div>
        <div>
					<div className="receive-input">
						<div>They receive</div>
            <input type="number" />
          </div>
        </div>
      </div>
    </div>
  );
};
