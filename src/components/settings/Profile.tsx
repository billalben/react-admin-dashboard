import { User } from "lucide-react";
import SettingSection from "./SettingSection";

const Profile = () => {
  return (
    <SettingSection icon={User} title={"Profile"}>
      <div className="flex flex-col items-center mb-6 sm:flex-row">
        <img
          src="/me.jpeg"
          alt="Profile image"
          className="object-cover w-20 h-20 mr-4 rounded-full"
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-100">Billal Benz</h3>
          <p className="text-gray-400">contact@billalbenz.me</p>
        </div>
      </div>

      <button className="w-full px-4 py-2 font-bold text-white transition duration-200 bg-indigo-600 rounded hover:bg-indigo-700 sm:w-auto">
        Edit Profile
      </button>
    </SettingSection>
  );
};
export default Profile;
