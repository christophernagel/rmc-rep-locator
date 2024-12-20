<?php
/**
 * Plugin Name: RMC Rep Locator 
 * Description: React-based rep locator block for Rep Materials Company
 * Version: 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

function rmc_rep_locator_init() {
    // Register block script
    wp_register_script(
        'rmc-rep-locator-block',
        plugins_url('build/index.js', __FILE__),
        ['wp-blocks', 'wp-element', 'wp-block-editor']
    );

    // Register and enqueue frontend script
    wp_register_script(
        'rmc-rep-locator-frontend',
        plugins_url('build/frontend.js', __FILE__),
        ['wp-element'],
        filemtime(plugin_dir_path(__FILE__) . 'build/frontend.js')
    );

    // Register styles
    wp_register_style(
        'rmc-rep-locator-style',
        plugins_url('src/css/style.css', __FILE__),
        [],
        filemtime(plugin_dir_path(__FILE__) . 'src/css/style.css')
    );

    // Register block
    register_block_type('rmc-rep-locator/rep-locator', [
        'editor_script' => 'rmc-rep-locator-block',
        'style' => 'rmc-rep-locator-style',
        'render_callback' => 'rmc_rep_locator_render_callback'
    ]);
}

function rmc_rep_locator_render_callback($attributes) {
    // Enqueue frontend assets
    wp_enqueue_script('rmc-rep-locator-frontend');
    wp_enqueue_style('rmc-rep-locator-style');
    
    // Return container for React to mount to
    return '<div id="rmc-rep-locator"></div>';
}

add_action('init', 'rmc_rep_locator_init');