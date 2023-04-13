-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 13-04-2023 a las 02:51:57
-- Versión del servidor: 10.4.27-MariaDB
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
  `id` bigint(20) UNSIGNED NOT NULL,
  `costo_neto` int(11) NOT NULL,
  `costo_imp` int(11) NOT NULL,
  `entradas` int(11) NOT NULL,
  `salidas` int(11) NOT NULL,
  `tipo_movimiento_id` bigint(20) UNSIGNED NOT NULL,
  `observaciones` varchar(191) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
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
  `updated_at` timestamp NULL DEFAULT NULL,
  `last_cont` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`id`, `cod_interno`, `cod_barras`, `descripcion`, `costo_neto`, `costo_imp`, `venta_neto`, `venta_imp`, `stock`, `stock_critico`, `activo`, `created_at`, `updated_at`, `last_cont`) VALUES
(1, 'hdmi3m', '03206', 'cable hdmi 3m', 1672, 318, 2513, 477, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16', '2023-02-08 02:18:59'),
(2, 'p-340', '6950854602377', 'audifonos manos libres con cable', 2101, 399, 5034, 956, 0, 6, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16', '2023-02-11 02:18:59'),
(3, 'hdmi5m', '4595654570625', 'cable hdmi 5m plano', 1672, 318, 4193, 797, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16', '2023-02-11 02:18:59'),
(4, 'bt-350', 'bt-350', 'receptor de audio bluetooth', 840, 160, 2521, 479, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16', '2023-02-11 02:18:59'),
(5, 'LG-40495', '6957438072083', 'cuaderno cat', 1261, 239, 2513, 477, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16', '2023-02-11 02:18:59'),
(6, 'LG-40516', '6957438072090', 'cuaderno cat grande', 1681, 319, 3353, 637, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16', '2023-02-11 02:18:59'),
(7, 'ec-cl7-blk', '6923450656372', 'set de 7 cuchillos negros', 4874, 926, 9235, 1755, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16', '2023-02-11 02:18:59'),
(8, '82143', '2020123821434', 'dispensador de papel para cocina', 3361, 639, 7555, 1435, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16', '2023-02-11 02:18:59'),
(9, '1618110', '1618110', 'tira led 5 metros  RGB', 2689, 511, 5874, 1116, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16', '2023-02-11 02:18:59'),
(10, 'RS-434', 'RS-434', 'Olla calentadora cera ', 3782, 718, 8403, 1597, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16', '2023-02-11 02:18:59'),
(11, 'JS-747', '8687807885157', 'Dispensador 4 en 1', 5034, 956, 8395, 1595, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16', '2023-02-11 02:18:59'),
(12, '8018', '8018', 'Organizador microonda', 3361, 639, 6723, 1277, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16', '2023-02-11 02:18:59'),
(13, 'BASURERO', '6977009124003', 'Basurero magico ', 840, 160, 1681, 319, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(14, 'NL-2423', '6907662694230', 'Pie de arbol', 700, 133, 1681, 319, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16', '2023-02-11 02:18:59'),
(15, 'limpiadorfacial', '2020123402190', 'limpiador facial USB', 1261, 239, 2513, 477, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16', '2023-02-11 02:18:59'),
(16, 'JD-2178-T', '7858816081828', 'luz solar con control remoto, simula camara', 5042, 958, 10084, 1916, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16', '2023-02-11 02:18:59'),
(17, 'soportebicicleta', 'soportebicicleta', 'soporte bicicleta', 1672, 318, 4193, 797, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16', '2023-02-11 02:18:59'),
(18, 'camelia-blanco-m', 'camelia-blanco-m', 'delantal camelia blanco M', 10084, 1916, 20990, 3988, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(19, 'camelia-blanco-s', 'camelia-blanco-s', 'delantal camelia blanco S', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(20, 'yris-blanco-xl', 'yris-blanco-xl', 'delantal yris blanco XL', 10924, 2076, 19319, 3671, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(21, 'yris-blanco-l', 'yris-blanco-l', 'delantal yris blanco L', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:56:26', '2023-02-11 02:18:59'),
(22, 'yris-gris-s', 'yris-gris-s', 'delantal Yris gris S', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(23, 'yris-gris-m', 'yris-gris-m', 'delantal Yris gris M', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 03:07:34', '2023-02-11 02:18:59'),
(24, 'camelia-gris-l', 'camelia-gris-l', 'delantal camelia gris L', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:56:26', '2023-02-11 02:18:59'),
(25, 'camelia-gris-xl', 'camelia-gris-xl', 'delantal camelia gris XL', 10924, 2076, 19319, 3671, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(26, 'camelia-gris-xxl', 'camelia-gris-xxl', 'delantal camelia gris XXL', 10924, 2076, 19319, 3671, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(27, 'frida-azul-electrico-m', '152DFEEM', 'delantal Frida azul electrico M', 10084, 1916, 17563, 3337, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 03:07:34', '2023-02-11 02:18:59'),
(28, 'jardin-azul-acero-l', '162DJACACL', 'delantal Jardin azul acero L', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(29, 'love-azul-acero-l', '117ACL', 'delantal Love azul acero L', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:56:26', '2023-02-11 02:18:59'),
(30, 'rumy-azul-acero-m', '1299ACM', 'delantal Rumy azul acero M', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 03:07:34', '2023-02-11 02:18:59'),
(31, 'jardin-burdeo-xl', 'jardin-burdeo-xl', 'delantal Jardin burdeo XL', 10924, 2076, 19319, 3671, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(32, 'llamita-burdeo-l', '79BUL', 'delantal Llamita burdeo L', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(33, 'natura-burdeo-s', '52BUS', 'delantal Natura burdeo S', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(34, 'love-burdeo-m', '110BUM', 'delantal Love burdeo M', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 03:07:34', '2023-02-11 02:18:59'),
(35, 'natura-verde-s', '150DNAVS', 'delantal Natura verde S', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(36, 'jardin-verde-s', '157DJVVS', 'delantal Jardin verde S', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(37, 'hadita-verde-xl', '127DHAVXL', 'delantal Hadita verde XL', 10924, 2076, 19319, 3671, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(38, 'alicia-verde-m', '165DAVVM', 'delantal Alicia verde m', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 03:07:34', '2023-02-11 02:18:59'),
(39, 'hadita-verde-m', '127DHAVM', 'delantal Hadita verde M', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 03:07:34', '2023-02-11 02:18:59'),
(40, 'llamita-verde-m', '136DLLAVM', 'delantal Llamita verde M', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 03:07:34', '2023-02-11 02:18:59'),
(41, 'hadita-verde-l', '127DHAVL', 'delantal Hadita verde L', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:56:26', '2023-02-11 02:18:59'),
(42, 'jardin-verde-m', '157DJVVM', 'delantal Jardin verde M', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 03:07:34', '2023-02-11 02:18:59'),
(43, 'love-verde-l', '120 DLVL', 'delantal Love verde L', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(44, 'jardin-verde-l', '157DJVVL', 'delantal Jardin verde L', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:56:26', '2023-02-11 02:18:59'),
(45, 'llamita-verde-xl', '136DLLAVXL', 'delantal Llamita verde XL', 10924, 2076, 19319, 3671, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(46, 'alicia-verde-l', '165DAVVL', 'delantal Alicia verde L', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:56:26', '2023-02-11 02:18:59'),
(47, 'hadita-azul-marino-s', '127DHAAS', 'delantal Hadita azul acero S', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(48, 'llamita-azul-marino-l', '136DLLAAL', 'delantal Llamita azul marino L', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(49, 'hadita-azul-marino-l', '127DHAAL', 'delantal Hadita azul marino L ', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:56:26', '2023-02-11 02:18:59'),
(50, 'jardin-manga-larga-azul-marino-l', '1097AML', 'delantal Jardin manga larga azul marino L', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:56:26', '2023-02-11 02:18:59'),
(51, 'natura-azul-marino-m', '35AMM', 'delantal Natura azul marino M', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 03:07:34', '2023-02-11 02:18:59'),
(52, 'fantasia-azul-marino-l', '280ATL', 'delantal Fantasia azul marino L', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:51:16', '2023-02-11 02:18:59'),
(53, 'pintorcito-azul-marino-l', '293AML', 'delantal Pintorcito azul marino L', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(54, 'rumy-azul-marino-xl', '236AMXL', 'delantal Rumy azul marino XL', 10924, 2076, 19319, 3671, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(55, 'love-azul-marino-s', '91AMS', 'delantal Love azul marino S', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(56, 'gatito-lunar-azul-marino-m', '123AMM', 'delantal Gatito Lunar azul marino M', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(57, 'farfy-azul-marino-s', '244AMS', 'delantal Farfy azul marino S', 10084, 1916, 17647, 3353, 0, 5, 1, '2022-10-09 02:05:51', '2022-10-09 02:05:51', '2023-02-11 02:18:59'),
(58, 'llamita-azul-acero-m', '136DLLAACM', 'delantal Llamita azul acero M', 10084, 1916, 17639, 3351, 0, 5, 1, '2022-10-09 03:05:37', '2022-10-09 03:07:34', '2023-02-11 02:18:59'),
(59, 'test', 'test', 'articulo de pruebas', 850, 162, 1500, 285, 0, 5, 1, '2023-01-05 05:02:41', '2023-01-05 05:02:41', '2023-02-11 02:18:59'),
(60, 'tests', 'tests', 'articulo de pruebas', 1500, 285, 1500, 285, 0, 5, 0, '2023-01-05 05:08:47', '2023-01-05 05:08:47', '2023-02-11 02:18:59'),
(61, 'tests2', 'tests2', 'articulo de pruebas', 1500, 285, 1500, 285, 0, 5, 0, '2023-02-01 23:26:37', '2023-02-01 23:26:37', '2023-02-11 02:18:59'),
(62, 'test3', 'test3', 'articulo de pruebas', 2000, 380, 2850, 542, 0, 5, 1, '2023-02-01 23:40:36', '2023-02-01 23:40:36', '2023-02-11 02:18:59');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `rut` varchar(11) NOT NULL,
  `nombre` varchar(120) NOT NULL,
  `giro` varchar(90) NOT NULL,
  `direccion` varchar(120) NOT NULL,
  `id_comuna` int(11) NOT NULL,
  `id_region` int(11) NOT NULL,
  `telefono` int(9) NOT NULL,
  `mail` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`rut`, `nombre`, `giro`, `direccion`, `id_comuna`, `id_region`, `telefono`, `mail`) VALUES
('11111111-1', 'cliente generico', 'N/A', 'N/A', 204, 10, 94679847, 'cidybadilla@gmail.com');

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
-- Estructura de tabla para la tabla `detalle_ajustes_de_inventarios`
--

CREATE TABLE `detalle_ajustes_de_inventarios` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ajuste_de_inventario_id` bigint(20) UNSIGNED NOT NULL,
  `articulo_id` bigint(20) UNSIGNED NOT NULL,
  `costo_neto` int(11) NOT NULL,
  `costo_imp` int(11) NOT NULL,
  `entradas` int(11) NOT NULL,
  `salidas` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_movimientos_articulos`
--

CREATE TABLE `detalle_movimientos_articulos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `movimiento_id` bigint(20) UNSIGNED NOT NULL,
  `id_movimiento` int(11) NOT NULL,
  `producto_id` bigint(20) UNSIGNED NOT NULL,
  `cantidad` int(11) NOT NULL,
  `usuario_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(1, 'agregar datos de resumen a widgets pagina principal', '2023-01-24 19:27:46', '2023-02-07 17:52:10', 1, 1, 2),
(2, 'Registrar medios de pago', '2023-01-24 19:28:27', '2023-01-24 19:28:27', 2, 1, 3),
(6, 'agregar generador de codigos de barra', '2023-01-25 18:06:54', '2023-01-27 16:51:22', 4, 1, 3),
(7, 'reporte de ventas mensuales', '2023-01-27 17:01:37', '2023-01-27 17:01:37', 5, 1, 3),
(8, 'falta estado resulto en issues', '2023-01-27 23:12:18', '2023-02-09 16:28:44', 2, 3, 1),
(9, 'filtro en listado de issues', '2023-01-30 09:41:35', '2023-01-30 09:41:35', 2, 1, 2),
(10, 'porcentaje de avance en estado de issue', '2023-01-30 09:42:30', '2023-01-30 09:42:30', 2, 1, 2),
(11, 'integracion simpleapi para datos de compras y ventas', '2023-01-30 09:43:12', '2023-01-30 09:43:12', 1, 1, 3),
(12, 'integracion con api mercadolibre', '2023-01-30 09:43:43', '2023-01-30 09:43:43', 1, 1, 3),
(13, 'integracion con webhooks prestashop', '2023-01-30 09:44:10', '2023-01-30 09:44:10', 1, 1, 3),
(14, 'reporte de compras mensual', '2023-01-30 12:36:40', '2023-01-30 12:36:40', 5, 1, 3),
(15, 'agregar filtros en listado de productos', '2023-01-30 12:52:52', '2023-01-30 12:52:52', 4, 1, 2),
(16, 'comisiones en medios de pago', '2023-02-01 19:41:58', '2023-02-01 19:41:58', 3, 1, 3),
(17, 'reporte de inventario critico', '2023-02-01 19:44:46', '2023-02-01 19:44:46', 5, 1, 3),
(18, 'reporte de inventario con montos y ganancia esperada', '2023-02-01 19:45:22', '2023-02-01 19:45:22', 5, 1, 3),
(19, 'falta seccion de compras', '2023-02-07 17:28:56', '2023-02-07 17:28:56', 6, 1, 3),
(20, 'falta seccion de ajustes de inventario', '2023-02-07 17:48:04', '2023-03-11 18:00:30', 4, 3, 3),
(21, 'falta historial de movimientos de articulos', '2023-02-07 17:49:07', '2023-02-12 22:17:42', 4, 3, 2),
(22, 'falta resumen de valor de inventario', '2023-02-09 16:28:14', '2023-02-09 16:28:14', 5, 1, 3),
(23, 'identificar si factura tiene o no costo para llamativo', '2023-02-09 16:56:00', '2023-02-09 16:56:00', 6, 1, 3),
(24, 'falta seccion de clientes', '2023-03-11 18:01:43', '2023-04-09 21:58:25', 3, 3, 3),
(25, 'agregar exprtacion a pdf de informes', '2023-03-13 22:26:42', '2023-03-13 22:26:42', 1, 1, 3),
(26, 'agregar valores personalizados en reporte mensual', '2023-03-17 13:31:10', '2023-03-17 13:31:10', 5, 1, 3),
(27, 'actualizar version de angular', '2023-03-25 22:48:04', '2023-03-25 22:48:04', 1, 1, 2),
(28, 'crear interfaces para cada solicitud o respuesta', '2023-03-25 23:09:10', '2023-03-25 23:09:10', 1, 1, 2),
(29, 'falta historial de compras de cliente', '2023-03-26 20:18:25', '2023-03-26 20:18:25', 1, 1, 2),
(30, 'falta seccion de proveedores', '2023-04-09 21:59:39', '2023-04-09 21:59:39', 1, 1, 3),
(31, 'falta secion de ventas', '2023-04-09 22:00:42', '2023-04-09 22:00:42', 3, 2, 3);

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
(6, 'Caja', '2023-01-24 19:23:24', '2023-01-24 19:23:24');

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
-- Estructura de tabla para la tabla `tipo_movimientos`
--

CREATE TABLE `tipo_movimientos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tipo_movimiento` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `user`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Danilo', 'danilo', 'danilo.cid.v@gmail.com', '$2a$10$E5LyhqTJRGJ5XBPQS4jKhOYfw7.SjUgai85NyMiHiIT71QOhM43IC', '2023-01-24 19:12:59', '2023-01-24 19:12:59');

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
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`rut`);

--
-- Indices de la tabla `comunas`
--
ALTER TABLE `comunas`
  ADD PRIMARY KEY (`id`);

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
-- Indices de la tabla `regiones`
--
ALTER TABLE `regiones`
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
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `user` (`user`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ajustes_de_inventarios`
--
ALTER TABLE `ajustes_de_inventarios`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `articulos`
--
ALTER TABLE `articulos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT de la tabla `detalle_ajustes_de_inventarios`
--
ALTER TABLE `detalle_ajustes_de_inventarios`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `detalle_movimientos_articulos`
--
ALTER TABLE `detalle_movimientos_articulos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `issues`
--
ALTER TABLE `issues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `issue_sections`
--
ALTER TABLE `issue_sections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
-- AUTO_INCREMENT de la tabla `tipo_movimientos`
--
ALTER TABLE `tipo_movimientos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `issues`
--
ALTER TABLE `issues`
  ADD CONSTRAINT `issues_ibfk_2` FOREIGN KEY (`id_section`) REFERENCES `issue_sections` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `issues_ibfk_3` FOREIGN KEY (`id_status`) REFERENCES `issue_statuses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `issues_ibfk_4` FOREIGN KEY (`id_type`) REFERENCES `issue_types` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
