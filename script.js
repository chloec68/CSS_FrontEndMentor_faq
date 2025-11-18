      let sections = document.querySelectorAll("section");

      for (let section of sections){
        const newContainer = document.createElement("div");
        newContainer.classList.add("answerContainer");
        newContainer.style.display = "none";
        const newContentElement = document.createElement("p");
        newContentElement.classList.add("answer");
        newContainer.appendChild(newContentElement);
        section.appendChild(newContainer);

        let newContentElements = document.querySelectorAll(".answer")

        const textsArray = ["Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.","Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.", "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!", "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."]

        for (let i=0 ; i < newContentElements.length; i++){
          newContentElements[i].textContent = textsArray[i]; 
        }
      }




      let questionContainers = document.querySelectorAll(".questionContainer");

      for (let questionContainer of questionContainers){
        questionContainer.addEventListener("click",function(){
          let plusIcon = questionContainer.closest("section").querySelector(".plus-icon");
                 if(plusIcon.src.includes("icon-plus.svg")){
            plusIcon.src = "assets/images/icon-minus.svg";
            let answerContainer = plusIcon.closest("section").querySelector(".answerContainer");
            answerContainer.style.display = "block";
          }else{
            plusIcon.src = "assets/images/icon-plus.svg";
              let answerContainer = plusIcon.closest("section").querySelector(".answerContainer");
            answerContainer.style.display = "none";
          }
        })
      }