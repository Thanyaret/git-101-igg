myFirstAsync = () =>{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Success');
        }, 250);
    })
}

msg = async () => {
    const SuccessMessage = await myFirstAsync();
    console.log('Yay! ', SuccessMessage);

}
msg();