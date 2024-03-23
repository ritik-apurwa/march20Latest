interface Attribute {
    name: string;
    description: string;
    value_description: string;
  }
  
  export interface HtmlElement {
    id: number;
    tag: string;
    description: string;
    attributes: Attribute[];
  }
  
  export const sdata: HtmlElement[] = [
    {
      id: 1,
      tag: "a",
      description:
        "Defines a hyperlink, linking to another web page or resource.",
      attributes: [
        {
          name: "href",
          description: "Specifies the URL of the linked resource.",
          value_description: "The URL can be absolute or relative.",
        },
        {
          name: "target",
          description: "Indicates where to display the linked content.",
          value_description:
            "Common values include '_self', '_blank', '_parent', '_top'.",
        },
        {
          name: "download",
          description:
            "Indicates that the linked resource should be downloaded rather than displayed.",
          value_description:
            "Specifies the filename to be used when downloading.",
        },
        {
          name: "rel",
          description:
            "Specifies the relationship between the current document and the linked resource.",
          value_description:
            "Common values include 'nofollow', 'noopener', 'noreferrer'.",
        },
        {
          name: "title",
          description:
            "Provides additional information about the linked resource.",
          value_description:
            "The title text is often displayed as a tooltip on hover.",
        },
      ],
    },
    {
      id: 2,
      tag: "abbr",
      description:
        "Defines an abbreviation or acronym, typically rendered with a dotted underline to indicate its full form on hover.",
      attributes: [
        {
          name: "title",
          description: "Specifies the full form of the abbreviation or acronym.",
          value_description:
            "The full form is often displayed as a tooltip on hover.",
        },
      ],
    },
    {
      id: 3,
      tag: "address",
      description:
        "Defines contact information for the author/owner of a document.",
      attributes: [],
    },
    {
      id: 4,
      tag: "area",
      description: "Defines an area inside an image map.",
      attributes: [
        {
          name: "alt",
          description:
            "Provides alternative text for the area, displayed when the image cannot be loaded or for screen readers.",
          value_description: "Specifies a brief description of the area.",
        },
        {
          name: "coords",
          description: "Specifies the coordinates of the area.",
          value_description:
            "Specifies the shape and size of the area. Format varies based on the shape.",
        },
        {
          name: "href",
          description: "Specifies the URL of the linked resource.",
          value_description: "The URL can be absolute or relative.",
        },
        {
          name: "shape",
          description: "Specifies the shape of the area.",
          value_description: "Common values include 'rect', 'circle', 'poly'.",
        },
        {
          name: "target",
          description: "Indicates where to display the linked content.",
          value_description:
            "Common values include '_self', '_blank', '_parent', '_top'.",
        },
      ],
    },
    {
      id: 5,
      tag: "article",
      description:
        "Defines an independent, self-contained content/article section within a document.",
      attributes: [],
    },
    {
      id: 6,
      tag: "aside",
      description:
        "Defines content aside from the content (such as sidebars) typically related to the surrounding content.",
      attributes: [],
    },
    {
      id: 7,
      tag: "audio",
      description: "Embeds audio content in a document.",
      attributes: [
        {
          name: "autoplay",
          description:
            "Specifies that the audio will start playing as soon as it is ready.",
          value_description:
            "No value required. The presence of the attribute indicates autoplay.",
        },
        {
          name: "controls",
          description:
            "Specifies that audio controls (such as play, pause, volume) should be displayed.",
          value_description:
            "No value required. The presence of the attribute indicates controls.",
        },
        {
          name: "loop",
          description:
            "Specifies that the audio will start over again, every time it is finished.",
          value_description:
            "No value required. The presence of the attribute indicates loop.",
        },
        {
          name: "preload",
          description:
            "Specifies if and how the audio should be loaded when the page loads.",
          value_description: "Common values include 'none', 'metadata', 'auto'.",
        },
        {
          name: "src",
          description: "Defines the URL of the audio file to be embedded.",
          value_description: "Specifies the path to the audio file.",
        },
      ],
    },
    { id: 8, tag: "b", description: "Defines bold text.", attributes: [] },
    {
      id: 9,
      tag: "base",
      description: "Specifies the base URI for all relative links in a document.",
      attributes: [
        {
          name: "href",
          description: "Specifies the base URL.",
          value_description:
            "Specifies the URL to be used as the base for relative URLs.",
        },
      ],
    },
    {
      id: 10,
      tag: "bdi",
      description:
        "Isolates a portion of text that might be displayed in a different direction from other parts of the content.",
      attributes: [
        {
          name: "dir",
          description: "Specifies the directionality of the text.",
          value_description:
            "Common values include 'ltr' (left-to-right) and 'rtl' (right-to-left).",
        },
      ],
    },
  
    //   {
    //     tag: "bdo",
    //     description:
    //       "Overrides the default text direction for the element and any of its descendants.",
    //     attributes: [
    //       {
    //         name: "dir",
    //         description: "Specifies the directionality of the text.",
    //         value_description:
    //           "Common values include 'ltr' (left-to-right) and 'rtl' (right-to-left).",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "blockquote",
    //     description: "Defines a quoted passage in a document.",
    //     attributes: [
    //       {
    //         name: "cite",
    //         description: "Specifies the URL of the quoted source.",
    //         value_description: "Specifies the URL of the source of the quotation.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "body",
    //     description:
    //       "Defines the content of an HTML document, excluding the document's metadata.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "br",
    //     description: "Defines a line break.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "button",
    //     description: "Defines a clickable button.",
    //     attributes: [
    //       {
    //         name: "disabled",
    //         description: "Specifies that the button should be disabled.",
    //         value_description:
    //           "No value required. The presence of the attribute indicates disabled.",
    //       },
    //       {
    //         name: "form",
    //         description: "Specifies one or more forms the button belongs to.",
    //         value_description: "Specifies the ID of the form element.",
    //       },
    //       {
    //         name: "type",
    //         description: "Specifies the type of button.",
    //         value_description: "Common values include 'submit', 'reset', 'button'.",
    //       },
    //     ],
    //   },
  
    //   {
    //     tag: "canvas",
    //     description: "Defines an area for drawing graphics via JavaScript.",
    //     attributes: [
    //       {
    //         name: "height",
    //         description: "Specifies the height of the canvas.",
    //         value_description: "Specifies the height of the canvas in pixels.",
    //       },
    //       {
    //         name: "width",
    //         description: "Specifies the width of the canvas.",
    //         value_description: "Specifies the width of the canvas in pixels.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "caption",
    //     description: "Defines the title of a table.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "cite",
    //     description:
    //       "Defines the title of a creative work, such as a book, movie, or article.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "code",
    //     description: "Defines a piece of computer code.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "col",
    //     description: "Specifies the properties of one or more columns in a table.",
    //     attributes: [
    //       {
    //         name: "span",
    //         description:
    //           "Specifies the number of columns the <col> element should span.",
    //         value_description: "Specifies the number of columns to span.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "colgroup",
    //     description:
    //       "Specifies a group of one or more columns in a table for formatting purposes.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "data",
    //     description: "Defines the content of a data list.",
    //     attributes: [
    //       {
    //         name: "value",
    //         description: "Specifies the value associated with the data element.",
    //         value_description: "Specifies the value of the data element.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "datalist",
    //     description: "Defines a list of pre-defined options for an input element.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "dd",
    //     description:
    //       "Defines a description or value within a description list (<dl>).",
    //     attributes: [],
    //   },
    //   {
    //     tag: "del",
    //     description: "Defines text that has been deleted from a document.",
    //     attributes: [
    //       {
    //         name: "cite",
    //         description:
    //           "Specifies the URL of the document that explains why the text was deleted.",
    //         value_description: "Specifies the URL of the explanation document.",
    //       },
    //       {
    //         name: "datetime",
    //         description: "Specifies the date and time when the text was deleted.",
    //         value_description:
    //           "Specifies the date and time in the format 'YYYY-MM-DDThh:mm:ssTZD'.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "details",
    //     description:
    //       "Defines additional details or controls that the user can view or interact with.",
    //     attributes: [
    //       {
    //         name: "open",
    //         description:
    //           "Specifies that the details should be visible (open) to the user by default.",
    //         value_description:
    //           "No value required. The presence of the attribute indicates open.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "dfn",
    //     description: "Defines a term that is being defined within a document.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "dialog",
    //     description: "Defines a dialog box or window.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "div",
    //     description: "Defines a division or section within a document.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "dl",
    //     description: "Defines a description list.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "dt",
    //     description: "Defines a term (or name) within a description list (<dl>).",
    //     attributes: [],
    //   },
    //   {
    //     tag: "em",
    //     description: "Defines emphasized text.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "embed",
    //     description: "Defines an external interactive content or plugin.",
    //     attributes: [
    //       {
    //         name: "src",
    //         description: "Specifies the URL of the external content.",
    //         value_description: "Specifies the URL of the external content.",
    //       },
    //       {
    //         name: "type",
    //         description: "Specifies the MIME type of the external content.",
    //         value_description: "Specifies the MIME type of the external content.",
    //       },
    //       {
    //         name: "width",
    //         description: "Specifies the width of the embedded content.",
    //         value_description: "Specifies the width of the embedded content.",
    //       },
    //       {
    //         name: "height",
    //         description: "Specifies the height of the embedded content.",
    //         value_description: "Specifies the height of the embedded content.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "fieldset",
    //     description:
    //       "Groups related form elements together and defines a set of form controls.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "figcaption",
    //     description: "Defines a caption or legend for a <figure> element.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "figure",
    //     description:
    //       "Represents self-contained content, like illustrations, diagrams, photos, or code listings.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "footer",
    //     description: "Defines the footer of a document or section.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "form",
    //     description: "Defines an HTML form for user input.",
    //     attributes: [
    //       {
    //         name: "action",
    //         description: "Specifies the URL where the form data will be submitted.",
    //         value_description:
    //           "Specifies the URL where the form data will be submitted.",
    //       },
    //       {
    //         name: "method",
    //         description:
    //           "Specifies the HTTP method to be used when submitting the form.",
    //         value_description:
    //           "Specifies the HTTP method to be used when submitting the form (e.g., 'get' or 'post').",
    //       },
    //       {
    //         name: "target",
    //         description:
    //           "Specifies where to display the response received after submitting the form.",
    //         value_description:
    //           "Specifies where to display the response received after submitting the form.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "h1 - h6",
    //     description: "Defines headings of various levels.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "head",
    //     description:
    //       "Defines the metadata of the document, including its title and links to external resources.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "header",
    //     description: "Defines the header of a document or section.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "hr",
    //     description:
    //       "Defines a thematic break between paragraphs or sections of content.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "html",
    //     description: "Defines the root of an HTML document.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "i",
    //     description: "Defines italic text.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "iframe",
    //     description: "Defines an inline frame for embedding another HTML document.",
    //     attributes: [
    //       {
    //         name: "src",
    //         description: "Specifies the URL of the inline frame content.",
    //         value_description: "Specifies the URL of the inline frame content.",
    //       },
    //       {
    //         name: "width",
    //         description: "Specifies the width of the inline frame.",
    //         value_description: "Specifies the width of the inline frame.",
    //       },
    //       {
    //         name: "height",
    //         description: "Specifies the height of the inline frame.",
    //         value_description: "Specifies the height of the inline frame.",
    //       },
    //       {
    //         name: "frameborder",
    //         description:
    //           "Specifies whether to display a border around the inline frame.",
    //         value_description:
    //           "Specifies whether to display a border around the inline frame.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "img",
    //     description: "Defines an image.",
    //     attributes: [
    //       {
    //         name: "src",
    //         description: "Specifies the URL of the image.",
    //         value_description: "Specifies the URL of the image.",
    //       },
    //       {
    //         name: "alt",
    //         description: "Provides alternative text for the image.",
    //         value_description: "Specifies alternative text for the image.",
    //       },
    //       {
    //         name: "width",
    //         description: "Specifies the width of the image.",
    //         value_description: "Specifies the width of the image.",
    //       },
    //       {
    //         name: "height",
    //         description: "Specifies the height of the image.",
    //         value_description: "Specifies the height of the image.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "input",
    //     description: "Defines an input control for user input.",
    //     attributes: [
    //       {
    //         name: "type",
    //         description: "Specifies the type of input control.",
    //         value_description:
    //           "Specifies the type of input control (e.g., 'text', 'checkbox', 'radio').",
    //       },
    //       {
    //         name: "name",
    //         description: "Specifies the name of the input control.",
    //         value_description: "Specifies the name of the input control.",
    //       },
    //       {
    //         name: "value",
    //         description: "Specifies the initial value of the input control.",
    //         value_description: "Specifies the initial value of the input control.",
    //       },
    //       {
    //         name: "placeholder",
    //         description:
    //           "Specifies a short hint that describes the expected value of the input control.",
    //         value_description:
    //           "Specifies a short hint that describes the expected value of the input control.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "ins",
    //     description: "Defines text that has been inserted into a document.",
    //     attributes: [
    //       {
    //         name: "cite",
    //         description:
    //           "Specifies the URL of the document that explains why the text was inserted.",
    //         value_description: "Specifies the URL of the explanation document.",
    //       },
    //       {
    //         name: "datetime",
    //         description: "Specifies the date and time when the text was inserted.",
    //         value_description:
    //           "Specifies the date and time in the format 'YYYY-MM-DDThh:mm:ssTZD'.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "kbd",
    //     description: "Defines keyboard input.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "label",
    //     description:
    //       "Defines a label for an <input>, <select>, <textarea>, or <button> element.",
    //     attributes: [
    //       {
    //         name: "for",
    //         description: "Specifies which form element a label is bound to.",
    //         value_description: "Specifies the ID of the form element.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "legend",
    //     description: "Defines a caption for the content of a <fieldset> element.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "li",
    //     description:
    //       "Defines a list item within an ordered or unordered list (<ol> or <ul>).",
    //     attributes: [],
    //   },
    //   {
    //     tag: "link",
    //     description:
    //       "Defines the relationship between a document and an external resource.",
    //     attributes: [
    //       {
    //         name: "href",
    //         description: "Specifies the URL of the linked resource.",
    //         value_description: "Specifies the URL of the linked resource.",
    //       },
    //       {
    //         name: "rel",
    //         description:
    //           "Specifies the relationship between the current document and the linked resource.",
    //         value_description:
    //           "Specifies the relationship between the current document and the linked resource.",
    //       },
    //       {
    //         name: "type",
    //         description: "Specifies the MIME type of the linked resource.",
    //         value_description: "Specifies the MIME type of the linked resource.",
    //       },
    //       {
    //         name: "media",
    //         description:
    //           "Specifies the media type for which the linked resource is intended.",
    //         value_description:
    //           "Specifies the media type for which the linked resource is intended.",
    //       },
    //       {
    //         name: "hreflang",
    //         description: "Specifies the language of the linked resource.",
    //         value_description: "Specifies the language of the linked resource.",
    //       },
    //       {
    //         name: "sizes",
    //         description:
    //           "Specifies the sizes of the icons for the linked resource.",
    //         value_description:
    //           "Specifies the sizes of the icons for the linked resource.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "main",
    //     description: "Defines the main content of a document.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "map",
    //     description: "Defines a client-side image map.",
    //     attributes: [
    //       {
    //         name: "name",
    //         description: "Specifies the name of the image map.",
    //         value_description: "Specifies the name of the image map.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "mark",
    //     description: "Defines marked/highlighted text.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "meta",
    //     description: "Defines metadata about an HTML document.",
    //     attributes: [
    //       {
    //         name: "name",
    //         description: "Specifies the name of the metadata.",
    //         value_description: "Specifies the name of the metadata.",
    //       },
    //       {
    //         name: "content",
    //         description: "Specifies the value of the metadata.",
    //         value_description: "Specifies the value of the metadata.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "meter",
    //     description: "Defines a scalar measurement within a known range.",
    //     attributes: [
    //       {
    //         name: "value",
    //         description: "Specifies the current value of the measurement.",
    //         value_description: "Specifies the current value of the measurement.",
    //       },
    //       {
    //         name: "min",
    //         description: "Specifies the minimum value of the measurement range.",
    //         value_description:
    //           "Specifies the minimum value of the measurement range.",
    //       },
    //       {
    //         name: "max",
    //         description: "Specifies the maximum value of the measurement range.",
    //         value_description:
    //           "Specifies the maximum value of the measurement range.",
    //       },
    //       {
    //         name: "low",
    //         description: "Specifies the lower bound of the  range",
    //         value_description: "Specifies the lower bound of the 'low' range.",
    //       },
    //       {
    //         name: "high",
    //         description: "Specifies the upper bound of the  range",
    //         value_description: "Specifies the upper bound of the 'high' range.",
    //       },
    //       {
    //         name: "optimum",
    //         description: "Specifies the optimal value of the measurement.",
    //         value_description: "Specifies the optimal value of the measurement.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "nav",
    //     description: "Defines navigation links.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "noscript",
    //     description:
    //       "Defines alternate content to be displayed for users whose browsers do not support JavaScript.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "object",
    //     description:
    //       "Defines an embedded object, such as an image, audio, video, Java applet, or Flash animation.",
    //     attributes: [
    //       {
    //         name: "data",
    //         description: "Specifies the URL of the embedded object.",
    //         value_description: "Specifies the URL of the embedded object.",
    //       },
    //       {
    //         name: "type",
    //         description: "Specifies the MIME type of the embedded object.",
    //         value_description: "Specifies the MIME type of the embedded object.",
    //       },
    //       {
    //         name: "width",
    //         description: "Specifies the width of the embedded object.",
    //         value_description: "Specifies the width of the embedded object.",
    //       },
    //       {
    //         name: "height",
    //         description: "Specifies the height of the embedded object.",
    //         value_description: "Specifies the height of the embedded object.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "ol",
    //     description: "Defines an ordered (numbered) list.",
    //     attributes: [
    //       {
    //         name: "reversed",
    //         description:
    //           "Specifies that the list items should be numbered in reverse order.",
    //         value_description:
    //           "No value required. The presence of the attribute indicates reversed numbering.",
    //       },
    //       {
    //         name: "start",
    //         description: "Specifies the starting value of the ordered list.",
    //         value_description: "Specifies the starting value of the ordered list.",
    //       },
    //       {
    //         name: "type",
    //         description: "Specifies the numbering style of the ordered list.",
    //         value_description:
    //           "Specifies the numbering style of the ordered list (e.g., '1', 'A', 'a', 'I', 'i').",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "optgroup",
    //     description:
    //       "Defines a group of related options within a <select> element.",
    //     attributes: [
    //       {
    //         name: "disabled",
    //         description: "Specifies that the option group should be disabled.",
    //         value_description:
    //           "No value required. The presence of the attribute indicates disabled.",
    //       },
    //       {
    //         name: "label",
    //         description: "Specifies a label for the option group.",
    //         value_description: "Specifies a label for the option group.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "option",
    //     description: "Defines an option within a <select> element.",
    //     attributes: [
    //       {
    //         name: "disabled",
    //         description: "Specifies that the option should be disabled.",
    //         value_description:
    //           "No value required. The presence of the attribute indicates disabled.",
    //       },
    //       {
    //         name: "label",
    //         description: "Specifies a label for the option.",
    //         value_description: "Specifies a label for the option.",
    //       },
    //       {
    //         name: "selected",
    //         description:
    //           "Specifies that the option should be pre-selected when the page loads.",
    //         value_description:
    //           "No value required. The presence of the attribute indicates pre-selected.",
    //       },
    //       {
    //         name: "value",
    //         description: "Specifies the value of the option.",
    //         value_description: "Specifies the value of the option.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "output",
    //     description: "Defines the result of a calculation or user action.",
    //     attributes: [
    //       {
    //         name: "for",
    //         description:
    //           "Specifies the ID of the form element that the output element is associated with.",
    //         value_description: "Specifies the ID of the form element.",
    //       },
    //       {
    //         name: "form",
    //         description: "Specifies the form that the output element belongs to.",
    //         value_description: "Specifies the ID of the form element.",
    //       },
    //       {
    //         name: "name",
    //         description: "Specifies the name of the output element.",
    //         value_description: "Specifies the name of the output element.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "p",
    //     description: "Defines a paragraph.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "param",
    //     description: "Defines parameters for an <object> element.",
    //     attributes: [
    //       {
    //         name: "name",
    //         description: "Specifies the name of the parameter.",
    //         value_description: "Specifies the name of the parameter.",
    //       },
    //       {
    //         name: "value",
    //         description: "Specifies the value of the parameter.",
    //         value_description: "Specifies the value of the parameter.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "picture",
    //     description:
    //       "Defines a container for multiple image sources and their corresponding <source> elements for responsive images.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "pre",
    //     description:
    //       "Defines preformatted text, preserving both spaces and line breaks.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "progress",
    //     description:
    //       "Defines an element representing the completion progress of a task.",
    //     attributes: [
    //       {
    //         name: "value",
    //         description: "Specifies the current value of the progress bar.",
    //         value_description: "Specifies the current value of the progress bar.",
    //       },
    //       {
    //         name: "max",
    //         description: "Specifies the maximum value of the progress bar.",
    //         value_description: "Specifies the maximum value of the progress bar.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "q",
    //     description: "Defines a short inline quotation.",
    //     attributes: [
    //       {
    //         name: "cite",
    //         description: "Specifies the URL of the source of the quotation.",
    //         value_description: "Specifies the URL of the source of the quotation.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "rp",
    //     description:
    //       "Defines what to show in browsers that do not support ruby annotations.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "rt",
    //     description:
    //       "Defines an explanation or pronunciation of characters (for East Asian typography) that are part of a ruby annotation.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "ruby",
    //     description:
    //       "Defines a ruby annotation, used for East Asian typography annotations.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "s",
    //     description:
    //       "Defines text that is no longer correct, relevant, or accurate.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "samp",
    //     description: "Defines sample output from a computer program.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "script",
    //     description: "Defines a client-side script, such as JavaScript.",
    //     attributes: [
    //       {
    //         name: "src",
    //         description: "Specifies the URL of an external script file.",
    //         value_description: "Specifies the URL of an external script file.",
    //       },
    //       {
    //         name: "type",
    //         description: "Specifies the MIME type of the script.",
    //         value_description: "Specifies the MIME type of the script.",
    //       },
    //       {
    //         name: "async",
    //         description:
    //           "Specifies that the script should be executed asynchronously.",
    //         value_description:
    //           "No value required. The presence of the attribute indicates asynchronous execution.",
    //       },
    //       {
    //         name: "defer",
    //         description:
    //           "Specifies that the script should be executed after the page has been parsed.",
    //         value_description:
    //           "No value required. The presence of the attribute indicates deferred execution.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "section",
    //     description: "Defines a section in a document.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "select",
    //     description: "Defines a dropdown list.",
    //     attributes: [
    //       {
    //         name: "disabled",
    //         description: "Specifies that the dropdown list should be disabled.",
    //         value_description:
    //           "No value required. The presence of the attribute indicates disabled.",
    //       },
    //       {
    //         name: "multiple",
    //         description: "Specifies that multiple options can be selected.",
    //         value_description:
    //           "No value required. The presence of the attribute indicates multiple selection.",
    //       },
    //       {
    //         name: "size",
    //         description:
    //           "Specifies the number of visible options in the dropdown list.",
    //         value_description: "Specifies the number of visible options.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "small",
    //     description: "Defines smaller text.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "source",
    //     description:
    //       "Defines multiple media resources for <video> and <audio> elements.",
    //     attributes: [
    //       {
    //         name: "src",
    //         description: "Specifies the URL of the media resource.",
    //         value_description: "Specifies the URL of the media resource.",
    //       },
    //       {
    //         name: "type",
    //         description: "Specifies the MIME type of the media resource.",
    //         value_description: "Specifies the MIME type of the media resource.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "span",
    //     description: "Defines a section in a document.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "strong",
    //     description: "Defines strong importance, often displayed as bold text.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "style",
    //     description:
    //       "Defines style information for a document or a part of a document.",
    //     attributes: [
    //       {
    //         name: "type",
    //         description: "Specifies the MIME type of the style sheet.",
    //         value_description: "Specifies the MIME type of the style sheet.",
    //       },
    //       {
    //         name: "media",
    //         description:
    //           "Specifies the media type for which the style sheet is intended.",
    //         value_description:
    //           "Specifies the media type for which the style sheet is intended.",
    //       },
    //       {
    //         name: "scoped",
    //         description:
    //           "Specifies that the styles only apply to the parent element and its descendants.",
    //         value_description:
    //           "No value required. The presence of the attribute indicates scoped styling.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "sub",
    //     description: "Defines subscripted text.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "summary",
    //     description: "Defines a visible heading for a <details> element.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "sup",
    //     description: "Defines superscripted text.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "svg",
    //     description:
    //       "Defines a container for Scalable Vector Graphics (SVG) content.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "table",
    //     description: "Defines a table.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "tbody",
    //     description: "Defines the body content of a table.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "td",
    //     description: "Defines a data cell within a table.",
    //     attributes: [
    //       {
    //         name: "colspan",
    //         description:
    //           "Specifies the number of columns that the cell should span.",
    //         value_description:
    //           "Specifies the number of columns that the cell should span.",
    //       },
    //       {
    //         name: "rowspan",
    //         description: "Specifies the number of rows that the cell should span.",
    //         value_description:
    //           "Specifies the number of rows that the cell should span.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "template",
    //     description:
    //       "Defines a template that can be used to stamp out new DOM nodes.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "textarea",
    //     description: "Defines a multi-line text input control.",
    //     attributes: [
    //       {
    //         name: "cols",
    //         description:
    //           "Specifies the visible width of the text control, in average character widths.",
    //         value_description: "Specifies the visible width of the text control.",
    //       },
    //       {
    //         name: "rows",
    //         description:
    //           "Specifies the visible height of the text control, in lines.",
    //         value_description: "Specifies the visible height of the text control.",
    //       },
    //       {
    //         name: "maxlength",
    //         description:
    //           "Specifies the maximum number of characters that the user can input.",
    //         value_description: "Specifies the maximum number of characters.",
    //       },
    //       {
    //         name: "wrap",
    //         description:
    //           "Specifies how the text in the textarea is to be wrapped when submitted in a form.",
    //         value_description:
    //           "Specifies how the text in the textarea is to be wrapped.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "tfoot",
    //     description: "Defines the footer content of a table.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "th",
    //     description: "Defines a header cell within a table.",
    //     attributes: [
    //       {
    //         name: "colspan",
    //         description:
    //           "Specifies the number of columns that the cell should span.",
    //         value_description:
    //           "Specifies the number of columns that the cell should span.",
    //       },
    //       {
    //         name: "rowspan",
    //         description: "Specifies the number of rows that the cell should span.",
    //         value_description:
    //           "Specifies the number of rows that the cell should span.",
    //       },
    //       {
    //         name: "scope",
    //         description:
    //           "Specifies the set of header cells that the current cell is related to.",
    //         value_description:
    //           "Specifies the set of header cells that the current cell is related to.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "thead",
    //     description: "Defines the header content of a table.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "time",
    //     description: "Defines a specific period in time or a date.",
    //     attributes: [
    //       {
    //         name: "datetime",
    //         description: "Specifies the date and/or time of the element.",
    //         value_description:
    //           "Specifies the date and/or time in the format 'YYYY-MM-DDThh:mm:ssTZD'.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "title",
    //     description: "Defines the title of the document.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "tr",
    //     description: "Defines a row within a table.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "track",
    //     description: "Defines text tracks for <audio> and <video> elements.",
    //     attributes: [
    //       {
    //         name: "src",
    //         description: "Specifies the URL of the track file.",
    //         value_description: "Specifies the URL of the track file.",
    //       },
    //       {
    //         name: "kind",
    //         description: "Specifies the kind of text track.",
    //         value_description:
    //           "Specifies the kind of text track (e.g., 'subtitles', 'captions', 'descriptions').",
    //       },
    //       {
    //         name: "label",
    //         description: "Specifies the title of the text track.",
    //         value_description: "Specifies the title of the text track.",
    //       },
    //       {
    //         name: "srclang",
    //         description: "Specifies the language of the track text data.",
    //         value_description: "Specifies the language of the track text data.",
    //       },
    //       {
    //         name: "default",
    //         description: "Specifies that the track should be enabled by default.",
    //         value_description:
    //           "No value required. The presence of the attribute indicates default.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "u",
    //     description: "Defines text with an unarticulated annotation.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "ul",
    //     description: "Defines an unordered (bulleted) list.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "var",
    //     description: "Defines a variable.",
    //     attributes: [],
    //   },
    //   {
    //     tag: "video",
    //     description: "Defines a video or movie.",
    //     attributes: [
    //       {
    //         name: "src",
    //         description: "Specifies the URL of the video file.",
    //         value_description: "Specifies the URL of the video file.",
    //       },
    //       {
    //         name: "autoplay",
    //         description:
    //           "Specifies that the video should start playing automatically.",
    //         value_description:
    //           "No value required. The presence of the attribute indicates autoplay.",
    //       },
    //       {
    //         name: "controls",
    //         description:
    //           "Specifies that video controls should be displayed (play, pause, volume, etc.).",
    //         value_description:
    //           "No value required. The presence of the attribute indicates controls.",
    //       },
    //       {
    //         name: "loop",
    //         description:
    //           "Specifies that the video should start over again, every time it is finished.",
    //         value_description:
    //           "No value required. The presence of the attribute indicates loop.",
    //       },
    //       {
    //         name: "muted",
    //         description:
    //           "Specifies that the audio output of the video should be muted.",
    //         value_description:
    //           "No value required. The presence of the attribute indicates muted.",
    //       },
    //       {
    //         name: "poster",
    //         description:
    //           "Specifies an image to be shown while the video is downloading, or until the user hits the play button.",
    //         value_description: "Specifies the URL of the poster image.",
    //       },
    //       {
    //         name: "preload",
    //         description:
    //           "Specifies if and how the video should be loaded when the page loads.",
    //         value_description:
    //           "Specifies if and how the video should be loaded when the page loads.",
    //       },
    //       {
    //         name: "width",
    //         description: "Specifies the width of the video player.",
    //         value_description: "Specifies the width of the video player.",
    //       },
    //       {
    //         name: "height",
    //         description: "Specifies the height of the video player.",
    //         value_description: "Specifies the height of the video player.",
    //       },
    //     ],
    //   },
    //   {
    //     tag: "wbr",
    //     description: "Defines a possible line-break.",
    //     attributes: [],
    //   },
  ];
  