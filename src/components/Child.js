//1. Render three child components in Parent.js
//2. Refactor the sentence so that name, subject and age are passed in from Parent.js
//3. Make sure each sentence is unique - you can be creative for the other two Child components in Parent.js

const Child = (props) => {
    return(
        <div>
            <p>I am a child component. My name is Proppetta, and my favorite subject is data flow. I am 47 years old.</p>
        </div>
    )
}

export default Child;