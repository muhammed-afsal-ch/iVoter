-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 10, 2023 at 09:06 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ivoter`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `username` varchar(1000) NOT NULL,
  `password` varchar(1000) NOT NULL,
  `email` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`username`, `password`, `email`) VALUES
('mediawing', '$2b$10$nADGZHtCxmaVZ8ryFMAkKeYNEo23CIb9JUNEKX/.9rPuQl/wx7djm', 'muhammedafsalch7@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `candidates`
--

CREATE TABLE `candidates` (
  `candidate_id` int(50) NOT NULL,
  `fullname` varchar(1000) NOT NULL,
  `place` varchar(1000) NOT NULL,
  `position` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `candidates`
--

INSERT INTO `candidates` (`candidate_id`, `fullname`, `place`, `position`) VALUES
(2001, 'Anas Pk', 'koodathayi', 'PRESIDENTIAL'),
(2002, 'Uzair P', 'Chelari', 'PRESIDENTIAL'),
(2003, 'Nazmal Ak', 'Pukayur', 'PRESIDENTIAL'),
(2004, 'Nota', 'Unknown', 'PRESIDENTIAL'),
(2005, 'Mubashir Mk', 'vellur', 'SECRETARIAL'),
(2006, 'Arshad k', 'Panthallur', 'SECRETARIAL'),
(2007, 'Yaseen V', 'Vattappara', 'SECRETARIAL'),
(2008, 'Nota', 'Unknown', 'SECRETARIAL'),
(2009, 'Sinan At', ' Angadippuram', 'VICE-PRESIDENTIAL'),
(2010, 'Sinan Pn', 'Mavoor', 'VICE-PRESIDENTIAL'),
(2011, 'Nota', 'Unknown', 'VICE-PRESIDENTIAL'),
(2012, 'Fasil Kt', 'Areekode', 'TREASURER'),
(2013, 'Muheed P', 'Areekode', 'TREASURER'),
(2014, 'Niyas c', 'Areekode', 'TREASURER'),
(2015, 'Nota', 'unknown', 'TREASURER');

-- --------------------------------------------------------

--
-- Table structure for table `voters`
--

CREATE TABLE `voters` (
  `voter_id` int(15) NOT NULL,
  `adno` int(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `class` varchar(50) NOT NULL,
  `union` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `voters`
--

INSERT INTO `voters` (`voter_id`, `adno`, `password`, `name`, `class`, `union`) VALUES
(1001, 2, 'A4aAv', 'ABIN MUHAMMED.M', 'D3', 'ITHIFAAQ'),
(1002, 4, 'T6bIx', 'MUHAMMED FARHAN.AT', 'D3', 'ITHIFAAQ'),
(1003, 5, 'K3bQr', 'MUHAMMED SABITH.K', 'D3', 'ITHIFAAQ'),
(1004, 7, 'C4aUt', 'MUHAMMED FAVAS.P', 'D3', 'ITHIFAAQ'),
(1005, 8, 'L9bZw', 'MUHAMMED NABEEL.KP', 'D3', 'ITHIFAAQ'),
(1006, 9, 'S7aCt', 'MUHAMMED ATHIF.PK', 'D3', 'ITHIFAAQ'),
(1007, 11, 'E8bBq', 'SIBIN SIYAD.MP', 'D3', 'ITHIFAAQ'),
(1008, 14, 'Q6bYx', 'MUHAMMED MIDLAJ.KC', 'D3', 'ITHIFAAQ'),
(1009, 27, 'K4aAu', 'MUHAMMED SHIBILI.A', 'D3', 'ITHIFAAQ'),
(1010, 28, 'Y6aLw', 'MUHAMMAD SWALIH.C', 'D3', 'ITHIFAAQ'),
(1011, 33, 'T2bUw', 'MUHAMMED MUSTHAFA.KT', 'D3', 'ITHIFAAQ'),
(1012, 38, 'U4bZr', 'MUHAMMED JALAL.KT', 'D3', 'ITHIFAAQ'),
(1013, 43, 'T7aKr', 'MUHAMMED NIYAS.C', 'D2', 'MISBAH'),
(1014, 46, 'X5aKq', 'ANSHAD.MP', 'D2', 'MISBAH'),
(1015, 49, 'I2bSz', 'MUHAMMED YASEEN.V', 'D2', 'MISBAH'),
(1016, 52, 'O3aWz', 'MUHAMMED FAVAS.A', 'D2', 'MISBAH'),
(1017, 56, 'R6aVv', 'MOHAMMED JAMEEL.B', 'D2', 'MISBAH'),
(1018, 57, 'S3bNx', 'JAVAD AHAMMAD.KM', 'D2', 'MISBAH'),
(1019, 63, 'T7aXu', 'MUHAMMED ANAS.PK', 'D2', 'MISBAH'),
(1020, 67, 'A6aNy', 'MUHAMMED ABDU SSAMEEH.AM', 'D2', 'MISBAH'),
(1021, 71, 'C9aBv', 'MUHAMMED ARSHAD.K', 'D2', 'MISBAH'),
(1022, 83, 'Z7aPq', 'MUHAMMED THWAYYIB.P', 'D2', 'MISBAH'),
(1023, 85, 'X3bCu', 'MUHAMMED FASIL.KT', 'D2', 'MISBAH'),
(1024, 26, 'D9bVs', 'MUHAMMED SINAN.A', 'D3', 'MISBAH'),
(1028, 86, 'Y2bHr', 'MUHAMMED RAHEES.P', 'D1', 'HASANA'),
(1029, 89, 'P8aCz', 'ABDULLAH.M', 'D1', 'HASANA'),
(1030, 92, 'I3aYq', 'MUHAMMED SINAN.AT', 'D1', 'HASANA'),
(1031, 93, 'W2aVz', 'MUHAMMED NAHEEL.CK', 'D1', 'HASANA'),
(1032, 96, 'F5bMq', 'MUHAMMED FAIROOZ.K', 'D1', 'HASANA'),
(1033, 98, 'U1bBw', 'MUHAMMED NAHAS.VV', 'D1', 'HASANA'),
(1034, 101, 'A2aTq', 'MUHAMMED SHAHAL.K', 'D1', 'HASANA'),
(1035, 107, 'W2bSu', 'MUHAMMED NAZMAL.AK', 'D1', 'HASANA'),
(1036, 114, 'E3aEq', 'MUHAMMED SINAN.PN', 'D1', 'HASANA'),
(1037, 115, 'J3aJy', 'MUHAMMAD SHAMIL.KP', 'D1', 'HASANA'),
(1038, 116, 'O7bBr', 'MUHAMMED UZAIR.P', 'D1', 'HASANA'),
(1039, 121, 'H2bFz', 'MUHEED.P', 'D1', 'HASANA'),
(1040, 122, 'I7bWu', 'ASHAD.KP', 'D1', 'HASANA'),
(1041, 75, 'F7aTy', 'SAYYID MUHAMMED MILHAN.C', 'D1', 'HASANA'),
(1042, 84, 'Q2bAq', 'JIRSHAD.M', 'D1', 'HASANA'),
(1043, 125, 'M4aKn', 'MUHAMMED SUHAIL.MT', '+2', 'AL-AYIN'),
(1044, 129, 'O8aSr', 'MOHAMED AFSAL.CH', '+2', 'AL-AYIN'),
(1045, 133, 'T4bOt', 'MOHAMMED RAFNAS.V', '+2', 'AL-AYIN'),
(1046, 134, 'H8aSx', 'MUHAMMED MUHSIN.T', '+2', 'AL-AYIN'),
(1047, 135, 'F3bWv', 'MUHAMMED FAYIZ.T', '+2', 'AL-AYIN'),
(1048, 138, 'C6bJr', 'MUHAMMED NIZAM.MP', '+2', 'AL-AYIN'),
(1049, 139, 'N2bAq', 'MUHAMMED SHABEEB.M', '+2', 'AL-AYIN'),
(1050, 145, 'G9aCq', 'MUHAMMED RAYHAN P', '+2', 'AL-AYIN'),
(1051, 147, 'A3bDt', 'SAYYID MINHAJ.VT', '+2', 'AL-AYIN'),
(1052, 165, 'K7aWv', 'ADEEB.PT', '+2', 'AL-AYIN'),
(1053, 166, 'R4bIr', 'MUHAMMED AMEEN.AK', '+2', 'AL-AYIN'),
(1054, 167, 'W3bDw', 'MUHAMMED SAHAD PK', '+2', 'AL-AYIN'),
(1055, 169, 'S5aRy', 'FAHMIN N', '+2', 'AL-AYIN'),
(1056, 170, 'W5bKq', 'MUHAMMED IHTHISHAM K', '+2', 'AL-AYIN'),
(1057, 94, 'H5aMw', 'MUHAMMED ASEEF.K', '+2', 'AL-AYIN'),
(1058, 111, 'Q9aBy', 'MUHAMMED SAHAD.VK', '+2', 'AL-AYIN'),
(1059, 174, 'O1bGx', 'MUHAMMED AMEEN K', '+1', 'IJTIMA'),
(1060, 175, 'X6aMr', 'FARSIN AHAMMED K', '+1', 'IJTIMA'),
(1061, 176, 'W9bWr', 'ISMAYIL K', '+1', 'IJTIMA'),
(1062, 179, 'N5aCr', 'MUHAMMED ADIL P', '+1', 'IJTIMA'),
(1063, 181, 'S8bXr', 'MUHAMMED ANFAS PP', '+1', 'IJTIMA'),
(1064, 182, 'D7bDw', 'MUHAMMED ASHIF K', '+1', 'IJTIMA'),
(1065, 183, 'L4bEq', 'MUHAMMED ASHMIL C K', '+1', 'IJTIMA'),
(1066, 184, 'R8bLv', 'MUHAMMED DINAN.P', '+1', 'IJTIMA'),
(1067, 185, 'J5aHr', 'MUHAMMED DIYAN.P', '+1', 'IJTIMA'),
(1068, 188, 'G9bOu', 'MUHAMMED NAFIH KT', '+1', 'IJTIMA'),
(1069, 190, 'N5bPv', 'MUHAMMED RASHID P', '+1', 'IJTIMA'),
(1070, 193, 'O3aTz', 'MUHAMMED SHAN', '+1', 'IJTIMA'),
(1071, 194, 'M7bPq', 'MUHAMMED SINAN KT', '+1', 'IJTIMA'),
(1072, 195, 'A9aTq', 'MUHAMMED SINAN K', '+1', 'IJTIMA'),
(1073, 196, 'R6bNv', 'MUHAMMED SUHAIL.C', '+1', 'IJTIMA'),
(1074, 199, 'W9aYt', 'RASIL ALI AK', '+1', 'IJTIMA'),
(1075, 200, 'A9bUy', 'SINAN.KK', '+1', 'IJTIMA'),
(1076, 201, 'S9bXq', 'SAYYID NAJIL V.T', '10', 'ADAB'),
(1077, 202, 'C9bAx', 'ADHIL. Y. K', '10', 'ADAB'),
(1078, 205, 'Z6aNw', 'MUHAMMED SHAHID V', '10', 'ADAB'),
(1079, 210, 'C3aSs', 'MUHAMMED JASIM M.P', '10', 'ADAB'),
(1080, 212, 'V7bUs', 'MUHAMMED AJNAS P', '10', 'ADAB'),
(1081, 213, 'G8bWy', 'MUHAMMED NIHAL P', '10', 'ADAB'),
(1082, 216, 'H1bUz', 'HADI MUHAMMED MT', '10', 'ADAB'),
(1083, 217, 'K7bPx', 'HISHAM MP', '10', 'ADAB'),
(1084, 218, 'W5aMt', 'MUHAMMED SHAHEEN.PK', '10', 'ADAB'),
(1085, 219, 'X3aMy', 'MUHAMMED BASIM K', '10', 'ADAB'),
(1086, 220, 'P1aQu', 'MUHAMMED SWALIH K', '10', 'ADAB'),
(1087, 221, 'Y5aDs', 'MOHAMMED SHAMVEEL.M', '10', 'ADAB'),
(1088, 222, 'O5aOu', 'MUHAMMED JASNAN K', '10', 'ADAB'),
(1089, 224, 'E5aCt', 'MUHAMMED SHAHID KT', '10', 'ADAB'),
(1090, 225, 'E9aLx', 'AKMAL SHA', '10', 'ADAB'),
(1091, 226, 'N3aWx', 'MUHAMMED NASAL K', '10', 'ADAB'),
(1092, 227, 'Q3aXy', 'MUHAMMED NADIR CP', '10', 'ADAB'),
(1093, 228, 'E6aAu', 'SHAHID HUSSAIN V', '10', 'ADAB'),
(1094, 230, 'S5aWs', 'MUHAMMAD NASIH KT', '9', 'SWALAH'),
(1095, 231, 'J5aNt', 'MUHAMMED DANISH KP', '9', 'SWALAH'),
(1096, 232, 'Q4bAz', 'MUHAMMED MIDLAJ U', '9', 'SWALAH'),
(1097, 234, 'T4aQw', 'MOHAMMED SAFWAN', '9', 'SWALAH'),
(1098, 235, 'S8aGr', 'ANASE BAKARY K', '9', 'SWALAH'),
(1099, 236, 'Q6bNz', 'MUHAMMED SAHL NV', '9', 'SWALAH'),
(1100, 237, 'W5bQy', 'MUHAMMED SINAN P', '9', 'SWALAH'),
(1101, 238, 'H8aJx', 'MUHAMMED SINAN PP', '9', 'SWALAH'),
(1102, 240, 'C6aAv', 'MUHAMMAD HISHAM ', '9', 'SWALAH'),
(1103, 241, 'B3bGt', 'MUHAMMED NAFIH', '9', 'SWALAH'),
(1104, 242, 'W7bCz', 'MUHAMMAD RAYYAN V', '9', 'SWALAH'),
(1105, 243, 'R9aKt', 'AHMED HISHAM T', '9', 'SWALAH'),
(1106, 244, 'S9aLv', 'KHAISE BAKARY K', '9', 'SWALAH'),
(1107, 245, 'Y4bLv', 'MUHAMMED SHANID P', '9', 'SWALAH'),
(1108, 246, 'D3bQw', 'MUHAMMAD NISHAD A', '9', 'SWALAH'),
(1109, 248, 'J7aIy', 'MUHAMMED SARBAS P', '9', 'SWALAH'),
(1110, 249, 'P9aOq', 'MUHAMMED MUBARAK TT', '9', 'SWALAH'),
(1111, 250, 'L1bPt', 'MUHAMMED MIRAS V', '9', 'SWALAH'),
(1112, 253, 'T1aCq', 'MUHAMMAD RAYYAN PK', '9', 'SWALAH'),
(1113, 256, 'B4bHr', 'MUHAMMED NAFIH PP', '9', 'SWALAH'),
(1114, 257, 'H4aXz', 'MUHAMMED HAYAN', '9', 'SWALAH'),
(1115, 259, 'P8aEy', 'NUFAIL MT', '8', 'FIRST'),
(1116, 260, 'O2bLz', 'MASHOOD', '8', 'FIRST'),
(1117, 261, 'P9bMw', 'RASWEEN ', '8', 'FIRST'),
(1118, 262, 'M4bSy', 'ASLAM V', '8', 'FIRST'),
(1119, 263, 'H6bNr', 'SINAN EK', '8', 'FIRST'),
(1120, 264, 'D7aFz', 'MISHAL JABIN', '8', 'FIRST'),
(1121, 265, 'U4bPy', 'THAZIM', '8', 'FIRST'),
(1122, 266, 'Y7aOz', 'NAJAD', '8', 'FIRST'),
(1123, 267, 'T5bNw', 'SAINUL ABID', '8', 'FIRST'),
(1124, 268, 'H4aPv', 'RABEEH', '8', 'FIRST'),
(1125, 269, 'G1bYq', 'ADNAN', '8', 'FIRST'),
(1126, 270, 'O8aYx', 'ASHIF', '8', 'FIRST'),
(1127, 271, 'Y1aNt', 'JASIM', '8', 'FIRST'),
(1128, 255, 'W7bIv', 'MUHAMMAD ANAS KP', '8', 'FIRST'),
(0, 0, '0000', 'demo', 'VIII', 'FIRST'),
(1000, 0, '1000', 'demo', 'VIII', 'FIRST'),
(10000, 0, '1000', 'demo', 'VIII', 'FIRST'),
(1025, 30, 'B4bAy', 'Muhammed Nihal Pc', 'D2', 'MISBAH'),
(1027, 37, 'L8aMs', 'SABIR.V', 'D2', 'MISBAH'),
(1026, 34, 'C5bZz', 'MUHAMMED MUBASHIR', 'D2', 'MISBAH');

-- --------------------------------------------------------

--
-- Table structure for table `votes`
--

CREATE TABLE `votes` (
  `voter_id` int(11) NOT NULL,
  `classunion` varchar(100) NOT NULL,
  `presidential` varchar(100) NOT NULL,
  `secretarial` varchar(100) NOT NULL,
  `vice_presidential` varchar(100) NOT NULL,
  `treasurer` varchar(100) NOT NULL,
  `TimeStamb` varchar(6) NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `votes`
--

INSERT INTO `votes` (`voter_id`, `classunion`, `presidential`, `secretarial`, `vice_presidential`, `treasurer`, `TimeStamb`) VALUES
(1001, 'ITHIFAAQ', '2001', '2005', '2010', '2012', ''),
(1001, 'ITHIFAAQ', '2001', '2005', '2010', '2012', ''),
(1002, 'ITHIFAAQ', '', '', '', '', ''),
(1003, 'ITHIFAAQ', '', '', '', '', ''),
(1004, 'ITHIFAAQ', '', '', '', '', ''),
(1005, 'ITHIFAAQ', '', '', '', '', ''),
(1006, 'ITHIFAAQ', '2001', '2006', '2010', '2012', ''),
(1007, 'ITHIFAAQ', '2001', '2005', '2010', '2014', ''),
(1008, 'ITHIFAAQ', '', '', '', '', ''),
(1009, 'ITHIFAAQ', '', '', '', '', ''),
(1010, 'ITHIFAAQ', '', '', '', '', ''),
(1011, 'ITHIFAAQ', '', '', '', '', ''),
(1012, 'ITHIFAAQ', '', '', '', '', ''),
(1013, 'MISBAH', '2001', '2006', '2010', '2014', ''),
(1014, 'MISBAH', '2002', '2006', '2009', '2014', ''),
(1015, 'MISBAH', '2001', '2007', '2010', '2013', ''),
(1016, 'MISBAH', '2001', '2006', '2009', '2014', ''),
(1017, 'MISBAH', '2001', '2005', '2011', '2014', ''),
(1018, 'MISBAH', '2001', '2006', '2010', '2014', ''),
(1019, 'MISBAH', '2001', '2005', '2010', '2014', ''),
(1020, 'MISBAH', '2001', '2005', '2011', '2012', ''),
(1021, 'MISBAH', '2001', '2006', '2009', '2014', ''),
(1022, 'MISBAH', '2001', '2005', '2010', '2014', ''),
(1023, 'MISBAH', '2002', '2006', '2010', '2013', ''),
(1024, 'MISBAH', '2001', '2006', '2009', '2012', ''),
(1028, 'HASANA', '2002', '2005', '2010', '2012', ''),
(1029, 'HASANA', '2002', '2006', '2009', '2012', ''),
(1030, 'HASANA', '2002', '2006', '2009', '2012', ''),
(1031, 'HASANA', '2002', '2008', '2010', '2013', ''),
(1032, 'HASANA', '2002', '2006', '2009', '2013', ''),
(1033, 'HASANA', '', '', '', '', ''),
(1034, 'HASANA', '', '', '', '', ''),
(1035, 'HASANA', '2003', '2005', '2009', '2013', ''),
(1036, 'HASANA', '2002', '2006', '2010', '2013', ''),
(1037, 'HASANA', '2002', '2005', '2009', '2013', ''),
(1038, 'HASANA', '2002', '2005', '2009', '2012', ''),
(1039, 'HASANA', '2002', '2006', '2010', '2012', ''),
(1040, 'HASANA', '2003', '2006', '2009', '2013', ''),
(1041, 'HASANA', '2002', '2006', '2009', '2013', ''),
(1042, 'HASANA', '2002', '2005', '2009', '2013', ''),
(1043, 'AL-AYIN', '2002', '2005', '2010', '2012', ''),
(1044, 'AL-AYIN', '2001', '2005', '2010', '2012', ''),
(1045, 'AL-AYIN', '2002', '2005', '2010', '2012', ''),
(1046, 'AL-AYIN', '2002', '2005', '2009', '2012', ''),
(1047, 'AL-AYIN', '2002', '2005', '2010', '2012', ''),
(1048, 'AL-AYIN', '2002', '2005', '2011', '2012', ''),
(1049, 'AL-AYIN', '2002', '2005', '2010', '2012', ''),
(1050, 'AL-AYIN', '2002', '2006', '2009', '2012', ''),
(1051, 'AL-AYIN', '2002', '2006', '2010', '2012', ''),
(1052, 'AL-AYIN', '2002', '2005', '2010', '2012', ''),
(1053, 'AL-AYIN', '2002', '2005', '2010', '2012', ''),
(1054, 'AL-AYIN', '2001', '2007', '2009', '2012', ''),
(1055, 'AL-AYIN', '2002', '2005', '2010', '2012', ''),
(1056, 'AL-AYIN', '2002', '2006', '2010', '2012', ''),
(1057, 'AL-AYIN', '2002', '2005', '2010', '2012', ''),
(1058, 'AL-AYIN', '2002', '2005', '2011', '2012', ''),
(1059, 'IJTIMA', '2002', '2006', '2010', '2012', ''),
(1060, 'IJTIMA', '2002', '2006', '2010', '2012', ''),
(1061, 'IJTIMA', '2002', '2006', '2010', '2012', ''),
(1062, 'IJTIMA', '2002', '2006', '2009', '2013', ''),
(1063, 'IJTIMA', '2002', '2006', '2010', '2013', ''),
(1064, 'IJTIMA', '2002', '2005', '2009', '2012', ''),
(1065, 'IJTIMA', '2002', '2005', '2010', '2012', ''),
(1066, 'IJTIMA', '2002', '2005', '2010', '2012', ''),
(1067, 'IJTIMA', '2002', '2006', '2010', '2012', ''),
(1068, 'IJTIMA', '2002', '2006', '2010', '2013', ''),
(1069, 'IJTIMA', '2002', '2005', '2010', '2013', ''),
(1070, 'IJTIMA', '2002', '2006', '2010', '2012', ''),
(1071, 'IJTIMA', '2002', '2005', '2010', '2012', ''),
(1072, 'IJTIMA', '2002', '2006', '2010', '2012', ''),
(1073, 'IJTIMA', '2002', '2005', '2010', '2012', ''),
(1074, 'IJTIMA', '2002', '2006', '2010', '2013', ''),
(1075, 'IJTIMA', '2002', '2006', '2009', '2013', ''),
(1076, 'ADAB', '2001', '2005', '2010', '2014', ''),
(1077, 'ADAB', '2002', '2005', '2010', '2012', ''),
(1078, 'ADAB', '2002', '2005', '2009', '2013', ''),
(1079, 'ADAB', '2002', '2005', '2010', '2012', ''),
(1080, 'ADAB', '2002', '2005', '2010', '2012', ''),
(1081, 'ADAB', '2002', '2005', '2009', '2012', ''),
(1082, 'ADAB', '2002', '2005', '2009', '2012', ''),
(1083, 'ADAB', '2002', '2005', '2010', '2012', ''),
(1084, 'ADAB', '2001', '2005', '2009', '2012', ''),
(1085, 'ADAB', '2002', '2005', '2010', '2012', ''),
(1086, 'ADAB', '2001', '2005', '2010', '2014', ''),
(1087, 'ADAB', '2002', '2005', '2010', '2012', ''),
(1088, 'ADAB', '2002', '2005', '2010', '2012', ''),
(1089, 'ADAB', '2001', '2005', '2010', '2012', ''),
(1090, 'ADAB', '2002', '2005', '2010', '2012', ''),
(1091, 'ADAB', '2002', '2005', '2010', '2012', ''),
(1092, 'ADAB', '2002', '2005', '2010', '2012', ''),
(1093, 'ADAB', '2002', '2006', '2010', '2012', ''),
(1094, 'SWALAH', '2002', '2005', '2010', '2012', ''),
(1095, 'SWALAH', '2002', '2005', '2010', '2012', ''),
(1096, 'SWALAH', '2001', '2007', '2009', '2013', ''),
(1097, 'SWALAH', '2002', '2005', '2010', '2012', ''),
(1098, 'SWALAH', '2001', '2005', '2010', '2012', ''),
(1099, 'SWALAH', '2002', '2006', '2010', '2012', ''),
(1100, 'SWALAH', '2001', '2005', '2009', '2012', ''),
(1101, 'SWALAH', '2002', '2005', '2010', '2012', ''),
(1102, 'SWALAH', '2002', '2005', '2009', '2012', ''),
(1103, 'SWALAH', '2002', '2006', '2010', '2012', ''),
(1104, 'SWALAH', '2001', '2005', '2010', '2014', ''),
(1105, 'SWALAH', '2002', '2005', '2010', '2012', ''),
(1106, 'SWALAH', '2001', '2005', '2010', '2014', ''),
(1107, 'SWALAH', '2002', '2005', '2010', '2012', ''),
(1108, 'SWALAH', '2002', '2005', '2010', '2012', ''),
(1109, 'SWALAH', '2001', '2005', '2010', '2014', ''),
(1110, 'SWALAH', '2002', '2005', '2010', '2012', ''),
(1111, 'SWALAH', '2001', '2005', '2010', '2014', ''),
(1112, 'SWALAH', '2001', '2005', '2010', '2014', ''),
(1113, 'SWALAH', '2002', '2005', '2010', '2012', ''),
(1114, 'SWALAH', '2002', '2006', '2010', '2012', ''),
(1115, 'FIRST', '2001', '2005', '2010', '2012', ''),
(1116, 'FIRST', '2002', '2005', '2010', '2012', ''),
(1117, 'FIRST', '2002', '2005', '2009', '2012', ''),
(1118, 'FIRST', '2002', '2005', '2010', '2012', ''),
(1119, 'FIRST', '2002', '2005', '2010', '2012', ''),
(1120, 'FIRST', '2001', '2005', '2010', '2013', ''),
(1121, 'FIRST', '2001', '2005', '2010', '2012', ''),
(1122, 'FIRST', '2002', '2005', '2010', '2012', ''),
(1123, 'FIRST', '2001', '2005', '2010', '2012', ''),
(1124, 'FIRST', '2002', '2005', '2010', '2012', ''),
(1125, 'FIRST', '2002', '2005', '2009', '2012', ''),
(1126, 'FIRST', '2001', '2005', '2010', '2012', ''),
(1127, 'FIRST', '2001', '2006', '2010', '2014', ''),
(1025, 'MISBAH', '2001', '2007', '2009', '2012', ''),
(1027, 'MISBAH', '2001', '2006', '2009', '2015', ''),
(1026, 'MISBAH', '2001', '2005', '2010', '2014', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
