/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

module.exports = {
	// The editor creator to use.
	editor: '@ckeditor/ckeditor5-editor-classic/src/classiceditor',

	// The name under which the editor will be exported.
	moduleName: 'EVEditor',

	// Plugins to include in the build.
	plugins: [
		'@ckeditor/ckeditor5-essentials/src/essentials',

		'@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter',
		'@ckeditor/ckeditor5-autoformat/src/autoformat',
		// Added code & underline
		'@ckeditor/ckeditor5-basic-styles/src/code',
		'@ckeditor/ckeditor5-basic-styles/src/underline',
		'@ckeditor/ckeditor5-basic-styles/src/bold',
		'@ckeditor/ckeditor5-basic-styles/src/italic',
		'@ckeditor/ckeditor5-block-quote/src/blockquote',
		//'@ckeditor/ckeditor5-easy-image/src/easyimage',
		'@ckeditor/ckeditor5-heading/src/heading',
		'@ckeditor/ckeditor5-image/src/image',
		'@ckeditor/ckeditor5-image/src/imagecaption',
		'@ckeditor/ckeditor5-image/src/imagestyle',
		'@ckeditor/ckeditor5-image/src/imagetoolbar',
		'@ckeditor/ckeditor5-link/src/link',
		'@ckeditor/ckeditor5-list/src/list',
		'@ckeditor/ckeditor5-paragraph/src/paragraph',
		'@ckeditor/ckeditor5-upload/src/imageupload',
		// Added below
		'@ckeditor/ckeditor5-ui/src/toolbar/contextual/contextualtoolbar',
		'@ckeditor/ckeditor5-basic-styles/src/attributecommand',
		'@ckeditor/ckeditor5-image/src/imagetextalternative',
		'@ckeditor/ckeditor5-upload/src/imageuploadbutton',
		'@ckeditor/ckeditor5-markdown-gfm/src/gfmdataprocessor'
	],

	// UI language. Language codes follow the https://en.wikipedia.org/wiki/ISO_639-1 format.
	language: 'de',

	// Editor config.
	config: {
		toolbar: {
			items: [
				'headings',
				'bold',
				'italic',
				'underline',
				'|',
				'bulletedList',
				'numberedList',
				'blockQuote',
				'code',
				'|',
				'link',
				'insertImage',
				'|',
				'undo',
				'redo'
			]
		},
		contextualToolbar: {
			items: [
				'headings',
				'bold',
				'italic',
				'underline',
				'|',
				'link',
				'|',
				'bulletedList',
				'numberedList',
				'blockQuote',
				'code',
			]
		},

		image: {
			toolbar: [ 'imageStyleAlignLeft', 'imageStyleFull', 'imageStyleAlignRight', '|', 'imageTextAlternative' ],
			styles: [
				// This option is equal to a situation where no style is applied.
				'imageStyleFull',
				// This represents an image aligned to left.
				'imageStyleAlignLeft',
				// This represents an image aligned to right.
				'imageStyleAlignRight'
			]
		}
	}
};
