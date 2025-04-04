let score = 0;
let r_no = 0;

const questions = [
 {
  "q1": "I want to learn Japanese.",
  "q2": "______ aprender japonés. ",
  "correct": "Quiero aprender japonés.",
  "answer": "quiero"
 },
 {
  "q1": "Do you want a coffee?",
  "q2": "¿_____ un café?",
  "correct": "¿Quieres un café?",
  "answer": "quieres"
 },
 {
  "q1": "She wants to leave early.",
  "q2": "Ella _____ salir temprano.",
  "correct": "Ella quiere salir temprano.",
  "answer": "quiere"
 },
 {
  "q1": "We want to travel to Spain.",
  "q2": "_____ viajar a España. ",
  "correct": "Quiero viajar a España.",
  "answer": "quiero"
 },
 {
  "q1": "Do you all want to watch a movie?",
  "q2": "¿_____ ver una película?",
  "correct": "¿Quieres ver una película?",
  "answer": "quieres"
 },
 {
  "q1": "They want to buy a house.",
  "q2": "_____ comprar una casa.",
  "correct": "Quiero comprar una casa.",
  "answer": "quiero"
 },
 {
  "q1": "I tried to help, but I couldn’t.",
  "q2": "_____ ayudar, pero no pude. ",
  "correct": "Quise ayudar, pero no pude.",
  "answer": "quise"
 },
 {
  "q1": "Did you try to talk to him?",
  "q2": "¿_____ hablar con él?",
  "correct": "¿Quieres hablar con él?",
  "answer": "quieres"
 },
 {
  "q1": "Juan wanted to come, but he was busy.",
  "q2": "Juan _____ venir, pero estaba ocupado. ",
  "correct": "Juan quiso venir, pero estaba ocupado.",
  "answer": "quiso"
 },
 {
  "q1": "We wanted to call you yesterday.",
  "q2": "_____ llamarte ayer. ",
  "correct": "Quise llamarte ayer.",
  "answer": "quise"
 },
 {
  "q1": "Did you all want to study together?",
  "q2": "¿_____ estudiar juntos? ",
  "correct": "¿Queremos estudiar juntos?",
  "answer": "queremos"
 },
 {
  "q1": "They refused to wait.",
  "q2": "No _____ esperar. ",
  "correct": "No quiero esperar.",
  "answer": "quiero"
 },
 {
  "q1": "I wanted to be a doctor when I was a child.",
  "q2": "_____ ser médico cuando era niño. ",
  "correct": "Quería ser médico cuando era niño.",
  "answer": "quería"
 },
 {
  "q1": "Did you want to play with me?",
  "q2": "¿_____ jugar conmigo? ",
  "correct": "¿Quieres jugar conmigo?",
  "answer": "quieres"
 },
 {
  "q1": "She wanted to travel the world.",
  "q2": "Ella _____ viajar por el mundo.",
  "correct": "Ella quiere viajar por el mundo.",
  "answer": "quiere"
 },
 {
  "q1": "We wanted to watch the maovie together.",
  "q2": "_____ ver la película juntos. ",
  "correct": "Queremos ver la película juntos.",
  "answer": "queremos"
 },
 {
  "q1": "Did you all want to leave earlier?",
  "q2": "¿_____ salir más temprano? ",
  "correct": "¿Quieres salir más temprano?",
  "answer": "quieres"
 },
 {
  "q1": "They wanted to stay longer.",
  "q2": "_____ quedarse más tiempo.",
  "correct": "Quiero quedarse más tiempo.",
  "answer": "quiero"
 },
 {
  "q1": "I am a student.",
  "q2": "Yo _____ estudiante.",
  "correct": "Yo soy estudiante.",
  "answer": "soy"
 },
 {
  "q1": "You are my best friend.",
  "q2": "Tú _____ mi mejor amigo.",
  "correct": "Tú eres mi mejor amigo.",
  "answer": "eres"
 },
 {
  "q1": "She is very intelligent.",
  "q2": "Ella _____ muy inteligente.",
  "correct": "Ella es muy inteligente.",
  "answer": "es"
 },
 {
  "q1": "We are from Spain.",
  "q2": "Nosotros _____ de España.",
  "correct": "Nosotros somos de España.",
  "answer": "somos"
 },
 {
  "q1": "You all are nice.",
  "q2": "Vosotros _____ simpáticos.",
  "correct": "Vosotros sois simpáticos.",
  "answer": "sois"
 },
 {
  "q1": "They are doctors.",
  "q2": "Ellos _____ médicos.",
  "correct": "Ellos son médicos.",
  "answer": "son"
 },
 {
  "q1": "I was the first to arrive.",
  "q2": "_____ el primero en llegar.",
  "correct": "Fui el primero en llegar.",
  "answer": "fui"
 },
 {
  "q1": "Were you at the concert?",
  "q2": "¿_____ al concierto?",
  "correct": "¿Fuiste al concierto?",
  "answer": "fuiste"
 },
 {
  "q1": "He was a great leader.",
  "q2": "Él _____ un gran líder.",
  "correct": "Él fue un gran líder.",
  "answer": "fue"
 },
 {
  "q1": "We were good friends.",
  "q2": "_____ buenos amigos.",
  "correct": "Fuimos buenos amigos.",
  "answer": "fuimos"
 },
 {
  "q1": "You all were very kind.",
  "q2": "Vosotros _____ muy amables.",
  "correct": "Vosotros fuisteis muy amables.",
  "answer": "fuisteis"
 },
 {
  "q1": "They were champions.",
  "q2": "Ellos _____ campeones.",
  "correct": "Ellos fueron campeones.",
  "answer": "fueron"
 },
 {
  "q1": "When I was a child, I played a lot.",
  "q2": "Cuando _____ niño, jugaba mucho.",
  "correct": "Cuando era niño, jugaba mucho.",
  "answer": "era"
 },
 {
  "q1": "You were very quiet.",
  "q2": "Tú _____ muy callado.",
  "correct": "Tú eras muy callado.",
  "answer": "eras"
 },
 {
  "q1": "He was a good teacher.",
  "q2": "Él _____ un buen profesor.",
  "correct": "Él era un buen profesor.",
  "answer": "era"
 },
 {
  "q1": "We were neighbors years ago.",
  "q2": "_____ vecinos hace años.",
  "correct": "Éramos vecinos hace años.",
  "answer": "éramos"
 },
 {
  "q1": "You all were very young back then.",
  "q2": "_____ muy jóvenes en ese entonces.",
  "correct": "Erais muy jóvenes en ese entonces.",
  "answer": "erais"
 },
 {
  "q1": "They were difficult times.",
  "q2": "_____ tiempos difíciles.",
  "correct": "Eran tiempos difíciles.",
  "answer": "eran"
 },
 {
  "q1": "I will be famous one day.",
  "q2": "_____ famoso algún día.",
  "correct": "Seré famoso algún día.",
  "answer": "seré"
 },
 {
  "q1": "You will be a great doctor.",
  "q2": "_____ un gran doctor.",
  "correct": "Serás un gran doctor.",
  "answer": "serás"
 },
 {
  "q1": "She will be the president.",
  "q2": "Ella _____ la presidenta.",
  "correct": "Ella será la presidenta.",
  "answer": "será"
 },
 {
  "q1": "We will be stronger after this.",
  "q2": "_____ más fuertes después de esto.",
  "correct": "Seremos más fuertes después de esto.",
  "answer": "seremos"
 },
 {
  "q1": "You all will always be welcome.",
  "q2": "_____ bienvenidos siempre.",
  "correct": "Seréis bienvenidos siempre.",
  "answer": "seréis"
 },
 {
  "q1": "They will be the winners.",
  "q2": "Ellos _____ los ganadores.",
  "correct": "Ellos serán los ganadores.",
  "answer": "serán"
 },
 {
  "q1": "It would be interesting to know more about you.",
  "q2": "_____ interesante conocer más sobre ti.",
  "correct": "Sería interesante conocer más sobre ti.",
  "answer": "sería"
 },
 {
  "q1": "You would be a good leader.",
  "q2": "_____ un buen líder.",
  "correct": "Serías un buen líder.",
  "answer": "s3rías"
 },
 {
  "q1": "It would be better to wait.",
  "q2": "_____ mejor esperar.",
  "correct": "Sería mejor esperar.",
  "answer": "sería"
 },
 {
  "q1": "We would be happier at the beach.",
  "q2": "_____ más felices en la playa.",
  "correct": "Seríamos más felices en la playa.",
  "answer": "seríamos"
 },
 {
  "q1": "You all would be well received.",
  "q2": "_____ bien recibidos.",
  "correct": "Seríais bien recibidos.",
  "answer": "seríais"
 },
 {
  "q1": "They would be famous if they sang more.",
  "q2": "_____ famosos si cantaran más.",
  "correct": "Serían famosos si cantaran más.",
  "answer": "serían"
 },
 {
  "q1": "I have been very lucky.",
  "q2": "He _____ muy afortunado.",
  "correct": "He sido muy afortunado.",
  "answer": "sido"
 },
 {
  "q1": "You have been a great friend.",
  "q2": "Has _____ un gran amigo.",
  "correct": "Has sido un gran amigo.",
  "answer": "sido"
 },
 {
  "q1": "It has been an amazing experience.",
  "q2": "Ha _____ una experiencia increíble.",
  "correct": "Ha sido una experiencia increíble.",
  "answer": "sido"
 },
 {
  "q1": "We have been witnesses to the change.",
  "q2": "Hemos _____ testigos del cambio.",
  "correct": "Hemos sido testigos del cambio.",
  "answer": "sido"
 },
 {
  "q1": "You all have been very generous.",
  "q2": "Habéis _____ muy generosos.",
  "correct": "Habéis sido muy generosos.",
  "answer": "sido"
 },
 {
  "q1": "They have been difficult times.",
  "q2": "Han _____ tiempos difíciles.",
  "correct": "Han sido tiempos difíciles.",
  "answer": "sido"
 },
 {
  "q1": "It had been a dream come true.",
  "q2": "Había _____ un sueño hecho realidad.",
  "correct": "Había sido un sueño hecho realidad.",
  "answer": "sido"
 },
 {
  "q1": "You had been very patient.",
  "q2": "Habías _____ muy paciente.",
  "correct": "Habías sido muy paciente.",
  "answer": "sido"
 },
 {
  "q1": "It had been a great challenge.",
  "q2": "Había _____ un gran reto.",
  "correct": "Había sido un gran reto.",
  "answer": "sido"
 },
 {
  "q1": "We had been good students.",
  "q2": "Habíamos _____ buenos estudiantes.",
  "correct": "Habíamos sido buenos estudiantes.",
  "answer": "sido"
 },
 {
  "q1": "You all had been very kind to him.",
  "q2": "Habíais _____ muy amables con él.",
  "correct": "Habíais sido muy amables con él.",
  "answer": "sido"
 },
 {
  "q1": "They had been the best moments.",
  "q2": "Habían _____ los mejores momentos.",
  "correct": "Habían sido los mejores momentos.",
  "answer": "sido"
 },
 {
  "q1": "I hope it is possible.",
  "q2": "Ojalá _____ posible.",
  "correct": "Ojalá sea posible.",
  "answer": "sea"
 },
 {
  "q1": "I hope you are happy.",
  "q2": "Espero que _____ feliz.",
  "correct": "Espero que seas feliz.",
  "answer": "seas"
 },
 {
  "q1": "I doubt it is true.",
  "q2": "Dudo que ______ verdad.",
  "correct": "Dudo que sea verdad.",
  "answer": "sea"
 },
 {
  "q1": "We want to be friends forever.",
  "q2": "Queremos que ______ amigos para siempre.",
  "correct": "Queremos que seamos amigos para siempre.",
  "answer": "seamos"
 },
 {
  "q1": "I hope you all are responsible.",
  "q2": "Espero que _____ responsables.",
  "correct": "Espero que seáis responsables.",
  "answer": "seáis"
 },
 {
  "q1": "It’s important that they be on time.",
  "q2": "Es importante que _____ puntuales.",
  "correct": "Es importante que sean puntuales.",
  "answer": "sean"
 },
 {
  "q1": "If I were rich, I would travel more.",
  "q2": "Si _____ rico, viajaría más.",
  "correct": "Si fuera rico, viajaría más.",
  "answer": "fuera"
 },
 {
  "q1": "If you were him, I would accept the offer.",
  "q2": "Si _____ tú, aceptaría la oferta.",
  "correct": "Si fueras tú, aceptaría la oferta.",
  "answer": "fueras"
 },
 {
  "q1": "If it were easier, I would do it.",
  "q2": "Si _____ más fácil, lo haría.",
  "correct": "Si fuera más fácil, lo haría.",
  "answer": "fuera"
 },
 {
  "q1": "If we were students, we would have discounts.",
  "q2": "Si _____ estudiantes, tendríamos descuentos.",
  "correct": "Si fuéramos estudiantes, tendríamos descuentos.",
  "answer": "fuéramos"
 },
 {
  "q1": "If you all were responsible, you would pass.",
  "q2": "Si _____ responsables, aprobaríais.",
  "correct": "Si fuerais responsables, aprobaríais.",
  "answer": "fuerais"
 },
 {
  "q1": "If they were honest, I would believe them.",
  "q2": "Si _____ sinceros, les creería.",
  "correct": "Si fueran sinceros, les creería.",
  "answer": "fueran"
 }
];

