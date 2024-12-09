let responses = [1, 2, 3, 4, 5]; 
let currentIndex = 0; 
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; 
    }
}
shuffleArray(responses);
selector.addEventListener("click", function() {
    console.log("the form is working");
    let response = responses[currentIndex];

    console.log(response);

    if(response == 1){
        output.innerHTML = "For you, our team would recommend our <b>Lavender and Eucalyptus </b> candle. This blend is sure to elevate any space with its refreshing and delicate aroma! The calming lavender combined with the crisp, invigorating eucalyptus creates a balanced scent that’s perfect for enhancing any room with a touch of freshness and sophistication.";
        image.src = "images/mock1.jpg"
    }
    if(response == 2){
        output.innerHTML = "Our <b>Sandlewood and Cedarwood</b> sounds like the product for you. The seamless blend of a smooth, earthy aroma with slight notes of cedarwood results in a well-balanced scent that appeals to a wide range of tastes! It’s the perfect choice for adding a touch of sophistication to any space.";
        image.src = "images/mock2.jpg"
    }
    if(response == 3){
        output.innerHTML = "We believe you’d enjoy our <b>Sea Salt and Driftwood</b> candle. Blending the crisp sharpness of the ocean with warm wood undertones, this candle is sure to bring a feeling of natural freshness to a space. This blend is ideal for moments when you want to evoke the calmness of the coast.";
        image.src = "images/mock3.jpg"
    }
    if(response == 4){
        output.innerHTML = "Our <b>Mint and Fern</b> candle blends the scent of cool mint with the warm and earthy tones of fern for a refreshing yet invigorating scent. It creates a vibrant yet calming atmosphere, perfect for adding a fresh touch to any space. This blend is sure to enhance your home's ambiance with a natural and refreshing feel.";
        image.src = "images/mock4.jpg"
    }
    if(response == 5){
        output.innerHTML = "The best fit for you would be our new <b>Jasmine and Green Tea</b> candle. One of our more timeless blends that is sure to bring warmth and depth to any space. Whether you're seeking to add a touch of comfort to your surroundings or simply elevate the mood, this candle offers a versatile fragrance that complements any occasion.";
        image.src = "images/mock5.jpg"
    }

    currentIndex++;

    if(currentIndex >= responses.length) {
        currentIndex = 0;
        shuffleArray(responses); 
    }
});
