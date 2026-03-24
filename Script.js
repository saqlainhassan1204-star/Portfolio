let tabs = document.querySelectorAll(".tab-link");
let contents = document.querySelectorAll(".Contentdetail");

tabs.forEach(function(tab){

    tab.addEventListener("click", function(){

        // remove active from all tabs
        tabs.forEach(function(item){
            item.classList.remove("active-link");
        });

        // hide all content
        contents.forEach(function(content){
            content.classList.remove("active-tab");
        });

        // activate clicked tab
        this.classList.add("active-link");

        // show correct content
        let tabname = this.getAttribute("data-tab");
        document.getElementById(tabname).classList.add("active-tab");

    });

});