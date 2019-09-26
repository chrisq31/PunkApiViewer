import { connect } from "react-redux";
import NavigationView from "./NavigationView";


const mapStateToProps = state => ({
    loading: state.dataLoading,
    menuState: state.menuState

});

export default connect(mapStateToProps)(NavigationView);



