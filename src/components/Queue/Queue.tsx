import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import AddJobForm from "../AddJobForm/AddJobForm";
import JobList from "../JobList/JobList";
import ModalWithButton from "../ModalWithButton/ModalWithButton";
import ActionBar from "../shared-ui/ActionBar/ActionBar";
import { JobType } from "../shared-ui/Job/Job";

const ModalForm = () => (
  <ModalWithButton textOpenModalButton="Add a job">
    <AddJobForm />
  </ModalWithButton>
);

const Queue = ({ jobs }: { jobs: JobType[] }) => {
  const { isLoading } = useContext(GlobalContext);

  if (isLoading) {
    return <div>Loading</div>;
  }

  const countJobs = jobs.length;
  return (
    <div className="app-manager-jobs-right  col">
      <ActionBar
        title={`Queue ${!countJobs ? "empty" : ""}`}
        extra={<ModalForm />}
      />

      <div className="jobs">
        <JobList jobs={jobs} />
      </div>
    </div>
  );
};

export default Queue;
