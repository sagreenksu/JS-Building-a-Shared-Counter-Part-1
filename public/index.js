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
        patch(countValue);
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
        patch(countValue);
    }

    async function refresh(){
        let respJSON = await fetch('http://localhost:9001/counter');
        let resp = await respJSON.json();
        countValue = resp.value
        countContainer.textContent = countValue;
    }

    async function patch(Val){
        fetch('http://localhost:9001/counter', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                value: Val
            })
        }).then(res => {
            return res.json()
        })
        .catch(error => console.log('ERROR'))
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    refreshButton.addEventListener('click', refresh);
    countContainer.textContent = countValue;
}
main()

