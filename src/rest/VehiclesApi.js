// in its own file so it can be reusable
const MAKES_ENDPOINT = 'https://631cbcad1b470e0e120961c6.mockapi.io/makes';
// reads top to bottom
// creating class, normal class, has little to do with React
// has functions and calls
class MakesApi {
    get = async () => {
        try {
            // data from response into JSON
            const resp = await fetch(MAKES_ENDPOINT);
            const data = await resp.json();
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
            return await resp.json();
        } catch (e) {
            console.log('Oops, looks like updating makes had an issue.', e);
        }
    }
}

export const makesApi = new MakesApi();

// we're using the same instances of these methods instead of creating new ones