let play_button = document.querySelectorAll(".play-button")[0].children[0];
let button_input = document.querySelectorAll(".play-button")[0].children[0].children[0].textContent;

function start(){
    play_button.addEventListener('click', ()=>{
        if (button_input === 'PLAY!'){
                button_input = "GAME BEGAIN";
                document.querySelectorAll(".play-button")[0].children[0].children[0].textContent = button_input;
                
        }
    });
    return button_input;
}
start();
function game_logic(computer_input,user_input){
     // logic to check if you loose or win
            /*
            p win -- p and r 
            s win -- s and p
            r win -- r and s

            or vice versa
            */
    console.log(computer_input + "  "+ user_input);
    let winner = "";
    if (computer_input === "paper" && user_input === "rock"){
        winner = "computer";
    }if(computer_input === "rock" && user_input === "paper"){
        winner = "You";
    }if(computer_input === "scissor" || user_input === "paper"){
        winner = "computer";
    }if(computer_input === "paper" || user_input === "scissor"){
        winner = "You";
    }if(computer_input === "rock" || user_input === "scissor"){
        winner = "computer";
    }if(computer_input === "scissor" || user_input === "rock"){
        winner = "You";
    }if(computer_input === user_input){
        winner = "draw";
    }if(winner === ""){
        console.log("fgf");
    }
    return winner;
}
let arr = ["rock","paper","scissor"];
    let computer_input = "";
    let user_input = "";
let turns = 5;
let computers_win = 0;
let users_win = 0;
let draw_count = 0 ;
let winner = "";
document.addEventListener('keydown',(event)=>{
    let begin = start();
    //computer logic
    
    
    
    if(begin === "GAME BEGAIN"){
        let status = document.querySelectorAll(".status")[0].children[0].style;
        status.position = "fixed";
        status.fontSize = "50px";
        status.width = "100%";
        status.left = "0px"; 
        status.lineHeight = "130px";          
        if(turns > 0){
            let key = event.key;          
            if (key === 'r' ||  key === 'R'){
                computer_input = arr[(Math.floor(Math.random() * arr.length))];
                user_input = "rock";
                if (computer_input === "rock"){
                    document.querySelectorAll(".img-1")[0].src = "/storage/lr.png";
                }else if(computer_input === "paper"){
                    document.querySelectorAll(".img-1")[0].src = "/storage/lp.png";
                }else if(computer_input === "scissor"){
                    document.querySelectorAll(".img-1")[0].src = "/storage/ls.png";
                }
                document.querySelectorAll(".img-2")[0].src = "/storage/rr.png";
                 
                
                
                winner = game_logic(computer_input,user_input);
                if (turns > 0 && winner ==="computer"){
                    computers_win += 1;
                    console.log(computers_win);
                }else if(turns > 0 && winner ==="You"){
                    users_win += 1;
                    console.log(users_win);
                }else if(turns > 0 && winner ==="draw"){
                    draw_count += 1;
                    console.log(draw_count);
                }
                turns = turns - 1; 

                // output
                document.querySelectorAll(".status")[0].children[0].textContent = "There will be total "+turns+" turns";
                document.querySelectorAll(".play-button")[0].children[0].children[0].textContent = "GAME ON";

            }else if (key === 'p' ||  key === 'P') {
                computer_input = arr[(Math.floor(Math.random() * arr.length))];
                user_input = "paper";
                if (computer_input === "rock"){
                    document.querySelectorAll(".img-1")[0].src = "/storage/lr.png";
                }else if(computer_input === "paper"){
                    document.querySelectorAll(".img-1")[0].src = "/storage/lp.png";
                }else if(computer_input === "scissor"){
                    document.querySelectorAll(".img-1")[0].src = "/storage/ls.png";
                }
                document.querySelectorAll(".img-2")[0].src = "/storage/rp.png";
                 

                
                winner = game_logic(computer_input,user_input);
                if (turns > 0 && winner ==="computer"){
                    computers_win += 1;
                    console.log(computers_win);
                }else if(turns > 0 && winner ==="You"){
                    users_win += 1;
                    console.log(users_win);
                }else if(turns > 0 && winner ==="draw"){
                    draw_count += 1;
                    console.log(draw_count);
                }
                turns = turns - 1;

                 // output
                
                document.querySelectorAll(".status")[0].children[0].textContent = "There will be total "+turns+" turns";
                document.querySelectorAll(".play-button")[0].children[0].children[0].textContent = "GAME ON";

            } else if(key === 's' ||  key === 'S'){
                computer_input = arr[(Math.floor(Math.random() * arr.length))];
                user_input = "scissor";
                if (computer_input === "rock"){
                    document.querySelectorAll(".img-1")[0].src = "/storage/lr.png";
                }else if(computer_input === "paper"){
                    document.querySelectorAll(".img-1")[0].src = "/storage/lp.png";
                }else if(computer_input === "scissor"){
                    document.querySelectorAll(".img-1")[0].src = "/storage/ls.png";
                }
                document.querySelectorAll(".img-2")[0].src = "/storage/rs.png";
                 

                ;
                winner = game_logic(computer_input,user_input);
                if (turns > 0 && winner ==="computer"){
                    computers_win += 1;
                    console.log(computers_win);
                }else if(turns > 0 && winner ==="You"){
                    users_win += 1;
                    console.log(users_win);
                }else if(turns > 0 && winner ==="draw"){
                    draw_count += 1;
                    console.log(draw_count);
                }
                turns = turns - 1


                // output
                
                document.querySelectorAll(".status")[0].children[0].textContent = "There will be total "+turns+" turns";
                document.querySelectorAll(".play-button")[0].children[0].children[0].textContent = "GAME ON";

            }else{
                alert('wrong input');
            }
            if (turns < 0){
            }
        }
        if (turns === 0){
            let value = "Computers Wins:-"+computers_win+" Draw:-"+draw_count+" Your Wins:-"+users_win;
            document.querySelectorAll(".play-button")[0].children[0].children[0].textContent = value;
            setTimeout(() => {
                button_input = "REPLAY";
                document.querySelectorAll(".play-button")[0].children[0].children[0].textContent = button_input;

            }, 2000);
            
        
        }
}
});

// REPLAY
play_button.addEventListener('click', ()=>{
    if (button_input === "REPLAY") {
        location.reload(); 
    }
    
});
