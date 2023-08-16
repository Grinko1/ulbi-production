import { render, screen } from "@testing-library/react"
import { Button, ThemeButton } from './Button';


describe('Button', () => {
    test('one first parametr', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getAllByText('TEST')).toHaveClass('clear');
        screen.debug()
    })
})