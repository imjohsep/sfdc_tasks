import quip from "quip";
// import App from "./App.jsx";
import {fetchTask} from './service.jsx';
import {SalesforceClient} from "./Client.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.auth = props.auth;
        this.state = {
            task: {}
        }
        if (!this.auth.isLoggedIn()) {
            this.auth.login();
        }
    }

    componentWillMount() {
        fetchTask(this.auth)
        .then(resp => resp.json())
        .then(task => {
            console.table(task);
            this.setState({task: task});
        });
    }

    render() {
        return (
            <div>
                <h1>Task</h1>
                <div>
                    Id: {this.state.task.Id}
                </div>
                <div>
                    Subject: {this.state.task.Subject}
                </div>
                <div>
                    Status: {this.state.task.Status}
                </div>
            </div>

        )
    }
}

quip.apps.initialize({
    initializationCallback: function(rootNode) {
        const rootRecord = quip.apps.getRootRecord();
        const auth = quip.apps.auth("sfdc_auth_oauth");
        ReactDOM.render(<App auth={auth}/>, rootNode);
        // const salesforceClient = new SalesforceClient(auth)
    },
});