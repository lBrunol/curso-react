
export const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        if(posts.length > 0){
            console.log(posts);
            this.setState({
                posts: posts
            })
        }
    }).catch(response => {
        console.log(response);
    });
}