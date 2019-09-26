import {createSelector} from "reselect";

const selectPosts = state => state.posts;
const selectedPost = (state) => state.post;


export const selectItemByName = createSelector(
    [selectPosts, selectedPost],
    (posts, searchName) => {
        let result = posts.filter(post => post.name.match(new RegExp(searchName, 'i')))[0]
        return result;
    }
);
