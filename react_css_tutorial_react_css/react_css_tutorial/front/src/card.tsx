import icon from "./icon.png";

export function Card() {
  return (
    <div className="flex flex-row p-6 w-72 w-full md:w-72 rounded-lg bg-green-50 md:bg-purple-50 shadow-md hover:shadow-lg">
      <div className="border rounded-full p-2 bg-white">
        <img src={icon} className="h-20 w-20" alt="Icon" />
      </div>
      <div className="flex flex-col justify-center ml-6">
        <div className="text-lg">engineer</div>
        <div className="text-4xl">Ken</div>
      </div>
    </div>
  );
}
