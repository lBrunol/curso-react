import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class PostsList extends Component {
    constructor(){
        super();
        this.state = {
            posts: []
        }
        this.getPosts();
    }
    getPosts(){
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
        })
    }
    render(){
        return (        
            <div>
                {this.state.posts.map(post => {
                    return (
                        <Grid item xs={6}>
                            <Paper>
                                <Card key={post.id}>
                                    <CardContent>
                                        <Typography variant="headline" component="h2">{ post.title }</Typography>
                                        <Typography component="p">{ post.body.substr(0, 150) }</Typography>
                                        <CardActions>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Grid>
                    );
                })}
            </div>
        )
    }
}

export default PostsList;