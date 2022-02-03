import React from "react";
import { navigate } from "@reach/router";
import { Form as AntDForm, Input, Button, Divider } from "antd";
import Header from "../../components/libs/Header";
import { useDispatch, useSelector } from "react-redux";
import { createUserData, updateUserData } from "../../redux/action";
import { FormStyle, FormContainer, FormArea, ButtonArea } from "./style";
import { getUserId } from "../../helpers";

const Form = ({ location }) => {
  const [form] = AntDForm.useForm();
  const { userData, createUserLoading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const userId = getUserId(location.pathname);

  const userToEdit = userData?.filter((user) => user.id === Number(userId));

  const onFinish = (values) => {
    if (userId) {
      return dispatch(updateUserData(userData, values, userId));
    }
    dispatch(createUserData(userData, { id: userData.length + 1, ...values }));

    form.resetFields();
  };

  return (
    <FormStyle>
      <Header text="Dashboard" onClick={() => navigate("/")} />
      <FormContainer>
        <h3>Form</h3>
        <Divider />
        <FormArea>
          <AntDForm
            form={form}
            initialValues={{
              name: userToEdit?.[0]?.name,
              email: userToEdit?.[0]?.email,
            }}
            onFinish={onFinish}
            autoComplete="off"
            requiredMark={false}
          >
            <AntDForm.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </AntDForm.Item>

            <AntDForm.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input type="email" />
            </AntDForm.Item>

            <ButtonArea>
              <Button danger onClick={() => navigate("/")}>
                Cancel
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                loading={createUserLoading}
              >
                {userId ? "Edit" : "Submit"}
              </Button>
            </ButtonArea>
          </AntDForm>
        </FormArea>
      </FormContainer>
    </FormStyle>
  );
};

export default Form;
