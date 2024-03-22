-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 15-03-2024 a las 02:23:27
-- Versión del servidor: 10.11.7-MariaDB
-- Versión de PHP: 7.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `orhanoik_sivig_laravel`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ajustes_de_inventarios`
--

CREATE TABLE `ajustes_de_inventarios` (
  `id` int(11) NOT NULL,
  `costo_neto` int(11) NOT NULL,
  `costo_imp` int(11) NOT NULL,
  `entradas` int(11) NOT NULL,
  `salidas` int(11) NOT NULL,
  `tipo_movimiento_id` int(11) NOT NULL,
  `observaciones` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `ajustes_de_inventarios`
--

INSERT INTO `ajustes_de_inventarios` (`id`, `costo_neto`, `costo_imp`, `entradas`, `salidas`, `tipo_movimiento_id`, `observaciones`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 54620, 10380, 5, 0, 1, 'delantales XL y XXL', 1, '2023-05-17 20:33:45', '2023-05-17 20:33:45'),
(2, 60504, 11496, 6, 0, 1, 'delantales L', 1, '2023-05-17 20:39:47', '2023-05-17 20:39:47'),
(3, 100840, 19160, 10, 0, 1, 'delantales M', 1, '2023-05-17 20:55:08', '2023-05-17 20:55:08'),
(4, 60504, 11496, 6, 0, 1, 'delantales talla S', 1, '2023-05-17 21:11:42', '2023-05-17 21:11:42'),
(5, 10084, 1916, 1, 0, 4, 'Delantal talla S', 1, '2023-05-17 21:13:07', '2023-05-17 21:13:07'),
(6, 8319, 1581, 10, 0, 1, 'billeteras china', 1, '2023-05-17 22:15:33', '2023-05-17 22:15:33'),
(7, 3782, 718, 7, 0, 1, 'productos', 1, '2023-05-18 00:44:01', '2023-05-18 00:44:01'),
(8, 3782, 718, 7, 0, 1, 'productos', 1, '2023-05-18 00:44:02', '2023-05-18 00:44:02'),
(9, 17462, 3318, 7, 0, 1, 'cocina', 1, '2023-05-18 00:59:09', '2023-05-18 00:59:09'),
(10, 20591, 3912, 22, 0, 1, 'productos faltantes', 1, '2023-05-18 01:12:34', '2023-05-18 01:12:34'),
(11, 10084, 1916, 1, 0, 4, 'ajuste', 1, '2023-09-06 19:40:09', '2023-09-06 19:40:09'),
(12, 52605, 9995, 5, 0, 1, 'repecion delantales natura azul marino', 1, '2023-11-06 20:00:11', '2023-11-06 20:00:11'),
(13, 42605, 8095, 4, 0, 1, 'repecion delantales natura verde botella', 1, '2023-11-07 00:10:47', '2023-11-07 00:10:47'),
(14, 42605, 8095, 4, 0, 1, 'recepcion delantales natura burdeo', 1, '2023-11-07 14:09:34', '2023-11-07 14:09:34'),
(15, 55041, 10459, 5, 0, 1, 'recepcion delantales love azul marino', 1, '2023-11-07 14:53:37', '2023-11-07 14:53:37'),
(16, 55041, 10459, 5, 0, 1, 'recepcion delantales love verde botella', 1, '2023-11-07 17:49:06', '2023-11-07 17:49:06'),
(17, 100000, 19000, 10, 0, 1, 'recepcion delantales frida, kusi, primavera', 1, '2023-11-08 16:37:52', '2023-11-08 16:37:52'),
(18, 10084, 1916, 1, 0, 6, 'Devolucion mercadoLibre', 1, '2024-03-07 00:55:52', '2024-03-07 00:55:52'),
(19, 9160, 1740, 1, 0, 6, 'Devolucion mercadoLibre', 1, '2024-03-08 00:30:50', '2024-03-08 00:30:50'),
(20, 10449, 2451, 0, 1, 4, 'descuadre', 1, '2024-03-14 01:25:36', '2024-03-14 01:25:36');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

CREATE TABLE `articulos` (
  `id` int(11) NOT NULL,
  `cod_interno` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `cod_barras` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `costo_neto` int(11) NOT NULL,
  `costo_imp` int(11) NOT NULL,
  `venta_neto` int(11) NOT NULL,
  `venta_imp` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `stock_critico` int(11) NOT NULL,
  `activo` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `last_cont` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`id`, `cod_interno`, `cod_barras`, `descripcion`, `costo_neto`, `costo_imp`, `venta_neto`, `venta_imp`, `stock`, `stock_critico`, `activo`, `created_at`, `updated_at`, `last_cont`) VALUES
(1, 'hdmi3m', '03206', 'cable hdmi 3m', 1672, 318, 2513, 477, 3, 5, 1, '2022-10-09 02:05:51', '2023-05-18 01:12:37', '2023-02-08 02:18:59'),
(2, 'p-340', '6950854602377', 'audifonos manos libres con cable', 2101, 399, 5034, 956, 1, 6, 1, '2022-10-09 02:05:51', '2023-05-18 01:12:39', '2023-02-11 02:18:59'),
(3, 'hdmi5m', '4595654570625', 'cable hdmi 5m plano', 1672, 318, 4193, 797, 3, 5, 1, '2022-10-09 02:05:51', '2023-05-18 01:12:38', '2023-02-11 02:18:59'),
(4, 'bt-350', '5004', 'receptor de audio bluetooth', 840, 160, 2521, 479, 8, 5, 1, '2022-10-09 02:05:51', '2023-05-18 00:44:03', '2023-02-11 02:18:59'),
(5, 'LG-40495', '6957438072083', 'cuaderno cat', 1261, 239, 2513, 477, 4, 5, 1, '2022-10-09 02:05:51', '2023-05-18 00:44:03', '2023-02-11 02:18:59'),
(6, 'LG-40516', '6957438072090', 'cuaderno cat grande', 1681, 319, 3353, 637, 2, 5, 1, '2022-10-09 02:05:51', '2023-05-18 00:44:03', '2023-02-11 02:18:59'),
(7, 'ec-cl7-blk', '6923450656372', 'set de 7 cuchillos negros', 4874, 926, 9235, 1755, 1, 5, 1, '2022-10-09 02:05:51', '2023-05-18 00:59:11', '2023-02-11 02:18:59'),
(8, '82143', '2020123821434', 'dispensador de papel para cocina', 3361, 639, 7555, 1435, 0, 5, 0, '2022-10-09 02:05:51', '2022-10-09 02:51:16', '2023-02-11 02:18:59'),
(9, '1618110', '1618110', 'tira led 5 metros  RGB', 2689, 511, 5874, 1116, 3, 5, 1, '2022-10-09 02:05:51', '2023-05-18 01:12:37', '2023-02-11 02:18:59'),
(10, 'RS-434', 'RS-434', 'Olla calentadora cera ', 3782, 718, 8403, 1597, 1, 5, 1, '2022-10-09 02:05:51', '2023-05-18 01:12:40', '2023-02-11 02:18:59'),
(11, 'JS-747', '8687807885157', 'Dispensador 4 en 1', 5034, 956, 8395, 1595, 2, 5, 1, '2022-10-09 02:05:51', '2023-05-18 00:59:11', '2023-02-11 02:18:59'),
(12, '8018', '8018', 'Organizador microonda', 3361, 639, 6723, 1277, 1, 5, 1, '2022-10-09 02:05:51', '2023-05-18 00:59:11', '2023-02-11 02:18:59'),
(13, 'BASURERO', '6977009124003', 'Basurero magico ', 840, 160, 1681, 319, 1, 5, 1, '2022-10-09 02:05:51', '2023-05-18 00:59:12', '2023-02-11 02:18:59'),
(14, 'NL-2423', '6907662694230', 'Pie de arbol', 700, 133, 1681, 319, 2, 5, 1, '2022-10-09 02:05:51', '2023-05-18 01:12:40', '2023-02-11 02:18:59'),
(15, 'limpiadorfacial', '2020123402190', 'limpiador facial USB', 1261, 239, 2513, 477, 3, 5, 1, '2022-10-09 02:05:51', '2023-05-18 01:12:38', '2023-02-11 02:18:59'),
(16, 'JD-2178-T', '7858816081828', 'luz solar con control remoto, simula camara', 5042, 958, 10084, 1916, 2, 5, 1, '2022-10-09 02:05:51', '2023-05-18 01:12:39', '2023-02-11 02:18:59'),
(17, 'soportebicicleta', 'soportebicicleta', 'soporte bicicleta', 1672, 318, 4193, 797, 3, 5, 1, '2022-10-09 02:05:51', '2023-05-18 01:12:37', '2023-02-11 02:18:59'),
(18, 'camelia-blanco-m', '50018', 'delantal camelia blanco M', 10084, 1916, 17639, 3351, 0, 5, 0, '2022-10-09 02:05:51', '2023-05-17 20:55:11', '2023-02-11 02:18:59'),
(19, 'camelia-blanco-s', '50019', 'delantal camelia blanco S', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2023-05-17 21:11:43', '2023-02-11 02:18:59'),
(20, 'yris-blanco-xl', '50020', 'delantal yris blanco XL', 10924, 2076, 19319, 3671, 0, 5, 0, '2022-10-09 02:05:51', '2023-05-17 20:33:47', '2023-02-11 02:18:59'),
(21, 'iris-blanco-l', '50021', 'delantal iris blanco L', 10084, 1916, 17639, 3351, 0, 5, 0, '2022-10-09 02:05:51', '2023-05-17 20:39:49', '2023-02-11 02:18:59'),
(22, 'yris-gris-s', '50022', 'delantal Yris gris S', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2023-05-17 21:11:43', '2023-02-11 02:18:59'),
(23, 'yris-gris-m', '50023', 'delantal iris gris M', 10084, 1916, 17639, 3351, 0, 5, 0, '2022-10-09 02:05:51', '2023-05-17 20:55:12', '2023-02-11 02:18:59'),
(24, 'camelia-gris-l', '50024', 'delantal camelia gris L', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2023-05-17 20:39:49', '2023-02-11 02:18:59'),
(25, 'camelia-gris-xl', 'camelia-gris-xl', 'delantal camelia gris XL', 10924, 2076, 19319, 3671, 0, 5, 0, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(26, 'camelia-gris-xxl', '50026', 'delantal camelia gris XXL', 10924, 2076, 19319, 3671, 0, 5, 0, '2022-10-09 02:05:51', '2023-05-17 20:33:48', '2023-02-11 02:18:59'),
(27, 'frida-azul-electrico-m', '152DFEEM', 'delantal Frida azul electrico M', 10084, 1916, 17563, 3337, 0, 5, 0, '2022-10-09 02:05:51', '2022-10-09 03:07:34', '2023-02-11 02:18:59'),
(28, 'jardin-azul-acero-l', '162DJACACL', 'delantal Jardin azul acero L', 10084, 1916, 17639, 3351, 0, 5, 0, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(29, 'love-azul-acero-l', '117ACL', 'delantal Love azul acero L', 10084, 1916, 17639, 3351, 0, 5, 0, '2022-10-09 02:05:51', '2022-10-09 02:56:26', '2023-02-11 02:18:59'),
(30, 'rumy-azul-acero-m', '50030', 'delantal Rumy azul acero M', 10084, 1916, 17639, 3351, 1, 5, 1, '2022-10-09 02:05:51', '2024-03-07 00:55:52', '2023-02-11 02:18:59'),
(31, 'jardin-burdeo-xl', 'jardin-burdeo-xl', 'delantal Jardin burdeo XL', 10924, 2076, 19319, 3671, 0, 5, 0, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(32, 'llamita-burdeo-l', '79BUL', 'delantal Llamita burdeo L', 10084, 1916, 17639, 3351, 0, 5, 0, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(33, 'natura-burdeo-s', '50033', 'Delantal Natura Burdeo S', 10449, 2451, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2023-11-07 14:09:37', '2023-02-11 02:18:59'),
(34, 'love-burdeo-m', '50034', 'delantal Love burdeo M', 10084, 1916, 17639, 3351, 0, 5, 0, '2022-10-09 02:05:51', '2023-05-17 20:55:12', '2023-02-11 02:18:59'),
(35, 'natura-verde-botella-s', '50035', 'Delantal Natura Verde Botella S', 10084, 1916, 17639, 3351, 1, 5, 0, '2022-10-09 02:05:51', '2023-11-07 00:10:50', '2023-02-11 02:18:59'),
(36, 'jardin-verde-s', '157DJVVS', 'delantal Jardin verde S', 10084, 1916, 17639, 3351, 0, 5, 0, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(37, 'hadita-verde-xl', '127DHAVXL', 'delantal Hadita verde XL', 10924, 2076, 19319, 3671, 0, 5, 0, '2022-10-09 02:05:51', '2023-05-17 20:33:48', '2023-02-11 02:18:59'),
(38, 'alicia-verde-m', '165DAVVM', 'delantal Alicia verde m', 10084, 1916, 17639, 3351, 0, 5, 0, '2022-10-09 02:05:51', '2023-05-17 20:55:11', '2023-02-11 02:18:59'),
(39, 'hadita-verde-m', '50039', 'delantal Hadita verde M', 10084, 1916, 17639, 3351, 0, 5, 0, '2022-10-09 02:05:51', '2023-05-17 20:55:11', '2023-02-11 02:18:59'),
(40, 'llamita-verde-m', '136DLLAVM', 'delantal Llamita verde M', 10084, 1916, 17639, 3351, 0, 5, 0, '2022-10-09 02:05:51', '2022-10-09 03:07:34', '2023-02-11 02:18:59'),
(41, 'hadita-verde-l', '50041', 'delantal Hadita verde L', 10084, 1916, 21000, 3990, 0, 5, 0, '2022-10-09 02:05:51', '2023-09-06 19:40:09', '2023-02-11 02:18:59'),
(42, 'jardin-verde-m', '50042', 'delantal Jardin verde M', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2023-05-17 20:55:12', '2023-02-11 02:18:59'),
(43, 'love-verde-botella-l', '50043', 'Delantal Love Verde Botella L', 11259, 2641, 21000, 3990, 2, 5, 1, '2022-10-09 02:05:51', '2023-11-07 17:49:08', '2023-02-11 02:18:59'),
(44, 'jardin-verde-l', '50044', 'delantal Jardin verde L', 10084, 1916, 17639, 3351, 0, 5, 0, '2022-10-09 02:05:51', '2023-05-17 20:39:50', '2023-02-11 02:18:59'),
(45, 'llamita-verde-xl', '136DLLAVXL', 'delantal Llamita verde XL', 10924, 2076, 19319, 3671, 0, 5, 0, '2022-10-09 02:05:51', '2023-05-17 20:33:47', '2023-02-11 02:18:59'),
(46, 'alicia-verde-l', '165DAVVL', 'delantal Alicia verde L', 10084, 1916, 17639, 3351, 0, 5, 0, '2022-10-09 02:05:51', '2023-05-17 20:39:49', '2023-02-11 02:18:59'),
(47, 'hadita-azul-marino-s', '127DHAAS', 'delantal Hadita azul marino S', 10084, 1916, 21000, 3990, 0, 5, 0, '2022-10-09 02:05:51', '2023-05-17 21:11:44', '2023-02-11 02:18:59'),
(48, 'llamita-azul-marino-l', '136DLLAAL', 'delantal Llamita azul marino L', 10084, 1916, 17639, 3351, 0, 5, 0, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(49, 'hadita-azul-marino-l', '127DHAAL', 'delantal Hadita azul marino L ', 10084, 1916, 17639, 3351, 0, 5, 0, '2022-10-09 02:05:51', '2022-10-09 02:56:26', '2023-02-11 02:18:59'),
(50, 'jardin-manga-larga-azul-marino-l', '1097AML', 'delantal Jardin manga larga azul marino L', 10084, 1916, 17639, 3351, 0, 5, 0, '2022-10-09 02:05:51', '2022-10-09 02:56:26', '2023-02-11 02:18:59'),
(51, 'natura-azul-marino-m', '50051', 'delantal Natura azul marino M', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2023-11-06 20:00:13', '2023-02-11 02:18:59'),
(52, 'fantasia-azul-marino-l', '280ATL', 'delantal Fantasia azul marino L', 10084, 1916, 17639, 3351, 0, 5, 0, '2022-10-09 02:05:51', '2023-05-17 20:39:50', '2023-02-11 02:18:59'),
(53, 'pintorcito-azul-marino-l', '293AML', 'delantal Pintorcito azul marino L', 10084, 1916, 17639, 3351, 0, 5, 0, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(54, 'rumy-azul-marino-xl', '236AMXL', 'delantal Rumy azul marino XL', 10924, 2076, 19319, 3671, 0, 5, 0, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(55, 'love-azul-marino-s', '50055', 'Delantal Love Azul Marino S', 10840, 2060, 21000, 3990, 0, 5, 1, '2022-10-09 02:05:51', '2023-11-07 14:53:39', '2023-02-11 02:18:59'),
(56, 'gatito-lunar-azul-marino-m', '123AMM', 'delantal Gatito Lunar azul marino M', 10084, 1916, 17639, 3351, 0, 5, 0, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(57, 'farfy-azul-marino-s', '244AMS', 'delantal Farfy azul marino S', 10084, 1916, 17647, 3353, 0, 5, 0, '2022-10-09 02:05:51', '2023-05-17 21:11:44', '2023-02-11 02:18:59'),
(58, 'llamita-azul-acero-m', '136DLLAACM', 'delantal Llamita azul acero M', 10084, 1916, 17639, 3351, 0, 5, 0, '2022-10-09 03:05:37', '2023-05-17 20:55:12', '2023-02-11 02:18:59'),
(63, 'arti-aguayo-burdeo-xxl', '084DAR4BXXL', 'delantal Arti Aguayo burdeo XXL', 10924, 2076, 19319, 3671, 0, 5, 0, '2023-05-17 20:31:46', '2023-05-17 20:33:47', '2023-05-17 20:31:46'),
(64, 'love-azul-rey-m', '50064', 'delantal Love azul rey M', 10084, 1916, 17639, 3351, 0, 1, 1, '2023-05-17 20:50:05', '2023-05-17 20:55:10', '2023-05-17 20:50:05'),
(65, 'alicia-azul-marino-s', '165DALI3AS', 'delantal Alicia azul marino S', 10084, 1916, 21000, 3990, 0, 5, 0, '2023-05-17 21:10:52', '2023-05-17 21:13:08', '2023-05-17 21:10:52'),
(66, 'K9019-black', '50066', 'billetera tarjetero negra', 2773, 527, 8395, 1595, 3, 2, 1, '2023-05-17 22:12:04', '2023-05-17 22:15:34', '2023-05-17 22:12:04'),
(67, 'YM003-blue', '50067', 'billetera tarjetero azul', 2773, 527, 8395, 1595, 2, 2, 1, '2023-05-17 22:13:01', '2023-05-17 22:15:34', '2023-05-17 22:13:01'),
(68, 'X-12A-Apricot', '50068', 'billetera tarjetero cafe', 2773, 527, 8395, 1595, 4, 2, 1, '2023-05-17 22:14:03', '2023-05-17 22:15:34', '2023-05-17 22:14:03'),
(69, '2671003', '+C12671003', 'organizador de especies + 8 frascos', 3353, 637, 5034, 956, 2, 2, 1, '2023-05-18 00:53:28', '2023-05-18 00:59:10', '2023-05-18 00:53:28'),
(70, 'natura-azul-marino-s', '50070', 'Delantal Natura Azul Marino S', 10000, 1900, 21000, 3990, 1, 1, 1, '2023-11-06 19:38:58', '2023-11-06 20:00:14', '2023-11-06 19:38:58'),
(71, 'natura-azul-marino-l', '50071', 'Delantal Natura Azul Marino L', 10449, 2451, 21000, 3990, 1, 1, 1, '2023-11-06 19:41:38', '2023-11-06 20:00:14', '2023-11-06 19:41:38'),
(72, 'natura-azul-marino-xl', '50072', 'Delantal Natura Azul Marino XL', 10449, 2451, 21000, 3990, 1, 1, 1, '2023-11-06 19:44:59', '2023-11-06 20:00:13', '2023-11-06 19:44:59'),
(73, 'natura-azul-marino-xxl', '50073', 'Delantal Natura Azul Marino XXL', 12521, 2379, 22681, 4309, 1, 1, 1, '2023-11-06 19:46:06', '2023-11-06 20:00:13', '2023-11-06 19:46:06'),
(74, 'natura-verde-botella-m', '50074', 'Delantal Natura Verde Botella M', 10449, 2451, 21000, 3990, 2, 1, 1, '2023-11-06 23:57:56', '2023-11-07 00:10:50', '2023-11-06 23:57:56'),
(75, 'natura-verde-botella-xl', '50075', 'Delantal Natura Verde Botella XL', 10449, 2451, 21000, 3990, 2, 2, 1, '2023-11-06 23:59:12', '2023-11-07 00:10:51', '2023-11-06 23:59:12'),
(76, 'natura-verde-botella-xxl', '50076', 'Delantal Natura Verde Botella XXL', 12521, 2379, 22681, 4309, 1, 2, 1, '2023-11-07 00:00:21', '2023-11-07 00:10:50', '2023-11-07 00:00:21'),
(77, 'natura-burdeo-l', '50077', 'Delantal Natura Burdeo L', 10000, 1900, 21000, 3990, 0, 2, 1, '2023-11-07 13:56:01', '2023-11-07 14:09:36', '2023-11-07 13:56:01'),
(78, 'natura-burdeo-xl', '50078', 'Delantal Natura Burdeo XL', 10449, 2451, 21000, 3990, 1, 2, 1, '2023-11-07 13:57:42', '2024-03-14 01:25:36', '2023-11-07 13:57:42'),
(79, 'natura-burdeo-xxl', '50079', 'Delantal Natura Burdeo XXL', 12521, 2379, 22681, 4309, 0, 2, 1, '2023-11-07 13:58:39', '2023-11-07 14:09:36', '2023-11-07 13:58:39'),
(80, 'love-azul-marino-m', '50080', 'Delantal Love Azul Marino M', 10840, 2060, 21000, 3990, 0, 2, 1, '2023-11-07 14:28:09', '2023-11-07 14:53:40', '2023-11-07 14:28:09'),
(81, 'love-azul-marino-l', '50081', 'Delantal Love Azul Marino L', 10840, 2060, 21000, 3990, 0, 2, 1, '2023-11-07 14:29:47', '2023-11-07 14:53:40', '2023-11-07 14:29:47'),
(82, 'love-azul-marino-xl', '50082', 'Delantal Love Azul Marino XL', 10840, 2060, 21000, 3990, 0, 2, 1, '2023-11-07 14:31:29', '2023-11-07 14:53:41', '2023-11-07 14:31:29'),
(83, 'love-azul-marino-xxl', '50083', 'Delantal Love Azul Marino XXL', 11681, 2219, 22681, 4309, 0, 2, 1, '2023-11-07 14:32:30', '2023-11-07 14:53:41', '2023-11-07 14:32:30'),
(84, 'love-verde-botella-s', '50084', 'Delantal Love Verde Botella S', 10840, 2060, 21000, 3990, 0, 2, 1, '2023-11-07 17:24:00', '2023-11-07 17:49:09', '2023-11-07 17:24:00'),
(85, 'love-verde-botella-m', '50085', 'Delantal Love Verde Botella M', 10840, 2060, 21000, 3990, 0, 2, 1, '2023-11-07 17:25:45', '2023-11-07 17:49:09', '2023-11-07 17:25:45'),
(86, 'love-verde-botella-xl', '50086', 'Delantal Love Verde Botella XL', 10840, 2060, 21000, 3990, 0, 2, 1, '2023-11-07 17:26:49', '2023-11-07 17:49:08', '2023-11-07 17:26:49'),
(87, 'love-verde-botella-xxl', '50087', 'Delantal Love Verde Botella XXL', 11681, 2219, 22681, 4309, 0, 2, 1, '2023-11-07 17:27:43', '2023-11-07 17:49:08', '2023-11-07 17:27:43'),
(88, 'frida-azul-marino-s', '50088', 'Delantal Frida Azul Marino S', 10840, 2060, 21000, 3990, 0, 2, 1, '2023-11-08 16:12:16', '2023-11-08 16:37:56', '2023-11-08 16:12:16'),
(89, 'frida-azul-marino-m', '50089', 'Delantal Frida Azul Marino M', 10840, 2060, 21000, 3990, 0, 2, 1, '2023-11-08 16:13:00', '2023-11-08 16:37:55', '2023-11-08 16:13:00'),
(90, 'frida-azul-marino-l', '50090', 'Delantal Frida Azul Marino L', 10840, 2060, 21000, 3990, 0, 2, 1, '2023-11-08 16:13:51', '2023-11-08 16:37:58', '2023-11-08 16:13:51'),
(91, 'frida-azul-marino-xl', '50091', 'Delantal Frida Azul Marino XL', 10840, 2060, 21000, 3990, 0, 2, 1, '2023-11-08 16:14:31', '2023-11-08 16:37:56', '2023-11-08 16:14:31'),
(92, 'frida-azul-marino-xxl', '50092', 'Delantal Frida Azul Marino XXL', 11681, 2219, 22681, 4309, 0, 2, 1, '2023-11-08 16:15:26', '2023-11-08 16:37:58', '2023-11-08 16:15:26'),
(93, 'kusi-azul-marino-xs', '50093', 'Delantal Kusi Azul Marino XS', 9160, 1740, 21000, 3990, 0, 2, 1, '2023-11-08 16:16:59', '2023-11-08 16:37:58', '2023-11-08 16:16:59'),
(94, 'kusi-azul-marino-s', '50094', 'Delantal Kusi Azul Marino S', 9160, 1740, 21000, 3990, 0, 2, 1, '2023-11-08 16:19:44', '2023-11-08 16:37:56', '2023-11-08 16:19:44'),
(95, 'kusi-azul-marino-m', '50095', 'Delantal Kusi Azul Marino M', 9160, 1740, 21000, 3990, 0, 2, 1, '2023-11-08 16:20:35', '2024-03-08 00:30:51', '2023-11-08 16:20:35'),
(96, 'kusi-azul-marino-xl', '50096', 'Delantal Kusi Azul Marino XL', 9160, 1740, 21000, 3990, 0, 2, 1, '2023-11-08 16:21:35', '2023-11-08 16:37:57', '2023-11-08 16:21:35'),
(97, 'primavera-verde-botella-xs', '50097', 'Delantal Primavera Verde Botella XS', 8319, 1581, 21000, 3990, 0, 2, 1, '2023-11-08 16:22:45', '2023-11-08 16:37:57', '2023-11-08 16:22:45'),
(98, 'corazon-azul-marino-xxl', '50098', 'Delantal Corazon Azul Marino XXL', 11259, 2641, 21840, 4150, 0, 1, 1, '2024-01-29 19:03:23', '2024-01-29 19:03:23', '2024-01-29 19:03:23'),
(99, 'love-burdeo-S', '50099', 'Delantal Love burdeo S', 10449, 2451, 21000, 3990, 1, 1, 1, '2024-01-29 19:06:33', '2024-01-29 19:06:33', '2024-01-29 19:06:33'),
(100, 'cristal-verde-botella-s', '50100', 'Delantal Cristal Verde Botella S', 11259, 2641, 22681, 4309, 1, 1, 1, '2024-01-29 19:07:58', '2024-01-29 19:07:58', '2024-01-29 19:07:58'),
(101, 'cristal-verde-botella-l', '50101', 'Delantal Cristal Verde Botella L', 11259, 2641, 21000, 3990, 1, 1, 1, '2024-01-29 19:09:01', '2024-01-29 19:09:01', '2024-01-29 19:09:01'),
(102, 'corazon-azul-marino-l', '50102', 'Delantal Corazon Azul Marino L', 11259, 2641, 21840, 4150, 0, 1, 1, '2024-01-29 19:12:21', '2024-01-29 19:12:21', '2024-01-29 19:12:21'),
(103, 'corazon-azul-marino-xl', '50103', 'Delantal Corazon Azul Marino XL', 11259, 2641, 21840, 4150, 1, 1, 1, '2024-01-29 19:13:58', '2024-01-29 19:13:58', '2024-01-29 19:13:58'),
(104, 'corazon-verde-botella-xl', '50104', 'Delantal Corazon Verde Botella XL', 11259, 2641, 21840, 4150, 1, 1, 1, '2024-01-29 19:15:22', '2024-01-29 19:15:22', '2024-01-29 19:15:22'),
(105, 'natura-azul-marino-manga-larga-s', '50105', 'Delantal Natura Azul Marino Manga Larga S', 11259, 2641, 21840, 4150, 1, 1, 1, '2024-01-29 19:17:33', '2024-01-29 19:17:33', '2024-01-29 19:17:33'),
(106, 'natura-azul-marino-manga-larga-l', '50106', 'Delantal Natura Azul Marino Manga Larga L', 11259, 2641, 21840, 4150, 1, 1, 1, '2024-01-29 19:18:59', '2024-01-29 19:18:59', '2024-01-29 19:18:59'),
(107, 'love-azul-marino-manga-larga-s', '50107', 'Delantal Love Azul Marino Manga Larga S', 11259, 2641, 21840, 4150, 1, 1, 1, '2024-01-29 19:20:53', '2024-01-29 19:20:53', '2024-01-29 19:20:53'),
(108, 'love-azul-marino-manga-larga-m', '50108', 'Delantal Love Azul Marino Manga Larga M', 11259, 2641, 21840, 4150, 1, 1, 1, '2024-01-29 19:25:34', '2024-01-29 19:25:34', '2024-01-29 19:25:34'),
(109, 'love-azul-marino-manga-larga-xl', '50109', 'Delantal Love Azul Marino Manga Larga XL', 11259, 2641, 21840, 4150, 0, 1, 1, '2024-01-29 19:26:40', '2024-01-29 19:26:40', '2024-01-29 19:26:40'),
(110, 'love-verde-botella-manga-larga-s', '50110', 'Delantal Love Verde Botella Manga Larga S', 11259, 2641, 21840, 4150, 1, 1, 1, '2024-01-29 19:28:26', '2024-01-29 19:28:26', '2024-01-29 19:28:26'),
(111, 'love-verde-botella-manga-larga-m', '50111', 'Delantal Love Verde Botella Manga Larga M', 11259, 2641, 21840, 4150, 1, 1, 1, '2024-01-29 19:30:34', '2024-01-29 19:30:34', '2024-01-29 19:30:34'),
(112, 'love-verde-botella-manga-larga-l', '50112', 'Delantal Love Verde Botella Manga Larga L', 11259, 2641, 21840, 4150, 1, 1, 1, '2024-01-29 22:21:15', '2024-01-29 22:21:15', '2024-01-29 22:21:15'),
(113, 'sarah-verde-botella-s', '50113', 'Delantal Sarah Verde Botella S', 10449, 2451, 21000, 3990, 1, 1, 1, '2024-01-29 22:33:55', '2024-01-29 22:33:55', '2024-01-29 22:33:55'),
(114, 'sarah-verde-botella-xl', '50114', 'Delantal Sarah Verde Botella XL', 10449, 2451, 21000, 3990, 1, 1, 1, '2024-01-29 22:35:13', '2024-01-29 22:35:13', '2024-01-29 22:35:13'),
(115, 'jezabel-burdeo-m', '50115', 'Delantal Jezabel Burdeo M', 10449, 2451, 21000, 3990, 0, 1, 1, '2024-01-29 22:36:45', '2024-01-29 22:36:45', '2024-01-29 22:36:45'),
(116, 'jezabel-burdeo-manga-larga-l', '50116', 'Delantal Jezabel Burdeo Manga Larga L', 10449, 2451, 21000, 3990, 0, 1, 1, '2024-01-29 22:37:56', '2024-01-29 22:37:56', '2024-01-29 22:37:56'),
(117, 'jezabel-burdeo-xl', '50117', 'Delantal Jezabel Burdeo XL', 10449, 2451, 21000, 3990, 0, 1, 1, '2024-01-29 22:38:59', '2024-01-29 22:38:59', '2024-01-29 22:38:59'),
(118, 'sarah-burdeo-xl', '50118', 'Delantal Sarah Burdeo XL', 10449, 2451, 21000, 3990, 0, 1, 1, '2024-01-29 23:29:33', '2024-01-29 23:29:33', '2024-01-29 23:29:33'),
(119, 'sarah-burdeo-xxl', '50119', 'Delantal Sarah Burdeo XXL', 11259, 2641, 21840, 4150, 1, 1, 1, '2024-01-29 23:32:17', '2024-01-29 23:32:17', '2024-01-29 23:32:17'),
(120, 'jezabel-azul-marino-xs', '50120', 'Delantal Jezabel Azul Marino XS', 10449, 2451, 21000, 3990, 1, 1, 1, '2024-01-29 23:33:40', '2024-01-29 23:33:40', '2024-01-29 23:33:40'),
(121, 'jezabel-azul-marino-s', '50121', 'Delantal Jezabel Azul Marino S', 10449, 2451, 21000, 3990, 1, 1, 1, '2024-01-29 23:35:06', '2024-01-29 23:35:06', '2024-01-29 23:35:06'),
(122, 'sarah-azul-marino-m', '50122', 'Delantal Sarah Azul Marino M', 10449, 2451, 21000, 3990, 1, 1, 1, '2024-01-29 23:38:01', '2024-01-29 23:38:01', '2024-01-29 23:38:01'),
(123, 'jezabel-verde-botella-m', '50123', 'Delantal Jezabel Verde Botella M', 10449, 2451, 21000, 3990, 0, 1, 1, '2024-01-29 23:40:22', '2024-01-29 23:40:22', '2024-01-29 23:40:22'),
(124, 'jezabel-verde-botella-l', '50124', 'Delantal Jezabel Verde Botella L', 10449, 2451, 21000, 3990, 1, 1, 1, '2024-01-29 23:41:41', '2024-01-29 23:41:41', '2024-01-29 23:41:41'),
(125, 'jezabel-verde-botella-xl', '50125', 'Delantal Jezabel Verde Botella XL', 10449, 2451, 21000, 3990, 1, 1, 1, '2024-01-29 23:43:34', '2024-01-29 23:43:34', '2024-01-29 23:43:34'),
(126, 'diaguita-azul-electrico-manga-larga-s', '50126', 'Delantal Diaguita Azul Electrico Manga Larga S', 1, 0, 21000, 3990, 1, 1, 1, '2024-01-29 23:52:42', '2024-01-29 23:52:42', '2024-01-29 23:52:42'),
(127, 'jezabel-azul-marino-m', '50127', 'Delantal Jezabel Azul Marino M', 10449, 2451, 21000, 3990, 0, 1, 1, '2024-01-30 01:41:24', '2024-01-30 01:41:24', '2024-01-30 01:41:24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `id` int(11) NOT NULL,
  `proveedor` varchar(11) NOT NULL,
  `tipo_documento` int(11) NOT NULL,
  `documento` int(11) NOT NULL,
  `fecha_documento` date NOT NULL,
  `monto_neto_documento` int(11) NOT NULL,
  `monto_imp_documento` int(11) NOT NULL,
  `costo_neto_documento` int(11) NOT NULL,
  `costo_imp_documento` int(11) NOT NULL,
  `tipo_compra` int(11) NOT NULL,
  `observaciones` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `compras`
--

INSERT INTO `compras` (`id`, `proveedor`, `tipo_documento`, `documento`, `fecha_documento`, `monto_neto_documento`, `monto_imp_documento`, `costo_neto_documento`, `costo_imp_documento`, `tipo_compra`, `observaciones`) VALUES
(14, '77398220-1', 33, 3674421, '2023-12-02', 5040, 958, 0, 0, 5, 'Nivel 6 MercadoLibre'),
(15, '77398220-1', 33, 3797871, '2023-12-05', 18690, 3551, 0, 0, 5, 'Amortiguadores auto'),
(16, '77398220-1', 33, 3684622, '2023-12-25', 47106, 8950, 47106, 8950, 4, 'Comisiones de ventas Diciembre MercadoLibre'),
(17, '77398220-1', 61, 2756711, '2023-12-25', 5083, 966, 5083, 966, 4, 'Devolución delantal venta MercadoLibre'),
(18, '77398220-1', 33, 3695554, '2024-01-01', 5040, 958, 0, 0, 5, 'Nivel 6 MercadoLibre'),
(19, '77398220-1', 33, 3991668, '2024-01-08', 33613, 6386, 0, 0, 5, 'Radio auto'),
(20, '77398220-1', 33, 3991667, '2024-01-08', 13437, 2553, 0, 0, 5, 'prensa ferrules'),
(21, '76513460-9', 33, 47623, '2024-01-09', 23025, 4375, 0, 0, 5, 'Arnes + bisel radio'),
(22, '77398220-1', 33, 4213642, '2024-01-25', 10166, 1932, 10166, 1932, 4, 'Comisiones de ventas Enero MercadoLibre'),
(23, '76211240-K', 33, 11958404, '2024-01-29', 8882, 1688, 8882, 1688, 2, 'Transporte delantales'),
(25, '76824625-4', 33, 446, '2024-01-29', 446471, 84829, 446471, 84829, 3, 'Compra delantales'),
(29, '77497031-2', 33, 307, '2024-02-12', 21680, 4119, 21680, 4119, 4, 'Productos de prueba'),
(30, '77398220-1', 33, 4237412, '2024-02-25', 15250, 2897, 15250, 2897, 2, 'Comisiones ventas febrero MercadoLibre'),
(31, '77751367-2', 34, 11272, '2024-02-25', 0, 0, 0, 0, 1, 'Pendiente'),
(32, '77398220-1', 33, 4246758, '2024-03-01', 5040, 958, 5040, 958, 1, 'Pendiente'),
(33, '77101928-5', 33, 1157025, '2024-02-29', 616, 117, 616, 117, 1, 'Pendiente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comunas`
--

