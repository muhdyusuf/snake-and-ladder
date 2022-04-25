let numOfPlayer
let playerPlace=[]
let isplayermoveforward=true
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  }






let playerArray=[
  {name:"",
    images:"images/download(1).jpg",
    currentPosition:1,
    moveleft:0,
    isplayerstillplaying:true

  },
  { name:"",
    images:"images/download(2).jpg",
    currentPosition:1,
    moveleft:0,
    isplayerstillplaying:true

  },
  { name:"",
    images:"images/download(3).jpg",
    currentPosition:1,
    moveleft:0,
    isplayerstillplaying:true

  },
  { name:"",
    images:"images/download(4).jpg",
    currentPosition:1,
    moveleft:0,
    isplayerstillplaying:true
  }
  
]

function mapconfig(position,playerplaying){

  if(position==3){
    playerArray[playerplaying].currentPosition=21
  }
  else if(position==8){
    playerArray[playerplaying].currentPosition=30
  }
  else if(position==17){
    playerArray[playerplaying].currentPosition=13
  }
  else if(position==28){
    playerArray[playerplaying].currentPosition=84
    document.querySelector("#total").innerHTML = `That a lifetime luck your using `
  }
  else if(position==52){
    playerArray[playerplaying].currentPosition=29
  }
  else if(position==57){
    playerArray[playerplaying].currentPosition=40
  }
  else if(position==58){
    playerArray[playerplaying].currentPosition=77
  }
  else if(position==62){
    playerArray[playerplaying].currentPosition=22
  }
  else if(position==75){
    playerArray[playerplaying].currentPosition=86
    document.querySelector("#total").innerHTML = `Dont be to happy boy,the snakesis waiting for you`
  }
  else if(position==80){
    playerArray[playerplaying].currentPosition=100
    document.querySelector("#total").innerHTML = `Gotcha!! now suffer`
  }
  else if(position==88){
    playerArray[playerplaying].currentPosition=18
  }
  else if(position==90){
    playerArray[playerplaying].currentPosition=91
  }
  else if(position==95){
    playerArray[playerplaying].currentPosition=51
  }
  else if(position==97){
    playerArray[playerplaying].currentPosition=79
  }



}


/*____________________________setup page_______________________________*/



//check number of player playing
const playernamebox=document.querySelectorAll('#setplayername div')
      
      for(let i=0;i<playernamebox.length;i++){
        document.querySelector('#setplayername div').remove('div')

      }


const radios=document.querySelectorAll('input[name="radio"]')
for(var i = 0, max = radios.length; i < max; i++) {
  radios[i].onclick = function() {
      let selValue=this.value
      document.querySelector('.h1').classList.add('lower')
      document.querySelector('.howmany').classList.add('small')
     const playernamebox=document.querySelectorAll('#setplayername div')
      
      for(let i=0;i<playernamebox.length;i++){
        document.querySelector('#setplayername div').remove('div')

      }

      for(let i=0;i<selValue;i++){
        
        let playerbox=document.createElement('div')
        playerbox.setAttribute('class',`player${i+1}boxgamepage`)
        playerbox.innerHTML=`
        <p>Player ${i+1}</p>
        <img src="${playerArray[i].images}" alt="" >
        <input type="text" name="" id="player${i+1}name" placeholder="Enter name" maxlength="8" required>
        `
        document.querySelector('#setplayername').appendChild(playerbox)
        
      }

    numOfPlayer=selValue



  }
}
//start the game using button

let startbutton=document.querySelector('#startgame')

startbutton.addEventListener('click',()=>{
    // get name and set into player name array and check if name is set
    let isallnamefill=[]
      for(let i=0;i<numOfPlayer;i++){
        playerArray[i].name=document.querySelector(`#player${i+1}name`).value
        if(playerArray[i].name==""){
          isallnamefill.push("no")
          console.log("no name")
        }
        else{
          isallnamefill.push("yes")
        }
        
      }
      if(numOfPlayer<2){
        isallnamefill.push("no")
        console.log("player value not set")
      }
     
      console.log(isallnamefill)

      if(isallnamefill.indexOf('no') !== -1 || isallnamefill.length===0){
        alert("set player value and name")
      }

      else if(isallnamefill.indexOf('no') == -1 && isallnamefill.length!==0){
          console.log(numOfPlayer)
          document.querySelector('.page1').classList.add("remove")
          document.querySelector('.pageend').classList.add('remove')


            
 
        startgame()  
      }
})
/*____________________________setup page_______________________________*/





