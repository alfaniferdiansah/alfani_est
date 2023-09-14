import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUsers = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  function formatTanggal(tanggal) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const tanggalObj = new Date(tanggal);
    return tanggalObj.toLocaleDateString(undefined, options);
  }

  return (
    <>
      <div className="section">
        <h1>Data Karyawan</h1>
      </div>
      <div className="main">
        <Link to="/tambah" className="btn btn-primary">
          Add Karyawan
        </Link>
        <div className="search">
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari nama karyawan..."
          />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>NIK</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Tgl lahir</th>
              <th>Divisi</th>
              <th>Status karyawan</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {user
              .filter((user) => {
                const nameMatch = user.nama.toLowerCase().includes(searchTerm);
                return nameMatch;
              })
              .map((user) => (
                <tr key={user.id}>
                  <td>{user.nik}</td>
                  <td>{user.nama}</td>
                  <td>{user.alamat}</td>
                  <td>{formatTanggal(user.tgllahir).split("/").join("-")}</td>
                  <td>{user.divisi}</td>
                  <td>{user.status}</td>
                  <td className="text-center">
                    <Link
                      to={`/detail/${user.id}`}
                      className="btn btn-sm btn-info"
                    >
                      Detail
                    </Link>
                    <Link
                      to={`/edit/${user.id}`}
                      className="btn btn-sm btn-warning"
                    >
                      Edit
                    </Link>
                    <Link
                      to="#"
                      onClick={() => deleteUsers(user.id)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
