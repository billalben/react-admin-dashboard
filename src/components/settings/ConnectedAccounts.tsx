import { useState } from "react";
import SettingSection from "./SettingSection";
import { HelpCircle, Plus } from "lucide-react";
import { accountInfo } from "@/data";
import { cn } from "@/lib/utils";

const ConnectedAccounts = () => {
  const [connectedAccounts, setConnectedAccounts] = useState(accountInfo);

  return (
    <SettingSection icon={HelpCircle} title={"Connected Accounts"}>
      {connectedAccounts.map((account) => (
        <div
          key={account.id}
          className="flex items-center justify-between py-3"
        >
          <div className="flex gap-1">
            <img
              src={account.icon}
              alt="Social img"
              className="object-cover mr-2 rounded-full size-6"
            />
            <span className="text-gray-300">{account.name}</span>
          </div>
          <button
            className={cn(
              "rounded px-3 py-1 transition duration-200",
              account.connected
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-600 hover:bg-gray-700",
            )}
            onClick={() => {
              setConnectedAccounts(
                connectedAccounts.map((acc) => {
                  if (acc.id === account.id) {
                    return {
                      ...acc,
                      connected: !acc.connected,
                    };
                  }
                  return acc;
                }),
              );
            }}
          >
            {account.connected ? "Connected" : "Connect"}
          </button>
        </div>
      ))}

      <button className="flex items-center mt-4 text-indigo-400 transition duration-200 hover:text-indigo-300">
        <Plus size={18} className="mr-2" /> Add Account
      </button>
    </SettingSection>
  );
};
export default ConnectedAccounts;
