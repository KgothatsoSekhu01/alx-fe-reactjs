import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList', () => {
  it('renders correctly with initial todos', () => {
    const demoTodos = [
      { id: 1, text: 'Learn Jest', completed: false },
      { id: 2, text: 'Learn React Testing Library', completed: false },
    ];

    render(<TodoList />);
    
    // Check if initial todos are rendered
    demoTodos.forEach(todo => {
      expect(screen.getByText(todo.text)).toBeInTheDocument();
    });
  });

  it('adds a new todo', () => {
    render(<TodoList />);

    // Simulate user input and form submission
    const input = screen.getByPlaceholderText('Enter a new todo');
    const button = screen.getByText('Add Todo');
    
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    // Check if the new todo is added to the list
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  it('toggles todo completion state', () => {
    render(<TodoList />);

    const todoItem = screen.getByText('Learn Jest');
    fireEvent.click(todoItem); // Toggle to completed
    
    // Check if the todo is marked as completed
    expect(todoItem.closest('li')).toHaveClass('completed');

    fireEvent.click(todoItem); // Toggle back to not completed
    expect(todoItem.closest('li')).not.toHaveClass('completed');
  });

  it('deletes a todo', () => {
    render(<TodoList />);

    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);

    // Check if the todo is removed from the list
    expect(screen.queryByText('Learn Jest')).not.toBeInTheDocument();
  });
});
