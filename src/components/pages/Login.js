import React, { Fragment, useState, useEffect } from 'react';
import {
  PageLayout,
  Input,
  PasswordInput,
  Button,
  Spinner,
} from 'components/commons';
import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
`;

let timeout;

export default function Login() {
  const [formFields, setFormFields] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  function handleInputChange(e) {
    e.persist();
    setFormFields((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
  }

  function handlerSubmit(e) {
    e.preventDefault();
    setLoading(true);

    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    if (timeout) {
      clearTimeout(timeout);
    }
  }, []);

  return (
    <PageLayout>
      <h1>Login</h1>

      <Form onSubmit={handlerSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <Input
              value={formFields.username}
              onChange={handleInputChange}
              name="username"
              type="text"
              placeholder="Username"
            />
            <PasswordInput
              value={formFields.password}
              onChange={handleInputChange}
              name="password"
            />
          </Fragment>
        )}

        <Button large type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </Button>
        {!loading && (
          <Fragment>
            <div className="alt-text">or</div>
            <Button secondary type="button">
              Register
            </Button>
          </Fragment>
        )}
      </Form>
    </PageLayout>
  );
}
