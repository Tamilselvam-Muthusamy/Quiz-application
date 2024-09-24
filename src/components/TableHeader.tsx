import { Button, Input } from "@mantine/core";
import React from "react";

interface TableHeaderType {
  reference?: React.RefObject<HTMLInputElement>;
  title: string | React.JSX.Element;
  onSubmit?: () => void;
  headerComponents?: React.JSX.Element[];
}

function TableHeader({
  reference,
  title,
  onSubmit,
  headerComponents: headerComponents,
}: TableHeaderType) {
  return (
    <div className="flex min-w-max items-center whitespace-nowrap px-5 pb-3 pt-6">
      <h1 className="text-xl font-bold md:text-2xl">{title}</h1>
      <section className="flex w-full justify-end space-x-3">
        {headerComponents?.map((element, index) => (
          <div key={index}>{element}</div>
        ))}
        <section className="flex items-center space-x-1">
          <Input
            placeholder="Search"
            size="compact-md"
            radius="md"
            ref={reference}
          />
          <div>
            <Button
              type="button"
              variant="filled"
              color="gray"
              size="sm"
              onClick={onSubmit}
            >
              Search
            </Button>
          </div>
        </section>
      </section>
    </div>
  );
}

export default TableHeader;
