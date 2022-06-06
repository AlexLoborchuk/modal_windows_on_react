import React, { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import uuid from "react-uuid";

import CloseIcon from "../../image/modal_window/close_icon.jpg";
import { modal_window } from "../../store/reducers/modal_reducer";
import { BankData } from "./modal2-bank-data";
import { storeType } from "../../store/store";

export type InvoiceAddressDataType = {
  userId: string;
  company: string;
  name: string;
  addinional: string;
  street: string;
  postal_code: string;
  country: string;
};
export const InvoiceAddress = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InvoiceAddressDataType>({
    mode: "onBlur",
  });

  const dispatch = useDispatch();
  const modal1 = useSelector((state: storeType) => state.modal);
  const [adressData, setAdressData] = useState({});

  const onSubmit = (data: InvoiceAddressDataType) => {
    let userId = { userId: uuid() };
    let newdata = Object.assign(userId, data);
    setAdressData(newdata);
    dispatch(modal_window.OpenCloseModal1(false));
    dispatch(modal_window.OpenCloseModal2(true));
    reset();
  };
  return (
    <div className="addUserBlock">
      <button
        onClick={() => {
          dispatch(modal_window.OpenCloseModal1(true));
        }}
        className="addUserBlock__addUser addUser"
      >
        Add
      </button>
      <Modal
        isOpen={modal1.modal1}
        contentLabel="Invoice Address"
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "#e5b1b1",
          },
          content: {
            color: "lightsteelblue",
            top: "20%",
            left: "30%",
            right: "30%",
            bottom: "20%",
          },
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="form__wrapper">
            <button
              onClick={() => {
                dispatch(modal_window.OpenCloseModal1(false));
              }}
              className="form__closeX"
            >
              <img src={CloseIcon} alt="Close" />
            </button>
            <div className="form__title title">Invoice Address</div>
            <div className="form__textBlock">
              <span className="form__subtitle"> Company*</span>
              <input
                {...register("company", { required: true })}
                className="form__input"
              />
            </div>
            {errors.company && (
              <p className="form__error">Company is required.</p>
            )}
            <div className="form__textBlock">
              <span className="form__subtitle"> Name*</span>
              <input
                {...register("name", { required: true })}
                className="form__input"
              />
              {errors.name && <p className="form__error">Name is required.</p>}
            </div>
            <div className="form__textBlock">
              <span className="form__subtitle">Additional</span>
              <input {...register("addinional")} className="form__input" />
            </div>
            <div className="form__textBlock">
              <span className="form__subtitle">Street</span>
              <input {...register("street")} className="form__input" />
            </div>
            <div className="form__textBlock">
              <span className="form__subtitle">Postal Code</span>
              <input {...register("postal_code")} className="form__input" />
            </div>
            <div className="form__textBlock">
              <span className="form__subtitle">Country</span>
              <select {...register("country")} className="form__input">
                <option value=""></option>
                <option value="Ukraine">Ukraine</option>
                <option value="USA">USA</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="France">France</option>
                <option value="Canada">Canada</option>
                <option value="Poland">Poland</option>
              </select>
            </div>
          </div>
          <div className="form__submit">
            <button
              onClick={() => {
                dispatch(modal_window.OpenCloseModal1(false));
              }}
              className="form__cancelButton form__addUser"
            >
              Cancel
            </button>
            <button className="addUser form__addUser">Next</button>
          </div>
        </form>
      </Modal>
      <BankData adressData={adressData} />
    </div>
  );
};
