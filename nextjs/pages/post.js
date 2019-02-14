import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'


const Post = (props) => {
    console.log('hello');
    return (<Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium}/>
    </Layout>)
}

Post.getInitialProps = async function (context) {
    const { id } = context.query;
    // await timeout(2000);
    console.log(id);
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()

    console.log(`Fetched show: ${show.name}`)

    return { show }
}

export default Post