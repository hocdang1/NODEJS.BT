function fetchDataFromAPI(callback) {
     const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';

    fetch(apiUrl)
        .them(response => response.json())
        .them(data => {
            callback(null, data);
        })
        .catch(error =>{
            callback(error,null);
        });
    }

    function handleApiData(error, data) {
        if (error) {
            console.log('da thay doi data',error);
        } else {
            console.log('du lieu  tu api data',data);
        }
    }
    fetchDataFromAPI(handleApiData);