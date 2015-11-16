(function(){
    "use strict";
    angular
        .module("commonServices")
        .value("letterVal", {data: {
            letters: [
                {
                    who:"zxcv@zxcv.zx",
                    subject:"zxc",
                    body:"zxcv zxcv zxcv zxcv zxcv zxcv zxcv zxcv"},
                {
                    who:"qwer@qwer.we",
                    subject:"asdf",
                    body:"asdf asdf asdf asdf asdf asdf asdf asdf"},
                {
                    who:"asdf@asdf.sd",
                    subject:"asdf",
                    body:"asdf asdf asdf asdf asdf asdf"}]}});

})();
