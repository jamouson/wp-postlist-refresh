<?php 
/*
Plugin Name: Refresh Post Listing 
Plugin URI: http://jamouson.com
Description: Plugin for refreshing post-list
Author: Jamouson
Version: 1.0
Author URI: https://jamouson.com
*/
define('REFRESH_POST_PLUGIN_URL', plugin_dir_url(__FILE__) );

add_action('admin_enqueue_scripts','refresh_post_listing');
function refresh_post_listing(){
	$source = REFRESH_POST_PLUGIN_URL . "/js/refresh-plugin.js";
	wp_enqueue_script( "refresh-post-listing", $source  , ['jquery'] ,time(), true);
	$pass_to_script = [
		"current_screen"		=>	get_current_screen(),
		"current_url" 			=>  home_url($_SERVER['REQUEST_URI'])
	];
	wp_localize_script("refresh-post-listing","php_object",$pass_to_script);
}