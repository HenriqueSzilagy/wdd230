function SentenceGenerator(){
    
    const adjective = ["happy", "sad", "angry", "excited", "tired", "hungry", "thirsty", "brave", "scared", "funny"];
    const subject = ["witch", "cat", "elder",  "girl", "man", "boy", "woman", "dog"];
    const verb = ["jumped", "ran", "walked", "skipped", "cried", "laughed", "drove", "crawled", "flew", "smiled"];
    const object = ["over the moon", "to the store", "through the park", "down the street", "into the ocean", "up the mountain"];
    
    const randomadjective = adjective[Math.floor(Math.random() * adjective.length)];
    const randomSubject = subject[Math.floor(Math.random() * subject.length)];
    const randomVerb = verb[Math.floor(Math.random() * verb.length)];
    const randomObject = object[Math.floor(Math.random() * object.length)];
    
    return `The ${randomSubject} ${randomVerb} ${randomObject}.`;
  }
const generateButton = document.querySelector("#generate-button");
const sentenceContainer = document.querySelector("#sentence");
      
generateButton.addEventListener("click", function() {
  sentenceContainer.textContent = SentenceGenerator();
});
 