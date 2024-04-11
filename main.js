function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ClBahs9wB/model.json', modelLoaded());
}

function modelLoaded(){
    classifier.classify(gotResults);
}