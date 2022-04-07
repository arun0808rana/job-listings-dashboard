import React from "react";
import Wrapper from "./HomeStyles.js";
import job_listing_data from "../../mock/MOCK_DATA";
import { Link } from "react-router-dom";
import TopControls from "./TopControls.js";
import LikeBtn from "../../assets/like.svg";
function Home() {

  return (
    <Wrapper className="m-3">
      <TopControls />
      <div className="flex justify-between items-center">
        <h2 className="font-medium">Top Recommendations</h2>
        <Link className="text-xs underline text-orange-500" to="">
          See All
        </Link>
      </div>
      <div className="recommended-jobs-container flex flex-wrap justify-between bg-y">
        {job_listing_data.slice(0, 4).map((rec_card, index) => {
          return (
            <div
              className="recommendation-card"
              key={`recommendation-card-${index}`}
            >
              <div className="flex justify-between">
                <div className="lhs">
                  <div className="flex">
                    <div className="logo mr-3">
                      <img
                        src="data:image/png;base64,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"
                        alt=""
                      />
                    </div>
                    <div className="job-criteria">
                      <div className="company-name">
                        {rec_card.company_name}
                      </div>
                      <div className="designation">{rec_card.designation}</div>
                      <div className="posting-date">
                        $ {rec_card.salary}k
                      </div>
                    </div>
                  </div>

                  <div className="pills space-x-3">
                    {rec_card.stack.map((tech, index) => {
                      return (
                        <div
                          className={`pill`}
                          key={`pill-${index}`}
                        >
                          {tech}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="rhs">
                  <div className="favorite">
                    <img src={LikeBtn} alt="" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="main-job-container">
        {job_listing_data.map((job, index) => {
          return (
            <div className="main-job-card" key={`main-job-card-${index}`}>
              <div className="flex">
                <div className="logo mr-3">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
                <div className="rhs">
                  <div className="text">
                    <div className="title">{job.company_name}</div>
                    <div className="designation">{job.designation}</div>
                    <div className="salary">$ {job.salary}k</div>
                  </div>
                  <div className="save-btn">
                    <img src={LikeBtn} alt="" />
                  </div>
                </div>
              </div>
              <div className="pills space-x-3">
                {job.stack.map((pill, index) => {
                  return (
                    <div className="pill" key={`main-pill-${index}`}>
                      {pill}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default Home;
