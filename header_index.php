<!DOCTYPE html>
<html lang="ru-RU">

<?php

?>

<head>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>

    <meta name="viewport" content="width=device-width, height=device-height, user-scalable=no, initial-scale=1.0">

    <!-- IE -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>

    <!--[if IE] -->
    <!--<meta http-equiv="imagetoolbar" content="no"/>
    <meta http-equiv="MSThemeCompatible" content="no"/>
    <meta http-equiv="cleartype" content="on"/>-->
    <!-- [endif]-->

    <!-- iPhone -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-title" content="Wunderkammer"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>

    <!-- Android etc. -->
    <meta name="format-detection" content="telephone=no"/>
    <meta name="format-detection" content="address=no"/>
    <meta name="theme-color" content="#808080"/>

    <!-- Win8 -->
    <meta name="application-name" content="Wunderkammer"/>
    <meta name="msapplication-tooltip" content="Wunderkammer. Открой для себя кабинет чудес Петра Великого"/>
    <meta name="msapplication-TileColor" content="#000000">
    <meta name="msapplication-TileImage"
          content="images/icons/apple-touch-icon-144x144.png?ver=<?php echo filemtime(__DIR__ . '/images/icons/apple-touch-icon-144x144.png'); ?>">


    <!-- Icons -->
    <link rel="shortcut icon"
          href="images/icons/favicon.ico?ver=<?php echo filemtime(__DIR__ . '/images/icons/favicon.ico'); ?>"
          type="image/x-icon"/>

    <link rel="icon" sizes="16x16" type="image/png"
          href="images/icons/favicon-16x16.png?ver=<?php echo filemtime(__DIR__ . '/images/icons/favicon-16x16.png'); ?>">
    <link rel="icon" sizes="32x32" type="image/png"
          href="images/icons/favicon-32x32.png?ver=<?php echo filemtime(__DIR__ . '/images/icons/favicon-32x32.png'); ?>">
    <link rel="icon" sizes="64x64" type="image/png"
          href="images/icons/favicon-64x64.png?ver=<?php echo filemtime(__DIR__ . '/images/icons/favicon-64x64.png'); ?>">
    <link rel="icon" sizes="96x96" type="image/png"
          href="images/icons/favicon-96x96.png?ver=<?php echo filemtime(__DIR__ . '/images/icons/favicon-96x96.png'); ?>">
    <link rel="icon" sizes="192x192" type="image/png"
          href="images/icons/favicon-192x192.png?ver=<?php echo filemtime(__DIR__ . '/images/icons/favicon-192x192.png'); ?>">

    <link rel="apple-touch-icon" sizes="57x57"
          href="images/icons/apple-touch-icon-57x57.png?ver=<?php echo filemtime(__DIR__ . '/images/icons/apple-touch-icon-57x57.png'); ?>">
    <link rel="apple-touch-icon" sizes="60x60"
          href="images/icons/apple-touch-icon-60x60.png?ver=<?php echo filemtime(__DIR__ . '/images/icons/apple-touch-icon-60x60.png'); ?>">
    <link rel="apple-touch-icon" sizes="72x72"
          href="images/icons/apple-touch-icon-72x72.png?ver=<?php echo filemtime(__DIR__ . '/images/icons/apple-touch-icon-72x72.png'); ?>">
    <link rel="apple-touch-icon" sizes="76x76"
          href="images/icons/apple-touch-icon-76x76.png?ver=<?php echo filemtime(__DIR__ . '/images/icons/apple-touch-icon-76x76.png'); ?>">
    <link rel="apple-touch-icon" sizes="114x114"
          href="images/icons/apple-touch-icon-114x114.png?ver=<?php echo filemtime(__DIR__ . '/images/icons/apple-touch-icon-114x114.png'); ?>">
    <link rel="apple-touch-icon" sizes="120x120"
          href="images/icons/apple-touch-icon-120x120.png?ver=<?php echo filemtime(__DIR__ . '/images/icons/apple-touch-icon-120x120.png'); ?>">
    <link rel="apple-touch-icon" sizes="144x144"
          href="images/icons/apple-touch-icon-144x144.png?ver=<?php echo filemtime(__DIR__ . '/images/icons/apple-touch-icon-144x144.png'); ?>">
    <link rel="apple-touch-icon" sizes="152x152"
          href="images/icons/apple-touch-icon-152x152.png?ver=<?php echo filemtime(__DIR__ . '/images/icons/apple-touch-icon-152x152.png'); ?>">
    <link rel="apple-touch-icon" sizes="180x180"
          href="images/icons/apple-touch-icon-180x180.png?ver=<?php echo filemtime(__DIR__ . '/images/icons/apple-touch-icon-180x180.png'); ?>">


    <!-- SEO -->
    <meta name="title" content="Wunderkammer"/>
    <meta name="description" content="Wunderkammer. Открой для себя кабинет чудес Петра Великого"/>
    <meta name="copyright" content="(c) <?php echo date('Y'); ?> Wunderkammer"/>
    <meta name="author" content="Wunderkammer"/>
    <link type="text/plain" rel="author" href="<?php $_SERVER['REQUEST_URI']; ?>"/>
    <link rel="image_src" href="images/icons/index.png"/>


    <!-- SS -->
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Wunderkammer"/>
    <meta property="og:title" content="<?php echo "{$page_title}"; ?>"/>
    <meta property="og:description" content="Wunderkammer. Открой для себя кабинет чудес Петра Великого"/>
    <meta property="og:url" content="<?php echo $_SERVER['REQUEST_URI']; ?>"/>
    <meta property="og:image:height" content="1257"/>
    <meta property="og:image:width" content="2400"/>
    <meta property="og:image" content="images/icons/index.png"/>
    <meta property="og:see_also" content="<?php $_SERVER['REQUEST_URI']; ?>"/>
    <meta property="og:author" content="<?php $_SERVER['REQUEST_URI']; ?>"/>

    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:site" content="Wunderkammer"/>
    <meta name="twitter:title" content="<?php echo "{$page_title}"; ?>"/>
    <meta name="twitter:description" content="Wunderkammer. Открой для себя кабинет чудес Петра Великого"/>
    <meta name="twitter:image:src" content="images/icons/index.png"/>


    <link rel="stylesheet"
          href="css/normalize.css?ver=<?php echo filemtime(__DIR__ . '/css/normalize.css'); ?>"/>
    <link rel="stylesheet"
          href="css/main.css?ver=<?php echo filemtime(__DIR__ . '/css/main.css'); ?>"/>

    <link rel="stylesheet"
          href="css/style.css?ver=<?php echo filemtime(__DIR__ . '/css/style.css'); ?>"/>

    <link rel="stylesheet"
          href="css/swiper.css?ver=<?php echo filemtime(__DIR__ . '/css/swiper.css'); ?>"/>


    <!-- Yandex.Metrika counter -->
    <!-- /Yandex.Metrika counter -->




    <title>
        <?php echo "{$page_title}"; ?>
    </title>
