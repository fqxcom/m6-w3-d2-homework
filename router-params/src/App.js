import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {
  //Insert router, links here
  return (
    <Router>
      <div className="m-5">
        <h1>TV APPS</h1>
        <ul>
        {Object.entries(StreamApps).map(([slug, {src
        }]) => (
          <li key={slug} className="border border-dark d-flex align-items-center">
            <Link to={`${slug}`}>
              <img src={src} />
            </Link>
          </li>
        ))}
      </ul>
      </div>
    
      <Routes>
        <Route path=":slug" children={<Child />} />
      </Routes>
    </Router>
  )
}

const StreamApps = {
  '1': {
    id: 'Netflix',
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg'
  },
  '2': {
    id: 'HBO Max',
    src: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg'
  },
  '3': {
    id: 'Hulu',
    src: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg'
  },
  '4': {
    id: 'Prime Video',
    src: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png'
  }
}

function Child() {

  // Below this comment, there's one major key script missing
  const { slug } = useParams();
  const post = StreamApps[slug];
  const { id } = post;
  return (
    <div>
      <h3>You Selected:<span>{id}</span></h3>
    </div>
  );
}
