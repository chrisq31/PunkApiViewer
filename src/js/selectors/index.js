import {createSelector} from "reselect";

const selectPosts = state => state.posts;
const selectItemId = (state, itemId) => itemId-1; // simply getting by index of posts

const selectedPost = (state) => state.post;




/*export const selectItemByName = createSelector(
    [selectItems, selectItemName],
    (items, name) => {

        console.log ('selectItems',selectItems)
        console.log ('selectItemName',selectItemName)
        return items[name]}
);*/


// use selector to only display first 25
// and only Name
// Tagline
// Image
// Alcohol By Volume
//const getPostName = state => state.posts.name
//const getPostTagline = state => state.posts.Tagline etc

/*export const selectItemsPreview = createSelector(
    [selectPosts, selectItemName],
    (posts, searchName) => {
        return posts.filter(post => post.name.match(new RegExp(searchName, 'i')))[0]; // return only first obj in array
    }
);*/


/*export const selectItemById = createSelector(
    [selectPosts, selectedPost],
    (posts, itemId) => posts[itemId]
);*/

export const selectItemById = createSelector(


    [selectPosts, selectedPost],
    (posts, itemId) =>
    {

        console.log('ID???????? ')
        let result = posts.find (post => post.id ==itemId)
        return result;
    }
);

export const selectItemByName = createSelector(
    [selectPosts, selectedPost],
    (posts, searchName) => {
        console.log('result resultresult ')
        let result = posts.filter(post => post.name.match(new RegExp(searchName, 'i')))[0]

        console.log('result resultresult ',result)
            return result;
    }
);
