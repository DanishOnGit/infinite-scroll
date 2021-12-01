import { StarRating } from "./StarRating";

export const Tile = () => {
  const legends = ["W", "DC", "Pr", "C"];
  return (
    <>
      <div className="tile w-48">
        <div className="flex justify-between pl-2 pr-5 py-3 bg-white">
          <div>
            <StarRating />
          </div>
          <p className="date tracking-widest text-xl font-bold">17</p>
        </div>
        <div className="aspect-w-3 aspect-h-4">
          <img
            className="w-full h-full"
            src="https://images.unsplash.com/photo-1638210390620-f5dee405dd3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="profile"
          />
        </div>
        <div className="flex items-center justify-center p-3 bg-white">
          {legends?.map((legend) => (
            <div className="legend rounded-full h-7 w-7 flex items-center justify-center p-1 mx-2 bg-gray-500 text-white">
              {legend}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
