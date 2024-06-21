"use strict";
const trs = document.querySelectorAll("tr");
trs.forEach((item)=>{
    const copy = item.children[1].cloneNode(true);
    item.children[item.children.length - 1].before(copy);
});

//# sourceMappingURL=index.f75de5e1.js.map
