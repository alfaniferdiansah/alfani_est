import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { nama, alamat, tgllahir, divisi, status } = req.body;
    console.log(req.body);

    const divisiCode = {
      IT: "10",
      HRD: "11",
      FINANCE: "12",
    }[divisi];

    const currentYear = new Date().getFullYear().toString().slice(-2);
    const karyawanCount = '1';
    const nik =
      divisiCode + currentYear + karyawanCount.padStart(4, '0');

    const data = await User.create({
      nik,
      nama,
      alamat,
      tgllahir,
      divisi,
      status,
      created_date: new Date(),
    });

    res.status(201).json({ msg: "User Created", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { nama, alamat, tgllahir, divisi, status } = req.body;

    const divisiCode = {
      IT: "10",
      HRD: "11",
      FINANCE: "12",
    }[divisi];

    const currentYear = new Date().getFullYear().toString().slice(-2);
    const karyawanCount = '1';
    const nik =
      divisiCode + currentYear + karyawanCount.padStart(4, '0');
      
    const user = await User.findOne({
      nik,
      nama,
      alamat,
      tgllahir,
      divisi,
      status,
      where: { id: req.params.id } });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await user.save();

    res.status(200).json({ msg: "User Updated", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
