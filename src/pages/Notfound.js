import { useEffect } from "react";

export default function Notfound() {
  useEffect(() => {
    document.title = "Not Found - Instagram";
  });
  return (
    <div className="bg-gray-background">
      <div className="mx-auto max-w-screen-lg">
        <p className="text-center font-bold text-3xl">Not Found!</p>
      </div>
    </div>
  );
}
