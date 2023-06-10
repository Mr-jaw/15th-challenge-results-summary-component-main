import Score from "./Score";

const Reuslts = () => {
  return (
    <div className="results-container">
      <h1 className="heading summury-heading">Your Result</h1>
      <Score />
      <p className="text-great">Great</p>
      <p className="result-info">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default Reuslts;
