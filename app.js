const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Boss");
    }

    else if(hr == 12) {
        speak("Good noon sir");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon sir");
    }

    else {
        speak("Good Evening sir");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating Karen");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Sir";
        speech.text = finalText;
    }

    else if(message.includes('karen you up')) {
        const finalText = "or you saw always";
        speech.text = finalText;
    }

    else if(message.includes('thanks buddy')) {
        const finalText = "enjoy yourself sir";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine sir tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('your creators name')) {
        const finalText = "My creator name is Prajesh";
        speech.text = finalText;
    }

    else if(message.includes('good morning')) {
        const finalText = "good morning prajesh, congratulations on completing the rigorous training wheels protocol in gaining access to your suits full capability so where would you like to take me tonight track are located.";
        speech.text = finalText;
    }

    else if(message.includes('good afternoon')) {
        const finalText = "good afternoon prajesh, congratulations on completing the rigorous training wheels protocol in gaining access to your suits full capability so where would you like to take me tonight track are located.";
        speech.text = finalText;
    }

    else if(message.includes('good evening')) {
        const finalText = "good evening prajesh, congratulations on completing the rigorous training wheels protocol in gaining access to your suits full capability so where would you like to take me tonight track are located.";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google sir";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram sir";
        speech.text = finalText;
    }

    else if(message.includes('open netflix')) {
        window.open("https://netflix.com", "_blank");
        const finalText = "Opening netflix sir";
        speech.text = finalText;
    }

    else if(message.includes('open schedule')) {
        window.open("timetable.jpg");
        const finalText = "Opening schedule sir";
        speech.text = finalText;
    }

    else if(message.includes('open syllabus')) {
        window.open("https://www.rajalakshmi.org/downloads/syllabus/R2023/R2023-CSBS-Curriculum_and_Syllabus.pdf", "_blank");
        const finalText = "Opening the syllabus sir";
        speech.text = finalText;
    }

    else if(message.includes('open rec website')) {
        window.open("https://www.rajalakshmi.org/", "_blank");
        const finalText = "Opening the website sir";
        speech.text = finalText;
    }

    else if(message.includes('open calendar')) {
        window.open("https://www.rajalakshmi.org/downloads/AC/REC-AC-2024-25-ODD-UG-I.PDF", "_blank");
        const finalText = "Opening the calendar sir";
        speech.text = finalText;
    }

    else if(message.includes('open map')) {
        window.open("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWsrFsAC6L9AE_on8X2UPcBithiEWCNkgkwQ&s");
        const finalText = "Opening map sir. from rec cafe you should go straight and take an left sir by the right side lift with capacity of 16 passengers is available sir";
        speech.text = finalText;
    }

    else if(message.includes('what do we miss')) {
        const finalText = "ill continue to run variations on the interface, but you should probably prpepare for your guests";
        speech.text = finalText;
    }

    else if(message.includes('wake up')) {
        const finalText = "welcome home sir";
        speech.text = finalText;
    }

    else if(message.includes('open youtube')) {
        window.open("https://www.youtube.com/", "_blank");
        const finalText = "Opening youtube sir";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('play') || message.includes('play')) {
        window.open(`https://www.youtube.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on youtube regarding " + message + "sir";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message + "sir";
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message + "sir";
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator sir";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google sir";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}