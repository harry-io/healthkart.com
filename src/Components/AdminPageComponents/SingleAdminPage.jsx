import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import NavbarAdmin from "./NavbarAdmin";
import SingleAdminCard from "./SingleAdminCard";

const SingleAdminPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const [data, setData] = useState({});
  console.log(id);
  //
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://636bda08ad62451f9fbd8076.mockapi.io/rigo/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, []);
  //

  return (
    <>
      <NavbarAdmin />
      {loading ? <Loader /> : <SingleAdminCard data={data} />}
    </>
  );
};

export default SingleAdminPage;
