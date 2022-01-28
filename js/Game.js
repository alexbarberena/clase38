class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
   }
   car1=createSprite(100,200);
   car2=createSprite(300,200);
   car3=createSprite(500,200);
   car4=createSprite(700,200);

   cars=[car1,car2,car3,car4];
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    
    
    if(allPlayers !== undefined){
      //var display_position = 130;
      //indice de array
      var index=0;
      //posicion x y posicion y de los carros
      var x=0;
      var y;
      for(var plr in allPlayers){
        
         //agregar uno al indice para cada  ciclo
         index=index+1;

         //colocando autos en una posicion x
         x=x+200;

         //colocando autos en una posicion y con la base de datos
         y=displayHeight-allPlayers[plr].distance;
         cars[index-1].x=x;
         cars[index-1].y=y;

         if(index===player.index){
            cars[index-1].shapeColor="red";
        
            camera.positon.x=displayWidth/2;
            camera.positon.y=cars[index-1].y;
          }
             /* textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)*/
        }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    
  
    }

  }
   drawSprites();
  }
}
