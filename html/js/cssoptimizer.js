function sayhello() {
    alert("Hello");
    $()
}

cleaner_css = function() {
    console_element = document.createElement("pre");
    cleaner_css_id = "cleaner_css_console" + Math.floor(Math.random() * 3000).toString();
    console_element.setAttribute("id", cleaner_css_id);
    $("body").append(console_element);
    this.uotputid = $("#" + cleaner_css_id);

    this.uotputid.css({
        "border": "3px solid red",
        "position": "absolute",
        "margin": "0",
        "top": "0",
        "bottom": "0",
        "left": "0",
        "right": "0",
        "text-align": "left"
    });
    //this.uotputid.draggable();

    this.printcss = function(ss) {
        //for (var int = ss.cssRules.length - 1; int > -1; int--) {
        textforinsert = this.uotputid.html();
        for (var int = 0; int < ss.cssRules.length; int++) {
            //if (document.querySelector(ss.cssRules[int].selectorText) != null) {
            textforinsert = textforinsert + "\n" + ss.cssRules[int].cssText;
            //this.uotputid.append(pelement);
            //}
        }
        this.uotputid.html(textforinsert);
        //alert("Hello");
    }

    this.processedcssfiles = function() {

        for (var int = 0; int < document.styleSheets.length; int++) {
            pelement = document.createElement("div");
            pelement.setAttribute("id", document.styleSheets[int].href)
            text = document.createTextNode(document.styleSheets[int].href);
            pelement.appendChild(text);
            //this.uotputid.append(pelement);
            this.printcss(document.styleSheets[int]);
        }
        var editor = ace.edit(this.uotputid.attr("id"));
        editor.setTheme("ace/theme/twilight");
        editor.getSession().setMode("ace/mode/css");

    }
    //this.newproperty = "hello it is object";
}

function clearcss() {
    //processedcssfiles();
    //alert(cleaner_css.newproperty);
    t = new cleaner_css();

    t.processedcssfiles();
    //alert(t.newproperty);
}