import ScoreSummary from "./ScoreSummary";

const Summary = () => {
  return (
    <div className="summary-container">
      <h2 className="heading summary-heading">Summary</h2>
      <ScoreSummary />
      <button className="continue-button">Continue</button>
    </div>
  );
};

export default Summary;
