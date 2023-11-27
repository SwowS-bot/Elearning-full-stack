"use client"
import { useSession } from "next-auth/react";
import React from "react";

const Courses = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session && session.user?.email ? (
        <>
          <div className="w-full h-[80vh] relative">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/EWGCmgRYwZo?si=Ueqe8QzuAW22pP15"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </>
      ) : (
        <>
          <p>Login please...</p>
        </>
      )}
    </div>
  );
};

export default Courses;
