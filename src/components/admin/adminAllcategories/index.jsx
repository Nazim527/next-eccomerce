import React from "react";
import "./style.scss";
import { AdminCategory } from "..";

//! Import icon
import { BiSolidDashboard,BiLogoProductHunt } from "react-icons/bi";
import { BsFillBoxSeamFill } from "react-icons/bs";

const AdminAllCategories = () => {
  return (
    <div className="admin_categories">
      <AdminCategory
        id={2}
        title={"Dashboard"}
        icon={<BiSolidDashboard/>}
      />
      <AdminCategory
        id={3}
        title={"Products"}
        icon={<BiLogoProductHunt/>}
      />
      <AdminCategory
        id={4}
        title={"Orders"}
        icon={<BsFillBoxSeamFill/>}
      />
    </div>
  );
};

export default AdminAllCategories;
