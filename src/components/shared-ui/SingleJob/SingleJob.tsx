import React from "react";
import fullThumb from "../../../assets/images/fullThumb.jpg";
import { getDate } from "../../../utils/helpers";

const SingleJob = ({ name }: { name: string }) => {
  return (
    <div className="single-job">
      <img src={fullThumb} alt="Thumbnail" className="single-job__thumb" />
      <div className="single-job__content">
        <div className="single-job__content_description">
          <div className="single-job__content_name">{name}</div>
          <div className="single-job__content_author">Mor Saubron</div>
        </div>
        <div className="single-job__content_wrapper">
          <div className="single-job__content_time">
            <div className="single-job__content_time_label">Start Time</div>
            <div className="single-job__content_time_content">{getDate()}</div>
          </div>
          <div className="single-job__content_time">
            <div className="single-job__content_time_label">End Time</div>
            <div className="single-job__content_time_content">{getDate()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SingleJob);
