/**
 * BLOCK: embl-grid
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { InnerBlocks } = wp.editor;
const { createHigherOrderComponent } = wp.compose;

const withCustomClassName = createHigherOrderComponent( ( BlockEdit ) => {
  return ( props ) => {
    return <BlockEdit {...props} className={ "embl-grid imhere"} />
  };
}, 'withClientIdClassName' );

wp.hooks.addFilter( 'editor.BlockEdit', 'cgb/block-embl-grid', withCustomClassName );
// editor-block-list__layout

// https://github.com/WordPress/gutenberg/tree/master/packages/editor/src/components/inner-blocks#template
const TEMPLATE = [
  [ 'cgb/block-vf-wp-column' ],
  [ 'core/button', { text: 'Make this Recipe' }],
  [ 'core/paragraph', { placeholder: 'Enter sidddde content...' }, [] ]
];
const ALLOWED_BLOCKS = [
  'cgb/block-vf-wp-column',
  'cgb/block-embl-grid'
  // 'core/paragraph'
];

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-embl-grid', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'EMBL Grid Container' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'embl-grid — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( props ) {
    // <InnerBlocks template={ TEMPLATE }   templateLock="false" />
		// Creates a <p class='wp-block-cgb-block-embl-grid'></p>.
    // props.className += ' embl-grid';
    const { className } = props;
		return (
      <div className={ className }>
        <InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
      </div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( props ) {
		return (
      <div className="wp-block-cgb-block-embl-grid embl-grid">
        <InnerBlocks.Content />
      </div>
		);
	},
} );