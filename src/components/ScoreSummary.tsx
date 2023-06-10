import data from "../data/data";

const ScoreSummary = () => {
  return (
    <>
      <div className="sense reaction">
        <div className="sense-info ">
          <img src={data[0].icon} alt="" className="sense-icon" />
          <strong className="sense-title">{data[0].category}</strong>
        </div>
        <p className="sense-results">
          <span className="text-bold">{data[0].score} </span> / 100
        </p>
      </div>
      <div className="sense memory">
        <div className="sense-info ">
          <img src={data[1].icon} alt="" className="sense-icon" />
          <strong className="sense-title">{data[1].category}</strong>
        </div>
        <p className="sense-results">
          <span className="text-bold">{data[1].score}</span> / 100
        </p>
      </div>
      <div className="sense verbal">
        <div className="sense-info ">
          <img src={data[2].icon} alt="" className="sense-icon" />
          <strong className="sense-title">{data[2].category}</strong>
        </div>
        <p className="sense-results">
          <span className="text-bold">{data[2].score}</span> / 100
        </p>
      </div>
      <div className="sense visual">
        <div className="sense-info">
          <img src={data[3].icon} alt="" className="sense-icon" />
          <strong className="sense-title">{data[3].category}</strong>
        </div>
        <p className="sense-results">
          <span className="text-bold">{data[3].score}</span> / 100
        </p>
      </div>
    </>
  );
};

export default ScoreSummary;
