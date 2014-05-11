#StringyJS

Javascript library for working with strings.

##Instalation
* Download minified version `stringy.min.js` or debug ready version `stringy.js` of library from `dist` folder.
* Put `<script type="text/javascript" src="stringy.min.js"></script>` to your html file

##Initialization
StringyJS is AMD ready. You can use RequireJS or not use it (this way you can use StringyJS methods from window.Stringy global object).

###Capitalize
Capitalizes the first character in the string. If `all` is true, all words in the string will be capitalized.

    Stringy.capitalize(string[, all]);
    Stringy.capitalize('capitalize one word');
    => Capitalize one word

    Stringy.capitalize('capitalize all words', true);
    => Capitalize All Words


###Templates
Assigns variables to tokens in a string. If an object is passed, it's properties can be assigned using the object's keys `{name}`, otherwise it can be accessed by the argument number beginning with `0`.

    Stringy.template(template[, *arguments]);
    Stringy.template('This is {0}!', 'template');
    => This is template!
    
    Stringy.template('This is {param} template {what}', {
      param: 'named',
      what: 'placeholder'
    });
    => This is named template placeholder