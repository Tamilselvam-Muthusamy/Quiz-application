import { Pagination, ScrollArea, Table } from "@mantine/core";
import TableSkeleton from "./TableSkeleton";

interface TableProps {
  isLoading: boolean;
  columns: string[];
  from: number;
  to: number;
  total: number;
  totalPages: number;
  children: React.ReactNode;
  currentPage: number;
  onPageChanged: (page: number) => void;
}

function TableComponent({
  isLoading = true,
  columns,
  from,
  to,
  total,
  totalPages,
  children,
  currentPage,
  onPageChanged,
}: TableProps) {
  return (
    <section className="px-5">
      <ScrollArea className="w-full">
        <Table
          withColumnBorders
          highlightOnHover
          withRowBorders
          withTableBorder
          stickyHeader
          horizontalSpacing="md"
          className="w-full whitespace-nowrap"
        >
          <Table.Thead className="border border-primary-400 bg-primary-100">
            <Table.Tr>
              {columns.map((heading, index) => (
                <Table.Th key={index}>{heading}</Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody className="border border-primary-400">
            {isLoading ? (
              <TableSkeleton columns={columns} />
            ) : from > 0 ? (
              <>{children}</>
            ) : (
              <Table.Tr className="w-full">
                <Table.Td colSpan={columns.length}>
                  <h3 className="flex justify-center">No Data Found</h3>
                </Table.Td>
              </Table.Tr>
            )}
          </Table.Tbody>
        </Table>
      </ScrollArea>

      {total > 0 && (
        <div className="flex items-center justify-between py-2">
          <div className="text-base text-gray-700">
            Showing From {from} To {to} of {total} results
          </div>
          <Pagination
            radius="lg"
            color="gray"
            total={isLoading ? 1 : totalPages}
            value={isLoading ? 0 : currentPage}
            onChange={isLoading ? () => {} : onPageChanged}
          />
        </div>
      )}
    </section>
  );
}

export default TableComponent;
