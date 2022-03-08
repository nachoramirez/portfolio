import styled from 'styled-components'

export const ContactContainter = styled.section`
  flex-direction: column;
  align-items: center;
  transition: 1s ease-in-out;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transform: ${(props) =>
    props.isVisible ? 'translateX(0)' : 'translateX(-500px)'};
`

export const Title = styled.h1`
  font-size: 3.5em;

  &::after {
    display: block;
    content: '';
    height: 4px;
    width: 50%;
    background-color: var(--white);
    border-radius: var(--border-radius-pill);
    margin: 20px auto;
  }
`

export const Form = styled.form`
  position: relative;
  width: 55%;
  height: 50%;
`

export const Input = styled.input`
  font-size: 1.5em;
  color: var(--white);
  width: 100%;
  height: ${(props) => props.height || '70px'};
  margin: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  padding: 10px 20px 0px 20px;
  &:focus {
    outline: none;
  }
  ::placeholder {
    top: 20px;
    color: var(--white);
  }
`

export const TextArea = styled.textarea`
  position: relative;
  font-size: 1.9em;
  color: var(--white);
  width: 100%;
  height: ${(props) => props.height || '70px'};
  margin: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  padding: 10px 20px 0px 20px;
  resize: none;
  &:focus {
    outline: none;
  }
  ::placeholder {
    position: absolute;
    top: 20px;
    color: var(--white);
  }
`

export const SubmitButton = styled.button`
  width: 25%;
  height: 70px;
  border-radius: 0;
  position: absolute;
  right: 0;
`

export const Alert = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: auto;
  padding: 10px;
  color: green;
  border: 2px solid green;
  transition: 300ms ease-in-out;
  background-color: rgba(255, 255, 255, 0.8);
  transform: ${(props) => (props.show ? '' : 'translateX(300px)')};
  opacity: ${(props) => (props.show ? '1' : '0')};
  & > h1 {
    font-size: 1.3em;
    font-weight: 400;
  }
`
