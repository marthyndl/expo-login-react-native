import React from 'react';
import { render, waitForElement, fireEvent, screen } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import Login from '../src/components/Login'

describe('<Login />', () => {
    it('should be connected text null', () => {
        const { queryByText } = render(<Login />);
        let token = "Login - successful";
        expect(queryByText(token)).toBe(null);
    });
    it('should be disconnected text null', () => {
      const { queryByText } = render(<Login />);;
      let hasLoginError = "Credentials are invalid";
      expect(queryByText(hasLoginError)).toBe(null);
    });
    it('should text input email', () => {
        const { queryByText, getByTestId } = render(<Login />);
        let emailText = 'eve.holt@reqres.in';
        const inputTextEmail = screen.getByPlaceholderText('email');
        fireEvent.changeText(inputTextEmail, emailText);
        expect(inputTextEmail.props.value).toBe(emailText);
    });
    it('should text input password', () => {
        const { queryByText, getByTestId } = render(<Login />);
        let passwordText = 'cityslicka';
        const inputTextPassword = screen.getByPlaceholderText('password');
        fireEvent.changeText(inputTextPassword, passwordText);
        expect(inputTextPassword.props.value).toBe(passwordText);
    });
    it('should submit when pressing enter loginSuccessful', () => {
        const { queryByText, getByTestId } = render(<Login />);
        let emailText = 'eve.holt@reqres.in';
        let passwordText = 'cityslicka';
        let loginSuccessful = "Login - successful";
        const inputTextEmail = screen.getByPlaceholderText('email');
        const inputTextPassword = screen.getByPlaceholderText('password');
        const inputSubmit = screen.queryByText('Login Submit');

        fireEvent.changeText(inputTextEmail, emailText);
        fireEvent.changeText(inputTextPassword, passwordText);
        fireEvent.press(inputSubmit);

        const successful = screen.findByText(loginSuccessful)
        expect(successful).toBeDefined() 
    });
    it('should submit when pressing enter hasLoginError', () => {
        const { queryByText, getByTestId } = render(<Login />);
        let emailText = 'eve.holt@reqres.in';
        let passwordText = 'asd';
        let hasLoginError = 'Credentials are invalid';
        const inputTextEmail = screen.getByPlaceholderText('email');
        const inputTextPassword = screen.getByPlaceholderText('password');
        const inputSubmit = screen.queryByText('Login Submit');

        fireEvent.changeText(inputTextEmail, emailText);
        fireEvent.changeText(inputTextPassword, passwordText);
        fireEvent.press(inputSubmit);

        const loginError = screen.findByText(hasLoginError)
        expect(loginError).toBeDefined() 
    });
  });