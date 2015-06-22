(function() {
  CKEDITOR.plugins.add("maxeditor", {
    icons: "maxeditor",
    init: function(editor) {
      editor.addCommand("maxeditor", {
        exec: function(editor) {
          var element;
          element = editor.document.createElement("span");
          element.setStyles({
            display: "inline-block",
            background: "orange",
            width: "100px",
            height: "100px",
            transform: "translateY(50%)",
            "margin-left": "10px",
            "margin-right": "10px",
            "border-radius": "50px"
          });
          return editor.insertElement(element);
        }
      });
      return editor.ui.addButton("maxeditor", {
        label: "Wechat Stylist",
        command: "maxeditor",
        toolbar: "max"
      });
    }
  });

}).call(this);
