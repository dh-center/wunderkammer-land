<?php

define( 'FRONTEND_APP_URL', 'https://dwh.peterhofmuseum.ru' );
add_action('template_redirect', function () {
    $frontend_url = defined('FRONTEND_APP_URL') ? trailingslashit(FRONTEND_APP_URL) : '/';
    if ($frontend_url) {
        wp_redirect($frontend_url);
        die();
    }
});

// allowing menus usage
add_theme_support('menus');

// adding custom menu location "Publish for graphql"
// while menu not asigned to location it is not visible for public graph ql queries
function wpb_custom_new_menu()
{
    register_nav_menu('custom_published_menus', __('Publish for graphql'));
}
add_action('init', 'wpb_custom_new_menu');

// parent theme styles
add_action('wp_enqueue_scripts', 'enqueue_parent_styles');
function enqueue_parent_styles()
{
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
}

// overriding links to relative
function custom_frontend_url( $permalink, $post ) { 
	$custom_permalink = str_replace( home_url(), '',  $permalink );

	return $custom_permalink; 
}; 
			
add_filter( 'page_link', 'custom_frontend_url', 10, 2 ); 
add_filter( 'post_link', 'custom_frontend_url', 10, 2 );
// If you use custom post types also add this filter.
// add_filter( 'post_type_link', 'custom_frontend_url', 10, 2 ); 