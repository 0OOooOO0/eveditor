/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import EVEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadadapterPlugin from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import CodePlugin from '@ckeditor/ckeditor5-basic-styles/src/code';
import UnderlinePlugin from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockquotePlugin from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading';
import ImagePlugin from '@ckeditor/ckeditor5-image/src/image';
import ImagecaptionPlugin from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImagestylePlugin from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImagetoolbarPlugin from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ListPlugin from '@ckeditor/ckeditor5-list/src/list';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import ImageuploadPlugin from '@ckeditor/ckeditor5-upload/src/imageupload';
import ContextualtoolbarPlugin from '@ckeditor/ckeditor5-ui/src/toolbar/contextual/contextualtoolbar';
import AttributecommandPlugin from '@ckeditor/ckeditor5-basic-styles/src/attributecommand';
import ImagetextalternativePlugin from '@ckeditor/ckeditor5-image/src/imagetextalternative';
import ImageuploadbuttonPlugin from '@ckeditor/ckeditor5-upload/src/imageuploadbutton';
import EvfinderbuttonPlugin from '@ckeditor/ckeditor5-evfinder/src/evfinderbutton';
import GfmdataprocessorPlugin from '@ckeditor/ckeditor5-markdown-gfm/src/gfmdataprocessor';

export default class EVEditor extends EVEditorBase {}

EVEditor.build = {
	plugins: [
		EssentialsPlugin,
		UploadadapterPlugin,
		AutoformatPlugin,
		CodePlugin,
		UnderlinePlugin,
		BoldPlugin,
		ItalicPlugin,
		BlockquotePlugin,
		HeadingPlugin,
		ImagePlugin,
		ImagecaptionPlugin,
		ImagestylePlugin,
		ImagetoolbarPlugin,
		LinkPlugin,
		ListPlugin,
		ParagraphPlugin,
		ImageuploadPlugin,
		ContextualtoolbarPlugin,
		AttributecommandPlugin,
		ImagetextalternativePlugin,
		ImageuploadbuttonPlugin,
		EvfinderbuttonPlugin,
		GfmdataprocessorPlugin
	],
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
				'insertImageEVFinder',
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
				'code'
			]
		},
		image: {
			toolbar: [
				'imageStyleAlignLeft',
				'imageStyleFull',
				'imageStyleAlignRight',
				'|',
				'imageTextAlternative'
			],
			styles: [
				'imageStyleFull',
				'imageStyleAlignLeft',
				'imageStyleAlignRight'
			]
		}
	}
};
