const select = document.querySelector(".select")

let imageDiv = document.querySelector(".dog-image")

let dogs = document.querySelector(".dog-img")

const spin = document.querySelector(".spinner")

const BREEDS_URL = "https://dog.ceo/api/breeds/list/all"


fetch(BREEDS_URL)
    .then((response)=>{
        return response.json();

    })
    .then((data)=>{
        const breed = Object.keys(data.message)


        for(let i = 0; i < breed.length; i++){
          let  option = document.createElement("option")
            option.value = breed[i];
            option.innerText = breed[i]
            select.appendChild(option)
           
        }



        select.addEventListener("change", (event)=>{

            //add load image

            spin.classList.add("show")
            // spin.style.display = "block"
         
            dogs.classList.remove("show")
        
            firstDog = `https://dog.ceo/api/breed/${event.target.value}/images/random`
            fetch(firstDog)
            .then((response)=>{
            return response.json()
                 })
                .then((data)=>{

            let imgUrl = data.message;
    
            dogs.src = imgUrl

            // spin.classList.remove("show")
            // dogs.classList.add("show")
        
            })
       
        })



        


    })


    dogs.addEventListener("load", ()=>{
        spin.classList.remove("show")
        dogs.classList.add("show")
    })

    
const { styler, spring, listen, pointer, value } = window.popmotion;

const ball = document.querySelector('.cute');
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(ballXY.get()).start(ballXY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200,
      // mass: 1,
      // damping: 10
    }).start(ballXY);
  });


  




    


    