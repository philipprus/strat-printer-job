import React, { useCallback, useContext, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { getJobsApiMethod } from "./utils/fetchServicies";
import { GlobalContext } from "./context/GlobalState";
import Printer from "./components/Printer/Printer";
import Queue from "./components/Queue/Queue";
import ActionBar from "./components/shared-ui/ActionBar/ActionBar";

function App() {
  const { getJobs, fetching, jobs } = useContext(GlobalContext);

  const processJob = jobs && jobs[0];

  const waitJobs = jobs && jobs.slice(1, jobs.length);

  const fetchJobs = useCallback(async () => {
    try {
      fetching && fetching();
      const { data } = await getJobsApiMethod();
      getJobs && getJobs(data);
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return (
    <Container fluid="md" className="app-manager-jobs">
      <Row>
        <Col xs="12" md="6">
          {processJob ? (
            <Printer job={processJob} />
          ) : (
            <ActionBar title="Printer waiting job" />
          )}
        </Col>
        <Col xs="12" md="6">
          <Queue jobs={waitJobs} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
