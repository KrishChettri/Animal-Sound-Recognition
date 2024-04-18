function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ClBahs9wB/model.json', modelLoaded);
}

function modelLoaded(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if(error){
        console.error(error);
    }
    else {
        console.log(results);
        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);

        document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label;
        document.getElementById("accuracy").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb(" +r+ "," +g+ "," +b+")";
        document.getElementById("accuracy").style.color = "rgb(" +r+ "," +g+ "," +b+ ")";

        img1 = document.getElementById("animal");


        if(results[0].label == "Background Noise")
        {
         img1.src="Ear.jpeg";
        }
        else if(results[0].label == "Cat Meow")
        {
            img1.src="cat gif.gif";
        }
        else if(results[0].label == "Cow Moo")
        {
            img1.src="Dancing Cow.gif";
        }
        else if(results[0].label == "Dog Bark")
        {
            img1.src="Dancing doge.gif";
        }
        else{
            img1.src="Dancing Tiger gif.gif";
        }
    }
}