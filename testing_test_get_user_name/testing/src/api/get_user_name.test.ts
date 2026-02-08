import {getUserName} from "@/api/get_user_name";
import {fetchUser} from "@/api/fetch_user";
import {User} from "@/api/models/user";
import {jest} from "@jest/globals";

jest.mock("@/api/fetch_user");

const mockedFetchUser = jest.mocked(fetchUser);

describe("getUserName", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return the user name when fetchUser resolves successfully", async () => {
    // Arrange
    const mockUser = new User("John Doe", "john@example.com");
    mockUser.id = 1;
    mockedFetchUser.mockResolvedValue(mockUser);

    // Act
    const userName = await getUserName(1);

    // Assert
    expect(userName).toBe("John Doe");
    expect(mockedFetchUser).toHaveBeenCalledWith(1);
    expect(mockedFetchUser).toHaveBeenCalledTimes(1);
  });

  it("should throw an error when fetchUser rejects", async () => {
    // Arrange
    const mockError = new Error("User not found");
    mockedFetchUser.mockRejectedValue(mockError);

    // Act & Assert
    await expect(getUserName(2)).rejects.toThrow("User not found");
    expect(mockedFetchUser).toHaveBeenCalledWith(2);
    expect(mockedFetchUser).toHaveBeenCalledTimes(1);
  });

  it("should return null when fetchUser returns null", async () => {
    // Arrange
    mockedFetchUser.mockResolvedValue(null);

    // Act
    const result = await getUserName(3);

    // Assert
    expect(result).toBeNull();
    expect(mockedFetchUser).toHaveBeenCalledWith(3);
    expect(mockedFetchUser).toHaveBeenCalledTimes(1);
  });
});
