EVEditor
========================================

## Quick start


```html
<div id="editor">
	<p>This is the editor content.</p>
</div>
<script src="./build/eveditor.js"></script>
<script>
	EVEditor
		.create( document.querySelector( '#editor' ) )
		.then( editor => {
			window.editor = editor;
		} )
		.catch( err => {
			console.error( err.stack );
		} );
</script>
```

## License

Licensed under the GPL, LGPL and MPL licenses, at your choice. For full details about the license, please check the `LICENSE.md` file.
