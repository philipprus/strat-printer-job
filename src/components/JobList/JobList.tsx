import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import {
  deleteJobApiMethod,
  moveJobApiMethod,
} from "../../utils/fetchServicies";
import Job, { JobType } from "../shared-ui/Job/Job";

const JobList = ({ jobs }: { jobs: JobType[] }) => {
  const { getJobs, deleteJob } = useContext(GlobalContext);

  const onMoveHandler = async (up: boolean, name: string) => {
    try {
      const { data } = await moveJobApiMethod({ name, up });
      getJobs && getJobs(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteHandler = async (name: string) => {
    try {
      await deleteJobApiMethod(name);
      deleteJob && deleteJob(name);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {jobs.map((job, index) => {
        return (
          <Job
            {...job}
            index={index + 1}
            key={job.name}
            disableDownButton={index + 1 === jobs.length}
            disableUpButton={!index}
            onMoveHandler={onMoveHandler}
            onDeleteHandler={onDeleteHandler}
          />
        );
      })}
    </>
  );
};

export default JobList;
