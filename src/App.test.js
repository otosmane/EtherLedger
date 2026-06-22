// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EtherLedger title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EtherLedger/i);
    expect(titleElement).toBeInTheDocument();
});
