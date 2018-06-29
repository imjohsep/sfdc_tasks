export class SalesforceClient {
    constructor(auth) {
        // if (!auth.isLoggedIn()) {
        // auth.login()
            // .then(response => {
        const instanceUrl = auth.getTokenResponseParam("instance_url")
        const task_id = "00Tf400000EiQxNEAV";
        const url = `${instanceUrl}/services/data/v39.0/sobjects/Task/${task_id}`;
        let access_token = auth.getTokenResponseParam('access_token');
        fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`,
        }})
        .then(response => response.json())
        .then(data => {
            console.log('data', data)
        })
        .catch(error => {
            console.error('Error:', error)
        });
            // });
    }
    render() {
        return <div></div>;
    }
}