/*____________________________game page_______________________________*/
function startgame(){
 /*setup the turn for player*/
 playerPlace=[]
  
  playerArray.splice(numOfPlayer)

  
  shuffle(playerArray)
  


  let currentplayer=0

  
  console.log(numOfPlayer)

 let playerbox=document.querySelectorAll('#playerbox div')
  for(let i =0;i<playerbox.length;i++){
    playerbox[i].remove('div')
  }

  for(let i=0;i<numOfPlayer;i++){
    
    console.log(`player${i+1}created`)
    let playerbox=document.createElement('div')
    playerbox.setAttribute('class',`player${i+1}box`)
    playerbox.innerHTML=`
    <img src="${playerArray[i].images}" alt="" >
    <p>${playerArray[i].name}</p>
    `
    document.querySelector('#playerbox').appendChild(playerbox)

    


  }
 
  
  

 

  

  //draw player box in game page
  document.querySelector(`.player${currentplayer+1}box`).classList.add('background')



  const gr=document.querySelectorAll('#map div')

  function draw(){

    for(let i=0;i<playerArray.length;i++){

      for(let j=0;j<100;j++){
        if(gr[j].classList.contains(`player${i+1}`)){
          gr[j].classList.remove(`player${i+1}`)
          document.querySelector(`#player${i+1}position`).remove('div')
        }
      }

      document.getElementById(`${playerArray[i].currentPosition}`).classList.add(`player${i+1}`)
      let grid=document.createElement('div')
      //grid.setAttribute('class',"player"+(i+1))
      grid.setAttribute('id',`player${i+1}position`)
      grid.innerHTML= ` <img src="${playerArray[i].images}" alt="">`
      document.getElementById(`${playerArray[i].currentPosition}`).appendChild(grid)
      //console.log(`${playerArray[currentplayer].name} moveleft:${playerArray[currentplayer].moveleft}`)

      
    }  
      
  }
  draw()
  let dicetotal=[]
    
  // move current player
  function move(playerplaying){
    document.querySelector(`.player${playerplaying+1}box`).classList.add('background')


    let set =setInterval(()=>{
      let position=playerArray[playerplaying].currentPosition
      let moveleft=playerArray[playerplaying].moveleft
      console.log(isplayermoveforward)

      if(position<=99 && isplayermoveforward==true){
        playerArray[playerplaying].currentPosition+=1
        playerArray[playerplaying].moveleft--
        draw()

      }
      if(position==100 || isplayermoveforward==false){
        document.querySelector("#total").innerHTML = `Keep dreaming loser`
        
        isplayermoveforward=false
        playerArray[playerplaying].currentPosition-=1
        playerArray[playerplaying].moveleft--
        draw()
        console.log('masuk')

      }
      
      if(playerArray[playerplaying].moveleft===0){
        document.querySelector(`.player${playerplaying+1}box`).classList.remove('background')
        clearInterval(set)
        draw()
        isplayermoveforward=true
        draw()
        console.log(`player current position:${playerArray[playerplaying].currentPosition}`)
       
       
        /*_________________________set next player____________________________*/
        if(dicetotal[0]===dicetotal[1]){
          currentplayer=playerplaying
          document.querySelector("#total").innerHTML = `${playerArray[playerplaying].name} get another turn`
        }
        else if(dicetotal[0]!==dicetotal[1]){
          console.log(`player current position:${playerArray[playerplaying].currentPosition}`)
          mapconfig(playerArray[playerplaying].currentPosition,playerplaying)
          draw()
          if(playerArray[playerplaying].currentPosition==100){
            playerPlace.push(playerArray[playerplaying].name)
            alert(`${playerArray[playerplaying].name} is at #${playerPlace.length} place`)
            document.querySelector(`.player${playerplaying+1}box`).style.filter="opacity(40%)"
            playerArray[playerplaying].isplayerstillplaying=false
            if(playerPlace.length==numOfPlayer-1){
              for(let i=0;i<numOfPlayer;i++){
                if(playerArray[i].isplayerstillplaying){
                  playerPlace.push(playerArray[i].name)
                  break
                }
              }
              alert('gameover')
              console.log(playerArray)
              endgame()
              
            }
          }
          else if(playerArray[playerplaying].currentPosition<100){
            if(playerplaying==playerArray.length-1){
              currentplayer=0
    
            }
            else if(playerplaying<playerArray.length-1){
              currentplayer+=1
    
            }
          }
    
          while(playerArray[currentplayer].isplayerstillplaying==false){
            if(currentplayer==playerArray.length-1){
              currentplayer=0
    
            }
            else if(currentplayer<playerArray.length-1){
              currentplayer+=1
    
            }

          }
          

       
         
        }
        

        document.querySelector(`.player${currentplayer+1}box`).classList.add('background')
        document.getElementById('dicebutton').disabled=false
        
        
        /*__________________________set next player____________________________*/ 

        
        
      }
        
        
      


    },500)
    
    
    
    
    
    

  }




  //roll the dice
  let images = [
  "dice-01.svg",
  "dice-02.svg",
  "dice-03.svg",
  "dice-04.svg",
  "dice-05.svg",
  "dice-06.svg"]
  
  let rollbtn=document.querySelector('#dicebutton')


  rollbtn.addEventListener('click',()=>{
    console.log(`current player playing: ${currentplayer}`)
          document.getElementById('dice1').classList.add('shake')
          document.getElementById('dice2').classList.add('shake')

      setTimeout(()=>{
        document.getElementById('dice1').classList.remove('shake')
        document.getElementById('dice2').classList.remove('shake')
        
          
          let diceOneValue = Math.floor(Math.random()*6);
          let diceTwoValue = Math.floor(Math.random()*6);
          dicetotal=[]
          dicetotal.push(diceOneValue+1)
          dicetotal.push(diceTwoValue+1)
          document.querySelector("#dice1").setAttribute("src", `images/${images[diceOneValue]}`);
          document.querySelector("#dice2").setAttribute("src", `images/${images[diceTwoValue]}`);
          document.querySelector("#total").innerHTML = "Your roll is " + ( (diceOneValue +1) + (diceTwoValue + 1) );
         
          playerArray[currentplayer].moveleft=dicetotal[0]+dicetotal[1]
          document.getElementById('dicebutton').disabled=true
          move(currentplayer)
      },
      1000
      );
  })
  if(playerArray.length==1){
    return
  }
  
}
/*____________________________game page_______________________________*/

/*____________________________end game page___________________________*/
function endgame(array){

  console.log(array)
 
  document.querySelector('.page1').classList.add("remove")
   
 
  document.querySelector('.pageend').classList.remove('remove')
  let leaderboard=document.querySelector('.leaderboard')
  for(let i=0;i<playerPlace.length;i++){
    let li=document.createElement('div')
    li.setAttribute('class',`no${i+1}`)
    li.innerText=`${playerPlace[i]}`
    leaderboard.appendChild(li)

  }
  document.querySelector('#newgame').addEventListener('click',()=>{
    window.location.reload();

      console.log(playerArray)
    }
    
  
  )
  document.querySelector('#anotherround').addEventListener('click',()=>{
      playerPlace=[]
      for(let i=0;i<playerArray.length;i++){
        playerArray[i].currentPosition=1
        playerArray[i].moveleft=0
        playerArray[i].isplayerstillplaying=true

      }
      shuffle(playerArray)
      
      document.querySelector('.pageend').classList.add('remove')
    }
    
  
  )





}





