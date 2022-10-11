function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_kaERoDfp/model.json', modelReady);

}

function modelReady() {
    classifier.classify(gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = 'I can hear -' + results[0].label;

        document.getElementById("result_confidence").innerHTML = 'Accuracy -' +
            (results[0].confidence * 100).toFixed(2) + "%";

        document.getElementById("result_label").style.color = "rgb(" +
            random_number_r + "," + random_number_g + "," + random_number_r + ")";

        document.getElementById("result_confidence").style.color = "rgb(" +
            random_number_r + "," + random_number_g + "," + random_number_r + ")";

        img = document.getElementById('ear');
       
        

        if (results[0].label == "lion roar") {
            img.src("lion.jpg");
        } else if (results[0].label == "tiger roar") {
            img.src("tiger.webp");
        } else if (results[0].label == "dog bark") {
            img.src("dog.jpg");
        } else(results[0].label == "Background Noise")
             {
                img.src("ear.jpg");
             }



    }
}