function setup()
{
    x = random(0,255);
    y = random(0,255);
    z = random(0,255);
    a = 0;
    b = 0;
    createCanvas(windowWidth,windowHeight);
    background(x, y, z);
    noLoop();
}

function draw()
{
    a = a + 1;
    //left vertical
    if(a<13)
    {
        line((windowWidth/24)*a, 0, (windowWidth/24)*a, windowHeight);
        a + 1;
    }

    b = b + 1;
    //right horizontal
    if(b<24)
    {
        line(windowWidth/2, (windowHeight/24)*b, windowWidth, (windowHeight/24)*b);
        b + 1;
    }
    line(0, windowHeight/2, windowWidth, windowHeight/2);
    
    //bottom diagonal
    line(0, (windowHeight/24)*23, windowWidth/24,windowHeight);
    line(0, (windowHeight/24)*22, windowWidth/12,windowHeight);
    line(0, (windowHeight/24)*21, windowWidth/8,windowHeight);
    line(0, (windowHeight/24)*20, windowWidth/6,windowHeight);
    line(0, (windowHeight/24)*19, (windowWidth/24)*5,windowHeight);
    line(0, (windowHeight/24)*18, (windowWidth/24)*6,windowHeight);
    line(0, (windowHeight/24)*17, (windowWidth/24)*7,windowHeight);
    line(0, (windowHeight/24)*16, (windowWidth/24)*8,windowHeight);
    line(0, (windowHeight/24)*15, (windowWidth/24)*9,windowHeight);
    line(0, (windowHeight/24)*14, (windowWidth/24)*10,windowHeight);
    line(0, (windowHeight/24)*13, (windowWidth/24)*11,windowHeight);
    line(0, windowHeight/2, windowWidth/2, windowHeight);

    line(windowWidth/24, windowHeight/2, windowWidth/2, (windowHeight/24)*23);
    line(windowWidth/12, windowHeight/2, (windowWidth/24)*13, (windowHeight/24)*23);
    line(windowWidth/8, windowHeight/2, (windowWidth/24)*14, (windowHeight/24)*23);
    line(windowWidth/6, windowHeight/2, (windowWidth/24)*15, (windowHeight/24)*23);
    line((windowWidth/24)*5, windowHeight/2, (windowWidth/24)*16, (windowHeight/24)*23);
    line((windowWidth/24)*6, windowHeight/2, (windowWidth/24)*17, (windowHeight/24)*23);
    line((windowWidth/24)*7, windowHeight/2, (windowWidth/24)*18, (windowHeight/24)*23);
    line((windowWidth/24)*8, windowHeight/2, (windowWidth/24)*19, (windowHeight/24)*23);
    line((windowWidth/24)*9, windowHeight/2, (windowWidth/24)*20, (windowHeight/24)*23);
    line((windowWidth/24)*10, windowHeight/2, (windowWidth/24)*21, (windowHeight/24)*23);
    line((windowWidth/24)*11, windowHeight/2, (windowWidth/24)*22, (windowHeight/24)*23);
    line((windowWidth/24)*12, windowHeight/2, (windowWidth/24)*23, (windowHeight/24)*23);
    line((windowWidth/24)*13, windowHeight/2, (windowWidth/24)*24, (windowHeight/24)*23);
    line((windowWidth/24)*14, windowHeight/2, (windowWidth/24)*25, (windowHeight/24)*23);
    line((windowWidth/24)*15, windowHeight/2, (windowWidth/24)*26, (windowHeight/24)*23);
    line((windowWidth/24)*16, windowHeight/2, (windowWidth/24)*27, (windowHeight/24)*23);
    line((windowWidth/24)*17, windowHeight/2, (windowWidth/24)*28, (windowHeight/24)*23);
    line((windowWidth/24)*18, windowHeight/2, (windowWidth/24)*29, (windowHeight/24)*23);
    line((windowWidth/24)*19, windowHeight/2, (windowWidth/24)*30, (windowHeight/24)*23);
    line((windowWidth/24)*20, windowHeight/2, (windowWidth/24)*31, (windowHeight/24)*23);
    line((windowWidth/24)*21, windowHeight/2, (windowWidth/24)*32, (windowHeight/24)*23);
    line((windowWidth/24)*22, windowHeight/2, (windowWidth/24)*33, (windowHeight/24)*23);

    // right diagonal
    line((windowWidth/24)*23, 0, windowWidth/2, (windowHeight/24)*11);
    line((windowWidth/24)*22, 0, windowWidth/2, (windowHeight/24)*10);
    line((windowWidth/24)*21, 0, windowWidth/2, (windowHeight/24)*9);
    line((windowWidth/24)*20, 0, windowWidth/2, (windowHeight/24)*8);
    line((windowWidth/24)*19, 0, windowWidth/2, (windowHeight/24)*7);
    line((windowWidth/24)*18, 0, windowWidth/2, (windowHeight/24)*6);
    line((windowWidth/24)*17, 0, windowWidth/2, (windowHeight/24)*5);
    line((windowWidth/24)*16, 0, windowWidth/2, (windowHeight/24)*4);
    line((windowWidth/24)*15, 0, windowWidth/2, (windowHeight/24)*3);
    line((windowWidth/24)*14, 0, windowWidth/2, (windowHeight/24)*2);
    line((windowWidth/24)*13, 0, windowWidth/2, windowHeight/24);
    line(windowWidth, 0, windowWidth/2, windowHeight/2);
    line(windowWidth, windowHeight/24, windowWidth/2, (windowHeight/24)*13);
    line(windowWidth, windowHeight/12, windowWidth/2, (windowHeight/24)*14);
    line(windowWidth, windowHeight/8, windowWidth/2, (windowHeight/24)*15);
    line(windowWidth, windowHeight/6, windowWidth/2, (windowHeight/24)*16);
    line(windowWidth, (windowHeight/24)*5, windowWidth/2, (windowHeight/24)*17);
    line(windowWidth, (windowHeight/24)*6, windowWidth/2, (windowHeight/24)*18);
    line(windowWidth, (windowHeight/24)*7, windowWidth/2, (windowHeight/24)*19);
    line(windowWidth, (windowHeight/24)*8, windowWidth/2, (windowHeight/24)*20);
    line(windowWidth, (windowHeight/24)*9, windowWidth/2, (windowHeight/24)*21);
    line(windowWidth, (windowHeight/24)*10, windowWidth/2, (windowHeight/24)*22);
    line(windowWidth, (windowHeight/24)*11, windowWidth/2, (windowHeight/24)*23);
    line(windowWidth, (windowHeight/24)*12, windowWidth/2, (windowHeight/24)*24);
    line(windowWidth, (windowHeight/24)*13, windowWidth/2, (windowHeight/24)*25);
    line(windowWidth, (windowHeight/24)*14, windowWidth/2, (windowHeight/24)*26);
    line(windowWidth, (windowHeight/24)*15, windowWidth/2, (windowHeight/24)*27);
    line(windowWidth, (windowHeight/24)*16, windowWidth/2, (windowHeight/24)*28);
    line(windowWidth, (windowHeight/24)*17, windowWidth/2, (windowHeight/24)*29);
    line(windowWidth, (windowHeight/24)*18, windowWidth/2, (windowHeight/24)*30);
    line(windowWidth, (windowHeight/24)*19, windowWidth/2, (windowHeight/24)*31);
    line(windowWidth, (windowHeight/24)*20, windowWidth/2, (windowHeight/24)*32);
    line(windowWidth, (windowHeight/24)*21, windowWidth/2, (windowHeight/24)*33);
    line(windowWidth, (windowHeight/24)*22, windowWidth/2, (windowHeight/24)*34);
    
    loop();
} 