import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import BackgroundColorEditing from './backgroundcolorediting';
import BackgroundColorUI from './backgroundcolorui';


export default class BackgroundColor extends Plugin {
   /**
    * @inheritDoc
    */
   static get requires() {
      return [BackgroundColorEditing, BackgroundColorUI];
   }

   /**
    * @inheritDoc
    */
   static get pluginName() {
      return 'BackgroundColor';
   }
}