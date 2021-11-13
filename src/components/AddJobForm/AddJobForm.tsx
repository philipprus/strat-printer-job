import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { Button, Col, Row, Spinner } from "reactstrap";
import { GlobalContext } from "../../context/GlobalState";
import {
  createJobApiMethod,
  getJobsApiMethod,
} from "../../utils/fetchServicies";

interface Values {
  name: string;
  duration: number;
}

interface Errors {
  name: string;
  duration: string;
}

const AddJobForm = () => {
  const { getJobs } = useContext(GlobalContext);

  const validate = (values: Values) => {
    const errors: Partial<Errors> = {};

    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.duration) {
      errors.duration = "Required";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={{
        name: "",
        duration: 5,
      }}
      validate={validate}
      onSubmit={async ({ name, duration }: Values) => {
        try {
          const {  status,  } = await createJobApiMethod({ name, duration });
          console.log(status);
          if (status === 200) {
            const { data } = await getJobsApiMethod();
            getJobs && getJobs(data);
          }
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form-addjob">
          <Row>
            <Col className="form-addjob__title">
              <h2>Job Details</h2>
            </Col>
            <Col xs="12" className="form-addjob__input">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <Field
                id="name"
                name="name"
                placeholder="Type a name for this job..."
                className="form-control"
              />
              <div className="form-addjob__error">
                <ErrorMessage name="name" className="form-addjob__error" />
              </div>
            </Col>
            <Col xs="12" className="form-addjob__input">
              <label htmlFor="duration" className="form-label">
                Duration
              </label>
              <Field
                id="duration"
                name="duration"
                className="form-control"
                placeholder="2"
                type="number"
              />
              <div className="form-addjob__error">
                <ErrorMessage name="duration" />
              </div>
            </Col>
            <Col className="form-addjob__submit">
              {isSubmitting && <Spinner />}
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default AddJobForm;
