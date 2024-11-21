import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList"; // Adjust path as needed
import "@testing-library/jest-dom/extend-expect"; // To use jest-dom matchers

describe("TodoList Component", () => {
  // Test 1: Ensure initial todos are rendered
  test("renders TodoList component with initial todos", () => {
    render(<TodoList />);
    // Check if the default todos are rendered
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Write Tests/i)).toBeInTheDocument();
  });

  // Test 2: Add a new todo
  test("allows users to add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const button = screen.getByText(/Add Todo/i);

    // Simulate user input
    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    // Assert that the new todo appears
    expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
  });

  // Test 3: Toggle todo completion status
  test("toggles todo completion status", () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);

    // Simulate clicking to toggle completion
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: none");
  });

  // Test 4: Delete a todo
  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText(/Delete/i)[0]; // Get the first delete button

    // Simulate clicking delete button
    fireEvent.click(deleteButton);
    expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
  });
});
