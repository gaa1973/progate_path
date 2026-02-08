import {getUserName} from "@/api/get_user_name";
import {fetchUser} from "@/api/fetch_user";
import {jest} from "@jest/globals";

jest.mock("@/api/fetch_user");

const mockedFetchUser = jest.mocked(fetchUser);

describe("getUserName", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return the user name when fetchUser resolves successfully", async () => {
    // Arrange
    const mockUser = {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      save: jest.fn(),
    } as any;
    mockedFetchUser.mockResolvedValue(mockUser);

    // Act
    const userName = await getUserName(1);

    // Assert
    expect(userName).toBe("John Doe");
    expect(mockedFetchUser).toHaveBeenCalledWith(1);
  });

  it("should throw an error when fetchUser rejects", async () => {
    // Arrange
    const mockError = new Error("User not found");
    mockedFetchUser.mockRejectedValue(mockError);
    // Act & Assert
    await expect(getUserName(2)).rejects.toThrow("User not found");
    expect(mockedFetchUser).toHaveBeenCalledWith(2);
  });

  it("should return null when fetchUser returns null", async () => {
    // Arrange
    mockedFetchUser.mockResolvedValue(null);

    // Act
    const result = await getUserName(3);

    // Assert
    expect(result).toBeNull();
    expect(mockedFetchUser).toHaveBeenCalledWith(3);
  });
});
