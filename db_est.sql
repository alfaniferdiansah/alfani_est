-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 12 Sep 2023 pada 06.00
-- Versi Server: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_est`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `m_karyawan`
--

CREATE TABLE `m_karyawan` (
  `id` int(11) NOT NULL,
  `nik` varchar(8) DEFAULT NULL,
  `nama` varchar(150) NOT NULL,
  `alamat` text,
  `tgllahir` datetime DEFAULT NULL,
  `divisi` varchar(20) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `m_karyawan`
--

INSERT INTO `m_karyawan` (`id`, `nik`, `nama`, `alamat`, `tgllahir`, `divisi`, `status`, `created_date`, `createdAt`, `updatedAt`) VALUES
(8, '10230001', 'Adi', 'Jl. Yos sudarso', '1989-01-21 17:00:00', 'IT', 'Tetap', '2023-09-12 03:05:44', '2023-09-12 03:05:44', '2023-09-12 03:48:48'),
(9, '11230001', 'Susi', 'Jl. Cempaka mas', '1993-09-08 17:00:00', 'HRD', 'Kontrak', '2023-09-12 03:49:37', '2023-09-12 03:49:37', '2023-09-12 03:49:37'),
(10, '12230001', 'Bagus', 'Jl. pademangan', '1991-09-09 17:00:00', 'FINANCE', 'Kontrak', '2023-09-12 03:50:38', '2023-09-12 03:50:38', '2023-09-12 03:50:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `m_karyawan`
--
ALTER TABLE `m_karyawan`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `m_karyawan`
--
ALTER TABLE `m_karyawan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
