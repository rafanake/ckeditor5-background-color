CKEditor 5 Background Font Color Feature
===================================

## Quick start

First, install the build from npm:

```bash
npm i ckeditor5-background-color
```

Use it in your JavaScript application:

```js
import BackgroundColor from 'ckeditor5-background-color/src/backgroundcolor';
```

```example
ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [ BackgroundColor, ... ],
        toolbar: [ 'backgroundcolor', ... ]
    } )
    .then( ... )
    .catch( ... );
```

## License

Licensed under the terms of [GNU General Public License Version 2 or later](http://www.gnu.org/licenses/gpl.html).