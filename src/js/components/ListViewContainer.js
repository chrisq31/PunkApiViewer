import React from 'react';
import { connect } from "react-redux";
import ListViewHolder from "./ListViewHolder";






const mapStateToProps = state => ({
    loading: state.dataLoading,
    posts: state.posts
});

export default connect(mapStateToProps)(ListViewHolder);



