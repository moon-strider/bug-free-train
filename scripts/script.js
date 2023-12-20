
window.onload = function() {
    let anchors = document.getElementsByClassName("tab");
    for(let i = 0; i < anchors.length; i++) {
        let anchor = anchors[i];
        anchor.onclick = function() {
            for(let j = 0; j < anchors.length; j++) {
                let anchorS = anchors[j];
                anchorS.classList.remove("tab-selected");
                console.log(`removing selected from tab ${j}`);
            }
            anchor.classList.add("tab-selected");
            console.log(`adding selected to tab ${i}`);
        }
    }
}