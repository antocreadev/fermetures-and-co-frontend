import CategoryNavList from "@/components/CategoryNavList";
import Navbar from "@/components/Navbar";
import LogoutButton from "@/components/user/logout-button";
import UserInfo from "@/components/user/user-info";

export default function ComptePage() {
  return (
    <main className="flex flex-col h-screen max-h-screen">
      <Navbar />
      <CategoryNavList />

      <div className="pt-4 flex flex-col items-center">
        <UserInfo />
        <div className="w-24 pt-4">
          <LogoutButton />
        </div>
      </div>
    </main>
  );
}
