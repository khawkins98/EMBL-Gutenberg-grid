<?php
/**
 * Plugin Name: EMBL Grid for Gutenberg
 * Plugin URI: https://github.com/khawkins98/EMBL-Gutenberg-grid/tree/master/embl-grid
 * Description: A simple Gutenberg plugin to implement the EMBL Grid for the Visual Framework 2.0
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
