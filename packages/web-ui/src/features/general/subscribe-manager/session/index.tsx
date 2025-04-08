import { DataTable } from "@/components/table";
import { useQuery } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import { fetchConnectionList } from "./service";

export default function SessionList() {
  const columns: ColumnDef<any>[] = [
    {
      id: "clientId",
      accessorKey: "clientId",
      header: "ClientId",
    },
    {
      accessorKey: "topicName",
      header: "TopicName",
    },
    {
      accessorKey: "qos",
      header: "QOS",
    },
  ];

  const query = useQuery({
    queryKey: ["QueryTopicData"],
    queryFn: fetchConnectionList,
  });

  return (
    <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
      <DataTable query={query} columns={columns} hideToolBar />
    </div>
  );
}
