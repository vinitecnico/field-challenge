import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Details from "./";

const handleClear = jest.fn();
const networks = {
  select: {
    city: "Lisbon",
    name: "statios 1",
    stations: [
      {
        id: "abc",
        name: "station",
        empty_slots: 0,
        free_bikes: 10,
        timestamp: new Date().toDateString(),
      },
    ],
  },
};

test("Should Details is function", () => {
  expect(typeof Details).toBe("function");
});

test("should render title 'Select Networks:'", () => {
  render(<Details handleClear={handleClear} />);
  screen.getByText((content) => content.startsWith("Select Networks:"));
});

test('Should render stations and click button "clear"', () => {
    const { container } = render(<Details networks={networks} handleClear={handleClear} />);

    expect(container.querySelector('h3')).toHaveTextContent('city: Lisbon - stations: statios 1')
    
    var thead = container.querySelector('thead')
    expect(thead.querySelectorAll('th')[0]).toHaveTextContent('name')
    expect(thead.querySelectorAll('th')[1]).toHaveTextContent('empty slots')
    expect(thead.querySelectorAll('th')[2]).toHaveTextContent('free bikes')
    expect(thead.querySelectorAll('th')[3]).toHaveTextContent('date')

    var tbody = container.querySelector('tbody')
    expect(tbody.querySelectorAll('td')[0]).toHaveTextContent('station')
    expect(tbody.querySelectorAll('td')[1]).toHaveTextContent(0)
    expect(tbody.querySelectorAll('td')[2]).toHaveTextContent(10)

    const button = container.querySelector('button')
    expect(button).toHaveTextContent('clear')
    fireEvent.click(button)

    expect(handleClear).toBeCalled()
})
