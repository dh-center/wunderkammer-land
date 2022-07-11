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

    <link rel="prefetch prerender" href="images/petr.png" />
    <link rel="prefetch prerender" href="images/gif/anim_anchor.gif" />
    <link rel="prefetch prerender" href="images/gif/anim_dividers.gif" />
    <link rel="prefetch prerender" href="images/gif/anim_key.gif" />

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

            <nav class="navbar" :class="{'navbar--open':isNavbarOpen}">

                <div class="navbar_logo_wrapper mobile-only flex column content--center">
                    <a href="index2.php">
                        <div class="navbar_logo_container flex row content--start items--center">
                            <div class="navbar_logo_block">
                                <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 423.6 424" style="enable-background:new 0 0 423.6 424;" xml:space="preserve">
                            <g>
                                <path fill="#ffffff" d="M19,124.5C50.6,53.5,123.4,0.6,210.3,0c88.8-0.6,161.3,53.1,192.4,120.6c-29.4,50.8-58.7,101.6-88,152.3
                                    c-11.8-4.6-15.8-4.6-25.9,0.1c-22.2-38.4-44.3-76.8-66.7-115.5c6.7-4.8,10.3-11.6,10.3-19.8c0-6.4-2.6-12.3-7.4-16.9
                                    c-8.6-8.2-24.2-8.4-32.9,1c-5.1,5.6-7.1,11.9-6.3,19.2c0.8,7.4,5.2,12.7,11,17.2c-22.1,38.3-44.1,76.4-66.2,114.6
                                    c-8.7-4.6-17.1-4.5-25.6,0.6C76.3,223.7,47.7,174.2,19,124.5z"/>
                                <path fill="#ffffff" d="M15.1,134.4c28.2,48.8,56,97,83.7,145.1c-6.2,12.9-4.4,24.5,4.9,31.8c8.6,6.7,21.4,6.6,29.5-0.4c6.9-6,12.9-17.4,3.8-32.3
                                    c22.5-39,45.1-78.1,67.8-117.4c3.2,0,6.3,0,9.8,0c22.6,39.1,45.3,78.4,68.1,117.9c-4.1,5.8-5.3,12.4-3.8,19.3
                                    c1.1,5.2,4.2,9.4,8.3,12.8c8,6.6,20.6,6.7,28.7,0.3c7.9-6.2,13.2-17.9,5-32.4c28.6-49.5,57.3-99.2,86.1-149.1
                                    c37.4,88,10.9,193.1-69.1,252.3c-78.4,58.1-186.1,55.5-261.7-7.6C-0.9,310.2-15.8,209,15.1,134.4z"/>
                            </g>
                        </svg>
                            </div>
                            <div class="navbar_logo_block">
                                Wunderkammer
                            </div>
                        </div>
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
                                        <a href="cabinet.php">Медиа</a>
                                    </li>
                                    <li class="">
                                        <a href="cabinet.php">Словарь</a>
                                    </li>
                                    <li class="">
                                        <a href="cabinet.php">Игровая&nbsp;зона</a>
                                    </li>
                                    <li class="">
                                        <a href="cabinet.php">Библиотека</a>
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

                            <a href="about.php" class="menu_block_contaner menu_about_contaner">
                                <div class="menu-bullet menu-bullet_about">
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                                        <circle r='50%' cx='50%' cy='50%' fill='#ff0000' stroke='#ff0000' stroke-width='0' />
                                    </svg>
                                </div>
                                <li class="menu_about">
                                    О&nbsp;проекте
                                </li>
                            </a>

                            <a href="team.php" class="menu_block_contaner menu_team_contaner">
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

            </nav>

            <!--<div class="fading-layer" :class="{'navbar--open':isNavbarOpen}">
            </div>-->