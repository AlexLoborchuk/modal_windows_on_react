import { useSelector, useDispatch } from "react-redux";

import { admin_action } from "../../store/reducers/admin-reducers";
import DeleteIcon from "../../image/admin_page/delete_icon.jpg";
import { InvoiceAddress } from "../modal_window/modal1-invoice-address";
import { AdminDataType } from "../../types/types";
import { storeType } from "../../store/store";

export const AdminPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: storeType) => state.admin.users);

  return (
    <div className="wrapper">
      <div className="container">
        <InvoiceAddress />
        <div className="tableWrapper">
          <table className="table">
            <thead className="table__header">
              <tr>
                <th className="table__textHead"></th>
                <th className="table__textHead">Company</th>
                <th className="table__textHead">Name</th>
                <th className="table__textHead">Additional</th>
                <th className="table__textHead">Street</th>
                <th className="table__textHead">Postal Code</th>
                <th className="table__textHead">Country</th>
                <th className="table__textHead">IBAN</th>
                <th className="table__textHead">BIC</th>
                <th className="table__textHead">Bank Name</th>
                <th className="table__textHead">Fax</th>
                <th className="table__textHead">E-mail</th>
                <th className="table__textHead">Birthday</th>
              </tr>
            </thead>
            {users.map((user: AdminDataType) => {
              return (
                <tbody key={user.userId}>
                  <tr>
                    <td className="table__textBody">
                      <button
                        onClick={() =>
                          dispatch(admin_action.DeleteUser(user.userId))
                        }
                      >
                        <img src={DeleteIcon} alt="delete icon" />
                      </button>
                    </td>
                    <td className="table__textBody">{user.company}</td>
                    <td className="table__textBody">{user.name}</td>
                    <td className="table__textBody">{user.addinional}</td>
                    <td className="table__textBody">{user.street}</td>
                    <td className="table__textBody">{user.postal_code}</td>
                    <td className="table__textBody">{user.country}</td>
                    <td className="table__textBody">{user.iban}</td>
                    <td className="table__textBody">{user.bic}</td>
                    <td className="table__textBody">{user.bank_name}</td>
                    <td className="table__textBody">{user.fax}</td>
                    <td className="table__textBody">{user.email}</td>
                    <td className="table__textBody">{user.birthday}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};
