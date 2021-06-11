var player,playerKnifeImg,bgImg;
var edges,flag="closed";
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12;
var engine,battery,tools,workShop;
var count=0;
var gameState="level1";

function preload()
{
    bgImg=loadImage("Images/other-assets/floor.jpg");
    playerKnifeImg=loadImage("Images/player/player-knife.png");
}

function setup()
{
    createCanvas(1300,600);
  //  console.log(width,height);
    
    player=createSprite(1290,550,60,50);
    player.addImage(playerKnifeImg,"plr");
    player.scale=0.3;
 
//  level1();
    if(gameState==="level1")
    {

        wall1=createSprite(150,90,10,180); //first vertical top
        wall1.rotation=0;

        wall2=createSprite(260,390,320,10); //first downward slanted mid
        wall2.rotation=45;

        wall3=createSprite(80,280,150,10); //second horizontal mid
        wall3.rotation=0;

        wall4=createSprite(150,510,10,180);//first vertical bottom
        wall4.rotation=0;

        wall5=createSprite(430,229,200,10); //second upward slanted
        wall5.rotation=145;

        wall6=createSprite(550,590,600,10); //first horizontal bottom
        wall6.rotation=0;

        wall7=createSprite(670,500,600,10);//second horizontal bottom
        wall7.rotation=0;

        wall8=createSprite(350,90,10,400); //second vertical top
        wall8.rotation=0;

        wall9=createSprite(510,90,10,180); //third vertical top
        wall9.rotation=0;


        wall10=createSprite(805,90,10,400); //fourth vertical top
        wall10.rotation=0;

        wall11=createSprite(950,290,300,10); //third horizontal middle 
        wall11.rotation=0;

        wall12=createSprite(1095,90,10,400); //fourth vertical top
        wall12.rotation=0;

        engine=createSprite(100,500,50,50); 
        battery=createSprite(200,500,50,50);
        tools=createSprite(300,300,50,50);
        gun=createSprite(100,100,50,50);

        workShop=createSprite(1005,150,20,20)
    }
    if(gameState==="level2")
    {
      background("red");
    }
  }

function draw()
{
    background(0);  
    edges=createEdgeSprites();

    player.velocityX=0;
    player.velocityY=0;

    if(gameState==="level1")
    {
      level1();
   
      if(player.isTouching(workShop))
      {
          gameState="level2";
   //       setup();
            level2();
      }
    }
 

    
  
    text(mouseX+" "+mouseY,mouseX,mouseY);
    drawSprites();
  
    text(count,20,20);
    text("Workshop",940,160);
}

function level1()
{

    //camera.x=player.x;
    //camera.y=player.y; //level2
    fill('white');
    
    if(keyDown("RIGHT_ARROW")){
      player.velocityX+=8;
    }

    if(keyDown("LEFT_ARROW")){
      player.velocityX-=8;
    }

    if(keyDown("UP_ARROW")){
      player.velocityY-=8;
    }

    if(keyDown("DOWN_ARROW")){
      player.velocityY+=8;
    }

    if(player.isTouching(engine))
    {
      engine.destroy();
      count++;
    }
    if(player.isTouching(battery))
    {
      battery.destroy();
      count++;
    }
    if(player.isTouching(tools))
    {
      tools.destroy();
      count++;
    }
    if(player.isTouching(gun))
    {
      gun.destroy();
      count++;
    }
    if(count===4 && player.x>1000 &&player.y<350)
    {
      wall11.y=wall11.y-50;
    }

    player.bounceOff(wall1);
    player.bounceOff(wall2);
    player.bounceOff(wall3);
    player.bounceOff(wall4);
    player.bounceOff(wall5);
    player.bounceOff(wall6);
    player.bounceOff(wall7);
    player.bounceOff(wall8);
    player.bounceOff(wall9);
    player.bounceOff(wall10);
    player.bounceOff(wall11);
    player.bounceOff(wall12);
    player.bounceOff(edges);

}

function level2()
{
 // background("blue");
  text("Welcome to level2",350,250);
}
//createEdgeSprites();