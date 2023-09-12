import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../components/Input";
import "./index.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Edit = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tgllahir, setTgllahir] = useState(null);
  const [divisi, setDivisi] = useState("IT");
  const [status, setStatus] = useState("Tetap");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserByID();
  }, []);

  const getUserByID = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setNama(response.data.nama);
    setAlamat(response.data.alamat);
    setTgllahir(handleDateChange(response.data.tgllahir));
    setDivisi(response.data.divisi);
    setStatus(response.data.status);
  };

  const updateUser = async (e) => {
    e.preventDefault();

    const errors = {};

    if (!nama) {
      errors.nama = ["Name is required"];
    }

    if (!alamat) {
      errors.alamat = ["Address is required"];
    }

    if (!tgllahir) {
      errors.tgllahir = ["Birt Date is required"];
    }

    if (!divisi) {
      errors.divisi = ["Division is required"];
    }

    if (!status) {
      errors.status = ["Status is required"];
    }

    if (!isChecked) {
      setErrors({ isChecked: ["Data invalid cannot add"] });
      return;
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted");
    }

    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        nama,
        alamat,
        tgllahir,
        divisi,
        status,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDateChange = (date) => {
    setTgllahir(date);
  };

  return (
    <div className="main">
      <div className="card">
        <h2>Update Data Karyawan</h2>
        <br />
        <form onSubmit={updateUser}>
          <Input
            name="name"
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            error={errors.nama}
            placeholder="Nama Karyawan..."
            label="Nama"
          />
          <Input
            name="alamat"
            type="text"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            error={errors.alamat}
            placeholder="Alamat Karyawan..."
            label="Alamat"
          />
          <label>Tgl Lahir</label>
          <div>
            <DatePicker
              className="datePicker"
              selected={tgllahir}
              onChange={handleDateChange}
              dateFormat="dd-MM-yyyy"
              placeholderText="Tanggal Lahir..."
            />
          </div>
          <label>Divisi</label>
          <select
            id="divisi"
            name="divisi"
            value={divisi}
            onChange={(e) => setDivisi(e.target.value)}
            error={errors.divisi}
          >
            <option value="IT">IT</option>
            <option value="HRD">HRD</option>
            <option value="FINANCE">FINANCE</option>
          </select>
          <label>Status</label>
          <select
            id="status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            error={errors.status}
          >
            <option value="Tetap">Tetap</option>
            <option value="Kontrak">Kontrak</option>
          </select>
          <Input
            name="status"
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            label="Are you sure to update this data?"
          />
          {errors.isChecked && (
            <div className="error">{errors.isChecked[0]}</div>
          )}
          <button type="submit" className="btn btn-primary">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
