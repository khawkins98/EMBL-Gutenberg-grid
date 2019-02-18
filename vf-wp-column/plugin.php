<?php
/**
 * Plugin Name: Visual Framework Columns containers for Gutenberg
 * Plugin URI: https://github.com/khawkins98/EMBL-Gutenberg-grid/tree/master/vf-wp-columns
 * Description: A simple Gutenberg plugin to implement "columns", designed for use with the `embl-grid` plugin.
 * Author: khawkins98,
 * Author URI: https://www.ebi.ac.uk/about/people/ken-hawkins
 * Version: 0.0.1
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
