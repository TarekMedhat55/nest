import React from "react";
import CompareContent from "../Components/compareComponents/CompareContent";
import { useSelector } from "react-redux";
import NoProducts from "../Components/NoProducts";
const Compare = () => {
  const { compareProducts, compareLength } = useSelector(
    (store) => store.compare
  );
  const { user } = useSelector((store) => store.user);

  return (
    <div>
      {!user || compareLength === 0 ? (
        <NoProducts name={"compare list"} />
      ) : (
        <CompareContent
          compareProducts={compareProducts}
          compareLength={compareLength}
        />
      )}
    </div>
  );
};

export default Compare;
