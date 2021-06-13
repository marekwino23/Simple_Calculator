import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';


describe("Calculator", () => {
  it('renders properly', () => {
    render(<Calculator />);
    const result = screen.getByLabelText("result");
    const button = screen.getByRole('button', { name: /7/ });
    expect(result).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  it('should check calculate mathematic operation after click on number and operator sign and valid result', () => {
    render(<Calculator />);
    const result = screen.getByLabelText("result");
    const threeNumberButton = screen.getByRole('button', { name: '3' });
    const sevenNumberButton = screen.getByRole('button', { name: '7' });
    const plusSignButton = screen.getByRole('button', { name: '+' });
    const equalSignButton = screen.getByRole('button', { name: '=' });
    screen.debug();
    fireEvent.click(threeNumberButton);
    expect(result).toHaveValue('3');
    fireEvent.click(plusSignButton);
    expect(result).toHaveValue('3+');
    fireEvent.click(sevenNumberButton);
    expect(result).toHaveValue('3+7');
    fireEvent.click(equalSignButton);
    expect(result).toHaveValue('10');
  });
})

