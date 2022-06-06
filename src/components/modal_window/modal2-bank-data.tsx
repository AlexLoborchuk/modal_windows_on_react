import React, { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import CloseIcon from "../../image/modal_window/close_icon.jpg";
import { modal_window } from "../../store/reducers/modal_reducer";
import { Contact } from "./modal3-contact";
import { storeType } from "../../store/store";

type BankDataType = {
  iban: string;
  bic: string;
  bank_name: string;
};
export const BankData = (props: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BankDataType>({ mode: "onBlur" });

  const dispatch = useDispatch();
  const modal2 = useSelector((state: storeType) => state.modal);

  let [bankData, setBankData] = useState({});
  const onSubmit = (data: BankDataType) => {
    let newstate = Object.assign(props.adressData, data);
    setBankData(newstate);
    dispatch(modal_window.OpenCloseModal2(false));
    dispatch(modal_window.OpenCloseModal3(true));
    reset();
  };

  const Previous = () => {
    dispatch(modal_window.OpenCloseModal2(false));
    dispatch(modal_window.OpenCloseModal1(true));
  };
  return (
    <div>
      <Modal
        isOpen={modal2.modal2}
        contentLabel="Bank data"
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
                dispatch(modal_window.OpenCloseModal2(false));
              }}
              className="form__closeX"
            >
              <img src={CloseIcon} alt="Close" />
            </button>
            <div className="form__title title">Bank Data</div>
            <div className="form__textBlock">
              <span className="form__subtitle"> IBAN*</span>
              <input
                {...register("iban", { required: true })}
                className="form__input"
              />
              {errors.iban && <p className="form__error">IBAN is required.</p>}
            </div>
            <div className="form__textBlock">
              <span className="form__subtitle"> BIC*</span>
              <input
                {...register("bic", { required: true })}
                className="form__input"
              />
              {errors.bic && <p className="form__error">BIC is required.</p>}
            </div>
            <div className="form__textBlock">
              <span className="form__subtitle">Bank name*</span>
              <input
                {...register("bank_name", { required: true })}
                className="form__input"
              />
              {errors.bank_name && (
                <p className="form__error">Bank name is required.</p>
              )}
            </div>
          </div>
          <div className="form__submit">
            <button
              onClick={() => {
                dispatch(modal_window.OpenCloseModal2(false));
              }}
              className="form__cancelButton form__addUser"
            >
              Cancel
            </button>
            <button
              className="form__cancelButton form__addUser"
              onClick={Previous}
            >
              Previous
            </button>
            <button className="addUser form__addUser">Next</button>
          </div>
        </form>
      </Modal>
      <Contact bankData={bankData} />
    </div>
  );
};
