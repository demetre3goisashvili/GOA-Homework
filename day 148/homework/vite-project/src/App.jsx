import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import ProfileForm from "./components/ProfileForm";

export default function App() {
  const [profile, setProfile] = useState(null);

  const handleProfileSubmit = (data) => {
    setProfile(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <ProfileForm onSubmit={handleProfileSubmit} />
        {profile && <ProfileCard {...profile} />}
      </div>
    </div>
  );
}