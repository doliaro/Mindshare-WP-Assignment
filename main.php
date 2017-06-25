<?php
/*
    Plugin Name: Mindshare Code Review
    Description: A shortcode plugin that fetches data from a JSON endpoint and displays it
    Author: Dom Oliaro
    Author URI: https://github.com/doliaro/Mindshare-WP-Assignment
    Version: 1.0
*/

//Exit if accessed directly
if(!defined('ABSPATH')){ exit; }

function main_resources(){
    wp_enqueue_style('sytle', plugin_dir_url(__FILE__) . '/style.css');
    wp_enqueue_script('main_js', plugin_dir_url(__FILE__) . '/functions.js');
}

// Setup scripts
add_action("wp_enqueue_scripts", "main_resources");

function setup_content(){
    ?>
        <div id="content-container"></div>
        <script type="text/javascript">
            fetch_json();
        </script>
    <?php
}

add_shortcode("mindshare_posts", "setup_content");

?>