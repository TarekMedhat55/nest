import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAddress, removeAddress } from "../../features/UserSlice";
import { BsArrowLeft } from "react-icons/bs";
import AddNewAddress from "../../Components/AddNewAddres";
const ProfileAddress = () => {
  const [addNewAddress, setAddNewAddress] = useState(false);
  const { address } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAddress());
  }, [dispatch]);
  return (
    <div className="profile-address">
      {addNewAddress ? (
        <div className="profile-head">
          <p
            className="back-to-address"
            onClick={() => setAddNewAddress(!addNewAddress)}
          >
            <span>
              <BsArrowLeft />
            </span>
            back to address
          </p>
          <h2>Add new address</h2>
          <p>
            Enter your address and contact details so we can deliver to you
            quickly and efficiently
          </p>
        </div>
      ) : (
        <div className="profile-head">
          <h2>Addresses</h2>
          <p>
            Manage your saved addresses for fast and easy checkout across our
            marketplaces
          </p>
          <button
            className="button-submit"
            onClick={() => setAddNewAddress(!addNewAddress)}
          >
            add new address
          </button>
        </div>
      )}
      {addNewAddress ? (
        <div className="Profile-add-new">
          <AddNewAddress />
        </div>
      ) : (
        <div className="profile-address-info">
          {address.map((item) => {
            return (
              <div className="address" key={item._id}>
                <div className="address-header d-flex align-items-center justify-content-between">
                  <h5>{item.alias}</h5>
                  <div className="address-actions d-flex align-items-center">
                    <p
                      className="delete"
                      onClick={() => dispatch(removeAddress(item._id))}
                    >
                      delete
                    </p>
                  </div>
                </div>
                <div className="address-info d-flex align-items-center">
                  <div className="address-body-right">
                    <p>Name:</p>
                    <p>email:</p>
                    <p>Phone:</p>
                    <p>address:</p>
                    <p>postCode:</p>
                  </div>
                  <div className="address-body-left">
                    <p>
                      {item.firstName} {item.lastName}
                    </p>
                    <p>{item.email}</p>
                    <p>{item.phone}</p>
                    <p>
                      {item.city},{item.street}
                    </p>
                    <p>{item.postcode}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProfileAddress;
