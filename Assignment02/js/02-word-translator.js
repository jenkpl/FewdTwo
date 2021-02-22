let code = prompt("Enter language code. \nThe choices are: \nes, en, de, fr");
switch(code) {
        case "es" :
        document.write("Hello world translated to Spanish is: Hola mundo");
        break;
        case "en" :
        document.write("Hello world translated to English is: Hello world");
        break;
        case "de" :
        document.write("Hello world translated to German is: Hallo Welt");
        break;
        case "fr" :
        document.write("Hello world translated to French is: Bonjour le monde");
        break;
        default :
        document.write("This is the default message: Hello World!")
        break;
}