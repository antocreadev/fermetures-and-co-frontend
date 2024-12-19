import TableauUsers from "@/components/backoffice/tableau-users";

export default function UsersPage() {
  return (
    <div className="p-4 space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Utilisateurs</h2>
        <TableauUsers />
      </div>
    </div>
  );
}
