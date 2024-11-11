function getUsers() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok){                                      
                throw new Error('ko the lay du lieu');
            }
        })
        .then(data =>{
            resolve(data);
        })
        .catch(error => {
            reject(error);
        });
    });
}

getUsers()
    .then(data=> {
        console.log('danh ch nguoi dung:', data);
        console.log('Tong so nguoi dung:', data.length);
    })
    .catch(error => {
        console.error('da xay ra loi: ', error);
    })