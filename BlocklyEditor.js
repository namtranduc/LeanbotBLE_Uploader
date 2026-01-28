export class BlocklyEditor {
  getContent() {
    const iframe = document.getElementById("blocklyInlineFrame");
    if (iframe.contentWindow.Blockly_getBlockContent) {
      return iframe.contentWindow.Blockly_getBlockContent();
    }
    return "";
  }


  setContent(contentString) {
    const iframe = document.getElementById("blocklyInlineFrame");
    if (iframe.contentWindow.Blockly_setBlockContent) {
      iframe.contentWindow.Blockly_setBlockContent(contentString);
    }
  }


  getCppCode() {
    const iframe = document.getElementById("blocklyInlineFrame");
    if (iframe.contentWindow.Blockly_getGeneratedCode) {
      return iframe.contentWindow.Blockly_getGeneratedCode();
    }
    return "";
  };
}
