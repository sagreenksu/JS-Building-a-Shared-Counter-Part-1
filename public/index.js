async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');
    const refreshButton = document.querySelector('#refresh-button');


    let respJSON = await fetch('http://localhost:9001/counter');
    let resp = await respJSON.json();
    let countValue = resp.value;

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }

    async function refresh(){
        let respJSON = await fetch('http://localhost:9001/counter');
        let resp = await respJSON.json();
        countValue = resp.value
        countContainer.textContent = countValue;
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    refreshButton.addEventListener('click', refresh);
    countContainer.textContent = countValue;
}
main()