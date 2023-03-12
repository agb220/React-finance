import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import "jest-styled-components";

import styled from "styled-components";
import * as reduxHooks from "react-redux";
import * as actions from "../../redux/actions/tickersAction";
import * as userActions from "../../redux/actions/userTickersAction";

import List from "./List";

jest.mock("react-redux");

const mockedSelector = jest.spyOn(reduxHooks, "useSelector");
const mockedDispatch = jest.spyOn(reduxHooks, "useDispatch");

const ticker = [
  {
    ticker: "AAPL",
    exchange: "NASDAQ",
    price: "190.67",
    change: "155.50",
    change_percent: "0.62",
    dividend: "0.91",
    yield: "1.86",
    last_trade_time: "2023-03-07T04:27:51.000Z",
  },
];

describe("List component", () => {
  test("Should create List component with empty ticker", () => {
    mockedSelector.mockReturnValue([]);
    const component = render(<List />);
    expect(component.firstChild).toMatchSnapshot();
  });
  test("Should create List component with ticker", () => {
    mockedSelector.mockReturnValue(ticker);
    const component = render(<List />);
    expect(component.firstChild).toMatchSnapshot();
  });
  test("Should create List component", () => {
    mockedDispatch.mockReturnValue(jest.fn());
    const component = render(<List />);
    expect(component.firstChild).toMatchSnapshot();
  });

  // test("Should dispatch actions", () => {
  //   const dispatch = jest.fn();
  //   mockedDispatch.mockReturnValue(dispatch);
  //   const mockedSetUserTickers = jest.spyOn(actions, "setTickers");

  //   render(<List ticker={ticker} />);

  //   // fireEvent.click(screen.getRole("add"));

  //   expect(dispatch).toHaveBeenCalledTimes(1);
  //   expect(mockedSetUserTickers).toHaveBeenCalled();
  // });
});
