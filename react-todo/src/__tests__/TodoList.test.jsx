import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';  // Adjust path based on your folder structure

describe('TodoList', () => {
  it('renders correctly with initial todos', () => {
    const demoTodos = [
      { id: 1, text: 'Learn Jest', completed: false },
      { id: 2, text: 'Learn React Testing Library', completed: false },
    ];

    render(<TodoList todos={demoTodos} />);

    demoTodos.forEach(todo => {
      expect(screen.getByText(todo.text)).toBeInTheDocument();
    });
  });

  it('toggles todo completion state', () => {
    const demoTodos = [
      { id: 1, text: 'Learn Jest', completed: false },
      { id: 2, text: 'Learn React Testing Library', completed: false },
    ];

    render(<TodoList todos={demoTodos} />);

    // Find the checkbox or button used for toggling (assuming it's a checkbox)
    const toggleButtons = screen.getAllByRole('checkbox');

    // Toggle the first todo item
    fireEvent.click(toggleButtons[0]);

    // Check if the todo item state has been toggled to completed
    expect(screen.getByText('Learn Jest').closest('li')).toHaveClass('completed');

    // Toggle the first todo item back to not completed
    fireEvent.click(toggleButtons[0]);

    // Ensure the todo is no longer marked as completed
    expect(screen.getByText('Learn Jest').closest('li')).not.toHaveClass('completed');
  });
});
