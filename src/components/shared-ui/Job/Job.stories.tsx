// Button.stories.ts | Button.stories.tsx

import { Meta } from "@storybook/react";

import Job, { JobProps, StatusJob } from "./Job";

export default {
  component: Job,
  title: "Shared-UI/Job",
} as Meta;

export const Primary: React.VFC<JobProps> = () => (
  <Job
    name="Job"
    index={1}
    duration={500}
    status={StatusJob.Queued}
    disableUpButton={false}
    disableDownButton={false}
    onMoveHandler={(up) => {
      console.log(up);
    }}
    onDeleteHandler={(name) => {
      console.log(name);
    }}
  />
);
