const reviews = [
    {
      id: 1,
      name: "Muhammad Salman",
      job: "Web and Mobile Application Developer",
      img:
        "https://i2.wp.com/allovershayari.com/wp-content/uploads/2021/06/Boy-Dp-Sad-AOS.jpg?resize=577%2C600&ssl=1",
      text:
        "My name is M. Salman. My Father name is Tariq Nazir. My Qualification is BS Computer Sciencs (Continue). I live in Faisalabad.",
    },
    {
        id: 2,
        name: "Muhammad Salman",
        job: "Graphic Designer",
        img:
          "data:image/jpeg;base64,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",
        text:
          "My name is M. Salman. My Father name is Tariq Nazir. My Qualification is BS Computer Sciencs (Continue). I live in Faisalabad. Am a Professional Graphic Designer.",
      },
];
const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');

  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');

  let person = 0;

  window.addEventListener('DOMContentLoaded', function(){

    reviewPerson();
  });

  function reviewPerson(){
      const review = reviews[person];

      img.src = review.img;
      author.textContent = review.name;
      job.textContent = review.job;
      info.textContent = review.text;    
  }

  prevBtn.onclick = function () {

    person--;

    if(person < 0){
        person = reviews.length - 1;
    }

    reviewPerson();
  }

  nextBtn.onclick = function () {

    person++;

    if(person > reviews.length - 1){
        person = 0;
    }

    reviewPerson();
  }

  randomBtn.onclick = function () {

    person = Math.floor(Math.random() * reviews.length);
    reviewPerson();
  }