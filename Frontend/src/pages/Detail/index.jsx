import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./index.scss";

const Detail = () => {
  const [user, setUser] = useState({
    nik: "",
    nama: "",
    alamat: "",
    tgllahir: "",
    divisi: "",
    status: "",
  });
  const { id } = useParams();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await axios.get(`http://localhost:5000/users/${id}`);
    setUser(res.data);
  };

  function formatTanggal(tanggal) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const tanggalObj = new Date(tanggal);
    return tanggalObj.toLocaleDateString(undefined, options);
  }

  return (
    <div className="main">
      <Link to="/" className="btn btn-primary">
        Kembali
      </Link>

      <table className="table">
        <tbody>
          <tr>
            <td>NIK</td>
            <td>: {user.nik}</td>
          </tr>
          <tr>
            <td>Nama</td>
            <td>: {user.nama}</td>
          </tr>
          <tr>
            <td>Alamat</td>
            <td>: {user.alamat}</td>
          </tr>
          <tr>
            <td>Tgl lahir</td>
            <td>: {formatTanggal(user.tgllahir).split("/").join("-")}</td>
          </tr>
          <tr>
            <td>Divisi</td>
            <td>: {user.divisi}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>: {user.status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
