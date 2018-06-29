import Styles from "./App.less";
import quip from "quip";

// class Auth extends quip.apps.RootRecord {
//     constructor(props) {
//         super();
//         let auth = quip.apps.Auth('sfdc_auth');
//         console.log(auth)
//     }

//     render() {
//         return <div>Connecting to Salesforce</div>;
//     } 
// }

// class Logout extends React.Component {

// }

export default class App extends React.Component {
    // constructor(props) {
        // super(props);
        // const rootRecord = quip.apps.getRootRecord();
        // const auth = quip.apps.auth("sfdc_auth_oauth")
        // this.state = {
            // auth: auth
        // }
    // }

    // componentWillMount() {
        // if (!this.state.auth.isLoggedIn()) {
            // quip.apps.UrlAuth
            // console.log('NOT LOGGED IN');
            // this.state.auth
                // .login()
                // .then(response => console.log('login status', response.status));
            // console.log('logged in', this.state.auth.isLoggedIn());
        // } else {
            // console.log('Logged in');
            // console.log('Logging out');
            // this.state.auth.logout()
            // .then(response => console.log('status', response.status));
        // }
    // }

    render() {
        return <div>
            <p>Hello, World</p>
        </div>;
    }
}
