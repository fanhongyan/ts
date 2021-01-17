// enum TagType {
//   Paragraph,
//   Header1,
//   Header2,
//   Header3,
//   HorizontalRule
// }
// class TagTypeToHtml {
//   private readonly tagType: Map<TagType, string> = new Map<TagType, string>();
//   constructor() {
//     this.tagType.set(TagType.Header1, "h1");
//     this.tagType.set(TagType.Header2, "h2");
//     this.tagType.set(TagType.Header3, "h3");
//     this.tagType.set(TagType.Paragraph, "p");
//     this.tagType.set(TagType.HorizontalRule, "hr");
//   }
//   public OpeningTag(tagType: TagType) : string {
//     // let tag = this.tagType.get(tagType);
//     // if (tag !== null) {
//     //   return `<${tag}>`;
//     // }
//     // return `<p>`;
//     return this.GetTag(tagType, `<`);
//   }
//   public ClosingTag(tagType: TagType) : string {
//     // let tag = this.tagType.get(tagType);
//     // if (tag !== null) {
//     //   return `</${tag}>`;
//     // }
//     // return `</p>`;
//     return this.GetTag(tagType, `</`);
//   }
//   private GetTag(tagType: TagType, openingTagPatten : string) : string {
//     let tag = this.tagType.get(tagType);
//     if (tag !== null) {
//       return `${openingTagPatten}${tag}>`;
//     }
//     return `${openingTagPatten}p>`
//   }
// }
var HtmlHandler = /** @class */ (function () {
    function HtmlHandler() {
    }
    HtmlHandler.prototype.TextChangeHandler = function (id, output) {
        var markdown = document.getElementById(id);
        var markdownOutput = document.getElementById(output);
        if (markdown !== null) {
            markdown.onkeyup = function (e) {
                if (markdown.value) {
                    markdownOutput.innerHTML = markdown.value;
                }
                else {
                    markdownOutput.innerHTML = "<p></p>";
                }
            };
        }
    };
    return HtmlHandler;
}());
