'use client'
import NavMobile from "../ui/nav-mobile";
import { ToastContainer } from "react-toastify";
import StravaFeed from "../ui/strava-feed";

export default function Running() {
  return (
    <>
      <NavMobile />
      <ToastContainer />
      <div className="flex flex-col items-center min-h-screen p-4 mt-20">
        <h1 className="text-3xl text-center my-4 md:my-8 font-bold">next race: TBD</h1>
        <div className="w-full h-full">
          <StravaFeed />
        </div>
      </div>
    </>
  );
}