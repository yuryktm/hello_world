(function(){
    "use strict";
    angular
        .module("commonServices")
        .value("lettersValue", {data: {
            letters: [
                {
                    id: 1,
                    who:"zxcv@zxcv.zx",
                    subject:"zxc",
                    body:"zxcv zxcv zxcv zxcv zxc   v zxcv zxcv zxcv",
                    readed: true,
                    selected: true,
                    checked: false},
                {
                    id: 2,
                    who:"qwer@qwer.we",
                    subject:"qwer",
                    body:"qwer qwer qwer qwer qwer qwer",
                    readed: true,
                    selected: false,
                    checked: false},
                {
                    id: 33,
                    who:"fd@qwer.we",
                    subject:"qw565er",
                    body:"qwfder qwer qwer qwer qwer qwer",
                    readed: true,
                    selected: false,
                    checked: false},
                {
                    id: 22,
                    who:"ddqwer@qwer.we",
                    subject:"qw56er",
                    body:"qwer qwer qwer qwer qwer qwer",
                    readed: false,
                    selected: false,
                    checked: false},
                {
                    id: 222,
                    who:"hghgqwer@qwer.we",
                    subject:"q5665wer",
                    body:"qwer q65656565wer qwer qwer qwer qwer",
                    readed: false,
                    selected: false,
                    checked: false},
                {
                    id: 3,
                    who:"asdf@asdf.sd",
                    subject:"asdf",
                    body:"asdf asdf asdf asdf asdf asdf",
                    readed: false,
                    selected: false,
                    checked: false}]}});
})();
