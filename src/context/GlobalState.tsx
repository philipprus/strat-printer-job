import React, { createContext, useReducer } from "react";
import { JobType } from "../components/shared-ui/Job/Job";

import jobsReducer from "./JobsReducer";

interface GlobalContextValue {
  jobs: JobType[];
  isLoading: boolean;
  error?: string;
  getJobs?: (jobs: JobType[]) => void;
  createJob?: (job: JobType) => void;
  deleteJob?: (name: string) => void;
  moveJob?: (jobs: JobType[]) => void;
  cancelJob?: (name: string) => void;
  fetching?: () => void;
}

const initialState: GlobalContextValue = {
  jobs: [],
  isLoading: false,
};

export const GlobalContext = createContext<GlobalContextValue>(initialState);

export const GlobalProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(jobsReducer, initialState);

  function fetching() {
    dispatch({
      type: "FETCHING",
    });
  }

  function getJobs(jobs: JobType[]) {
    dispatch({
      type: "GET_JOBS",
      payload: jobs,
    });
  }

  function createJob(job: JobType) {
    dispatch({
      type: "CREATE_JOB",
      payload: job,
    });
  }

  function deleteJob(name: string) {
    dispatch({
      type: "DELETE_JOB",
      payload: name,
    });
  }

  function cancelJob(name: string) {
    dispatch({
      type: "CANCEL_JOB",
      payload: name,
    });
  }

  function moveJob(jobs: JobType[]) {
    dispatch({
      type: "MOVE_JOB",
      payload: jobs,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        jobs: state.jobs,
        isLoading: state.isLoading,
        error: state.error,
        getJobs,
        createJob,
        deleteJob,
        moveJob,
        cancelJob,
        fetching,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
