-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 02, 2023 at 01:49 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `orhanoik_sivig_laravel`
--

-- --------------------------------------------------------

--
-- Table structure for table `articulos`
--

CREATE TABLE `articulos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cod_interno` varchar(191) NOT NULL,
  `cod_barras` varchar(191) NOT NULL,
  `descripcion` varchar(191) NOT NULL,
  `costo_neto` int(11) NOT NULL,
  `costo_imp` int(11) NOT NULL,
  `venta_neto` int(11) NOT NULL,
  `venta_imp` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `stock_critico` int(11) NOT NULL,
  `activo` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `articulos`
--

INSERT INTO `articulos` (`id`, `cod_interno`, `cod_barras`, `descripcion`, `costo_neto`, `costo_imp`, `venta_neto`, `venta_imp`, `stock`, `stock_critico`, `activo`, `created_at`, `updated_at`) VALUES
(1, 'hdmi3m', '03206', 'cable hdmi 3m', 1672, 318, 2513, 477, 3, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16'),
(2, 'p-340', '6950854602377', 'audifonos manos libres con cable', 2101, 399, 5034, 956, 2, 6, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16'),
(3, 'hdmi5m', '4595654570625', 'cable hdmi 5m plano', 1672, 318, 4193, 797, 3, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16'),
(4, 'bt-350', 'bt-350', 'receptor de audio bluetooth', 840, 160, 2521, 479, 4, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16'),
(5, 'LG-40495', '6957438072083', 'cuaderno cat', 1261, 239, 2513, 477, 2, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16'),
(6, 'LG-40516', '6957438072090', 'cuaderno cat grande', 1681, 319, 3353, 637, 1, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16'),
(7, 'ec-cl7-blk', '6923450656372', 'set de 7 cuchillos negros', 4874, 926, 9235, 1755, 1, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16'),
(8, '82143', '2020123821434', 'dispensador de papel para cocina', 3361, 639, 7555, 1435, 1, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16'),
(9, '1618110', '1618110', 'tira led 5 metros  RGB', 2689, 511, 5874, 1116, 3, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16'),
(10, 'RS-434', 'RS-434', 'Olla calentadora cera ', 3782, 718, 8403, 1597, 4, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16'),
(11, 'JS-747', '8687807885157', 'Dispensador 4 en 1', 5034, 956, 8395, 1595, 4, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16'),
(12, '8018', '8018', 'Organizador microonda', 3361, 639, 6723, 1277, 1, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16'),
(13, 'BASURERO', '6977009124003', 'Basurero magico ', 840, 160, 1681, 319, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51'),
(14, 'NL-2423', '6907662694230', 'Pie de arbol', 700, 133, 1681, 319, 2, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16'),
(15, 'limpiadorfacial', '2020123402190', 'limpiador facial USB', 1261, 239, 2513, 477, 3, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16'),
(16, 'JD-2178-T', '7858816081828', 'luz solar con control remoto, simula camara', 5042, 958, 10084, 1916, 3, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16'),
(17, 'soportebicicleta', 'soportebicicleta', 'soporte bicicleta', 1672, 318, 4193, 797, 6, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16'),
(18, 'camelia-blanco-m', 'camelia-blanco-m', 'delantal camelia blanco M', 10084, 1916, 20990, 3988, 1, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51'),
(19, 'camelia-blanco-s', 'camelia-blanco-s', 'delantal camelia blanco S', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51'),
(20, 'yris-blanco-xl', 'yris-blanco-xl', 'delantal yris blanco XL', 10924, 2076, 19319, 3671, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51'),
(21, 'yris-blanco-l', 'yris-blanco-l', 'delantal yris blanco L', 10084, 1916, 17639, 3351, 1, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:56:26'),
(22, 'yris-gris-s', 'yris-gris-s', 'delantal Yris gris S', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51'),
(23, 'yris-gris-m', 'yris-gris-m', 'delantal Yris gris M', 10084, 1916, 17639, 3351, 1, 5, 1, '2022-10-09 02:05:51', '2022-10-09 03:07:34'),
(24, 'camelia-gris-l', 'camelia-gris-l', 'delantal camelia gris L', 10084, 1916, 17639, 3351, 1, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:56:26'),
(25, 'camelia-gris-xl', 'camelia-gris-xl', 'delantal camelia gris XL', 10924, 2076, 19319, 3671, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51'),
(26, 'camelia-gris-xxl', 'camelia-gris-xxl', 'delantal camelia gris XXL', 10924, 2076, 19319, 3671, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51'),
(27, 'frida-azul-electrico-m', '152DFEEM', 'delantal Frida azul electrico M', 10084, 1916, 17563, 3337, 1, 5, 1, '2022-10-09 02:05:51', '2022-10-09 03:07:34'),
(28, 'jardin-azul-acero-l', '162DJACACL', 'delantal Jardin azul acero L', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51'),
(29, 'love-azul-acero-l', '117ACL', 'delantal Love azul acero L', 10084, 1916, 17639, 3351, 1, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:56:26'),
(30, 'rumy-azul-acero-m', '1299ACM', 'delantal Rumy azul acero M', 10084, 1916, 17639, 3351, 1, 5, 1, '2022-10-09 02:05:51', '2022-10-09 03:07:34'),
(31, 'jardin-burdeo-xl', 'jardin-burdeo-xl', 'delantal Jardin burdeo XL', 10924, 2076, 19319, 3671, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51'),
(32, 'llamita-burdeo-l', '79BUL', 'delantal Llamita burdeo L', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51'),
(33, 'natura-burdeo-s', '52BUS', 'delantal Natura burdeo S', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51'),
(34, 'love-burdeo-m', '110BUM', 'delantal Love burdeo M', 10084, 1916, 17639, 3351, 1, 5, 1, '2022-10-09 02:05:51', '2022-10-09 03:07:34'),
(35, 'natura-verde-s', '150DNAVS', 'delantal Natura verde S', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51'),
(36, 'jardin-verde-s', '157DJVVS', 'delantal Jardin verde S', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51'),
(37, 'hadita-verde-xl', '127DHAVXL', 'delantal Hadita verde XL', 10924, 2076, 19319, 3671, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51'),
(38, 'alicia-verde-m', '165DAVVM', 'delantal Alicia verde m', 10084, 1916, 17639, 3351, 1, 5, 1, '2022-10-09 02:05:51', '2022-10-09 03:07:34'),
(39, 'hadita-verde-m', '127DHAVM', 'delantal Hadita verde M', 10084, 1916, 17639, 3351, 1, 5, 1, '2022-10-09 02:05:51', '2022-10-09 03:07:34'),
(40, 'llamita-verde-m', '136DLLAVM', 'delantal Llamita verde M', 10084, 1916, 17639, 3351, 1, 5, 1, '2022-10-09 02:05:51', '2022-10-09 03:07:34'),
(41, 'hadita-verde-l', '127DHAVL', 'delantal Hadita verde L', 10084, 1916, 17639, 3351, 1, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:56:26'),
(42, 'jardin-verde-m', '157DJVVM', 'delantal Jardin verde M', 10084, 1916, 17639, 3351, 1, 5, 1, '2022-10-09 02:05:51', '2022-10-09 03:07:34'),
(43, 'love-verde-l', '120 DLVL', 'delantal Love verde L', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51'),
(44, 'jardin-verde-l', '157DJVVL', 'delantal Jardin verde L', 10084, 1916, 17639, 3351, 1, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:56:26'),
(45, 'llamita-verde-xl', '136DLLAVXL', 'delantal Llamita verde XL', 10924, 2076, 19319, 3671, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51'),
(46, 'alicia-verde-l', '165DAVVL', 'delantal Alicia verde L', 10084, 1916, 17639, 3351, 1, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:56:26'),
(47, 'hadita-azul-marino-s', '127DHAAS', 'delantal Hadita azul acero S', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51'),
(48, 'llamita-azul-marino-l', '136DLLAAL', 'delantal Llamita azul marino L', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51'),
(49, 'hadita-azul-marino-l', '127DHAAL', 'delantal Hadita azul marino L ', 10084, 1916, 17639, 3351, 1, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:56:26'),
(50, 'jardin-manga-larga-azul-marino-l', '1097AML', 'delantal Jardin manga larga azul marino L', 10084, 1916, 17639, 3351, 1, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:56:26'),
(51, 'natura-azul-marino-m', '35AMM', 'delantal Natura azul marino M', 10084, 1916, 17639, 3351, 1, 5, 1, '2022-10-09 02:05:51', '2022-10-09 03:07:34'),
(52, 'fantasia-azul-marino-l', '280ATL', 'delantal Fantasia azul marino L', 10084, 1916, 17639, 3351, 1, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16'),
(53, 'pintorcito-azul-marino-l', '293AML', 'delantal Pintorcito azul marino L', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51'),
(54, 'rumy-azul-marino-xl', '236AMXL', 'delantal Rumy azul marino XL', 10924, 2076, 19319, 3671, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51'),
(55, 'love-azul-marino-s', '91AMS', 'delantal Love azul marino S', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51'),
(56, 'gatito-lunar-azul-marino-m', '123AMM', 'delantal Gatito Lunar azul marino M', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51'),
(57, 'farfy-azul-marino-s', '244AMS', 'delantal Farfy azul marino S', 10084, 1916, 17647, 3353, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51'),
(58, 'llamita-azul-acero-m', '136DLLAACM', 'delantal Llamita azul acero M', 10084, 1916, 17639, 3351, 1, 5, 1, '2022-10-09 03:05:37', '2022-10-09 03:07:34'),
(59, 'test', 'test', 'articulo de pruebas', 850, 162, 1500, 285, 0, 5, 1, '2023-01-05 05:02:41', '2023-01-05 05:02:41'),
(60, 'tests', 'tests', 'articulo de pruebas', 1500, 285, 1500, 285, 0, 5, 0, '2023-01-05 05:08:47', '2023-01-05 05:08:47'),
(61, 'tests2', 'tests2', 'articulo de pruebas', 1500, 285, 1500, 285, 0, 5, 0, '2023-02-01 23:26:37', '2023-02-01 23:26:37'),
(62, 'test3', 'test3', 'articulo de pruebas', 2000, 380, 2850, 542, 0, 5, 1, '2023-02-01 23:40:36', '2023-02-01 23:40:36');

-- --------------------------------------------------------

--
-- Table structure for table `issues`
--

CREATE TABLE `issues` (
  `id` int(11) NOT NULL,
  `issue` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `id_section` int(11) DEFAULT NULL,
  `id_status` int(11) DEFAULT NULL,
  `id_type` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `issues`
--

INSERT INTO `issues` (`id`, `issue`, `createdAt`, `updatedAt`, `id_section`, `id_status`, `id_type`) VALUES
(1, 'agregar datos de resumen a widgets pagina principal', '2023-01-24 19:27:46', '2023-01-25 18:23:44', 1, 2, 2),
(2, 'Registrar medios de pago', '2023-01-24 19:28:27', '2023-01-24 19:28:27', 2, 1, 3),
(6, 'agregar generador de codigos de barra', '2023-01-25 18:06:54', '2023-01-27 16:51:22', 4, 1, 3),
(7, 'reporte de ventas mensuales', '2023-01-27 17:01:37', '2023-01-27 17:01:37', 5, 1, 3),
(8, 'falta estado resulto en issues', '2023-01-27 23:12:18', '2023-01-27 23:12:18', 2, 1, 1),
(9, 'filtro en listado de issues', '2023-01-30 09:41:35', '2023-01-30 09:41:35', 2, 1, 2),
(10, 'porcentaje de avance en estado de issue', '2023-01-30 09:42:30', '2023-01-30 09:42:30', 2, 1, 2),
(11, 'integracion simpleapi para datos de compras y ventas', '2023-01-30 09:43:12', '2023-01-30 09:43:12', 1, 1, 3),
(12, 'integracion con api mercadolibre', '2023-01-30 09:43:43', '2023-01-30 09:43:43', 1, 1, 3),
(13, 'integracion con webhooks prestashop', '2023-01-30 09:44:10', '2023-01-30 09:44:10', 1, 1, 3),
(14, 'reporte de compras mensual', '2023-01-30 12:36:40', '2023-01-30 12:36:40', 5, 1, 3),
(15, 'agregar filtros en listado de productos', '2023-01-30 12:52:52', '2023-01-30 12:52:52', 4, 1, 2),
(16, 'comisiones en medios de pago', '2023-02-01 19:41:58', '2023-02-01 19:41:58', 3, 1, 3),
(17, 'reporte de inventario critico', '2023-02-01 19:44:46', '2023-02-01 19:44:46', 5, 1, 3),
(18, 'reporte de inventario con montos y ganancia esperada', '2023-02-01 19:45:22', '2023-02-01 19:45:22', 5, 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `issue_sections`
--

CREATE TABLE `issue_sections` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `issue_sections`
--

INSERT INTO `issue_sections` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'General', '2023-01-24 19:22:42', '2023-01-24 19:22:42'),
(2, 'Configuracion', '2023-01-24 19:22:42', '2023-01-24 19:22:42'),
(3, 'Ventas', '2023-01-24 19:23:08', '2023-01-24 19:23:08'),
(4, 'Inventario', '2023-01-24 19:23:08', '2023-01-24 19:23:08'),
(5, 'Reportes', '2023-01-24 19:23:24', '2023-01-24 19:23:24'),
(6, 'Caja', '2023-01-24 19:23:24', '2023-01-24 19:23:24');

-- --------------------------------------------------------

--
-- Table structure for table `issue_statuses`
--

CREATE TABLE `issue_statuses` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `issue_statuses`
--

INSERT INTO `issue_statuses` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Pendiente', '2023-01-24 19:24:01', '2023-01-24 19:24:01'),
(2, 'En desarrollo', '2023-01-24 19:24:01', '2023-01-24 19:24:01'),
(3, 'Finalizado', '2023-02-01 23:30:16', '2023-02-01 23:30:16'),
(4, 'Detenido', '2023-02-01 23:30:16', '2023-02-01 23:30:16');

-- --------------------------------------------------------

--
-- Table structure for table `issue_types`
--

CREATE TABLE `issue_types` (
  `id` int(11) NOT NULL,
  `issue_type` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `issue_types`
--

INSERT INTO `issue_types` (`id`, `issue_type`, `createdAt`, `updatedAt`) VALUES
(1, 'Error', '2023-01-24 19:21:02', '2023-01-24 19:21:02'),
(2, 'Mejora', '2023-01-24 19:21:02', '2023-01-24 19:21:02'),
(3, 'Funcionalidad futura', '2023-01-24 19:21:52', '2023-01-24 19:21:52');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `user` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `user`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Danilo', 'danilo', 'danilo.cid.v@gmail.com', '$2a$10$E5LyhqTJRGJ5XBPQS4jKhOYfw7.SjUgai85NyMiHiIT71QOhM43IC', '2023-01-24 19:12:59', '2023-01-24 19:12:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `articulos_cod_interno_unique` (`cod_interno`),
  ADD UNIQUE KEY `articulos_cod_barras_unique` (`cod_barras`);

--
-- Indexes for table `issues`
--
ALTER TABLE `issues`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `issue` (`issue`),
  ADD KEY `id_section` (`id_section`),
  ADD KEY `id_status` (`id_status`),
  ADD KEY `id_type` (`id_type`);

--
-- Indexes for table `issue_sections`
--
ALTER TABLE `issue_sections`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `issue_statuses`
--
ALTER TABLE `issue_statuses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `issue_types`
--
ALTER TABLE `issue_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `issue_type` (`issue_type`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `user` (`user`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articulos`
--
ALTER TABLE `articulos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `issues`
--
ALTER TABLE `issues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `issue_sections`
--
ALTER TABLE `issue_sections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `issue_statuses`
--
ALTER TABLE `issue_statuses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `issue_types`
--
ALTER TABLE `issue_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `issues`
--
ALTER TABLE `issues`
  ADD CONSTRAINT `issues_ibfk_2` FOREIGN KEY (`id_section`) REFERENCES `issue_sections` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `issues_ibfk_3` FOREIGN KEY (`id_status`) REFERENCES `issue_statuses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `issues_ibfk_4` FOREIGN KEY (`id_type`) REFERENCES `issue_types` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