CREATE TABLE `comunas` (
  `id` int(11) NOT NULL,
  `comuna` varchar(64) NOT NULL,
  `region_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `comunas`
--

INSERT INTO `comunas` (`id`, `comuna`, `region_id`) VALUES
(1, 'Arica', 1),
(2, 'Camarones', 1),
(3, 'General Lagos', 1),
(4, 'Putre', 1),
(5, 'Alto Hospicio', 2),
(6, 'Iquique', 2),
(7, 'Camiña', 2),
(8, 'Colchane', 2),
(9, 'Huara', 2),
(10, 'Pica', 2),
(11, 'Pozo Almonte', 2),
(12, 'Tocopilla', 3),
(13, 'Maria Elena', 3),
(14, 'Calama', 3),
(15, 'Ollague', 3),
(16, 'San Pedro de Atacama', 3),
(17, 'Antofagasta', 3),
(18, 'Mejillones', 3),
(19, 'Sierra Gorda', 3),
(20, 'Taltal', 3),
(21, 'Chañaral', 4),
(22, 'Diego de Almagro', 4),
(23, 'Copiapo', 4),
(24, 'Caldera', 4),
(25, 'Tierra Amarilla', 4),
(26, 'Vallenar', 4),
(27, 'Alto del Carmen', 4),
(28, 'Freirina', 4),
(29, 'Huasco', 4),
(30, 'La Serena', 5),
(31, 'Coquimbo', 5),
(32, 'Andacollo', 5),
(33, 'La Higuera', 5),
(34, 'Paihuano', 5),
(35, 'Vicuña', 5),
(36, 'Ovalle', 5),
(37, 'Combarbala', 5),
(38, 'Monte Patria', 5),
(39, 'Punitaqui', 5),
(40, 'Rio Hurtado', 5),
(41, 'Illapel', 5),
(42, 'Canela', 5),
(43, 'Los Vilos', 5),
(44, 'Salamanca', 5),
(45, 'La Ligua', 6),
(46, 'Cabildo', 6),
(47, 'Zapallar', 6),
(48, 'Papudo', 6),
(49, 'Petorca', 6),
(50, 'Los Andes', 6),
(51, 'San Esteban', 6),
(52, 'Calle Larga', 6),
(53, 'Rinconada', 6),
(54, 'San Felipe', 6),
(55, 'Llaillay', 6),
(56, 'Putaendo', 6),
(57, 'Santa Maria', 6),
(58, 'Catemu', 6),
(59, 'Panquehue', 6),
(60, 'Quillota', 6),
(61, 'La Cruz', 6),
(62, 'La Calera', 6),
(63, 'Nogales', 6),
(64, 'Hijuelas', 6),
(65, 'Valparaiso', 6),
(66, 'Viña del Mar', 6),
(67, 'Concon', 6),
(68, 'Quintero', 6),
(69, 'Puchuncavi', 6),
(70, 'Casablanca', 6),
(71, 'Juan Fernandez', 6),
(72, 'San Antonio', 6),
(73, 'Cartagena', 6),
(74, 'El Tabo', 6),
(75, 'El Quisco', 6),
(76, 'Algarrobo', 6),
(77, 'Santo Domingo', 6),
(78, 'Isla de Pascua', 6),
(79, 'Quilpue', 6),
(80, 'Limache', 6),
(81, 'Olmue', 6),
(82, 'Villa Alemana', 6),
(83, 'Colina', 7),
(84, 'Lampa', 7),
(85, 'Tiltil', 7),
(86, 'Santiago', 7),
(87, 'Vitacura', 7),
(88, 'San Ramon', 7),
(89, 'San Miguel', 7),
(90, 'San Joaquin', 7),
(91, 'Renca', 7),
(92, 'Recoleta', 7),
(93, 'Quinta Normal', 7),
(94, 'Quilicura', 7),
(95, 'Pudahuel', 7),
(96, 'Providencia', 7),
(97, 'Peñalolen', 7),
(98, 'Pedro Aguirre Cerda', 7),
(99, 'Ñuñoa', 7),
(100, 'Maipu', 7),
(101, 'Macul', 7),
(102, 'Lo Prado', 7),
(103, 'Lo Espejo', 7),
(104, 'Lo Barnechea', 7),
(105, 'Las Condes', 7),
(106, 'La Reina', 7),
(107, 'La Pintana', 7),
(108, 'La Granja', 7),
(109, 'La Florida', 7),
(110, 'La Cisterna', 7),
(111, 'Independencia', 7),
(112, 'Huechuraba', 7),
(113, 'Estacion Central', 7),
(114, 'El Bosque', 7),
(115, 'Conchali', 7),
(116, 'Cerro Navia', 7),
(117, 'Cerrillos', 7),
(118, 'Puente Alto', 7),
(119, 'San Jose de Maipo', 7),
(120, 'Pirque', 7),
(121, 'San Bernardo', 7),
(122, 'Buin', 7),
(123, 'Paine', 7),
(124, 'Calera de Tango', 7),
(125, 'Melipilla', 7),
(126, 'Alhue', 7),
(127, 'Curacavi', 7),
(128, 'Maria Pinto', 7),
(129, 'San Pedro', 7),
(130, 'Isla de Maipo', 7),
(131, 'El Monte', 7),
(132, 'Padre Hurtado', 7),
(133, 'Peñaflor', 7),
(134, 'Talagante', 7),
(135, 'Codegua', 8),
(136, 'Coinco', 8),
(137, 'Coltauco', 8),
(138, 'Doñihue', 8),
(139, 'Graneros', 8),
(140, 'Las Cabras', 8),
(141, 'Machali', 8),
(142, 'Malloa', 8),
(143, 'Mostazal', 8),
(144, 'Olivar', 8),
(145, 'Peumo', 8),
(146, 'Pichidegua', 8),
(147, 'Quinta de Tilcoco', 8),
(148, 'Rancagua', 8),
(149, 'Rengo', 8),
(150, 'Requinoa', 8),
(151, 'San Vicente de Tagua Tagua', 8),
(152, 'Chepica', 8),
(153, 'Chimbarongo', 8),
(154, 'Lolol', 8),
(155, 'Nancagua', 8),
(156, 'Palmilla', 8),
(157, 'Peralillo', 8),
(158, 'Placilla', 8),
(159, 'Pumanque', 8),
(160, 'San Fernando', 8),
(161, 'Santa Cruz', 8),
(162, 'La Estrella', 8),
(163, 'Litueche', 8),
(164, 'Marchigue', 8),
(165, 'Navidad', 8),
(166, 'Paredones', 8),
(167, 'Pichilemu', 8),
(168, 'Curico', 9),
(169, 'Hualañe', 9),
(170, 'Licanten', 9),
(171, 'Molina', 9),
(172, 'Rauco', 9),
(173, 'Romeral', 9),
(174, 'Sagrada Familia', 9),
(175, 'Teno', 9),
(176, 'Vichuquen', 9),
(177, 'Talca', 9),
(178, 'San Clemente', 9),
(179, 'Pelarco', 9),
(180, 'Pencahue', 9),
(181, 'Maule', 9),
(182, 'San Rafael', 9),
(183, 'Curepto', 9),
(184, 'Constitucion', 9),
(185, 'Empedrado', 9),
(186, 'Rio Claro', 9),
(187, 'Linares', 9),
(188, 'San Javier', 9),
(189, 'Parral', 9),
(190, 'Villa Alegre', 9),
(191, 'Longavi', 9),
(192, 'Colbun', 9),
(193, 'Retiro', 9),
(194, 'Yerbas Buenas', 9),
(195, 'Cauquenes', 9),
(196, 'Chanco', 9),
(197, 'Pelluhue', 9),
(198, 'Bulnes', 10),
(199, 'Chillan', 10),
(200, 'Chillan Viejo', 10),
(201, 'El Carmen', 10),
(202, 'Pemuco', 10),
(203, 'Pinto', 10),
(204, 'Quillon', 10),
(205, 'San Ignacio', 10),
(206, 'Yungay', 10),
(207, 'Cobquecura', 10),
(208, 'Coelemu', 10),
(209, 'Ninhue', 10),
(210, 'Portezuelo', 10),
(211, 'Quirihue', 10),
(212, 'Ranquil', 10),
(213, 'Treguaco', 10),
(214, 'San Carlos', 10),
(215, 'Coihueco', 10),
(216, 'San Nicolas', 10),
(217, 'Ñiquen', 10),
(218, 'San Fabian', 10),
(219, 'Alto Biobio', 11),
(220, 'Antuco', 11),
(221, 'Cabrero', 11),
(222, 'Laja', 11),
(223, 'Los Angeles', 11),
(224, 'Mulchen', 11),
(225, 'Nacimiento', 11),
(226, 'Negrete', 11),
(227, 'Quilaco', 11),
(228, 'Quilleco', 11),
(229, 'San Rosendo', 11),
(230, 'Santa Barbara', 11),
(231, 'Tucapel', 11),
(232, 'Yumbel', 11),
(233, 'Concepcion', 11),
(234, 'Coronel', 11),
(235, 'Chiguayante', 11),
(236, 'Florida', 11),
(237, 'Hualpen', 11),
(238, 'Hualqui', 11),
(239, 'Lota', 11),
(240, 'Penco', 11),
(241, 'San Pedro de La Paz', 11),
(242, 'Santa Juana', 11),
(243, 'Talcahuano', 11),
(244, 'Tome', 11),
(245, 'Arauco', 11),
(246, 'Cañete', 11),
(247, 'Contulmo', 11),
(248, 'Curanilahue', 11),
(249, 'Lebu', 11),
(250, 'Los Alamos', 11),
(251, 'Tirua', 11),
(252, 'Angol', 12),
(253, 'Collipulli', 12),
(254, 'Curacautin', 12),
(255, 'Ercilla', 12),
(256, 'Lonquimay', 12),
(257, 'Los Sauces', 12),
(258, 'Lumaco', 12),
(259, 'Puren', 12),
(260, 'Renaico', 12),
(261, 'Traiguen', 12),
(262, 'Victoria', 12),
(263, 'Temuco', 12),
(264, 'Carahue', 12),
(265, 'Cholchol', 12),
(266, 'Cunco', 12),
(267, 'Curarrehue', 12),
(268, 'Freire', 12),
(269, 'Galvarino', 12),
(270, 'Gorbea', 12),
(271, 'Lautaro', 12),
(272, 'Loncoche', 12),
(273, 'Melipeuco', 12),
(274, 'Nueva Imperial', 12),
(275, 'Padre Las Casas', 12),
(276, 'Perquenco', 12),
(277, 'Pitrufquen', 12),
(278, 'Pucon', 12),
(279, 'Saavedra', 12),
(280, 'Teodoro Schmidt', 12),
(281, 'Tolten', 12),
(282, 'Vilcun', 12),
(283, 'Villarrica', 12),
(284, 'Valdivia', 13),
(285, 'Corral', 13),
(286, 'Lanco', 13),
(287, 'Los Lagos', 13),
(288, 'Mafil', 13),
(289, 'Mariquina', 13),
(290, 'Paillaco', 13),
(291, 'Panguipulli', 13),
(292, 'La Union', 13),
(293, 'Futrono', 13),
(294, 'Lago Ranco', 13),
(295, 'Rio Bueno', 13),
(297, 'Osorno', 14),
(298, 'Puerto Octay', 14),
(299, 'Purranque', 14),
(300, 'Puyehue', 14),
(301, 'Rio Negro', 14),
(302, 'San Juan de la Costa', 14),
(303, 'San Pablo', 14),
(304, 'Calbuco', 14),
(305, 'Cochamo', 14),
(306, 'Fresia', 14),
(307, 'Frutillar', 14),
(308, 'Llanquihue', 14),
(309, 'Los Muermos', 14),
(310, 'Maullin', 14),
(311, 'Puerto Montt', 14),
(312, 'Puerto Varas', 14),
(313, 'Ancud', 14),
(314, 'Castro', 14),
(315, 'Chonchi', 14),
(316, 'Curaco de Velez', 14),
(317, 'Dalcahue', 14),
(318, 'Puqueldon', 14),
(319, 'Queilen', 14),
(320, 'Quellon', 14),
(321, 'Quemchi', 14),
(322, 'Quinchao', 14),
(323, 'Chaiten', 14),
(324, 'Futaleufu', 14),
(325, 'Hualaihue', 14),
(326, 'Palena', 14),
(327, 'Lago Verde', 15),
(328, 'Coihaique', 15),
(329, 'Aysen', 15),
(330, 'Cisnes', 15),
(331, 'Guaitecas', 15),
(332, 'Rio Ibañez', 15),
(333, 'Chile Chico', 15),
(334, 'Cochrane', 15),
(335, 'O\'Higgins', 15),
(336, 'Tortel', 15),
(337, 'Natales', 16),
(338, 'Torres del Paine', 16),
(339, 'Laguna Blanca', 16),
(340, 'Punta Arenas', 16),
(341, 'Rio Verde', 16),
(342, 'San Gregorio', 16),
(343, 'Porvenir', 16),
(344, 'Primavera', 16),
(345, 'Timaukel', 16),
(346, 'Cabo de Hornos', 16),
(347, 'Antartica', 16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos_resumen`
--

CREATE TABLE `datos_resumen` (
  `id` int(11) NOT NULL,
  `mes` int(2) NOT NULL,
  `año` int(11) NOT NULL,
  `idDato` int(11) NOT NULL,
  `dato` varchar(125) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `datos_resumen`
--

INSERT INTO `datos_resumen` (`id`, `mes`, `año`, `idDato`, `dato`, `createdAt`) VALUES
(16, 2, 2024, 18, '206586', '2024-03-03 21:16:49'),
(17, 2, 2024, 19, '13939', '2024-03-03 21:16:49'),
(18, 2, 2024, 20, '35', '2024-03-03 21:16:49'),
(19, 2, 2024, 21, '106', '2024-03-03 21:16:49'),
(20, 2, 2024, 22, '830737', '2024-03-03 21:16:49'),
(21, 2, 2024, 23, '1651090', '2024-03-03 21:16:49');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_ajustes_de_inventarios`
--

CREATE TABLE `detalle_ajustes_de_inventarios` (
  `id` int(11) NOT NULL,
  `ajuste_de_inventario_id` int(11) NOT NULL,
  `articulo_id` int(11) NOT NULL,
  `costo_neto` int(11) NOT NULL,
  `costo_imp` int(11) NOT NULL,
  `entradas` int(11) NOT NULL,
  `salidas` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `detalle_ajustes_de_inventarios`
--

INSERT INTO `detalle_ajustes_de_inventarios` (`id`, `ajuste_de_inventario_id`, `articulo_id`, `costo_neto`, `costo_imp`, `entradas`, `salidas`, `created_at`, `updated_at`) VALUES
(1, 1, 63, 10924, 2076, 1, 0, '2023-05-17 21:33:45', '2023-05-17 21:33:45'),
(2, 1, 45, 10924, 2076, 1, 0, '2023-05-17 21:33:45', '2023-05-17 21:33:45'),
(3, 1, 20, 10924, 2076, 1, 0, '2023-05-17 21:33:45', '2023-05-17 21:33:45'),
(4, 1, 37, 10924, 2076, 1, 0, '2023-05-17 21:33:45', '2023-05-17 21:33:45'),
(5, 1, 26, 10924, 2076, 1, 0, '2023-05-17 21:33:45', '2023-05-17 21:33:45'),
(6, 2, 43, 10084, 1916, 1, 0, '2023-05-17 21:39:48', '2023-05-17 21:39:48'),
(7, 2, 46, 10084, 1916, 1, 0, '2023-05-17 21:39:48', '2023-05-17 21:39:48'),
(8, 2, 24, 10084, 1916, 1, 0, '2023-05-17 21:39:48', '2023-05-17 21:39:48'),
(9, 2, 21, 10084, 1916, 1, 0, '2023-05-17 21:39:48', '2023-05-17 21:39:48'),
(10, 2, 52, 10084, 1916, 1, 0, '2023-05-17 21:39:48', '2023-05-17 21:39:48'),
(11, 2, 44, 10084, 1916, 1, 0, '2023-05-17 21:39:48', '2023-05-17 21:39:48'),
(12, 3, 64, 10084, 1916, 1, 0, '2023-05-17 21:55:08', '2023-05-17 21:55:08'),
(13, 3, 18, 10084, 1916, 1, 0, '2023-05-17 21:55:08', '2023-05-17 21:55:08'),
(14, 3, 39, 10084, 1916, 1, 0, '2023-05-17 21:55:08', '2023-05-17 21:55:08'),
(15, 3, 38, 10084, 1916, 1, 0, '2023-05-17 21:55:08', '2023-05-17 21:55:08'),
(16, 3, 30, 10084, 1916, 1, 0, '2023-05-17 21:55:08', '2023-05-17 21:55:08'),
(17, 3, 58, 10084, 1916, 1, 0, '2023-05-17 21:55:08', '2023-05-17 21:55:08'),
(18, 3, 34, 10084, 1916, 1, 0, '2023-05-17 21:55:08', '2023-05-17 21:55:08'),
(19, 3, 23, 10084, 1916, 1, 0, '2023-05-17 21:55:08', '2023-05-17 21:55:08'),
(20, 3, 42, 10084, 1916, 1, 0, '2023-05-17 21:55:08', '2023-05-17 21:55:08'),
(21, 3, 51, 10084, 1916, 1, 0, '2023-05-17 21:55:08', '2023-05-17 21:55:08'),
(22, 4, 22, 10084, 1916, 1, 0, '2023-05-17 22:11:42', '2023-05-17 22:11:42'),
(23, 4, 19, 10084, 1916, 1, 0, '2023-05-17 22:11:42', '2023-05-17 22:11:42'),
(24, 4, 35, 10084, 1916, 1, 0, '2023-05-17 22:11:42', '2023-05-17 22:11:42'),
(25, 4, 57, 10084, 1916, 1, 0, '2023-05-17 22:11:42', '2023-05-17 22:11:42'),
(26, 4, 33, 10084, 1916, 1, 0, '2023-05-17 22:11:42', '2023-05-17 22:11:42'),
(27, 4, 47, 10084, 1916, 1, 0, '2023-05-17 22:11:42', '2023-05-17 22:11:42'),
(28, 5, 65, 10084, 1916, 1, 0, '2023-05-17 22:13:08', '2023-05-17 22:13:08'),
(29, 6, 68, 2773, 527, 4, 0, '2023-05-17 23:15:33', '2023-05-17 23:15:33'),
(30, 6, 67, 2773, 527, 2, 0, '2023-05-17 23:15:33', '2023-05-17 23:15:33'),
(31, 6, 66, 2773, 527, 4, 0, '2023-05-17 23:15:33', '2023-05-17 23:15:33'),
(32, 7, 4, 840, 160, 4, 0, '2023-05-18 01:44:01', '2023-05-18 01:44:01'),
(33, 7, 6, 1681, 319, 1, 0, '2023-05-18 01:44:01', '2023-05-18 01:44:01'),
(34, 7, 5, 1261, 239, 2, 0, '2023-05-18 01:44:01', '2023-05-18 01:44:01'),
(35, 8, 4, 840, 160, 4, 0, '2023-05-18 01:44:02', '2023-05-18 01:44:02'),
(36, 8, 6, 1681, 319, 1, 0, '2023-05-18 01:44:02', '2023-05-18 01:44:02'),
(37, 8, 5, 1261, 239, 2, 0, '2023-05-18 01:44:02', '2023-05-18 01:44:02'),
(38, 9, 69, 3353, 637, 2, 0, '2023-05-18 01:59:09', '2023-05-18 01:59:09'),
(39, 9, 12, 3361, 639, 1, 0, '2023-05-18 01:59:09', '2023-05-18 01:59:09'),
(40, 9, 7, 4874, 926, 1, 0, '2023-05-18 01:59:09', '2023-05-18 01:59:09'),
(41, 9, 11, 5034, 956, 2, 0, '2023-05-18 01:59:09', '2023-05-18 01:59:09'),
(42, 9, 13, 840, 160, 1, 0, '2023-05-18 01:59:09', '2023-05-18 01:59:09'),
(43, 10, 17, 1672, 318, 3, 0, '2023-05-18 02:12:34', '2023-05-18 02:12:34'),
(44, 10, 9, 2689, 511, 3, 0, '2023-05-18 02:12:34', '2023-05-18 02:12:34'),
(45, 10, 1, 1672, 318, 3, 0, '2023-05-18 02:12:34', '2023-05-18 02:12:34'),
(46, 10, 15, 1261, 239, 3, 0, '2023-05-18 02:12:34', '2023-05-18 02:12:34'),
(47, 10, 3, 1672, 318, 3, 0, '2023-05-18 02:12:34', '2023-05-18 02:12:34'),
(48, 10, 2, 2101, 399, 2, 0, '2023-05-18 02:12:34', '2023-05-18 02:12:34'),
(49, 10, 16, 5042, 958, 2, 0, '2023-05-18 02:12:34', '2023-05-18 02:12:34'),
(50, 10, 10, 3782, 718, 1, 0, '2023-05-18 02:12:34', '2023-05-18 02:12:34'),
(51, 10, 14, 700, 133, 2, 0, '2023-05-18 02:12:34', '2023-05-18 02:12:34'),
(52, 11, 41, 10084, 1916, 1, 0, '2023-09-06 19:40:09', '2023-09-06 19:40:09'),
(53, 12, 73, 12521, 2379, 1, 0, '2023-11-06 20:00:11', '2023-11-06 20:00:11'),
(54, 12, 72, 10000, 1900, 1, 0, '2023-11-06 20:00:11', '2023-11-06 20:00:11'),
(55, 12, 51, 10084, 1916, 1, 0, '2023-11-06 20:00:11', '2023-11-06 20:00:11'),
(56, 12, 70, 10000, 1900, 1, 0, '2023-11-06 20:00:11', '2023-11-06 20:00:11'),
(57, 12, 71, 10000, 1900, 1, 0, '2023-11-06 20:00:11', '2023-11-06 20:00:11'),
(58, 13, 76, 12521, 2379, 1, 0, '2023-11-07 00:10:47', '2023-11-07 00:10:47'),
(59, 13, 74, 10000, 1900, 1, 0, '2023-11-07 00:10:47', '2023-11-07 00:10:47'),
(60, 13, 35, 10084, 1916, 1, 0, '2023-11-07 00:10:47', '2023-11-07 00:10:47'),
(61, 13, 75, 10000, 1900, 1, 0, '2023-11-07 00:10:47', '2023-11-07 00:10:47'),
(62, 14, 79, 12521, 2379, 1, 0, '2023-11-07 14:09:34', '2023-11-07 14:09:34'),
(63, 14, 78, 10000, 1900, 1, 0, '2023-11-07 14:09:34', '2023-11-07 14:09:34'),
(64, 14, 77, 10000, 1900, 1, 0, '2023-11-07 14:09:34', '2023-11-07 14:09:34'),
(65, 14, 33, 10084, 1916, 1, 0, '2023-11-07 14:09:34', '2023-11-07 14:09:34'),
(66, 15, 55, 10840, 2060, 1, 0, '2023-11-07 14:53:37', '2023-11-07 14:53:37'),
(67, 15, 80, 10840, 2060, 1, 0, '2023-11-07 14:53:37', '2023-11-07 14:53:37'),
(68, 15, 81, 10840, 2060, 1, 0, '2023-11-07 14:53:37', '2023-11-07 14:53:37'),
(69, 15, 83, 11681, 2219, 1, 0, '2023-11-07 14:53:37', '2023-11-07 14:53:37'),
(70, 15, 82, 10840, 2060, 1, 0, '2023-11-07 14:53:37', '2023-11-07 14:53:37'),
(71, 16, 43, 10840, 2060, 1, 0, '2023-11-07 17:49:06', '2023-11-07 17:49:06'),
(72, 16, 86, 10840, 2060, 1, 0, '2023-11-07 17:49:06', '2023-11-07 17:49:06'),
(73, 16, 87, 11681, 2219, 1, 0, '2023-11-07 17:49:06', '2023-11-07 17:49:06'),
(74, 16, 85, 10840, 2060, 1, 0, '2023-11-07 17:49:06', '2023-11-07 17:49:06'),
(75, 16, 84, 10840, 2060, 1, 0, '2023-11-07 17:49:06', '2023-11-07 17:49:06'),
(76, 17, 89, 10840, 2060, 1, 0, '2023-11-08 16:37:52', '2023-11-08 16:37:52'),
(77, 17, 94, 9160, 1740, 1, 0, '2023-11-08 16:37:52', '2023-11-08 16:37:52'),
(78, 17, 88, 10840, 2060, 1, 0, '2023-11-08 16:37:52', '2023-11-08 16:37:52'),
(79, 17, 91, 10840, 2060, 1, 0, '2023-11-08 16:37:52', '2023-11-08 16:37:52'),
(80, 17, 96, 9160, 1740, 1, 0, '2023-11-08 16:37:52', '2023-11-08 16:37:52'),
(81, 17, 95, 9160, 1740, 1, 0, '2023-11-08 16:37:52', '2023-11-08 16:37:52'),
(82, 17, 97, 8319, 1581, 1, 0, '2023-11-08 16:37:52', '2023-11-08 16:37:52'),
(83, 17, 90, 10840, 2060, 1, 0, '2023-11-08 16:37:52', '2023-11-08 16:37:52'),
(84, 17, 92, 11681, 2219, 1, 0, '2023-11-08 16:37:52', '2023-11-08 16:37:52'),
(85, 17, 93, 9160, 1740, 1, 0, '2023-11-08 16:37:52', '2023-11-08 16:37:52'),
(86, 18, 30, 10084, 1916, 1, 0, '2024-03-07 00:55:53', '2024-03-07 00:55:53'),
(87, 19, 95, 9160, 1740, 1, 0, '2024-03-08 00:30:51', '2024-03-08 00:30:51'),
(88, 20, 78, 10449, 2451, 0, 1, '2024-03-14 01:25:36', '2024-03-14 01:25:36');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_movimientos_articulos`
--

CREATE TABLE `detalle_movimientos_articulos` (
  `id` int(11) NOT NULL,
  `movimiento_id` int(11) NOT NULL,
  `id_movimiento` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `detalle_movimientos_articulos`
--

INSERT INTO `detalle_movimientos_articulos` (`id`, `movimiento_id`, `id_movimiento`, `producto_id`, `cantidad`, `usuario_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 63, 1, 1, '2023-05-17 20:33:48', '2023-05-17 20:33:48'),
(2, 1, 1, 45, 1, 1, '2023-05-17 20:33:49', '2023-05-17 20:33:49'),
(3, 1, 1, 20, 1, 1, '2023-05-17 20:33:49', '2023-05-17 20:33:49'),
(4, 1, 1, 37, 1, 1, '2023-05-17 20:33:49', '2023-05-17 20:33:49'),
(5, 1, 1, 26, 1, 1, '2023-05-17 20:33:49', '2023-05-17 20:33:49'),
(6, 1, 2, 43, 1, 1, '2023-05-17 20:39:50', '2023-05-17 20:39:50'),
(7, 1, 2, 46, 1, 1, '2023-05-17 20:39:51', '2023-05-17 20:39:51'),
(8, 1, 2, 24, 1, 1, '2023-05-17 20:39:51', '2023-05-17 20:39:51'),
(9, 1, 2, 21, 1, 1, '2023-05-17 20:39:52', '2023-05-17 20:39:52'),
(10, 1, 2, 52, 1, 1, '2023-05-17 20:39:52', '2023-05-17 20:39:52'),
(11, 1, 2, 44, 1, 1, '2023-05-17 20:39:52', '2023-05-17 20:39:52'),
(12, 1, 3, 64, 1, 1, '2023-05-17 20:55:13', '2023-05-17 20:55:13'),
(13, 1, 3, 18, 1, 1, '2023-05-17 20:55:13', '2023-05-17 20:55:13'),
(14, 1, 3, 39, 1, 1, '2023-05-17 20:55:13', '2023-05-17 20:55:13'),
(15, 1, 3, 38, 1, 1, '2023-05-17 20:55:13', '2023-05-17 20:55:13'),
(16, 1, 3, 30, 1, 1, '2023-05-17 20:55:14', '2023-05-17 20:55:14'),
(17, 1, 3, 58, 1, 1, '2023-05-17 20:55:14', '2023-05-17 20:55:14'),
(18, 1, 3, 34, 1, 1, '2023-05-17 20:55:14', '2023-05-17 20:55:14'),
(19, 1, 3, 23, 1, 1, '2023-05-17 20:55:14', '2023-05-17 20:55:14'),
(20, 1, 3, 42, 1, 1, '2023-05-17 20:55:15', '2023-05-17 20:55:15'),
(21, 1, 3, 51, 1, 1, '2023-05-17 20:55:15', '2023-05-17 20:55:15'),
(22, 1, 4, 22, 1, 1, '2023-05-17 21:11:45', '2023-05-17 21:11:45'),
(23, 1, 4, 19, 1, 1, '2023-05-17 21:11:45', '2023-05-17 21:11:45'),
(24, 1, 4, 35, 1, 1, '2023-05-17 21:11:45', '2023-05-17 21:11:45'),
(25, 1, 4, 57, 1, 1, '2023-05-17 21:11:45', '2023-05-17 21:11:45'),
(26, 1, 4, 33, 1, 1, '2023-05-17 21:11:45', '2023-05-17 21:11:45'),
(27, 1, 4, 47, 1, 1, '2023-05-17 21:11:45', '2023-05-17 21:11:45'),
(28, 4, 5, 65, 1, 1, '2023-05-17 21:13:08', '2023-05-17 21:13:08'),
(29, 1, 6, 68, 4, 1, '2023-05-17 22:15:34', '2023-05-17 22:15:34'),
(30, 1, 6, 67, 2, 1, '2023-05-17 22:15:35', '2023-05-17 22:15:35'),
(31, 1, 6, 66, 4, 1, '2023-05-17 22:15:35', '2023-05-17 22:15:35'),
(32, 1, 7, 4, 4, 1, '2023-05-18 00:44:03', '2023-05-18 00:44:03'),
(33, 1, 7, 6, 1, 1, '2023-05-18 00:44:03', '2023-05-18 00:44:03'),
(34, 1, 7, 5, 2, 1, '2023-05-18 00:44:03', '2023-05-18 00:44:03'),
(35, 1, 8, 4, 4, 1, '2023-05-18 00:44:04', '2023-05-18 00:44:04'),
(36, 1, 8, 6, 1, 1, '2023-05-18 00:44:04', '2023-05-18 00:44:04'),
(37, 1, 8, 5, 2, 1, '2023-05-18 00:44:04', '2023-05-18 00:44:04'),
(38, 1, 9, 69, 2, 1, '2023-05-18 00:59:12', '2023-05-18 00:59:12'),
(39, 1, 9, 12, 1, 1, '2023-05-18 00:59:12', '2023-05-18 00:59:12'),
(40, 1, 9, 7, 1, 1, '2023-05-18 00:59:12', '2023-05-18 00:59:12'),
(41, 1, 9, 11, 2, 1, '2023-05-18 00:59:12', '2023-05-18 00:59:12'),
(42, 1, 9, 13, 1, 1, '2023-05-18 00:59:13', '2023-05-18 00:59:13'),
(43, 1, 10, 17, 3, 1, '2023-05-18 01:12:41', '2023-05-18 01:12:41'),
(44, 1, 10, 9, 3, 1, '2023-05-18 01:12:41', '2023-05-18 01:12:41'),
(45, 1, 10, 1, 3, 1, '2023-05-18 01:12:41', '2023-05-18 01:12:41'),
(46, 1, 10, 15, 3, 1, '2023-05-18 01:12:41', '2023-05-18 01:12:41'),
(47, 1, 10, 3, 3, 1, '2023-05-18 01:12:42', '2023-05-18 01:12:42'),
(48, 1, 10, 2, 2, 1, '2023-05-18 01:12:42', '2023-05-18 01:12:42'),
(49, 1, 10, 16, 2, 1, '2023-05-18 01:12:42', '2023-05-18 01:12:42'),
(50, 1, 10, 10, 1, 1, '2023-05-18 01:12:43', '2023-05-18 01:12:43'),
(51, 1, 10, 14, 2, 1, '2023-05-18 01:12:43', '2023-05-18 01:12:43'),
(52, 2, 1, 65, 1, 1, '2023-07-05 23:27:57', '2023-07-05 23:27:57'),
(53, 2, 2, 46, 1, 1, '2023-08-03 15:40:11', '2023-08-03 15:40:11'),
(54, 2, 3, 37, 1, 1, '2023-08-26 14:39:49', '2023-08-26 14:39:49'),
(55, 2, 4, 58, 1, 1, '2023-09-01 03:46:59', '2023-09-01 03:46:59'),
(56, 2, 5, 38, 1, 1, '2023-09-04 13:41:13', '2023-09-04 13:41:13'),
(57, 4, 11, 41, 1, 1, '2023-09-06 19:40:10', '2023-09-06 19:40:10'),
(58, 2, 6, 41, 1, 1, '2023-09-06 19:41:36', '2023-09-06 19:41:36'),
(59, 2, 7, 47, 1, 1, '2023-09-13 20:12:46', '2023-09-13 20:12:46'),
(60, 2, 8, 57, 1, 1, '2023-10-02 14:40:51', '2023-10-02 14:40:51'),
(61, 2, 9, 45, 1, 1, '2023-10-02 14:41:48', '2023-10-02 14:41:48'),
(62, 2, 10, 63, 1, 1, '2023-10-02 14:42:22', '2023-10-02 14:42:22'),
(63, 2, 11, 66, 1, 1, '2023-10-02 17:11:54', '2023-10-02 17:11:54'),
(64, 2, 12, 26, 1, 1, '2023-10-02 18:37:48', '2023-10-02 18:37:48'),
(66, 2, 14, 52, 1, 1, '2023-10-11 18:38:19', '2023-10-11 18:38:19'),
(67, 2, 15, 23, 1, 1, '2023-10-13 14:41:13', '2023-10-13 14:41:13'),
(68, 2, 15, 34, 1, 1, '2023-10-13 14:41:14', '2023-10-13 14:41:14'),
(69, 2, 16, 44, 1, 1, '2023-10-14 16:11:32', '2023-10-14 16:11:32'),
(70, 2, 17, 20, 1, 1, '2023-10-18 00:54:22', '2023-10-18 00:54:22'),
(71, 2, 18, 33, 1, 1, '2023-10-23 01:14:53', '2023-10-23 01:14:53'),
(72, 2, 19, 18, 1, 1, '2023-10-23 01:16:51', '2023-10-23 01:16:51'),
(73, 2, 20, 39, 1, 1, '2023-10-24 14:56:00', '2023-10-24 14:56:00'),
(74, 2, 21, 43, 1, 1, '2023-10-25 19:22:34', '2023-10-25 19:22:34'),
(75, 2, 22, 35, 1, 1, '2023-10-30 01:18:03', '2023-10-30 01:18:03'),
(76, 2, 23, 21, 1, 1, '2023-10-30 23:40:20', '2023-10-30 23:40:20'),
(77, 1, 12, 73, 1, 1, '2023-11-06 20:00:15', '2023-11-06 20:00:15'),
(78, 1, 12, 72, 1, 1, '2023-11-06 20:00:15', '2023-11-06 20:00:15'),
(79, 1, 12, 51, 1, 1, '2023-11-06 20:00:15', '2023-11-06 20:00:15'),
(80, 1, 12, 70, 1, 1, '2023-11-06 20:00:16', '2023-11-06 20:00:16'),
(81, 1, 12, 71, 1, 1, '2023-11-06 20:00:16', '2023-11-06 20:00:16'),
(82, 1, 13, 76, 1, 1, '2023-11-07 00:10:52', '2023-11-07 00:10:52'),
(83, 1, 13, 74, 1, 1, '2023-11-07 00:10:52', '2023-11-07 00:10:52'),
(84, 1, 13, 35, 1, 1, '2023-11-07 00:10:52', '2023-11-07 00:10:52'),
(85, 1, 13, 75, 1, 1, '2023-11-07 00:10:53', '2023-11-07 00:10:53'),
(86, 1, 14, 79, 1, 1, '2023-11-07 14:09:37', '2023-11-07 14:09:37'),
(87, 1, 14, 78, 1, 1, '2023-11-07 14:09:37', '2023-11-07 14:09:37'),
(88, 1, 14, 77, 1, 1, '2023-11-07 14:09:38', '2023-11-07 14:09:38'),
(89, 1, 14, 33, 1, 1, '2023-11-07 14:09:38', '2023-11-07 14:09:38'),
(90, 1, 15, 55, 1, 1, '2023-11-07 14:53:41', '2023-11-07 14:53:41'),
(91, 1, 15, 80, 1, 1, '2023-11-07 14:53:42', '2023-11-07 14:53:42'),
(92, 1, 15, 81, 1, 1, '2023-11-07 14:53:42', '2023-11-07 14:53:42'),
(93, 1, 15, 83, 1, 1, '2023-11-07 14:53:42', '2023-11-07 14:53:42'),
(94, 1, 15, 82, 1, 1, '2023-11-07 14:53:43', '2023-11-07 14:53:43'),
(95, 1, 16, 43, 1, 1, '2023-11-07 17:49:09', '2023-11-07 17:49:09'),
(96, 1, 16, 86, 1, 1, '2023-11-07 17:49:10', '2023-11-07 17:49:10'),
(97, 1, 16, 87, 1, 1, '2023-11-07 17:49:10', '2023-11-07 17:49:10'),
(98, 1, 16, 85, 1, 1, '2023-11-07 17:49:10', '2023-11-07 17:49:10'),
(99, 1, 16, 84, 1, 1, '2023-11-07 17:49:10', '2023-11-07 17:49:10'),
(100, 1, 17, 89, 1, 1, '2023-11-08 16:37:58', '2023-11-08 16:37:58'),
(101, 1, 17, 94, 1, 1, '2023-11-08 16:37:59', '2023-11-08 16:37:59'),
(102, 1, 17, 88, 1, 1, '2023-11-08 16:37:59', '2023-11-08 16:37:59'),
(103, 1, 17, 91, 1, 1, '2023-11-08 16:37:59', '2023-11-08 16:37:59'),
(104, 1, 17, 96, 1, 1, '2023-11-08 16:37:59', '2023-11-08 16:37:59'),
(105, 1, 17, 95, 1, 1, '2023-11-08 16:37:59', '2023-11-08 16:37:59'),
(106, 1, 17, 97, 1, 1, '2023-11-08 16:37:59', '2023-11-08 16:37:59'),
(107, 1, 17, 90, 1, 1, '2023-11-08 16:38:00', '2023-11-08 16:38:00'),
(108, 1, 17, 92, 1, 1, '2023-11-08 16:38:00', '2023-11-08 16:38:00'),
(109, 1, 17, 93, 1, 1, '2023-11-08 16:38:01', '2023-11-08 16:38:01'),
(110, 2, 24, 92, 1, 1, '2023-11-10 19:02:31', '2023-11-10 19:02:31'),
(111, 2, 25, 71, 1, 1, '2023-11-10 19:03:56', '2023-11-10 19:03:56'),
(112, 2, 25, 51, 1, 1, '2023-11-10 19:03:57', '2023-11-10 19:03:57'),
(113, 2, 26, 64, 1, 1, '2023-11-11 01:19:31', '2023-11-11 01:19:31'),
(114, 2, 27, 97, 1, 1, '2023-11-14 20:43:41', '2023-11-14 20:43:41'),
(115, 2, 28, 84, 1, 1, '2023-11-14 20:44:20', '2023-11-14 20:44:20'),
(116, 2, 29, 81, 1, 1, '2023-11-20 13:41:22', '2023-11-20 13:41:22'),
(117, 2, 30, 95, 1, 1, '2023-11-23 14:24:14', '2023-11-23 14:24:14'),
(119, 2, 32, 82, 1, 1, '2023-11-27 17:12:40', '2023-11-27 17:12:40'),
(120, 2, 33, 96, 1, 1, '2023-11-27 17:22:43', '2023-11-27 17:22:43'),
(121, 2, 34, 90, 1, 1, '2023-11-27 17:37:23', '2023-11-27 17:37:23'),
(122, 2, 35, 94, 1, 1, '2023-11-28 20:33:58', '2023-11-28 20:33:58'),
(123, 2, 36, 91, 1, 1, '2023-11-28 20:41:50', '2023-11-28 20:41:50'),
(124, 2, 37, 80, 1, 1, '2023-11-30 20:21:16', '2023-11-30 20:21:16'),
(125, 2, 38, 79, 1, 1, '2023-12-02 12:41:12', '2023-12-02 12:41:12'),
(126, 2, 39, 43, 1, 1, '2023-12-05 20:13:21', '2023-12-05 20:13:21'),
(127, 2, 40, 85, 1, 1, '2023-12-14 20:04:35', '2023-12-14 20:04:35'),
(128, 2, 41, 83, 1, 1, '2024-01-09 15:24:00', '2024-01-09 15:24:00'),
(129, 2, 42, 89, 1, 1, '2024-01-12 16:02:45', '2024-01-12 16:02:45'),
(130, 2, 43, 42, 1, 1, '2024-01-27 15:11:01', '2024-01-27 15:11:01'),
(131, 2, 44, 30, 1, 1, '2024-01-27 15:26:25', '2024-01-27 15:26:25'),
(132, 2, 45, 24, 1, 1, '2024-01-30 14:19:33', '2024-01-30 14:19:33'),
(133, 2, 46, 88, 1, 1, '2024-01-30 15:02:59', '2024-01-30 15:02:59'),
(134, 1, 1, 120, 1, 1, '2024-01-30 20:41:35', '2024-01-30 20:41:35'),
(135, 1, 1, 119, 1, 1, '2024-01-30 20:41:36', '2024-01-30 20:41:36'),
(136, 1, 1, 98, 1, 1, '2024-01-30 20:41:36', '2024-01-30 20:41:36'),
(137, 1, 1, 109, 1, 1, '2024-01-30 20:41:36', '2024-01-30 20:41:36'),
(138, 1, 1, 104, 1, 1, '2024-01-30 20:41:36', '2024-01-30 20:41:36'),
(139, 1, 1, 118, 1, 1, '2024-01-30 20:41:37', '2024-01-30 20:41:37'),
(140, 1, 1, 78, 2, 1, '2024-01-30 20:41:38', '2024-01-30 20:41:38'),
(141, 1, 1, 114, 1, 1, '2024-01-30 20:41:38', '2024-01-30 20:41:38'),
(142, 1, 1, 103, 1, 1, '2024-01-30 20:41:38', '2024-01-30 20:41:38'),
(143, 1, 1, 125, 1, 1, '2024-01-30 20:41:38', '2024-01-30 20:41:38'),
(144, 1, 1, 75, 1, 1, '2024-01-30 20:41:41', '2024-01-30 20:41:41'),
(145, 1, 1, 117, 1, 1, '2024-01-30 20:41:42', '2024-01-30 20:41:42'),
(146, 1, 1, 72, 1, 1, '2024-01-30 20:41:43', '2024-01-30 20:41:43'),
(147, 1, 1, 127, 1, 1, '2024-01-30 20:41:45', '2024-01-30 20:41:45'),
(148, 1, 1, 74, 1, 1, '2024-01-30 20:41:46', '2024-01-30 20:41:46'),
(149, 1, 1, 111, 1, 1, '2024-01-30 20:41:46', '2024-01-30 20:41:46'),
(150, 1, 1, 122, 1, 1, '2024-01-30 20:41:47', '2024-01-30 20:41:47'),
(151, 1, 1, 108, 1, 1, '2024-01-30 20:41:47', '2024-01-30 20:41:47'),
(152, 1, 1, 115, 1, 1, '2024-01-30 20:41:47', '2024-01-30 20:41:47'),
(153, 1, 1, 123, 1, 1, '2024-01-30 20:41:47', '2024-01-30 20:41:47'),
(154, 1, 1, 43, 1, 1, '2024-01-30 20:41:47', '2024-01-30 20:41:47'),
(155, 1, 1, 101, 1, 1, '2024-01-30 20:41:48', '2024-01-30 20:41:48'),
(156, 1, 1, 124, 1, 1, '2024-01-30 20:41:48', '2024-01-30 20:41:48'),
(157, 1, 1, 71, 1, 1, '2024-01-30 20:41:49', '2024-01-30 20:41:49'),
(158, 1, 1, 112, 1, 1, '2024-01-30 20:41:49', '2024-01-30 20:41:49'),
(159, 1, 1, 106, 1, 1, '2024-01-30 20:41:49', '2024-01-30 20:41:49'),
(160, 1, 1, 102, 1, 1, '2024-01-30 20:41:49', '2024-01-30 20:41:49'),
(161, 1, 1, 43, 1, 1, '2024-01-30 20:41:49', '2024-01-30 20:41:49'),
(162, 1, 1, 116, 1, 1, '2024-01-30 20:41:50', '2024-01-30 20:41:50'),
(163, 1, 1, 100, 1, 1, '2024-01-30 20:41:50', '2024-01-30 20:41:50'),
(164, 1, 1, 99, 1, 1, '2024-01-30 20:41:50', '2024-01-30 20:41:50'),
(165, 1, 1, 33, 1, 1, '2024-01-30 20:41:50', '2024-01-30 20:41:50'),
(166, 1, 1, 105, 1, 1, '2024-01-30 20:41:50', '2024-01-30 20:41:50'),
(167, 1, 1, 107, 1, 1, '2024-01-30 20:41:51', '2024-01-30 20:41:51'),
(168, 1, 1, 121, 1, 1, '2024-01-30 20:41:51', '2024-01-30 20:41:51'),
(169, 1, 1, 110, 1, 1, '2024-01-30 20:41:51', '2024-01-30 20:41:51'),
(170, 1, 1, 113, 1, 1, '2024-01-30 20:41:51', '2024-01-30 20:41:51'),
(171, 1, 1, 126, 1, 1, '2024-01-30 20:41:51', '2024-01-30 20:41:51'),
(172, 2, 47, 127, 1, 1, '2024-02-24 00:15:00', '2024-02-24 00:15:00'),
(173, 2, 48, 102, 1, 1, '2024-02-29 16:21:02', '2024-02-29 16:21:02'),
(174, 2, 49, 116, 1, 1, '2024-03-05 00:58:05', '2024-03-05 00:58:05'),
(175, 2, 50, 123, 1, 1, '2024-03-05 00:59:28', '2024-03-05 00:59:28'),
(176, 2, 51, 86, 1, 1, '2024-03-06 20:27:58', '2024-03-06 20:27:58'),
(177, 2, 52, 115, 1, 1, '2024-03-07 00:24:19', '2024-03-07 00:24:19'),
(178, 6, 18, 30, 1, 1, '2024-03-07 00:55:52', '2024-03-07 00:55:52'),
(179, 2, 53, 87, 1, 1, '2024-03-07 17:45:42', '2024-03-07 17:45:42'),
(180, 6, 19, 95, 1, 1, '2024-03-08 00:30:52', '2024-03-08 00:30:52'),
(181, 2, 54, 95, 1, 1, '2024-03-08 00:31:44', '2024-03-08 00:31:44'),
(182, 2, 55, 55, 1, 1, '2024-03-08 00:32:26', '2024-03-08 00:32:26'),
(183, 2, 56, 22, 1, 1, '2024-03-09 15:47:10', '2024-03-09 15:47:10'),
(184, 2, 57, 118, 1, 1, '2024-03-09 20:06:45', '2024-03-09 20:06:45'),
(185, 2, 58, 109, 1, 1, '2024-03-10 17:26:35', '2024-03-10 17:26:35'),
(186, 2, 59, 117, 1, 1, '2024-03-10 17:27:24', '2024-03-10 17:27:24'),
(187, 2, 60, 98, 1, 1, '2024-03-10 17:28:30', '2024-03-10 17:28:30'),
(188, 2, 61, 19, 1, 1, '2024-03-11 18:36:01', '2024-03-11 18:36:01'),
(189, 2, 62, 93, 1, 1, '2024-03-11 18:42:01', '2024-03-11 18:42:01'),
(190, 2, 63, 33, 1, 1, '2024-03-11 19:02:17', '2024-03-11 19:02:17'),
(191, 2, 64, 77, 1, 1, '2024-03-11 20:10:59', '2024-03-11 20:10:59'),
(192, 2, 64, 78, 1, 1, '2024-03-11 20:11:00', '2024-03-11 20:11:00'),
(193, 2, 65, 2, 1, 1, '2024-03-11 22:46:37', '2024-03-11 22:46:37'),
(194, 2, 66, 51, 1, 1, '2024-03-12 20:21:14', '2024-03-12 20:21:14'),
(195, 2, 67, 72, 1, 1, '2024-03-12 20:23:35', '2024-03-12 20:23:35'),
(196, 4, 20, 78, 1, 1, '2024-03-14 01:25:37', '2024-03-14 01:25:37'),
(197, 2, 68, 33, 1, 1, '2024-03-14 20:09:03', '2024-03-14 20:09:03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_recepciones`
--

CREATE TABLE `detalle_recepciones` (
  `id` int(11) NOT NULL,
  `id_recepcion` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `costo_neto` int(11) NOT NULL,
  `costo_imp` int(11) NOT NULL,
  `unidades` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `detalle_recepciones`
--

INSERT INTO `detalle_recepciones` (`id`, `id_recepcion`, `id_producto`, `costo_neto`, `costo_imp`, `unidades`) VALUES
(1, 1, 120, 10449, 2451, 1),
(2, 1, 119, 11259, 2641, 1),
(3, 1, 98, 11259, 2641, 1),
(4, 1, 109, 11259, 2641, 1),
(5, 1, 104, 11259, 2641, 1),
(6, 1, 118, 10449, 2451, 1),
(7, 1, 78, 10449, 2451, 2),
(8, 1, 114, 10449, 2451, 1),
(9, 1, 103, 11259, 2641, 1),
(10, 1, 125, 10449, 2451, 1),
(11, 1, 75, 10449, 2451, 1),
(12, 1, 117, 10449, 2451, 1),
(13, 1, 72, 10449, 2451, 1),
(14, 1, 127, 10449, 2451, 1),
(15, 1, 74, 10449, 2451, 1),
(16, 1, 111, 11259, 2641, 1),
(17, 1, 122, 10449, 2451, 1),
(18, 1, 108, 11259, 2641, 1),
(19, 1, 115, 10449, 2451, 1),
(20, 1, 123, 10449, 2451, 1),
(21, 1, 43, 10449, 2451, 1),
(22, 1, 101, 11259, 2641, 1),
(23, 1, 124, 10449, 2451, 1),
(24, 1, 71, 10449, 2451, 1),
(25, 1, 112, 11259, 2641, 1),
(26, 1, 106, 11259, 2641, 1),
(27, 1, 102, 11259, 2641, 1),
(28, 1, 43, 11259, 2641, 1),
(29, 1, 116, 10449, 2451, 1),
(30, 1, 100, 11259, 2641, 1),
(31, 1, 99, 10449, 2451, 1),
(32, 1, 33, 10449, 2451, 1),
(33, 1, 105, 11259, 2641, 1),
(34, 1, 107, 11259, 2641, 1),
(35, 1, 121, 10449, 2451, 1),
(36, 1, 110, 11259, 2641, 1),
(37, 1, 113, 10449, 2451, 1),
(38, 1, 126, 1, 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_ventas`
--

CREATE TABLE `detalle_ventas` (
  `id` int(11) NOT NULL,
  `id_venta` int(11) NOT NULL,
  `articulo` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_neto` int(11) NOT NULL,
  `precio_imp` int(11) NOT NULL,
  `costo_neto` int(11) NOT NULL,
  `costo_imp` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `detalle_ventas`
--

INSERT INTO `detalle_ventas` (`id`, `id_venta`, `articulo`, `cantidad`, `precio_neto`, `precio_imp`, `costo_neto`, `costo_imp`) VALUES
(1, 1, 65, 1, 17647, 3353, 10084, 1916),
(2, 2, 46, 1, 17639, 3351, 10084, 1916),
(3, 3, 37, 1, 19319, 3671, 10924, 2076),
(4, 4, 58, 1, 17639, 3351, 10084, 1916),
(5, 5, 38, 1, 17639, 3351, 10084, 1916),
(6, 6, 41, 1, 21000, 3990, 10084, 1916),
(7, 7, 47, 1, 21000, 3990, 10084, 1916),
(8, 8, 57, 1, 20242, 4748, 10084, 1916),
(9, 9, 45, 1, 20242, 4748, 10924, 2076),
(10, 10, 63, 1, 18622, 4368, 10924, 2076),
(11, 11, 66, 1, 8100, 1900, 2773, 527),
(12, 12, 26, 1, 18218, 4273, 10924, 2076),
(14, 14, 52, 1, 18218, 4273, 10084, 1916),
(15, 15, 23, 1, 16760, 3931, 10084, 1916),
(16, 15, 34, 1, 20242, 4748, 10084, 1916),
(17, 16, 44, 1, 18218, 4273, 10084, 1916),
(18, 17, 20, 1, 16760, 3931, 10924, 2076),
(19, 18, 33, 1, 18218, 4273, 10084, 1916),
(20, 19, 18, 1, 18218, 4273, 10084, 1916),
(21, 20, 39, 1, 18218, 4273, 10084, 1916),
(22, 21, 43, 1, 18218, 4273, 10084, 1916),
(23, 22, 35, 1, 18218, 4273, 10084, 1916),
(24, 23, 21, 1, 16760, 3931, 10084, 1916),
(25, 24, 92, 1, 20242, 4748, 11681, 2219),
(26, 25, 71, 1, 20242, 4748, 10000, 1900),
(27, 25, 51, 1, 20242, 4748, 10084, 1916),
(28, 26, 64, 1, 20242, 4748, 10084, 1916),
(29, 27, 97, 1, 20242, 4748, 8319, 1581),
(30, 28, 84, 1, 20242, 4748, 10840, 2060),
(31, 29, 81, 1, 20242, 4748, 10840, 2060),
(32, 30, 95, 1, 20242, 4748, 9160, 1740),
(34, 32, 82, 1, 18218, 4273, 10840, 2060),
(35, 33, 96, 1, 18218, 4273, 9160, 1740),
(36, 34, 90, 1, 18218, 4273, 10840, 2060),
(37, 35, 94, 1, 18218, 4273, 9160, 1740),
(38, 36, 91, 1, 18218, 4273, 10840, 2060),
(39, 37, 80, 1, 18218, 4273, 10840, 2060),
(40, 38, 79, 1, 18218, 4273, 12521, 2379),
(41, 39, 43, 1, 20242, 4748, 10840, 2060),
(42, 40, 85, 1, 20242, 4748, 10840, 2060),
(43, 41, 83, 1, 20242, 4748, 11681, 2219),
(44, 42, 89, 1, 20242, 4748, 10840, 2060),
(45, 43, 42, 1, 20242, 4748, 10084, 1916),
(46, 44, 30, 1, 20242, 4748, 10084, 1916),
(47, 45, 24, 1, 20242, 4748, 10084, 1916),
(48, 46, 88, 1, 20242, 4748, 10840, 2060),
(49, 47, 127, 1, 17002, 3988, 10449, 2451),
(50, 48, 102, 1, 17002, 3988, 11259, 2641),
(51, 49, 116, 1, 17002, 3988, 10449, 2451),
(52, 50, 123, 1, 17002, 3988, 10449, 2451),
(53, 51, 86, 1, 20242, 4748, 10840, 2060),
(54, 52, 115, 1, 17002, 3988, 10449, 2451),
(55, 53, 87, 1, 20242, 4748, 11681, 2219),
(56, 54, 95, 1, 17002, 3988, 9160, 1740),
(57, 55, 55, 1, 20242, 4748, 10840, 2060),
(58, 56, 22, 1, 18622, 4368, 10084, 1916),
(59, 57, 118, 1, 18622, 4368, 10449, 2451),
(60, 58, 109, 1, 19432, 4558, 11259, 2641),
(61, 59, 117, 1, 18622, 4368, 10449, 2451),
(62, 60, 98, 1, 17820, 4180, 11259, 2641),
(63, 61, 19, 1, 20242, 4748, 10084, 1916),
(64, 62, 93, 1, 20242, 4748, 9160, 1740),
(65, 63, 33, 1, 20242, 4748, 10449, 2451),
(66, 64, 77, 1, 20242, 4748, 10000, 1900),
(67, 64, 78, 1, 20242, 4748, 10449, 2451),
(68, 65, 2, 1, 4852, 1138, 2101, 399),
(69, 66, 51, 1, 20242, 4748, 10084, 1916),
(70, 67, 72, 1, 20242, 4748, 10449, 2451),
(71, 68, 33, 1, 20242, 4748, 10449, 2451);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entidades`
--

CREATE TABLE `entidades` (
  `rut` varchar(11) NOT NULL,
  `nombre` varchar(120) NOT NULL,
  `giro` varchar(90) NOT NULL,
  `tipo` varchar(1) NOT NULL DEFAULT 'B',
  `direccion` varchar(120) NOT NULL,
  `id_comuna` int(11) NOT NULL,
  `id_region` int(11) NOT NULL,
  `telefono` int(9) NOT NULL,
  `mail` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `entidades`
--

INSERT INTO `entidades` (`rut`, `nombre`, `giro`, `tipo`, `direccion`, `id_comuna`, `id_region`, `telefono`, `mail`) VALUES
('11111111-1', 'cliente generico', 'N/A', 'B', 'N/A', 204, 10, 94679847, 'cidybadilla@gmail.com'),
('76211240-K', 'TRANSPORTES, TECNOLOGIA Y GIROS EGT LTDA.', 'Sin giro', 'P', 'Sin dirección', 204, 10, 94679847, 'cidybadilla@gmail.com'),
('76513460-9', 'Comercial Omega Limitada', 'Sin giro', 'P', 'Sin dirección', 204, 10, 94679847, 'cidybadilla@gmail.com'),
('76824625-4', 'M&A LIMITADA', 'Sin giro', 'P', 'Sin dirección', 204, 10, 94679847, 'cidybadilla@gmail.com'),
('77101928-5', 'SumUp Chile Payments SA', 'Sin giro', 'P', 'Sin dirección', 204, 10, 94679847, 'cidybadilla@gmail.com'),
('77398220-1', 'MercadoLibre Chile Ltda.', 'Sin giro', 'P', 'Sin dirección', 204, 10, 94679847, 'cidybadilla@gmail.com'),
('77497031-2', 'COMERCIALIZADORA EYB', 'Sin giro', 'P', 'Sin dirección', 204, 10, 94679847, 'cidybadilla@gmail.com'),
('77751367-2', 'Mercado Pago Lending Ltda', 'Sin giro', 'P', 'Sin dirección', 204, 10, 94679847, 'cidybadilla@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `issues`
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
-- Volcado de datos para la tabla `issues`
--

INSERT INTO `issues` (`id`, `issue`, `createdAt`, `updatedAt`, `id_section`, `id_status`, `id_type`) VALUES
(1, 'agregar datos de resumen a widgets pagina principal', '2023-01-24 19:27:46', '2023-10-15 18:14:41', 1, 3, 2),
(2, 'Registrar medios de pago', '2023-01-24 19:28:27', '2023-11-20 15:05:28', 2, 3, 3),
(6, 'agregar generador de codigos de barra', '2023-01-25 18:06:54', '2023-01-27 16:51:22', 4, 1, 3),
(7, 'reporte de ventas mensuales', '2023-01-27 17:01:37', '2023-01-27 17:01:37', 5, 1, 3),
(8, 'falta estado resulto en issues', '2023-01-27 23:12:18', '2023-09-28 22:57:35', 2, 3, 1),
(9, 'filtro en listado de issues', '2023-01-30 09:41:35', '2023-11-02 22:19:48', 2, 3, 2),
(10, 'porcentaje de avance en estado de issue', '2023-01-30 09:42:30', '2023-01-30 09:42:30', 2, 1, 2),
(11, 'integracion simpleapi para datos de compras y ventas', '2023-01-30 09:43:12', '2023-01-30 09:43:12', 1, 1, 3),
(12, 'integracion con api mercadolibre', '2023-01-30 09:43:43', '2023-01-30 09:43:43', 1, 1, 3),
(13, 'integracion con webhooks prestashop', '2023-01-30 09:44:10', '2023-10-15 18:13:37', 1, 3, 3),
(14, 'reporte de compras mensual', '2023-01-30 12:36:40', '2023-01-30 12:36:40', 5, 1, 3),
(15, 'agregar filtros en listado de productos', '2023-01-30 12:52:52', '2023-11-02 22:20:11', 4, 3, 2),
(16, 'comisiones en medios de pago', '2023-02-01 19:41:58', '2023-02-01 19:41:58', 3, 1, 3),
(17, 'reporte de inventario critico', '2023-02-01 19:44:46', '2023-02-01 19:44:46', 5, 1, 3),
(18, 'reporte de inventario con montos y ganancia esperada', '2023-02-01 19:45:22', '2023-02-01 19:45:22', 5, 1, 3),
(19, 'falta seccion de compras', '2023-02-07 17:28:56', '2023-12-20 23:11:20', 6, 3, 3),
(20, 'falta seccion de ajustes de inventario', '2023-02-07 17:48:04', '2023-03-11 18:00:30', 4, 3, 3),
(21, 'falta historial de movimientos de articulos', '2023-02-07 17:49:07', '2023-02-12 22:17:42', 4, 3, 2),
(22, 'falta resumen de valor de inventario', '2023-02-09 16:28:14', '2023-02-09 16:28:14', 5, 1, 3),
(23, 'identificar si factura tiene o no costo para llamativo', '2023-02-09 16:56:00', '2023-02-09 16:56:00', 6, 1, 3),
(24, 'falta seccion de clientes', '2023-03-11 18:01:43', '2023-04-09 21:58:25', 3, 3, 3),
(25, 'agregar exprtacion a pdf de informes', '2023-03-13 22:26:42', '2023-03-13 22:26:42', 1, 1, 3),
(26, 'agregar valores personalizados en reporte mensual', '2023-03-17 13:31:10', '2023-03-17 13:31:10', 5, 1, 3),
(27, 'actualizar version de angular', '2023-03-25 22:48:04', '2023-11-02 22:19:31', 1, 3, 2),
(28, 'crear interfaces para cada solicitud o respuesta', '2023-03-25 23:09:10', '2023-03-25 23:09:10', 1, 1, 2),
(29, 'falta historial de compras de cliente', '2023-03-26 20:18:25', '2023-03-26 20:18:25', 1, 1, 2),
(30, 'falta seccion de proveedores', '2023-04-09 21:59:39', '2023-11-20 14:41:44', 1, 3, 3),
(31, 'falta secion de ventas', '2023-04-09 22:00:42', '2023-05-06 19:39:16', 3, 3, 3),
(32, 'falta sistema de notificaciones', '2023-04-20 15:02:14', '2023-04-20 15:02:14', 1, 1, 3),
(33, 'resumen mensual que contemple ventas, compras e inventario', '2023-04-20 16:56:21', '2023-04-20 16:56:21', 5, 1, 3),
(34, 'falta recepcion de mercaderia', '2023-05-06 19:11:02', '2023-11-20 14:42:47', 4, 3, 3),
(35, 'falta ver detalle de venta', '2023-05-06 19:41:22', '2023-05-15 20:57:56', 3, 3, 1),
(36, 'dejar activo el producto si ingresa stock', '2023-05-17 16:35:00', '2023-05-17 16:35:00', 4, 1, 1),
(37, 'al agregar un ajuste pantalla queda en gris', '2023-05-17 16:40:16', '2023-05-28 21:20:26', 4, 3, 1),
(38, 'cambiar agregar inventario aleatorio por Agregar ajuste', '2023-05-17 17:12:45', '2023-05-28 17:48:19', 4, 3, 1),
(39, 'ganancia en editar y crear articulo', '2023-05-17 21:15:26', '2023-05-17 21:15:26', 4, 1, 3),
(40, 'filtros como lista desplegable de cada opcion', '2023-05-17 21:18:12', '2023-05-17 21:18:12', 1, 1, 2),
(41, 'pasar backend a TS', '2023-05-18 11:09:56', '2023-10-15 18:12:15', 1, 3, 2),
(42, 'agregar ORM a backend', '2023-05-18 11:16:21', '2023-10-15 18:11:59', 1, 3, 2),
(43, 'datatables no ordena de forma correcta ', '2023-06-01 13:08:10', '2023-06-01 13:08:10', 1, 1, 1),
(44, 'pasar backend a nestJs, para no usar firebase functions', '2023-06-29 20:37:19', '2023-10-15 18:11:38', 7, 3, 2),
(45, 'agregar medio de pago Mercadopago ', '2023-07-05 19:29:54', '2023-11-20 14:18:31', 3, 3, 2),
(46, 'se debe poder modificar el valor de un producto ', '2023-07-05 19:30:24', '2023-10-15 18:11:15', 3, 3, 2),
(47, 'falta agregar gastos o comisiones a la venta ', '2023-07-05 19:30:50', '2023-07-05 19:30:50', 3, 1, 3),
(48, 'venta no permite cambiar precio de producto', '2023-09-06 16:43:42', '2023-11-08 14:48:59', 3, 3, 1),
(49, 'agregar canal de venta a detalle venta', '2023-09-06 16:44:06', '2023-09-06 16:44:06', 3, 1, 3),
(50, 'agregar costos adicionales a venta', '2023-09-06 16:44:57', '2023-09-06 16:44:57', 3, 1, 3),
(51, 'inventario aleatorio de 1 producto a la vez', '2023-09-06 16:48:24', '2023-09-06 16:48:24', 4, 1, 3),
(52, 'mejorar dashboard', '2023-09-28 22:58:26', '2023-09-28 22:58:26', 1, 1, 2),
(53, 'agregar publicaciones de productos para sincronizar stock', '2023-10-08 21:12:37', '2023-10-08 21:12:37', 4, 1, 3),
(54, 'precio venta total mal calculado en pantalla edicion de producto', '2023-10-12 22:07:23', '2023-10-15 18:10:45', 4, 3, 1),
(55, 'issues no se ordenan por fecha', '2023-10-12 22:08:44', '2023-10-14 17:06:43', 2, 3, 1),
(56, 'generar resumen de recepcion para ser impreso en el reverso de la factura', '2023-11-07 11:13:22', '2023-11-07 11:13:22', 4, 1, 3),
(57, 'generar resumen de compra para ser impreso en el reverso de la factura', '2023-11-07 11:13:55', '2023-11-07 11:13:55', 6, 1, 3),
(58, 'agregar focus a select de productos en ajuste de inventario', '2023-11-08 14:48:26', '2023-11-08 14:48:26', 4, 1, 2),
(59, 'agregar codigo de barra automatico, si producto no lo tiene', '2023-11-08 14:55:34', '2023-11-08 14:55:34', 4, 1, 3),
(60, 'agregar spninner a tarjetas dashboard', '2023-11-09 17:08:54', '2023-11-09 17:08:54', 1, 1, 2),
(61, 'agregar filtros a listado de ventas', '2023-11-18 21:50:59', '2023-11-18 21:50:59', 3, 1, 2),
(63, 'Falta sistema de anulacion de ventas', '2023-11-25 13:25:21', '2023-11-25 13:25:21', 3, 1, 3),
(64, 'agregar costos adicionales a recepcion', '2024-01-27 12:14:07', '2024-01-27 12:14:07', 4, 1, 2),
(65, 'agregar el siguiente id como codigo de barras al crear producto', '2024-01-29 19:22:15', '2024-01-29 19:22:15', 4, 1, 2),
(66, 'reportes y compras no contemplan montos exentos en facturas', '2024-03-03 18:08:28', '2024-03-03 18:08:28', 5, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `issue_sections`
--

CREATE TABLE `issue_sections` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `issue_sections`
--

INSERT INTO `issue_sections` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'General', '2023-01-24 19:22:42', '2023-01-24 19:22:42'),
(2, 'Configuracion', '2023-01-24 19:22:42', '2023-01-24 19:22:42'),
(3, 'Ventas', '2023-01-24 19:23:08', '2023-01-24 19:23:08'),
(4, 'Inventario', '2023-01-24 19:23:08', '2023-01-24 19:23:08'),
(5, 'Reportes', '2023-01-24 19:23:24', '2023-01-24 19:23:24'),
(6, 'Caja', '2023-01-24 19:23:24', '2023-01-24 19:23:24'),
(7, 'BackEnd', '2023-05-19 17:20:45', '2023-05-19 17:20:45'),
(8, 'Tienda en linea', '2023-05-19 17:20:45', '2023-05-19 17:20:45');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `issue_statuses`
--

CREATE TABLE `issue_statuses` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `issue_statuses`
--

INSERT INTO `issue_statuses` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Pendiente', '2023-01-24 19:24:01', '2023-01-24 19:24:01'),
(2, 'En desarrollo', '2023-01-24 19:24:01', '2023-01-24 19:24:01'),
(3, 'Terminado', '2023-02-01 23:30:16', '2023-02-01 23:30:16'),
(4, 'Detenido', '2023-02-01 23:30:16', '2023-02-01 23:30:16');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `issue_types`
--

CREATE TABLE `issue_types` (
  `id` int(11) NOT NULL,
  `issue_type` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `issue_types`
--

INSERT INTO `issue_types` (`id`, `issue_type`, `createdAt`, `updatedAt`) VALUES
(1, 'Error', '2023-01-24 19:21:02', '2023-01-24 19:21:02'),
(2, 'Mejora', '2023-01-24 19:21:02', '2023-01-24 19:21:02'),
(3, 'Funcionalidad futura', '2023-01-24 19:21:52', '2023-01-24 19:21:52');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medios_de_pago`
--

CREATE TABLE `medios_de_pago` (
  `id` int(11) NOT NULL,
  `medio_de_pago` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `medios_de_pago`
--

INSERT INTO `medios_de_pago` (`id`, `medio_de_pago`) VALUES
(1, 'Efectivo'),
(2, 'Debito'),
(3, 'Credito'),
(4, 'Transferencia'),
(5, 'MercadoPago');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recepciones`
--

CREATE TABLE `recepciones` (
  `id` int(11) NOT NULL,
  `proveedor` varchar(11) NOT NULL,
  `costo_neto` int(11) NOT NULL,
  `costo_imp` int(11) NOT NULL,
  `unidades` int(11) NOT NULL,
  `tipo_documento` int(11) NOT NULL,
  `documento` int(11) NOT NULL,
  `fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `recepciones`
--

INSERT INTO `recepciones` (`id`, `proveedor`, `costo_neto`, `costo_imp`, `unidades`, `tipo_documento`, `documento`, `fecha`) VALUES
(1, '76824625-4', 410023, 96178, 39, 33, 446, '2024-01-30 17:41:24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `regiones`
--

CREATE TABLE `regiones` (
  `id` int(11) NOT NULL,
  `region` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `regiones`
--

INSERT INTO `regiones` (`id`, `region`) VALUES
(1, 'Arica y Parinacota'),
(2, 'Tarapaca'),
(3, 'Antofagasta'),
(4, 'Atacama'),
(5, 'Coquimbo'),
(6, 'Valparaiso'),
(7, 'Metropolitana de Santiago'),
(8, 'Libertador General Bernardo O\'Higgins'),
(9, 'Maule'),
(10, 'Ñuble'),
(11, 'Biobio'),
(12, 'La Araucania'),
(13, 'Los Rios'),
(14, 'Los Lagos'),
(15, 'Aysen del General Carlos Ibañez del Campo'),
(16, 'Magallanes y de la Antartica Chilena');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_compra`
--

CREATE TABLE `tipo_compra` (
  `id` int(11) NOT NULL,
  `tipo_compra` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `tipo_compra`
--

INSERT INTO `tipo_compra` (`id`, `tipo_compra`) VALUES
(1, 'Recibido'),
(2, 'Servicio'),
(3, 'Productos'),
(4, 'Gastos'),
(5, 'Sin costo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_dato_resumen`
--

CREATE TABLE `tipo_dato_resumen` (
  `id` int(11) NOT NULL,
  `dato` varchar(150) NOT NULL,
  `orden` int(11) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `isNumber` tinyint(1) NOT NULL DEFAULT 0,
  `isMoney` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `tipo_dato_resumen`
--

INSERT INTO `tipo_dato_resumen` (`id`, `dato`, `orden`, `activo`, `isNumber`, `isMoney`, `createdAt`, `updatedAt`) VALUES
(18, 'Saldo Chequera', 1, 1, 1, 1, '2024-02-26 01:22:24', '2024-02-26 01:22:24'),
(19, 'Saldo MercadoPago', 2, 1, 1, 1, '2024-02-26 01:22:47', '2024-02-26 01:22:47'),
(20, 'Impuestos Pagados', 3, 1, 1, 1, '2024-02-26 01:23:13', '2024-02-26 01:23:13'),
(21, 'Unidades en inventario', 4, 1, 1, 0, '2024-02-26 01:24:40', '2024-02-26 01:24:40'),
(22, 'Costo total inventario', 5, 1, 1, 1, '2024-02-26 01:25:17', '2024-02-26 01:25:17'),
(23, 'Venta total inventario', 6, 1, 1, 1, '2024-02-26 01:26:15', '2024-02-26 01:26:15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_documento`
--

CREATE TABLE `tipo_documento` (
  `id` int(11) NOT NULL,
  `tipo` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `tipo_documento`
--

INSERT INTO `tipo_documento` (`id`, `tipo`) VALUES
(33, 'Factura electronica'),
(34, 'Factura exenta'),
(39, 'Boleta electronica'),
(41, 'Boleta exenta electronica'),
(52, 'Guia de despacho electronica'),
(61, 'Nota de credito electronica');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_movimientos`
--

CREATE TABLE `tipo_movimientos` (
  `id` int(11) NOT NULL,
  `tipo_movimiento` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `tipo_movimientos`
--

INSERT INTO `tipo_movimientos` (`id`, `tipo_movimiento`, `created_at`, `updated_at`) VALUES
(1, 'Recepcion', '2022-10-09 01:17:29', '2022-10-09 01:17:29'),
(2, 'Venta', '2022-10-09 01:17:29', '2022-10-09 01:17:29'),
(3, 'Robo', '2022-10-09 01:17:29', '2022-10-09 01:17:29'),
(4, 'Ajuste de inventario', '2022-10-09 01:17:29', '2022-10-09 01:17:29'),
(5, 'Merma', '2022-10-09 01:17:29', '2022-10-09 01:17:29'),
(6, 'Devolucion', '2022-10-09 01:17:29', '2022-10-09 01:17:29'),
(7, 'Regalo', '2022-10-09 01:17:29', '2022-10-09 01:17:29');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `user` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `user`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Danilo', 'danilo', 'danilo.cid.v@gmail.com', '$2a$10$E5LyhqTJRGJ5XBPQS4jKhOYfw7.SjUgai85NyMiHiIT71QOhM43IC', '2023-01-24 19:12:59', '2023-01-24 19:12:59');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id` int(11) NOT NULL,
  `monto_neto` int(11) NOT NULL,
  `monto_imp` int(11) NOT NULL,
  `costo_neto` int(11) NOT NULL,
  `costo_imp` int(11) NOT NULL,
  `tipo_documento` int(11) NOT NULL,
  `documento` int(11) NOT NULL,
  `cliente` varchar(11) NOT NULL,
  `medio_pago` int(11) NOT NULL,
  `fecha` datetime NOT NULL DEFAULT current_timestamp(),
  `usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`id`, `monto_neto`, `monto_imp`, `costo_neto`, `costo_imp`, `tipo_documento`, `documento`, `cliente`, `medio_pago`, `fecha`, `usuario`) VALUES
(1, 17647, 3353, 10084, 1916, 39, 126, '11111111-1', 2, '2023-07-05 19:27:56', 1),
(2, 17639, 3351, 10084, 1916, 39, 127, '11111111-1', 2, '2023-08-03 11:40:09', 1),
(3, 19319, 3671, 10924, 2076, 39, 128, '11111111-1', 2, '2023-08-26 10:39:48', 1),
(4, 17639, 3351, 10084, 1916, 39, 129, '11111111-1', 2, '2023-08-31 23:46:58', 1),
(5, 17639, 3351, 10084, 1916, 39, 130, '11111111-1', 4, '2023-09-04 10:41:11', 1),
(6, 21000, 3990, 10084, 1916, 39, 131, '11111111-1', 4, '2023-09-06 16:41:35', 1),
(7, 21000, 3990, 10084, 1916, 39, 132, '11111111-1', 4, '2023-09-13 17:12:46', 1),
(8, 20242, 4748, 10084, 1916, 39, 133, '11111111-1', 4, '2023-09-28 11:40:49', 1),
(9, 20242, 4748, 10924, 2076, 39, 134, '11111111-1', 4, '2023-09-29 11:41:47', 1),
(10, 18622, 4368, 10924, 2076, 39, 135, '11111111-1', 4, '2023-09-29 11:42:21', 1),
(11, 8100, 1900, 2773, 527, 39, 136, '11111111-1', 1, '2023-10-02 14:11:53', 1),
(12, 18218, 4273, 10924, 2076, 33, 12, '11111111-1', 4, '2023-10-02 15:37:46', 1),
(14, 18218, 4273, 10084, 1916, 39, 137, '11111111-1', 4, '2023-10-11 15:38:18', 1),
(15, 37002, 8679, 20168, 3832, 39, 138, '11111111-1', 4, '2023-10-13 11:41:12', 1),
(16, 18218, 4273, 10084, 1916, 39, 139, '11111111-1', 4, '2023-10-14 13:11:31', 1),
(17, 16760, 3931, 10924, 2076, 39, 140, '11111111-1', 4, '2023-10-17 21:54:21', 1),
(18, 18218, 4273, 10084, 1916, 39, 142, '11111111-1', 5, '2023-10-22 22:14:52', 1),
(19, 18218, 4273, 10084, 1916, 39, 141, '11111111-1', 5, '2023-10-22 22:16:51', 1),
(20, 18218, 4273, 10084, 1916, 39, 143, '11111111-1', 5, '2023-10-24 11:55:57', 1),
(21, 18218, 4273, 10084, 1916, 39, 144, '11111111-1', 5, '2023-10-25 16:22:33', 1),
(22, 18218, 4273, 10084, 1916, 39, 145, '11111111-1', 5, '2023-10-29 22:18:03', 1),
(23, 16760, 3931, 10084, 1916, 39, 146, '11111111-1', 5, '2023-10-30 20:40:20', 1),
(24, 20242, 4748, 11681, 2219, 39, 147, '11111111-1', 5, '2023-11-10 16:02:29', 1),
(25, 40484, 9496, 20084, 3816, 39, 148, '11111111-1', 5, '2023-11-10 16:03:55', 1),
(26, 20242, 4748, 10084, 1916, 39, 149, '11111111-1', 5, '2023-11-10 22:19:30', 1),
(27, 20242, 4748, 8319, 1581, 39, 150, '11111111-1', 5, '2023-11-14 17:43:40', 1),
(28, 20242, 4748, 10840, 2060, 39, 151, '11111111-1', 5, '2023-11-14 17:44:20', 1),
(29, 20242, 4748, 10840, 2060, 39, 152, '11111111-1', 5, '2023-11-20 10:41:21', 1),
(30, 20242, 4748, 9160, 1740, 39, 153, '11111111-1', 5, '2023-11-23 11:24:12', 1),
(32, 18218, 4273, 10840, 2060, 39, 154, '11111111-1', 5, '2023-11-27 14:12:39', 1),
(33, 18218, 4273, 9160, 1740, 39, 155, '11111111-1', 5, '2023-11-27 14:22:43', 1),
(34, 18218, 4273, 10840, 2060, 39, 156, '11111111-1', 5, '2023-11-27 14:37:22', 1),
(35, 18218, 4273, 9160, 1740, 39, 157, '11111111-1', 5, '2023-11-28 17:33:55', 1),
(36, 18218, 4273, 10840, 2060, 39, 158, '11111111-1', 5, '2023-11-28 17:41:50', 1),
(37, 18218, 4273, 10840, 2060, 39, 159, '11111111-1', 5, '2023-11-30 17:21:14', 1),
(38, 18218, 4273, 12521, 2379, 39, 160, '11111111-1', 5, '2023-12-02 09:41:11', 1),
(39, 20242, 4748, 10840, 2060, 39, 161, '11111111-1', 5, '2023-12-05 17:13:21', 1),
(40, 20242, 4748, 10840, 2060, 39, 162, '11111111-1', 5, '2023-12-14 17:04:34', 1),
(41, 20242, 4748, 11681, 2219, 39, 163, '11111111-1', 5, '2024-01-09 12:23:59', 1),
(42, 20242, 4748, 10840, 2060, 39, 164, '11111111-1', 5, '2024-01-12 13:02:44', 1),
(43, 20242, 4748, 10084, 1916, 39, 165, '11111111-1', 5, '2024-01-27 12:10:59', 1),
(44, 20242, 4748, 10084, 1916, 39, 166, '11111111-1', 5, '2024-01-27 12:26:24', 1),
(45, 20242, 4748, 10084, 1916, 39, 167, '11111111-1', 5, '2024-01-30 11:19:32', 1),
(46, 20242, 4748, 10840, 2060, 39, 168, '11111111-1', 5, '2024-01-30 12:02:58', 1),
(47, 17002, 3988, 10449, 2451, 39, 169, '11111111-1', 4, '2024-02-23 21:14:59', 1),
(48, 17002, 3988, 11259, 2641, 39, 170, '11111111-1', 2, '2024-02-29 13:21:01', 1),
(49, 17002, 3988, 10449, 2451, 39, 171, '11111111-1', 4, '2024-03-04 21:58:04', 1),
(50, 17002, 3988, 10449, 2451, 39, 172, '11111111-1', 4, '2024-03-04 21:59:27', 1),
(51, 20242, 4748, 10840, 2060, 39, 173, '11111111-1', 5, '2024-03-06 17:27:57', 1),
(52, 17002, 3988, 10449, 2451, 39, 174, '11111111-1', 4, '2024-03-06 21:24:17', 1),
(53, 20242, 4748, 11681, 2219, 39, 176, '11111111-1', 5, '2024-03-07 14:45:42', 1),
(54, 17002, 3988, 9160, 1740, 39, 175, '11111111-1', 1, '2024-03-07 21:31:43', 1),
(55, 20242, 4748, 10840, 2060, 39, 177, '11111111-1', 5, '2024-03-07 21:32:26', 1),
(56, 18622, 4368, 10084, 1916, 39, 178, '11111111-1', 5, '2024-03-09 12:47:09', 1),
(57, 18622, 4368, 10449, 2451, 39, 180, '11111111-1', 2, '2024-03-09 17:06:44', 1),
(58, 19432, 4558, 11259, 2641, 39, 179, '11111111-1', 1, '2024-03-10 14:26:35', 1),
(59, 18622, 4368, 10449, 2451, 39, 181, '11111111-1', 1, '2024-03-10 14:27:23', 1),
(60, 17820, 4180, 11259, 2641, 39, 182, '11111111-1', 4, '2024-03-10 14:28:30', 1),
(61, 20242, 4748, 10084, 1916, 39, 183, '11111111-1', 5, '2024-03-11 15:36:00', 1),
(62, 20242, 4748, 9160, 1740, 39, 184, '11111111-1', 5, '2024-03-11 15:42:00', 1),
(63, 20242, 4748, 10449, 2451, 39, 185, '11111111-1', 5, '2024-03-11 16:02:16', 1),
(64, 40484, 9496, 20449, 4351, 39, 186, '11111111-1', 5, '2024-03-11 17:10:58', 1),
(65, 4852, 1138, 2101, 399, 39, 187, '11111111-1', 1, '2024-03-11 19:46:36', 1),
(66, 20242, 4748, 10084, 1916, 39, 188, '11111111-1', 5, '2024-03-12 17:21:12', 1),
(67, 20242, 4748, 10449, 2451, 39, 189, '11111111-1', 5, '2024-03-12 17:23:34', 1),
(68, 20242, 4748, 10449, 2451, 39, 190, '11111111-1', 5, '2024-03-14 17:09:02', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ajustes_de_inventarios`
--
ALTER TABLE `ajustes_de_inventarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ajustes_de_inventarios_tipo_movimiento_id_foreign` (`tipo_movimiento_id`),
  ADD KEY `ajustes_de_inventarios_user_id_foreign` (`user_id`);

--
-- Indices de la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `articulos_cod_interno_unique` (`cod_interno`),
  ADD UNIQUE KEY `articulos_cod_barras_unique` (`cod_barras`);

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `compras_ibfk_1` (`proveedor`),
  ADD KEY `compras_ibfk_2` (`tipo_documento`),
  ADD KEY `compras_ibfk_3` (`tipo_compra`);

--
-- Indices de la tabla `comunas`
--
ALTER TABLE `comunas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comunas_ibfk_1` (`region_id`);

--
-- Indices de la tabla `datos_resumen`
--
ALTER TABLE `datos_resumen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `datos_resumen_fk` (`idDato`);

--
-- Indices de la tabla `detalle_ajustes_de_inventarios`
--
ALTER TABLE `detalle_ajustes_de_inventarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `detalle_ajustes_de_inventarios_ajuste_de_inventario_id_foreign` (`ajuste_de_inventario_id`),
  ADD KEY `detalle_ajustes_de_inventarios_articulo_id_foreign` (`articulo_id`);

--
-- Indices de la tabla `detalle_movimientos_articulos`
--
ALTER TABLE `detalle_movimientos_articulos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `detalle_movimientos_articulos_movimiento_id_foreign` (`movimiento_id`),
  ADD KEY `detalle_movimientos_articulos_producto_id_foreign` (`producto_id`),
  ADD KEY `detalle_movimientos_articulos_usuario_id_foreign` (`usuario_id`);

--
-- Indices de la tabla `detalle_recepciones`
--
ALTER TABLE `detalle_recepciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `detalle_recepciones_ibfk_1` (`id_recepcion`),
  ADD KEY `detalle_recepciones_ibfk_2` (`id_producto`) USING BTREE;

--
-- Indices de la tabla `detalle_ventas`
--
ALTER TABLE `detalle_ventas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `detalle_ventas_ibfk_1` (`id_venta`),
  ADD KEY `detalle_ventas_ibfk_2` (`articulo`);

--
-- Indices de la tabla `entidades`
--
ALTER TABLE `entidades`
  ADD PRIMARY KEY (`rut`),
  ADD KEY `entidades_ibfk_1` (`id_comuna`),
  ADD KEY `entidades_ibfk_2` (`id_region`);

--
-- Indices de la tabla `issues`
--
ALTER TABLE `issues`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `issue` (`issue`),
  ADD KEY `id_section` (`id_section`),
  ADD KEY `id_status` (`id_status`),
  ADD KEY `id_type` (`id_type`);

--
-- Indices de la tabla `issue_sections`
--
ALTER TABLE `issue_sections`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `issue_statuses`
--
ALTER TABLE `issue_statuses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `issue_types`
--
ALTER TABLE `issue_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `issue_type` (`issue_type`);

--
-- Indices de la tabla `medios_de_pago`
--
ALTER TABLE `medios_de_pago`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `recepciones`
--
ALTER TABLE `recepciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `recepciones_ibfk_1` (`proveedor`),
  ADD KEY `recepciones_ibfk_2` (`tipo_documento`);

--
-- Indices de la tabla `regiones`
--
ALTER TABLE `regiones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_compra`
--
ALTER TABLE `tipo_compra`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_dato_resumen`
--
ALTER TABLE `tipo_dato_resumen`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `dato` (`dato`);

--
-- Indices de la tabla `tipo_documento`
--
ALTER TABLE `tipo_documento`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_movimientos`
--
ALTER TABLE `tipo_movimientos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_51b8b26ac168fbe7d6f5653e6c` (`name`),
  ADD UNIQUE KEY `IDX_a894a560d274a270f087c72ba0` (`user`),
  ADD UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `cliente` (`cliente`),
  ADD KEY `medio_pago` (`medio_pago`),
  ADD KEY `tipo_documento` (`tipo_documento`),
  ADD KEY `usuario` (`usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ajustes_de_inventarios`
--
ALTER TABLE `ajustes_de_inventarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `articulos`
--
ALTER TABLE `articulos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `datos_resumen`
--
ALTER TABLE `datos_resumen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `detalle_ajustes_de_inventarios`
--
ALTER TABLE `detalle_ajustes_de_inventarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- AUTO_INCREMENT de la tabla `detalle_movimientos_articulos`
--
ALTER TABLE `detalle_movimientos_articulos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=198;

--
-- AUTO_INCREMENT de la tabla `detalle_recepciones`
--
ALTER TABLE `detalle_recepciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `detalle_ventas`
--
ALTER TABLE `detalle_ventas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT de la tabla `issues`
--
ALTER TABLE `issues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT de la tabla `issue_sections`
--
ALTER TABLE `issue_sections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `issue_statuses`
--
ALTER TABLE `issue_statuses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `issue_types`
--
ALTER TABLE `issue_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `medios_de_pago`
--
ALTER TABLE `medios_de_pago`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `recepciones`
--
ALTER TABLE `recepciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tipo_compra`
--
ALTER TABLE `tipo_compra`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `tipo_dato_resumen`
--
ALTER TABLE `tipo_dato_resumen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `tipo_movimientos`
--
ALTER TABLE `tipo_movimientos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ajustes_de_inventarios`
--
ALTER TABLE `ajustes_de_inventarios`
  ADD CONSTRAINT `ajustes_de_inventarios_ibfk_1` FOREIGN KEY (`tipo_movimiento_id`) REFERENCES `tipo_movimientos` (`id`),
  ADD CONSTRAINT `ajustes_de_inventarios_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `compras`
--
ALTER TABLE `compras`
  ADD CONSTRAINT `compras_ibfk_1` FOREIGN KEY (`proveedor`) REFERENCES `entidades` (`rut`),
  ADD CONSTRAINT `compras_ibfk_2` FOREIGN KEY (`tipo_documento`) REFERENCES `tipo_documento` (`id`),
  ADD CONSTRAINT `compras_ibfk_3` FOREIGN KEY (`tipo_compra`) REFERENCES `tipo_compra` (`id`);

--
-- Filtros para la tabla `comunas`
--
ALTER TABLE `comunas`
  ADD CONSTRAINT `comunas_ibfk_1` FOREIGN KEY (`region_id`) REFERENCES `regiones` (`id`);

--
-- Filtros para la tabla `datos_resumen`
--
ALTER TABLE `datos_resumen`
  ADD CONSTRAINT `datos_resumen_fk` FOREIGN KEY (`idDato`) REFERENCES `tipo_dato_resumen` (`id`);

--
-- Filtros para la tabla `detalle_ajustes_de_inventarios`
--
ALTER TABLE `detalle_ajustes_de_inventarios`
  ADD CONSTRAINT `detalle_ajustes_de_inventarios_ibfk_2` FOREIGN KEY (`articulo_id`) REFERENCES `articulos` (`id`);

--
-- Filtros para la tabla `detalle_movimientos_articulos`
--
ALTER TABLE `detalle_movimientos_articulos`
  ADD CONSTRAINT `detalle_movimientos_articulos_ibfk_1` FOREIGN KEY (`movimiento_id`) REFERENCES `tipo_movimientos` (`id`),
  ADD CONSTRAINT `detalle_movimientos_articulos_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `articulos` (`id`),
  ADD CONSTRAINT `detalle_movimientos_articulos_ibfk_3` FOREIGN KEY (`usuario_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `detalle_recepciones`
--
ALTER TABLE `detalle_recepciones`
  ADD CONSTRAINT `detalle_recepciones_ibfk_1` FOREIGN KEY (`id_recepcion`) REFERENCES `recepciones` (`id`),
  ADD CONSTRAINT `detalle_recepciones_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `articulos` (`id`);

--
-- Filtros para la tabla `detalle_ventas`
--
ALTER TABLE `detalle_ventas`
  ADD CONSTRAINT `detalle_ventas_ibfk_1` FOREIGN KEY (`id_venta`) REFERENCES `ventas` (`id`),
  ADD CONSTRAINT `detalle_ventas_ibfk_2` FOREIGN KEY (`articulo`) REFERENCES `articulos` (`id`);

--
-- Filtros para la tabla `entidades`
--
ALTER TABLE `entidades`
  ADD CONSTRAINT `entidades_ibfk_1` FOREIGN KEY (`id_comuna`) REFERENCES `comunas` (`id`),
  ADD CONSTRAINT `entidades_ibfk_2` FOREIGN KEY (`id_region`) REFERENCES `regiones` (`id`);

--
-- Filtros para la tabla `issues`
--
ALTER TABLE `issues`
  ADD CONSTRAINT `issues_ibfk_2` FOREIGN KEY (`id_section`) REFERENCES `issue_sections` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `issues_ibfk_3` FOREIGN KEY (`id_status`) REFERENCES `issue_statuses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `issues_ibfk_4` FOREIGN KEY (`id_type`) REFERENCES `issue_types` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `recepciones`
--
ALTER TABLE `recepciones`
  ADD CONSTRAINT `recepciones_ibfk_1` FOREIGN KEY (`proveedor`) REFERENCES `entidades` (`rut`),
  ADD CONSTRAINT `recepciones_ibfk_2` FOREIGN KEY (`tipo_documento`) REFERENCES `tipo_documento` (`id`);

--
-- Filtros para la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD CONSTRAINT `ventas_ibfk_1` FOREIGN KEY (`cliente`) REFERENCES `entidades` (`rut`),
  ADD CONSTRAINT `ventas_ibfk_2` FOREIGN KEY (`medio_pago`) REFERENCES `medios_de_pago` (`id`),
  ADD CONSTRAINT `ventas_ibfk_3` FOREIGN KEY (`tipo_documento`) REFERENCES `tipo_documento` (`id`),
  ADD CONSTRAINT `ventas_ibfk_4` FOREIGN KEY (`usuario`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;