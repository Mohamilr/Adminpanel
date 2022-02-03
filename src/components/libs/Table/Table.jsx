import React from "react";
import { Table as AntDTable } from "antd";

const Table = ({ columns, dataSource, loading, setSortedInfo }) => {
  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };

  return (
    <AntDTable
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      onChange={handleChange}
      scroll={{ x: "100vw" }}
    />
  );
};

export default Table;
