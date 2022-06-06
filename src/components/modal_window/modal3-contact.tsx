import Modal from "react-modal";
import { useForm /*, Controller */ } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
// import ReactDatePicker from "react-datepicker";

import CloseIcon from "../../image/modal_window/close_icon.jpg";
import { modal_window } from "../../store/reducers/modal_reducer";
import { admin_action } from "../../store/reducers/admin-reducers";
import { storeType } from "../../store/store";

type contactDataType = {
  fax: string;
  email: string;
  birthday: string;
  homepage: string;
};
export const Contact = (props: any) => {
  const {
    register,
    handleSubmit,
    // control,
    formState: { errors, isValid },
    reset,
  } = useForm<contactDataType>({
    mode: "onBlur",
  });

  const dispatch = useDispatch();
  const modal3 = useSelector((state: storeType) => state.modal);
  // const [startDate, setStartDate] = useState(new Date());

  const onSubmit = (contacts: contactDataType) => {
    let data = Object.assign(props.bankData, contacts);
    dispatch(admin_action.AddNewUser(data));
    dispatch(modal_window.OpenCloseModal3(false));
    reset();
  };

  const Previous = () => {
    dispatch(modal_window.OpenCloseModal3(false));
    dispatch(modal_window.OpenCloseModal2(true));
  };
  return (
    <div>
      <Modal
        isOpen={modal3.modal3}
        contentLabel="Contacts"
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
                dispatch(modal_window.OpenCloseModal3(false));
              }}
              className="form__closeX"
            >
              <img src={CloseIcon} alt="Close" />
            </button>
            <div className="form__title title">Contact</div>
            <div className="form__textBlock">
              <span className="form__subtitle"> Fax</span>
              <input {...register("fax")} className="form__input" />
            </div>
            <div className="form__textBlock">
              <span className="form__subtitle"> E-mail</span>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
                className="form__input"
              />
              {errors.email?.message && (
                <p className="form__error">{errors.email?.message}</p>
              )}
            </div>
            <div className="form__textBlock">
              <span className="form__subtitle">Birthday</span>
              <input {...register("birthday")} className="form__input" />
              {/* <Controller
                control={control}
                name="birthday"
                render={({ field: { onChange, onBlur, value} }) => (
                  <ReactDatePicker
                    className="form__input"
                    onChange={onChange}
                    onBlur={onBlur}
                    selected={value}
                  />
                )}
              /> */}
            </div>
            <div className="form__textBlock">
              <span className="form__subtitle">Homepage</span>
              <input {...register("homepage")} className="form__input" />
            </div>
          </div>
          <div className="form__submit">
            <button
              onClick={() => {
                dispatch(modal_window.OpenCloseModal3(false));
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
            <button
              className="addUser form__addUser"
              type="submit"
              disabled={!isValid}
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
