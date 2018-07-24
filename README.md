# Emojis
An more complete emoji picker for the Froala WYSIWYG editor - includes 1097 Emojis organised into 8 categories.

![Emoji picker](https://i.imgur.com/1EMuSUH.png)

### Usage

Include the CSS and JS files along with your Froala scripts:
```
<script src="./build/emojis.min.js"></script>
<script src="./build/emojis.min.js"></script>
<link href="./build/emojis.min.css" rel="stylesheet" />
```
And simply register the Emojis button in your toolbar menu's:

```
$('#froala-editor').froalaEditor({
  toolbarButtons: ['undo', 'redo' , 'emojis']
})
``` 


### License
See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).
