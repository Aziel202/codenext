import React from "react"
import { Link }
  from 'react-router-dom';
import { render } from 'react-dom';
import { FormEvent } from 'react';

//Brand

interface Post {
  typeOfShoes: string;
  condition: string;
}

interface PostPageState {
  posts: Post[];
}

export class PostPage extends React.Component<{}, PostPageState> {
  constructor({ }) {
    super({});
    this.state = {
      posts: [{ typeOfShoes: "existing post" , condition : "New"}],
    };
  }
  submitPost(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const submittedContent = event.currentTarget.typeOfShoes.value;
    this.setState({
      posts: [...this.state.posts, { typeOfShoes: event.currentTarget.typeOfShoes.value, condition: event.currentTarget.condition.value }],
    });
    event.currentTarget.typeOfShoes.value = '';
  }
  

  render() {
    return (
      <div className="App">
        <h1>Post Your New Shoes</h1>

        {this.state.posts.map(post => <p>{post.typeOfShoes} {post.condition} </p>)}

        <form onSubmit={e => this.submitPost(e)} className="brand">
          <select>
            <option value="">Jordan</option>
            <option value="">Nike</option>
            <option value="">Adiddas</option>
            <option value="">New Balance</option>
          </select>
          <input name="condition" type="text" />
          <input name="typeOfShoes" type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

//Name 
