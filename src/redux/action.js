import {
  FETCH_USER_DATA,
  USER_DATA_LOADING,
  REFETCH_USER_DATA,
  CREATE_USER_LOADING,
} from "./types";
import axios from "axios";
import { Toaster } from "../helpers";
import { navigate } from "@reach/router";

export const fetchUserData = () => {
  return async (dispatch) => {
    try {
      dispatch(userDataLoading(true));
      const { data } = await axios(
        "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
      );

      const treatedData = data.map((user) => {
        return {
          id: user.id,
          key: user.id,
          name: user.name,
          username: user.username,
          city: user.address.city,
          email: user.email,
        };
      });

      dispatch(userData(treatedData));
      dispatch(userDataLoading(false));
    } catch (error) {
      Toaster.error("Something went wrong, please try again");
      console.log(error);
    }
  };
};

export const createUserData = (existingData, body) => {
  return async (dispatch) => {
    try {
      dispatch(createUserLoading(true));
      await axios.post(
        "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data",
        body
      );

      Toaster.success("User created successfully");

      dispatch(
        userData([
          {
            key: body?.id,
            ...body,
          },
          ...existingData,
        ])
      );
      dispatch(createUserLoading(false));
    } catch (error) {
      Toaster.error("Something went wrong, please try again");
      console.log(error);
    }
  };
};

export const deleteUserData = (existingData, id) => {
  return async (dispatch) => {
    try {
      dispatch(userDataLoading(true));
      await axios.delete(
        `https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/1`
      );

      Toaster.success("User deleted successfully");

      const updatedData = existingData.filter((user) => user.id !== id);

      dispatch(userData(updatedData));
      dispatch(userDataLoading(false));
    } catch (error) {
      Toaster.error("Something went wrong, please try again");
      console.log(error);
    }
  };
};

export const updateUserData = (existingData, body, id) => {
  return async (dispatch) => {
    try {
      dispatch(createUserLoading(true));
      await axios.patch(
        `https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/1`
      );

      Toaster.success("User updated successfully");

      const updatedData = existingData.map((user) =>
        user.id === Number(id) ? { ...user, ...body } : user
      );

      dispatch(userData(updatedData));
      dispatch(createUserLoading(false));

      navigate("/");
    } catch (error) {
      Toaster.error("Something went wrong, please try again");
      console.log(error);
    }
  };
};

export const userData = (data) => {
  return {
    type: FETCH_USER_DATA,
    data,
  };
};

export const userDataLoading = (data) => {
  return {
    type: USER_DATA_LOADING,
    data,
  };
};

export const updateRefetchData = (data) => {
  return {
    type: REFETCH_USER_DATA,
    data,
  };
};

export const createUserLoading = (data) => {
  return {
    type: CREATE_USER_LOADING,
    data,
  };
};
