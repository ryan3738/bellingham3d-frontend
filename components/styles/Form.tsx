import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  /* box-shadow: 4px 2px 5px 3px rgba(0, 0, 0, 0.40); */
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.16);
  background: none;
  border: 5px solid white;
  padding: var(--spacing);
  /* font-size: 1rem; */
  line-height: 1.5;
  font-weight: 300;
  label {
    display: block;
    margin-bottom: 1rem;
    color: var(--navyBlue-700);
    font-weight: 800;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    background: var(--navyBlue-50);
    border: none;
    outline: 0.05rem solid var(--navyBlue-100);
    border-radius: var(--borderRadius);
    transition: all 0.25s;
    &:focus {
      outline: 0;
      /* border-color: var(--navyBlue-400); */
      outline: 0.15rem solid var(--navyBlue-500);
      background: var(--navyBlue-50);
    }
  }
  label.checkbox {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  input[type='checkbox'] {
    height: 100%;
    width: auto;
    position: relative;
  }

  input[type='submit'] {
    width: auto;
    background: none;
    color: white;
    border: 0;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }

  fieldset {
    border: 0;
    background: var(--navyBlue-50);
    border-radius: var(--borderRadius);
    padding: var(--spacing);

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        #b2e2f5 0%,
        #1c3549 50%,
        #000000 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 25% auto;
      animation: ${loading} 1s linear infinite;
    }
  }
`;

export default Form;
