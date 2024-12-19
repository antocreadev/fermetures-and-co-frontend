import TableauOrders from "@/components/backoffice/tableau-orders";

export default function OrdersPage() {
  return (
    <div className="p-4 space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Commandes</h2>
        <TableauOrders />
      </div>
    </div>
  );
}
