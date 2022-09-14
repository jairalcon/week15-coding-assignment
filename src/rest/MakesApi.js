// in its own file so it can be reusable
const MAKES_ENDPOINT = 'https://631cbcad1b470e0e120961c6.mockapi.io/PromineoTechApi/makes';
console.log(MAKES_ENDPOINT);
// reads top to bottom
// creating class, normal class, has little to do with React
// has functions and calls
class MakesApi {
    get = async () => {
        try {
            // data from response into JSON
            const resp = await fetch(MAKES_ENDPOINT);
            const data = await resp.json();
            console.log('resp in get:', resp)
            console.log('MakesApi data:', data)
            return data;
        } catch (e) { //catching errors
            console.log('Oops, looks like fetchMakes had an issue.', e);
        }
    }
    // creating another method that takes in argument
    put = async (makes) => {
        try {
            const resp = await fetch(`${MAKES_ENDPOINT}/${makes.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json' //type and value
                },
                body: JSON.stringify(makes)
            });
            console.log(resp);
            return await resp.json();
        } catch (e) {
            console.log('Oops, looks like updating makes had an issue.', e);
        }
    }
}

export const makesApi = new MakesApi();
console.log(makesApi);

// we're using the same instances of these methods instead of creating new ones
// houses /* makes */ = [
//     { "_id": "631d5b3933a31e001778736d", 
//     "name": "The Napping House", 
//     "__v": 3, 
//     "rooms" /* vehicles */: 
//         [{ 
//             "name": "David ", 
//             "area": 1584, 
//             "_id": "63210acc9483d800171f72db" 
//         }] 
//     }
// ]