let currentQ = null;

function getRandomIndex() {
    return Math.floor(Math.random() * questions.length);
}

function loadQuestion() {
    if (questions.length === 0) {
        document.getElementById("quiz-container").innerHTML = `<h2>Test Complete!</h2><p>Your score: ${score}/3</p>`;
        return;
    }

    r_no = getRandomIndex();
    currentQ = questions[r_no];
    $("#q3").hide();
    
    document.getElementById("q1").innerText = currentQ.q1;
    document.getElementById("q2").innerText = currentQ.q2;
    document.getElementById("q3").innerText = currentQ.correct;
}

function checkAnswer() {
    
    let ans = document.getElementById("ans").value;
    if (ans.toLowerCase() === currentQ.answer) {
        score++;
        questions.splice(r_no, 1); // Remove the used question
        $("#q2").hide();
        $("#qbox").css("background", "#00ff03")
        $("#q3").show();
        setTimeout(() => {
        document.getElementById("ans").value =""
            $("#qbox").css("background", "")
            $("#q2").show();
            $("#q3").hide();
            loadQuestion()                        
        }, 3000);
        
    } else {
        alert("Try again, you can do it. Don't give up! The correct answer is: " + CurrentQ.answer);
        $("#qbox").css("background", "#ff0300")
        document.getElementById("ans").value ="";
    }
}

$(document).ready(function () {
    loadQuestion();
    $("#submit").click(function () {
        checkAnswer();
    });
    $("#next").click(function () {
        let ans = document.getElementById("ans").value;
        if (ans === "") {
            alert("enter answer");
        } else {
            alert("after answering, press submit")
        }
        
    })
    
    
});
