import { Header } from "@/components/common";
import ConnectedAccounts from "@/components/settings/ConnectedAccounts";
import DangerZone from "@/components/settings/DangerZone";
import Notifications from "@/components/settings/Notifications";
import Profile from "@/components/settings/Profile";
import Security from "@/components/settings/Security";

const SettingsPage = () => {
  return (
    <div className="relative z-10 flex-1 overflow-auto bg-gray-900">
      <Header title="Settings" />

      <main className="max-w-4xl px-4 py-6 mx-auto mt-20 lg:px-8">
        <Profile />
        <Notifications />
        <Security />
        <ConnectedAccounts />
        <DangerZone />
      </main>
    </div>
  );
};

export default SettingsPage;
