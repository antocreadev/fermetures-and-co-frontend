import AddAdmin from "@/components/backoffice/add-admin";
import TableauAdmins from "@/components/backoffice/tableau-admins";

export default function AdminsPage() {
  return (
    <div className="p-4 space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Administrateurs</h2>
        <div className="flex gap-4">
          <AddAdmin />
        </div>
        <TableauAdmins />
      </div>
    </div>
  );
}