</head>

<noscript class="noscript_message">
    У вас отключен JavaScript, сайт может отображаться некорректно. Рекомендуем включить JavaScript.
</noscript>

<body>


<section id="Section_main">

    <section id="app" class="master_wrapper" v-cloak>

        <div class="layout" id="layout">

            <!--<header class="layout_header">
                header
            </header>-->

            <!--<nav class="navbar" :class="{'navbar--open':isNavbarOpen}">

                <div class="navbar_logo_container mobile-only flex column content--center">
                    <a href="">
                        <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 1496.1 211.1" style="enable-background:new 0 0 1496.1 211.1;" xml:space="preserve">
                    <path fill="#ffffff" d="M64.9,135.7c-4.7-2.1-8.7-2.1-12.8,0.4c-14.4-25-28.6-49.6-42.8-74C23.9,27.8,62.3-1.2,108.5,0
                        c39.8,1.1,76.9,26.4,91.9,60.1c-14.4,25-29,50.2-43.6,75.5c-4.3-1.7-8.4-2.3-12.2-0.1c-2.9-2.9-26.7-43.3-33.6-57
                        c0.8-1.1,1.8-2.2,2.7-3.4c3.4-5,2.4-12-2.3-15.7c-4.5-3.6-11.5-3.2-15.5,0.8c-4.4,4.4-4.7,11-0.6,15.8c0.7,0.9,1.7,1.6,2.8,2.5
                        C86.9,97.6,76,116.4,64.9,135.7z"/>
                        <path fill="#ffffff" d="M140.5,138.5c-3,7.9-2.1,12.8,2.5,16.4c4.1,3.2,9.7,3.3,14,0.3c4.9-3.4,5.9-8.6,3-16.7c14.1-24.4,28.2-48.8,42.5-73.5
                        c17.1,37.1,9.1,89.6-29.9,121.8c-39.5,32.6-94.9,32.1-133.9,0.4C-2.8,153.5-6.9,99.6,7.5,67.3c13.8,24,27.5,47.7,41.4,71.6
                        c-1.5,3.4-2.7,7-1.1,10.9c1,2.4,2.4,4.4,4.6,5.8c4.3,2.7,10.1,2.3,14-1c4.5-3.9,5.1-8.9,1.9-16.2c11.1-19.2,22.2-38.5,33.5-58.1
                        c1.6-0.1,3.2-0.2,5-0.2C118,99.7,129.3,119.1,140.5,138.5z"/>
                        <path fill="#ffffff" d="M391.1,162.1c-6.7,0-13.5,0-20.9,0c-7.8-29.8-15.7-59.7-23.5-89.6c-0.5,0-0.6-0.1-0.8-0.1c-0.1,0-0.3,0.2-0.3,0.3
                        c-8,29.6-16,59.3-24.1,89.4c-3.5,0-6.9,0.1-10.4,0.1s-7,0-10.3,0C299,159,270,49.2,269.1,42.6c3.4-1,6.9-0.3,10.3-0.5
                        c3.3-0.1,6.6,0,10.2,0c7.2,30.4,14.3,60.5,21.5,90.7c0.3,0,0.5,0,0.8,0c7.9-30.1,15.9-60.2,23.9-90.4c7.1,0,13.9,0,21.3,0
                        c8,29.9,15.4,60.2,23.7,90.4c7.9-29.9,14.9-60.1,22.5-90.3c6.8,0,13.6,0,20.3,0C423.4,45.9,393.7,155.5,391.1,162.1z"/>
                        <path fill="#ffffff" d="M1207.5,76.4c5.9,0,11.5,0,17.6,0c0,3.9,0,7.6,0,11.3c6.7-9,15.3-14,26.1-14.1c10.7-0.1,20.1,3,25.1,13.5
                        c2.1-1.9,4.1-3.6,5.9-5.4c6.7-6.5,14.9-8.4,23.9-8c3.3,0.1,6.6,0.8,9.8,1.7c9.7,2.8,14.8,9.7,16.1,19.5c0.5,3.9,0.7,8,0.7,12
                        c0.1,17.2,0,34.3,0,51.5c0,1.1,0,2.3,0,3.3c-4.3,0.9-14.1,1-18.9,0.1c0-1.5,0-3.2,0-4.8c0-14.5,0-29,0-43.5c0-4-0.3-8-0.7-11.9
                        c-0.8-7.5-5.2-11.6-12.8-12.2c-0.8-0.1-1.7,0-2.5,0c-10,0-16,5-17.6,14.8c-0.6,3.4-0.9,6.9-0.9,10.4c-0.1,14.3,0,28.6,0,43
                        c0,1.5,0,2.9,0,4.7c-6.3,0-12.3,0-18.3,0c-1.2-1.4-0.6-3.1-0.6-4.7c0-16.3,0-32.6-0.1-49c0-3.5-0.4-7-1.2-10.3
                        c-1.1-5.2-4.9-7.8-9.9-8.6c-10.5-1.7-19.8,4.5-22,14.9c-0.6,2.9-0.9,5.9-0.9,8.9c-0.1,14.5,0,29,0,43.5c0,1.6,0,3.3,0,5.3
                        c-3.3,0.6-6.4,0.2-9.5,0.3c-3,0.1-5.9,0-8.8,0C1207,158.3,1206.8,84.3,1207.5,76.4z"/>
                        <path fill="#ffffff" d="M1062.2,76.4c5.8,0,11.2,0,17,0c0,3.8,0,7.4,0,12.3c1.7-1.8,2.7-2.8,3.5-3.8c5.9-7.7,14.1-11.3,23.5-11.2
                        c10.1,0,19.1,2.9,24.2,12.8c0.1,0.3,0.5,0.4,0.7,0.5c1.8-1.7,3.7-3.3,5.4-5c6.7-6.8,15.1-8.8,24.2-8.3c3.6,0.2,7.2,1.1,10.7,2.1
                        c8.3,2.5,12.8,8.6,14.6,16.8c0.6,2.9,1,5.9,1,8.9c0.1,19.2,0,38.3,0.1,57.5c0,1,0,1.9,0,3.1c-6.4,0-12.3,0-18.4,0
                        c-1.2-1.4-0.6-3.1-0.6-4.7c0-16.2,0-32.3-0.1-48.5c0-3.3-0.3-6.7-1-9.9c-1.1-5-4.2-8.4-9.4-9.1c-3.2-0.5-6.7-0.7-9.9-0.2
                        c-6.6,1-10.8,5.2-12.4,11.5c-1,3.8-1.3,7.9-1.4,11.8c-0.2,14.7-0.1,29.3-0.1,44c0,1.6,0,3.2,0,5.1c-6.4,0-12.4,0-18.7,0
                        c-0.1-1.6-0.2-3.2-0.2-4.8c0-16.2,0-32.3-0.1-48.5c0-3.1-0.3-6.3-1-9.4c-1.3-6.1-5.2-9.4-11.4-10c-13.1-1.3-19.8,8.2-21.3,16.6
                        c-0.4,2.4-0.4,5-0.4,7.5c0,14.5,0,29,0,43.5c0,1.6,0,3.3,0,5c-1.1,0.2-1.7,0.4-2.3,0.4c-5.3,0-10.6,0-15.8,0
                        C1061.7,158.4,1061.4,84.8,1062.2,76.4z"/>
                        <path fill="#ffffff" d="M687,87c0-14.8,0-29.5,0-44.2c3.2-1.3,6.4-0.5,9.4-0.6s6,0,8.9,0c1,4.1,1.5,104.3,0.5,119.6c-2.8,1-5.8,0.3-8.7,0.5
                        c-2.8,0.1-5.6,0-8.6,0c-1.1-3.6,0-7.1-0.8-10.8c-0.5,0.5-1.1,0.8-1.3,1.2c-3.9,6.2-9.7,9.6-16.5,11.1c-12.7,2.8-24.5,0.8-34.8-7.5
                        c-6.6-5.3-10.4-12.5-12.5-20.5c-2.9-11-3.2-22.1-0.3-33.1c2.8-10.7,8.2-19.8,18.4-24.9c12.9-6.4,25.7-6,38,1.8
                        C681.7,81.5,684.1,84.4,687,87z M664.4,149.3c8.5,0.2,15.1-4.7,19.4-13c2.2-4.2,3.1-8.7,3.6-13.4c0.8-7.5-0.2-14.6-3.5-21.3
                        c-4.1-8.5-11.1-12.4-20.5-12.4s-16.4,4.4-20.3,12.7c-5.3,11.2-5.5,22.8-0.4,34.2C646.7,144.8,653.6,149.3,664.4,149.3z"/>
                        <path fill="#ffffff" d="M1043.4,149.1c1.8,0.1,4,0.2,6.5,0.4c0,4.5,0,8.7,0,13.2c-4,1.5-8,2.3-12.2,2.4c-7.7,0-11.5-2.8-14.3-10.4
                        c-0.7,0.4-1.5,0.7-2,1.1c-4.8,4.1-10.4,6.4-16.5,7.8c-6.4,1.4-12.8,2.1-19.3,0.7c-11.9-2.4-22.1-10.5-21.7-25.6
                        c0.3-9.8,4.4-17,13.2-21.1c3.1-1.5,6.6-2.5,10-3.1c7.4-1.3,14.8-2.1,22.2-3.2c2.8-0.4,5.6-0.9,8.2-2c6.5-2.7,7.8-10.8,2.6-15.6
                        c-1.5-1.4-3.6-2.5-5.6-3.2c-4.8-1.6-9.9-1.6-14.8-0.8c-7.1,1.2-12.5,4.6-13.7,12.4c-6.3,0-12.4,0-18.8,0
                        c0.7-11.2,5.9-19.1,15.6-23.9c5-2.5,10.3-3.4,15.8-4.1c7.2-0.9,14.3-0.4,21.3,1.2c4.4,1,8.6,2.7,12.2,5.5c6.1,4.7,8.9,10.9,8.9,18.6
                        c-0.1,14.3,0,28.7,0,43C1041.1,144.6,1040.6,147.1,1043.4,149.1z M1022,118.6c-3.6,1-6.6,2-9.6,2.6c-5.1,0.9-10.2,1.2-15.3,2.2
                        c-2.9,0.6-5.8,1.6-8.4,3.1c-4.7,2.7-6.1,7.3-5.7,12.4c0.4,4.6,3.5,7.2,7.4,8.6c8.2,2.9,16.4,2.6,24-2.1c4.5-2.8,7.3-6.8,7.5-12.2
                        C1022.2,128.5,1022,123.7,1022,118.6z"/>
                        <path fill="#ffffff" d="M879.5,42.4c6.2,0,12.2,0,18.5,0c0,22.6,0,45,0,68c4.1-2.2,6.3-5.5,9.1-8.2c3-2.9,5.8-6,8.7-8.9c2.8-2.9,5.6-5.7,8.4-8.5
                        c2.8-2.8,5.7-5.6,8.5-8.5c7.3,0,14.6,0,22.7,0c-10.7,11.2-22,20.9-32.5,31.6c12,18,23.9,35.9,36,54.1c-7.9,0-15.3,0-23.1,0
                        c-8.6-13.7-17.3-27.5-26.3-41.7c-4,3.9-7.7,7.5-11.5,11.2c0,10.1,0,20.1,0,30.3c-3.2,0.9-6.4,0.3-9.5,0.4c-3,0.1-5.9,0-8.8,0
                        C879,158.3,878.8,50.7,879.5,42.4z"/>
                        <path fill="#ffffff" d="M786.1,136.4c5.9,0,11.6,0,17.5,0c-0.3,4-2,7.4-3.9,10.6c-4.3,7.3-10.7,12.3-18.6,15.2c-9.1,3.3-18.5,3.8-28,1.5
                        c-15.6-3.8-25.1-14.1-28.8-29.3c-2.5-10.3-2.7-20.8,0.7-31.1c4.9-15,14.7-25.4,30.4-28.7c22.6-4.8,42.6,8,48.5,30.8
                        c0.7,2.6,1,5.2,1.2,7.9c0.2,3.1,0,6.3,0,10c-7.2,0.1-14.2,0-21.1,0c-7.2,0-14.3,0-21.5,0c-6.9,0-13.9,0-20.8,0
                        c-0.3,13,6.4,22.6,15.5,25.1c5.8,1.6,11.5,1.5,17.2-0.3C780.3,146.1,783.8,141.7,786.1,136.4z M785.9,110
                        c-0.3-11.6-9.8-22.1-24.4-20.7c-11.3,1.1-20.2,10.6-19.1,20.7C756.8,110,771.1,110,785.9,110z"/>
                        <path fill="#ffffff" d="M1431.1,123.4c-21.5,0-42.4,0-63.3,0c-0.1,14.4,8,23.7,17.2,25.3c12.5,2.1,21.6-0.4,27.4-12.2c5.6,0,11.4,0,17.6,0
                        c-0.7,4.1-2.3,7.7-4.4,11c-6,9.4-14.8,14.6-25.6,16.7c-6.8,1.3-13.6,1.2-20.3-0.4c-15.8-3.8-25.4-14.1-29.2-29.6
                        c-2.5-10.3-2.6-20.8,0.8-31.1c5-15,14.7-25.3,30.5-28.6c22.8-4.7,42.7,8.3,48.5,30.9C1431.6,111.1,1431.5,116.9,1431.1,123.4z
                         M1412,110c-0.7-12.3-10.5-22.4-25.1-20.6c-11.2,1.4-20,11.3-18.3,20.6C1382.9,110,1397.2,110,1412,110z"/>
                        <path fill="#ffffff" d="M604.2,162.1c-6.4,0-12.4,0-18.9,0c0-1.7-0.1-3.3-0.1-4.9c0-15.6,0.1-31.3-0.1-46.9c0-3.6-0.5-7.3-1.3-10.8
                        c-1.3-5.6-5.3-8.9-10.8-9.8c-13.3-2.3-22.4,5-25,16.5c-0.6,2.9-0.8,5.9-0.8,8.9c-0.1,14,0,28,0,42c0,1.6,0,3.3,0,5.1
                        c-6.4,0-12.3,0-18.2,0c-0.9-3.5-1.3-75.7-0.4-85.7c2.8,0,5.8-0.1,8.7-0.1c2.8,0,5.6,0,8.8,0c0,4.2,0,7.9,0,12.8
                        c1.5-1.7,2.2-2.5,2.9-3.3c7.7-9.3,17.5-13.3,29.6-11.7c4,0.5,7.8,1.3,11.5,3.1c9,4.3,12.9,12.1,13.9,21.6c0.2,1.5,0.1,3,0.1,4.5
                        c0,18.5,0,37,0,55.4C604.2,159.5,604.2,160.5,604.2,162.1z"/>
                        <path fill="#ffffff" d="M432.8,76.4c6,0,11.9,0,18.3,0c0.1,1.6,0.2,3.1,0.2,4.7c0,15.5-0.1,31,0.1,46.5c0,3.9,0.8,7.9,1.6,11.8
                        c1,4.6,4.2,7.6,8.6,8.9c6.3,1.8,12.5,1.6,18.3-1.7c5.9-3.3,8.2-8.9,9-15.3c0.3-2.5,0.3-5,0.3-7.5c0-14,0-28,0-42c0-1.6,0-3.3,0-5.5
                        c3.3,0,6.4-0.1,9.5-0.1c3,0,5.9,0,9.2,0c0,28.8,0,57.1,0,85.8c-5.8,0-11.6,0-17.6,0c-1.1-3.7,0.1-7.7-0.9-12.2
                        c-1.1,1.5-1.9,2.5-2.6,3.5c-7.1,8.9-16.2,12.9-27.6,11.3c-3.1-0.5-6.2-1.1-9.2-2c-7.6-2.2-12.2-7.6-14.9-14.9
                        c-1.8-4.9-2.5-10.1-2.6-15.2c-0.2-18.2-0.1-36.3-0.1-54.5C432.4,77.6,432.6,77.2,432.8,76.4z"/>
                        <path fill="#ffffff" d="M820.1,162c0-28.6,0-56.9,0-85.2c3.7-0.9,12.5-1,17.6-0.1c0,4.5,0,9.1,0,13.7c7.4-12.2,17.7-18.1,32.4-16.7
                        c0.3,6.1,0.1,12,0.1,17.8c-1.7,1.3-3.4,0.7-5,0.5c-13.1-1.3-21.6,5.9-25,18.1c-1,3.6-1.3,7.6-1.3,11.4c-0.2,11.8-0.1,23.7-0.1,35.5
                        c0,1.6,0,3.2,0,5.1C832.5,162,826.6,162,820.1,162z"/>
                        <path fill="#ffffff" d="M1496,92.2c-2-0.1-3.7-0.1-5.3-0.3c-11.6-1-19.5,5-23.5,15.4c-1.7,4.4-2.2,9-2.2,13.7c0,12.3,0,24.7,0,37c0,1.2,0,2.3,0,4
                        c-6.2,0.5-12.3,0.2-18.3,0.2c-0.8-4-1.1-77.8-0.3-85.8c5.5,0,11.1,0,17,0c1.3,4.6-0.3,9.4,0.9,14.4c7-12.7,17.2-18.7,31.8-17.2
                        C1496,79.8,1496,85.7,1496,92.2z"/>
                    </svg>
                    </a>
                </div>

                <div class="menu-toggler_container" @click="isNavbarOpen = !isNavbarOpen" :class="{'navbar--open':isNavbarOpen}">
                    <div class="toggler_bullet" :class="{'navbar--open':isNavbarOpen}">
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                            <circle r='7' cx='50' cy='26' fill='#ffffff' stroke='#0000ff' stroke-width='0' />
                            <circle r='7' cx='50' cy='50' fill='#ffffff' stroke='#0000ff' stroke-width='0' />
                            <circle r='7' cx='50' cy='74' fill='#ffffff' stroke='#0000ff' stroke-width='0' />
                        </svg>
                    </div>
                </div>

                <div class="menu flex column content--space-between mobile-content--start items--start" :class="{'navbar--open':isNavbarOpen}">

                    <div class="menu_container menu-top_container">
                        <ul class="menu-top flex column content--start items--start">

                            <a href="collection.php" class="menu_block_contaner menu_collection_contaner">
                                <div class="menu-bullet menu-bullet_collection">
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                                        <circle r='50%' cx='50%' cy='50%' fill='#0000ff' stroke='#0000ff' stroke-width='0' />
                                    </svg>
                                </div>
                                <li class="menu_collection">
                                    Коллекция
                                </li>
                            </a>

                            <a href="map.php" class="menu_block_contaner menu_map_contaner">
                                <div class="menu-bullet menu-bullet_map">
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                                        <circle r='50%' cx='50%' cy='50%' fill='#0000ff' stroke='#0000ff' stroke-width='0' />
                                    </svg>
                                </div>
                                <li class="menu_map">
                                    Карта
                                </li>
                            </a>

                            <a href="#" class="menu_block_contaner menu_cabinet_contaner" @click.prevent="isMenuCabinetOpen = !isMenuCabinetOpen">
                                <div class="menu-bullet menu-bullet_cabinet" :class="{'cabinet--open':isMenuCabinetOpen && isNavbarOpen}">
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                                        <circle r='50%' cx='50%' cy='50%' fill='#0000ff' stroke='#0000ff' stroke-width='0' />
                                    </svg>
                                </div>
                                <li class="menu_cabinet" :class="{'cabinet--open':isMenuCabinetOpen}">
                                    Кабинет
                                </li>
                            </a>
                            <transition name="slide-mob">
                                <ul class="submenu submenu-cabinet" v-if="isMenuCabinetOpen">
                                    <li class="" >
                                        <a href="articles.php">Статьи</a>
                                    </li>
                                    <li class="">
                                        <a href="">Медиа</a>
                                    </li>
                                    <li class="">
                                        <a href="">Словарь</a>
                                    </li>
                                    <li class="">
                                        <a href="">Игровая&nbsp;зона</a>
                                    </li>
                                    <li class="">
                                        <a href="">Библиотека</a>
                                    </li>
                                </ul>
                            </transition>
                        </ul>
                    </div>

                    <div class="menu_container menu-bottom_container">
                        <ul class="menu-bottom flex column content--start items--start">

                            <a href="" class="menu_block_contaner menu_soroka_contaner">
                                <div class="menu-bullet menu-bullet_soroka">
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                                        <circle r='50%' cx='50%' cy='50%' fill='#ff0000' stroke='#ff0000' stroke-width='0' />
                                    </svg>
                                </div>
                                <li class="menu_soroka">
                                    Платформа&nbsp;«Сорока»
                                </li>
                            </a>

                            <a href="" class="menu_block_contaner menu_about_contaner">
                                <div class="menu-bullet menu-bullet_about">
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                                        <circle r='50%' cx='50%' cy='50%' fill='#ff0000' stroke='#ff0000' stroke-width='0' />
                                    </svg>
                                </div>
                                <li class="menu_about">
                                    О&nbsp;проекте
                                </li>
                            </a>

                            <a href="" class="menu_block_contaner menu_team_contaner">
                                <div class="menu-bullet menu-bullet_team">
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                                        <circle r='50%' cx='50%' cy='50%' fill='#ff0000' stroke='#ff0000' stroke-width='0' />
                                    </svg>
                                </div>
                                <li class="menu_team">
                                    Команда
                                </li>
                            </a>
                        </ul>
                    </div>

                </div>

            </nav>-->

            <!--<div class="fading-layer" :class="{'navbar--open':isNavbarOpen}">
            </div>-->