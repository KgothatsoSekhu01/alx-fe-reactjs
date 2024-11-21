import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList', () => {
  it('renders correctly with initial todos', () => {
    render(<TodoList />);

    expect(screen.getByText('Learn Jest')).toBeInTheDocument();
    expect(screen.getByText('Learn React Testing Library')).toBeInTheDocument();
  });

  it('adds a new todo', () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText('Enter a new todo');
    const button = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  it('toggles todo completion state', () => {
    render(<TodoList />);

    const todoItem = screen.getByText('Learn Jest');
    fireEvent.click(todoItem);
    expect(todoItem.closest('li')).toHaveClass('completed');

    fireEvent.click(todoItem);
    expect(todoItem.closest('li')).not.toHaveClass('completed');
  });

  it('deletes a todo', () => {
    render(<TodoList />);

    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);

    expect(screen.queryByText('Learn Jest')).not.toBeInTheDocument();
  });
});
