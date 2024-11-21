import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList"; // Adjust path as necessary
import "@testing-library/jest-dom/extend-expect";

describe("TodoList", () => {
  test("renders TodoList component with initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Write Tests/i)).toBeInTheDocument();
  });

  test("allows users to add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const button = screen.getByText(/Add Todo/i);
    
    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);
    
    expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
  });

  test("toggles todo completion status", () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);
    
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");
    
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText(/Delete/i)[0];
    
    fireEvent.click(deleteButton);
    expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
  });
});
