import React, { useContext, useEffect, useState } from "react";
import { Button } from "reactstrap";
import ActionBar from "../shared-ui/ActionBar/ActionBar";
import Icon from "../shared-ui/Icon/Icon";
import { JobType, StatusJob } from "../shared-ui/Job/Job";
import { formatSeconds } from "../../utils/helpers";
import {
  cancelJobApiMethod,
  getJobsApiMethod,
} from "../../utils/fetchServicies";
import { GlobalContext } from "../../context/GlobalState";
import SingleJob from "../shared-ui/SingleJob/SingleJob";
import PrinterStatus from "../shared-ui/PrinterStatus/PrinterStatus";

const Printer = ({ job }: { job: JobType }) => {
  const { getJobs } = useContext(GlobalContext);

  const { name, duration, status } = job;

  const [timer, setTimer] = useState<number>(duration || 0);
  const [intervalId, setIntervalId] = useState<null | number>(null);

  useEffect(() => {
    if (!timer || status === StatusJob.Stopped) return;

    const interval = window.setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);
    setIntervalId(interval);
    return () => window.clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [job]);

  useEffect(() => {
    if (timer < 0) {
      window.clearInterval(intervalId as number);
      const fetchJobs = async () => {
        const { data } = await getJobsApiMethod();
        getJobs && getJobs(data);
        setTimer(duration);
      };
      fetchJobs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer, duration]);

  const getTimeEndProcent = () => {
    if (timer <= 0) {
      return 100;
    }
    if (timer > 0) {
      return Math.round((1 - timer / duration) * 100);
    }
  };

  const onHandlerCancelPrinting = async () => {
    try {
      name && (await cancelJobApiMethod(name));
    } catch (error) {}
  };

  const isStopped = status === StatusJob.Stopped ? StatusJob.Stopped : "";
  const ActionTitleBar = () => (
    <div>
      Current printing job {isStopped} |{" "}
      <span style={{ color: "#00A1E0" }}>
        {" "}
        {getTimeEndProcent() || 0}% [{formatSeconds(timer)} LEFT]
      </span>
    </div>
  );
  return (
    <div className="printer printer__left col">
      <ActionBar
        title={<ActionTitleBar />}
        extra={
          <Button
            onClick={onHandlerCancelPrinting}
            className="btn-icon btn-pause"
          >
            <Icon icon="pause" width={13} height={14} />
          </Button>
        }
        progressValue={getTimeEndProcent()}
      />
      <SingleJob name={name} />
      <PrinterStatus />
    </div>
  );
};

export default React.memo(Printer);
