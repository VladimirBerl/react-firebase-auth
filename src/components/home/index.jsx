import React from "react";
import { useAuth } from "../../contexts/authContext";

const Home = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <div className="text-2xl font-bold pt-14">
      Привет{" "}
      {currentUser.displayName ? currentUser.displayName : currentUser.email},
      вы сейчас вошли в систему.
    </div>
  );
};

export default Home;
