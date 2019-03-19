import Command from '@ckeditor/ckeditor5-core/src/command';
export default class BackgroundColorCommand extends Command {
   /**
    * @inheritDoc
    */
   refresh() {
      const model = this.editor.model;
      const doc = model.document;

      this.value = doc.selection.getAttribute('backgroundcolor');
      this.isEnabled = model.schema.checkAttributeInSelection(doc.selection, 'backgroundcolor');
   }

   execute(options = {}) {
      const model = this.editor.model;
      const document = model.document;
      const selection = document.selection;

      const highlighter = options.value;

      model.change(writer => {
         const ranges = model.schema.getValidRanges(selection.getRanges(), 'backgroundcolor');

         if (selection.isCollapsed) {
            const position = selection.getFirstPosition();

            if (selection.hasAttribute('backgroundcolor')) {
               const isSameBackgroundColor = value => {
                  return value.item.hasAttribute('backgroundcolor') && value.item.getAttribute('backgroundcolor') === this.value;
               };

               const Start = position.getLastMatchingPosition(isSameBackgroundColor, {direction: 'backward'});
               const End = position.getLastMatchingPosition(isSameBackgroundColor);

               const Range = writer.createRange(Start, End);

               // Then depending on current value...
               if (!highlighter || this.value === highlighter) {
                  writer.removeAttribute('backgroundcolor', Range);
                  writer.removeSelectionAttribute('backgroundcolor');
               } else {
                  writer.setAttribute('backgroundcolor', highlighter, Range);
                  writer.setSelectionAttribute('backgroundcolor', highlighter);
               }
            } else if (highlighter) {
               writer.setSelectionAttribute('backgroundcolor', highlighter);
            }
         } else {
            for (const range of ranges) {
               if (highlighter) {
                  writer.setAttribute('backgroundcolor', highlighter, range);
               } else {
                  writer.removeAttribute('backgroundcolor', range);
               }
            }
         }
      });
   }
}
