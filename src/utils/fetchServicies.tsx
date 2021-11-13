import { BASE_PATH } from "./constants";
import sendRequest from "./sendRequest";

export const getJobsApiMethod = async () => {
  const response = await sendRequest(`${BASE_PATH}/jobs/`, {
    method: "GET",
  });
  const data = await response.json();
  return { data };
};

export const createJobApiMethod = async ({
  name,
  duration,
}: {
  name: string;
  duration: number;
}) => {
  const response = await sendRequest(`${BASE_PATH}/jobs/`, {
    body: JSON.stringify({ name, duration }),
  });
  return { data: await response.json(), status: response.status };
};

export const deleteJobApiMethod = (name: string) =>
  sendRequest(`${BASE_PATH}/jobs/?name=${name}`, {
    method: "DELETE",
  });

export const moveJobApiMethod = async ({
  name,
  up,
}: {
  name: string;
  up: boolean;
}) => {
  const response = await sendRequest(
    `${BASE_PATH}/job/move?name=${name}&up=${up}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  return { data: await response.json() };
};

export const cancelJobApiMethod = (name: string) =>
  sendRequest(`${BASE_PATH}/job/cancel?name=${name}`, {
    headers: { Accept: "application/json" },
  });
