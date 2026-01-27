type Generation = "Child" | "Young" | "Adult" | "Invalid age";

export const determineGeneration = (age: number): Generation => {
  if (age < 0) {
    return "Invalid age";
  } else if (age <= 12) {
    return "Child";
  } else if (age <= 29) {
    return "Young";
  } else {
    return "Adult";
  }
};
