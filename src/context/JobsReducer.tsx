import { JobType, StatusJob } from "../components/shared-ui/Job/Job";

export type State = {
  jobs: JobType[];
  isLoading: boolean;
  error?: string;
};

type Action =
  | { type: "FETCHING" }
  | { type: "GET_JOBS"; payload: JobType[] }
  | { type: "CREATE_JOB"; payload: JobType }
  | { type: "MOVE_JOB"; payload: JobType[] }
  | { type: "CANCEL_JOB"; payload: string }
  | { type: "DELETE_JOB"; payload: string };

export default function jobsReducer(state: State, action: Action) {
  switch (action.type) {
    case "FETCHING":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_JOBS":
      return {
        ...state,
        isLoading: false,
        jobs: [...action.payload],
      };

    case "CREATE_JOB":
      return {
        ...state,
        isLoading: false,
        jobs: [...state.jobs, action.payload],
      };

    case "MOVE_JOB":
      return {
        ...state,
        isLoading: false,
        jobs: [...action.payload],
      };

    case "CANCEL_JOB":
      const newJobs = [...state.jobs];
      if (newJobs.length > 0 && newJobs[0].name === action.payload) {
        newJobs[0].status = StatusJob.Stopped;
      }
      return {
        ...state,
        isLoading: false,
        jobs: newJobs,
      };

    case "DELETE_JOB":
      return {
        ...state,
        isLoading: false,
        jobs: state.jobs.filter((job) => job.name !== action.payload),
      };

    default:
      return state;
  }
}
