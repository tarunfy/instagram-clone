import { useEffect } from "react";
import Header from "../components/Header";
export default function Notfound() {
  useEffect(() => {
    document.title = "Not Found - Instagram";
  });
  return (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <p className="text-center font-bold text-3xl">Not Found!</p>
      </div>
    </div>
  );
}
