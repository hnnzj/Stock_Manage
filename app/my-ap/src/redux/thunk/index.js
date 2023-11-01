import axios from "axios";
import {
  deleteProduct,
  setProducts,
  startLoading,
  createProduct,
} from "../store/slice/productSlice";
import Swal from "sweetalert2";
import {
  createClient,
  delClient,
  loadClients,
} from "../store/slice/clientSlice";
import { createOrder, setPedidos } from "../store/slice/pedidosSlice";

export const allPedidos = (nombre, fecha) => {
  return async (dispatch) => {
    const data = await axios.post("http://localhost:5001/api/cargarPedidos", {
      fecha,
      nombre,
    });
    if (data.data.msg) {
      dispatch(setPedidos(data.data.msg));
    }
    dispatch(setPedidos(data.data));
  };
};

export const crearOrder = (data) => {
  return async (dispatch) => {
    const res = await axios.post("http://localhost:5001/api/crearPedido", data);
    console.log(res.data);
    if (res.data.ok === true) {
      Swal.fire({ icon: "warning", text: res.data.msg });
    } else {
      dispatch(createOrder(res.data));
      Swal.fire({ icon: "success", text: res.data.msg });
    }
  };
};

export const deleteClient = (id) => {
  return async (dispatch, getState) => {
    const data = await axios.delete(`http://localhost:5001/api/deleteClient/`, {
      params: { id },
    });
    dispatch(delClient(data.data));
  };
};

export const getAllClients = () => {
  return async (dispatch, getState) => {
    const data = await axios.get("http://localhost:5001/api/getAllClient");
    dispatch(loadClients(data));
  };
};

export const createNewClient = (data) => {
  return async (dispatch, getState) => {
    const client = await axios.post(
      "http://localhost:5001/api/crearClient",
      data
    );
    dispatch(createClient(client));
  };
};

export const getProducts = () => {
  return async (dispatch, getState) => {
    dispatch(startLoading());
    const data = await axios.get("http://localhost:5001/api/all");
    if (data.data.length <= 0) {
      return "La chota madre";
    } else {
      dispatch(setProducts(data.data));
    }
  };
};

export const delProduct = (id) => {
  return async (dispatch, getState) => {
    await axios.delete("http://localhost:5001/api/delete", {
      data: { id },
    });

    await dispatch(deleteProduct(id));
  };
};

export const crearProduct = (data) => {
  return async (dispatch) => {
    const res = await axios.post("http://localhost:5001/api/crear", data);
    if (res.data.ok === true) {
      Swal.fire({ icon: "warning", text: res.data.msg });
    } else {
      dispatch(createProduct(res.data));
      Swal.fire({ icon: "success", text: res.data.msg });
    }
  };
};

export const startLoggin = (data) => {
  return async (dispatch) => {
    const res = await axios.post("http://localhost:5001/api/login ", data);
    console.log(res.data);
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }
  };
};
