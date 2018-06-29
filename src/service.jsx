
export const fetchTask = (auth) => {
    const instanceUrl = auth.getTokenResponseParam("instance_url")
    const task_id = "00Tf400000EiQxNEAV";
    const url = `${instanceUrl}/services/data/v39.0/sobjects/Task/${task_id}`;
    let access_token = auth.getTokenResponseParam('access_token');

    return fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`,
    }});
    // .then(response => response.json())
    // .then(data => {
    //     console.log('data', data);
    //     return data;
    // })
    // .catch(error => {
    //     console.error('Error:', error)
    // });
}