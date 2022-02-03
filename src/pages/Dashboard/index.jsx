import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import Table from "../../components/libs/Table/Table";
import { Popconfirm, Button } from "antd";
import {
  fetchUserData,
  updateRefetchData,
  deleteUserData,
} from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { DashboardStyle, TableContainer, TableHeader } from "./style";
import Header from "../../components/libs/Header";

const Dashboard = () => {
  const [sortedInfo, setSortedInfo] = useState({});
  const { userData, loading, refetchData } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (refetchData) {
      dispatch(fetchUserData());
    }
    dispatch(updateRefetchData(false));
    // eslint-disable-next-line
  }, []);

  const handleDeleteUserData = (userData, id) => {
    dispatch(deleteUserData(userData, id));
  };

  const columns = [
    {
      dataIndex: "id",
      title: "Id",
      key: "id",
      width: 5,
    },
    {
      dataIndex: "name",
      title: "Name",
      key: "name",
      width: 10,
    },
    {
      dataIndex: "username",
      title: "Username",
      key: "username",
      width: 10,
      sorter: (a, b) => {
        if (a.username < b.username) {
          return -1;
        }
        if (a.username > b.username) {
          return 1;
        }
        return 0;
      },
      sortOrder: sortedInfo.columnKey === "username" && sortedInfo.order,
      render: (username) => (username === undefined ? "---" : username),
    },
    {
      dataIndex: "city",
      title: "City",
      key: "city",
      width: 10,
      render: (city) => (city === undefined ? "---" : city),
    },
    {
      dataIndex: "email",
      title: "Email",
      key: "email",
      width: 10,
    },
    {
      title: "Edit",
      key: "edit",
      render: (record) => (
        <Button
          type="primary"
          onClick={() => navigate(`/form/edit/${record.id}`)}
        >
          Edit
        </Button>
      ),
      width: 2,
    },
    {
      title: "Delete",
      key: "delete",
      render: (record) => (
        <Popconfirm
          title="Are you sure you want to delete this user?"
          onConfirm={() => handleDeleteUserData(userData, record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button danger type="primary">
            Delete
          </Button>
        </Popconfirm>
      ),
      width: 2,
    },
  ];

  return (
    <DashboardStyle>
      <Header
        text="Dashboard"
        onClick={() => navigate("/")}
        data-testid="header"
      />
      <TableContainer>
        <TableHeader>
          <p data-testid="user-list">User list</p>
          <Button
            type="primary"
            onClick={() => navigate("/form/create")}
            data-testid="add-new"
          >
            Add new
          </Button>{" "}
        </TableHeader>
        <Table
          columns={columns}
          dataSource={userData}
          loading={loading}
          setSortedInfo={setSortedInfo}
          data-testid="table"
        />
      </TableContainer>
    </DashboardStyle>
  );
};

export default Dashboard;
