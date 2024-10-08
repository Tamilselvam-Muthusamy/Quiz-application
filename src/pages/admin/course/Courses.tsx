import { useEffect, useRef } from "react";
import TableHeader from "../../../components/TableHeader";
import TableComponent from "../../../components/Table";
import { Button, Table, Tooltip } from "@mantine/core";
import CreateQuestion from "./questions/CreateQuestion";
import CreateCourse from "./CreateCourse";
import { Link } from "react-router-dom";
import { testStore } from "../../../app/courseStore";
import { IconEye } from "@tabler/icons-react";
import AnimatedComponent from "../../../components/AnimatedComponent";

function Courses() {
  const HeaderComponents = [<CreateCourse />];

  const { data, page, search, setPage, fetchData, setSearch, isLoading } =
    testStore();

  const searchRef = useRef<HTMLInputElement>(null);
  const handleSearch = () => {
    setSearch(searchRef.current!.value);
    setPage(1);
  };

  useEffect(() => {
    fetchData();
  }, [page, fetchData, search]);
  return (
    <AnimatedComponent>
      <TableHeader
        reference={searchRef}
        title="Subjects"
        headerComponents={HeaderComponents}
        onSubmit={handleSearch}
      />
      <TableComponent
        isLoading={isLoading}
        columns={["S.NO", "SUBJECT NAME", "ACTION"]}
        from={data?.from ?? 0}
        to={data?.to ?? 0}
        total={data?.total ?? 0}
        totalPages={data?.totalPages ?? 0}
        currentPage={page}
        onPageChanged={setPage}
      >
        {data?.data?.map((value, index) => (
          <Table.Tr key={index}>
            <Table.Td>{data.from + index}</Table.Td>
            <Table.Td>{value.subject}</Table.Td>
            <Table.Td className="flex flex-row">
              <div className="mr-5">
                <CreateQuestion value={value} />
              </div>
              <div>
                <Link to={`/subjects/${value.id}`}>
                  <Tooltip label="View Question">
                    <Button color="teal" variant="outline">
                      <IconEye />
                    </Button>
                  </Tooltip>
                </Link>
              </div>
            </Table.Td>
          </Table.Tr>
        ))}
      </TableComponent>
    </AnimatedComponent>
  );
}

export default Courses;
