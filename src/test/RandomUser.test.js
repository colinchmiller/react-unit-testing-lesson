import { fireEvent, screen, render } from "@testing-library/react";
import { RandomUser } from "components/RandomUser/RandomUser";
import axios from "axios";
jest.mock("axios");

describe("<RandomUser/>", () => {
  it("loads user when clicking on the button", async () => {
    render(<RandomUser />);
    axios.get.mockResolvedValueOnce({ data: MOCK_USER_RESPONSE });
    const button = screen.getByRole("button");
    fireEvent.click(button);
    const titleEl = await screen.findByRole("heading", { level: 2 });
    // screen.debug(titleEl);
    expect(titleEl.textContent).toBe("Victoria Sotelo");

    //use find by text instead of find by role, if role used, it will return "Victoria Sotelo" again, since the value is already there when called
    axios.get.mockResolvedValueOnce({ data: MOCK_USER_RESPONSE_2 });
    fireEvent.click(button);
    const titleEl2 = await screen.findByText("Cod Iku");
    expect(titleEl2.textContent).toBe("Cod Iku");
  });
});

const MOCK_USER_RESPONSE = {
  results: [
    {
      gender: "female",
      name: { title: "Ms", first: "Victoria", last: "Sotelo" },
      location: {
        street: { number: 9078, name: "Andador Coahuila de Zaragoza" },
        city: "Yecapixtla",
        state: "Chiapas",
        country: "Mexico",
        postcode: 65128,
        coordinates: { latitude: "22.7659", longitude: "143.4465" },
        timezone: {
          offset: "+8:00",
          description: "Beijing, Perth, Singapore, Hong Kong",
        },
      },
      email: "victoria.sotelo@example.com",
      login: {
        uuid: "fdcde0f2-90e0-4811-9f9a-9b5689999945",
        username: "redmeercat767",
        password: "mona",
        salt: "a4bGheM9",
        md5: "3d8e907ce3c2025777e25e2859ddf678",
        sha1: "ceb3506d517aedf3e09b0b5dbdbf1f69b4ee0c03",
        sha256:
          "2488561bde15aca52fd9cab1bb721d9e45f450c465399efa4ba048b307229ab5",
      },
      dob: { date: "1964-12-16T18:35:15.412Z", age: 58 },
      registered: { date: "2010-06-15T23:31:57.645Z", age: 13 },
      phone: "(656) 555 2325",
      cell: "(608) 073 2614",
      id: { name: "NSS", value: "93 74 06 5751 1" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/49.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/49.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/49.jpg",
      },
      nat: "MX",
    },
  ],
  info: { seed: "db6c4ebef16e3223", results: 1, page: 1, version: "1.4" },
};

const MOCK_USER_RESPONSE_2 = {
  results: [
    {
      gender: "female",
      name: { title: "Ms", first: "Cod", last: "Iku" },
      location: {
        street: { number: 9078, name: "Andador Coahuila de Zaragoza" },
        city: "Yecapixtla",
        state: "Chiapas",
        country: "Mexico",
        postcode: 65128,
        coordinates: { latitude: "22.7659", longitude: "143.4465" },
        timezone: {
          offset: "+8:00",
          description: "Beijing, Perth, Singapore, Hong Kong",
        },
      },
      email: "victoria.sotelo@example.com",
      login: {
        uuid: "fdcde0f2-90e0-4811-9f9a-9b5689999945",
        username: "redmeercat767",
        password: "mona",
        salt: "a4bGheM9",
        md5: "3d8e907ce3c2025777e25e2859ddf678",
        sha1: "ceb3506d517aedf3e09b0b5dbdbf1f69b4ee0c03",
        sha256:
          "2488561bde15aca52fd9cab1bb721d9e45f450c465399efa4ba048b307229ab5",
      },
      dob: { date: "1964-12-16T18:35:15.412Z", age: 58 },
      registered: { date: "2010-06-15T23:31:57.645Z", age: 13 },
      phone: "(656) 555 2325",
      cell: "(608) 073 2614",
      id: { name: "NSS", value: "93 74 06 5751 1" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/49.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/49.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/49.jpg",
      },
      nat: "MX",
    },
  ],
  info: { seed: "db6c4ebef16e3223", results: 1, page: 1, version: "1.4" },
};
