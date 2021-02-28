import React from "react";
import axiosMock from "axios";
import { getNetworks, getStations } from "./";

jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({ data: {} })),
}));

describe("getNetworks", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("getNetworks successfully data from an API", async () => {
    const data = {
      data: {},
    };
    axiosMock.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(getNetworks()).resolves.toEqual(data);
  });

  it("getNetworks erroneously data from an API", async () => {
    const errorMessage = "Network Error";

    axiosMock.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    await expect(getNetworks()).rejects.toThrow(errorMessage);
  });
});

describe("getStations", () => {
    afterEach(() => {
      jest.resetAllMocks();
    });
  
    it("getStations successfully data from an API", async () => {
      const data = {
        data: {},
      };
      axiosMock.get.mockImplementationOnce(() => Promise.resolve(data));
      await expect(getStations()).resolves.toEqual(data);
    });
  
    it("getStations erroneously data from an API", async () => {
      const errorMessage = "Network Error";
  
      axiosMock.get.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage))
      );
  
      await expect(getStations()).rejects.toThrow(errorMessage);
    });
  });
