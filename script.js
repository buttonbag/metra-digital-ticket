const randNum = () => {
    return Math.round(Math.random() * Math.floor(255));
} 

function changeColor() {
    let c1 = randNum();
    let c2 = randNum();
    let c3 = randNum();
    let bg1 = randNum();
    let bg2 = randNum();
    let bg3 = randNum();

    function primaryColor() {
        
        console.log(c1, c2, c3);
        
        while((c1-c2 < 60) && (c3-c2 < 60)) {
            c1 = randNum();
            c2 = randNum();
            c3 = randNum();
            console.log('narrow', c1, c2, c3);
        }
        
        for (let i = 0; i < 3; i++) {
            document.documentElement.style.setProperty(`--c[i]`, c[i]);
            // const element = array[i];            
        }

        // document.documentElement.style.setProperty(`--c1`, c1);
        // document.documentElement.style.setProperty(`--c2`, c2);
        // document.documentElement.style.setProperty(`--c3`, c3);    
    }
    
    function secondaryColor() {
        
        console.log(bg1, bg2, bg3);
        
        if((bg1-bg2 < 60) && (bg3-bg2 < 60)) {
            bg1 = randNum();
            bg2 = randNum();
            bg3 = randNum();
            console.log('narrow', bg1, bg2, bg3);
        }
        
        document.documentElement.style.setProperty(`--bg1`, bg1);
        document.documentElement.style.setProperty(`--bg2`, bg2);
        document.documentElement.style.setProperty(`--bg3`, bg3);    
    }
    
    
    // if((c1-bg1 <= 60) || (c3-c2 <= 60)) {
    //     c2 = randNum();
    //     console.log('narrow', c1, c2, c3);
    // }

    primaryColor();
    secondaryColor();
}

window.addEventListener('click', changeColor);
// setInterval(changeColor, 200);